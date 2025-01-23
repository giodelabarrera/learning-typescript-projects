interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

interface HorrorProperties {
	name: string;
	isEvil: () => boolean;
	getPowerFrom: (consumed: Consumed) => number;
}

export class Horror {
	#consumedRecords: Consumed[] = [];
	name: string;
	isEvil: () => boolean;
	getPowerFrom: (consumed: Consumed) => number;

	constructor(properties: HorrorProperties) {
		this.name = properties.name;
		this.isEvil = properties.isEvil;
		this.getPowerFrom = properties.getPowerFrom;
	}

	#consume(opponent: Horror) {
		this.#consumedRecords.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower(): number {
		return this.#consumedRecords.reduce((accu, consumed) => {
			return accu + this.getPowerFrom(consumed);
		}, this.#consumedRecords.length);
	}
}

export function createDemon() {
	return new Horror({
		name: "Demon",
		isEvil() {
			return true;
		},
		getPowerFrom(consumed) {
			return consumed.evil ? consumed.power / 2 : consumed.power * 2;
		},
	});
}

export function createSorcerer(name: string, evil: boolean) {
	return new Horror({
		name,
		isEvil() {
			return evil;
		},
		getPowerFrom(consumed: Consumed) {
			return consumed.evil === this.isEvil()
				? consumed.power * 2
				: consumed.power;
		},
	});
}
