interface Catacomb<T> {
	inside: Buried<T>;
	type: "catacomb";
}
interface TunnelSystem<T> {
	entrances: Buried<T>[];
	type: "tunnels";
}
type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

interface Treasure<T> {
	content: T;
	type: "treasure";
}

export type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (datum: Content) => datum is Fake,
	isReal: (datum: Content) => datum is Real
) {
	const returnedValue: {
		fake: Fake[];
		real: Real[];
		scrap: Content[];
	} = {
		fake: [],
		real: [],
		scrap: [],
	};

	function byType(innerBuried: typeof buried): void {
		if (Array.isArray(innerBuried)) {
			return;
		}
		switch (innerBuried.type) {
			case "treasure": {
				if (isFake(innerBuried.content)) {
					returnedValue.fake.push(innerBuried.content);
				} else if (isReal(innerBuried.content)) {
					returnedValue.real.push(innerBuried.content);
				} else {
					returnedValue.scrap.push(innerBuried.content);
				}
				break;
			}
			case "catacomb": {
				byType(innerBuried.inside);
				break;
			}
			case "tunnels": {
				innerBuried.entrances.forEach((entrance) => {
					byType(entrance);
				});
				break;
			}
			default: {
				throw Error("type not found");
			}
		}
	}

	byType(buried);

	return returnedValue;
}
