interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	#consumedRecords: Consumed[] = [];

	abstract readonly name: string;

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

	protected abstract getPowerFrom(consumed: Consumed): number;

	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	readonly name = "Demon";

	getPowerFrom(consumed: Consumed): number {
		return consumed.evil ? consumed.power / 2 : consumed.power * 2;
	}

	isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	readonly name;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	protected getPowerFrom(consumed: Consumed) {
		return consumed.evil === this.#evil ? consumed.power * 2 : consumed.power;
	}

	protected isEvil(): boolean {
		return this.#evil;
	}
}
