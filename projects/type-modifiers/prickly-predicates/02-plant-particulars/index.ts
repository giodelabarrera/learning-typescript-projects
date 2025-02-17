export interface AnyCrop {
	growth: number;
	harvested: boolean;
	name: "cactus" | "cassava" | "chia";
}

// Write your isAnyCrop function here! ✨
// You'll need to export it so the tests can run it.

export function isAnyCrop(data: unknown): data is AnyCrop {
	if (!!data && typeof data === "object") {
		if (!("growth" in data)) return false;
		if (!("harvested" in data)) return false;
		if (!("name" in data)) return false;

		if (typeof data.growth !== "number") return false;
		if (typeof data.harvested !== "boolean") return false;
		if (typeof data.name !== "string") return false;
		if (!["cactus", "cassava", "chia"].includes(data.name)) return false;

		return true;
	}

	return false;
}
