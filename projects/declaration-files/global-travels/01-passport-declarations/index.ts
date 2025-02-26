declare global {
	interface Window {
		passports: Passports;
	}
}

interface Passports {
	[i: string]: Passport | undefined;
}

interface Passport {
	name: string;
	expires: Date;
}

type Response =
	| {
			allowed: false;
			reason: string;
	  }
	| {
			allowed: true;
	  };

export function checkPassport(id: string): Response {
	const passport = window.passports[id];

	if (!passport) {
		return {
			allowed: false,
			reason: "No passport found.",
		};
	}

	if (!passport.name) {
		return {
			allowed: false,
			reason: "No known name.",
		};
	}

	if (passport.expires.getTime() < new Date().getTime()) {
		return {
			allowed: false,
			reason: "Passport has expired.",
		};
	}

	return {
		allowed: true,
	};
}
