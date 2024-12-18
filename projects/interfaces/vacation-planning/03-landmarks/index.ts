interface BaseLandmark {
	name: string;
}

interface MountainLandmark extends BaseLandmark {
	type: "mountain";
	height: number;
}

interface ParkLandmark extends BaseLandmark {
	type: "park";
	acres: number;
}

interface LighthouseLandmark extends BaseLandmark {
	type: "lighthouse";
	height: number;
	lit: number;
}

interface LakeLandmark extends BaseLandmark {
	type: "lake";
	miles: number;
}

interface WaterfallLandmark extends BaseLandmark {
	type: "waterfall";
	height: number;
}

interface RiverLandmark extends BaseLandmark {
	type: "river";
	depth: number;
	length: number;
}

interface FortLandmark extends BaseLandmark {
	type: "fort";
}

type Landmark =
	| MountainLandmark
	| ParkLandmark
	| LighthouseLandmark
	| LakeLandmark
	| WaterfallLandmark
	| RiverLandmark
	| FortLandmark;

export function describeLandmark(landmark: Landmark): string {
	const lines = [`${landmark.name} is a ${landmark.type} in Upstate New York.`];
	switch (landmark.type) {
		case "fort":
			break;
		case "lake":
			lines.push(`It covers ${landmark.miles} square miles of water.`);
			break;
		case "lighthouse":
			lines.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;
		case "mountain":
			lines.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			lines.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			lines.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;
		case "waterfall":
			lines.push(`It is ${landmark.height} feet high.`);
			break;
		default:
			break;
	}
	return lines.join("\n");
}
