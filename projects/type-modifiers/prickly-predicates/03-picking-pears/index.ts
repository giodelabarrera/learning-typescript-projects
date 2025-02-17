export type Cactus = DefaultCactus | FloweringCactus | FruitBearingCactus;

export interface FloweringCactus {
	flowers: "small" | "medium" | "large";
	state: "flowering";
}

export interface FruitBearingCactus {
	fruits: number;
	state: "fruit-bearing";
}

export interface DefaultCactus {
	picked: boolean;
	state: "default";
}

export function isFruitBearingCactus(data: Cactus): data is FruitBearingCactus {
	if (
		!!data &&
		"fruits" in data &&
		typeof data.fruits === "number" &&
		"state" in data &&
		typeof data.state === "string" &&
		data.state === "fruit-bearing"
	) {
		return true;
	}
	return false;
}

export function pickFruitBearingCacti(cactuses: Cactus[]) {
	return cactuses.filter(isFruitBearingCactus);
}
