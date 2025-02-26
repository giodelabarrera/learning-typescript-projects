export interface Trick {
	gimmick: string;
}

export interface Illusion {
	title: string;
	duration: number;
	introduction: () => string;
	flair: () => string;
	payoff: () => string;
}

export interface AudienceMember {
	name: string;
}

export type Section = Illusion | Trick;

export interface Act {
	performer: string;
	name: string;
	sections: Section[];
}

interface GetAudienceMemberOptions {
	duration: number;
	title: string;
}

export function getAudienceMemberFor(
	options: GetAudienceMemberOptions
): Promise<AudienceMember>;

export function isTrick(section: Section): section is Trick;

export function isVolunteerIllusion(section: Section): section is Illusion;
