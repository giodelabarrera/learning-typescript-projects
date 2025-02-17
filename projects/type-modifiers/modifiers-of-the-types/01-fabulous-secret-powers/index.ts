import { characters } from "./characters";

type Power =
	| "animal control"
	| "strength"
	| "magic"
	| "mind control"
	| "teleportation"
	| "agility"
	| "durability"
	| "speed"
	| "strength"
	| "transformation"
	| "telepathy"
	| "telekinesis";

type Side = "good" | "evil";

interface Character {
	name: string;
	powers: Power[];
	side: Side;
}

export function announceCharacter(raw: string) {
	const character = JSON.parse(raw) as Character;

	console.log(`I am ${character.name}.`);
	console.log(`My powers are: ${character.powers.join(", ")}.`);
	console.log(`I am ${character.side}.`);

	return character;
}
