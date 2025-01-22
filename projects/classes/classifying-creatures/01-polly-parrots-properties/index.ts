class Parrot {
	#name: string;
	#phrases: string[];

	constructor(name: string) {
		this.#name = name;
		this.#phrases = [`${this.#name} wants a cracker!`];
	}

	announce() {
		return `Squawk! I'm ${this.#name}!`;
	}

	learn(word: string) {
		this.#phrases.push(word);
	}

	speak() {
		const random = Math.floor(Math.random() * this.#phrases.length);
		return this.#phrases[random];
	}
}

export { Parrot };
