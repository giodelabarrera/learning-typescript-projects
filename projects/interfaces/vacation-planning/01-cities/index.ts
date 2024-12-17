interface City {
	catchphrase?: string;
	coordinates: Coordinates;
	name: string;
}

interface Coordinates {
	north: Coordinate;
	west: Coordinate;
}

type Coordinate = [number, number, number];

export function describeCity(city: City) {
	const lines = [`${city.name}, New York`];

	if (city.catchphrase) {
		lines.push(`* "${city.catchphrase}"`);
	}

	lines.push(
		[
			`* Located at`,
			`${describeCoordinate(city.coordinates.north)}N`,
			`${describeCoordinate(city.coordinates.west)}W`,
		].join(" ")
	);

	return lines.join("\n");
}

function describeCoordinate(coordinate: Coordinate) {
	return [
		`${describeUnit(coordinate[0])}°`,
		`${describeUnit(coordinate[1])}'`,
		`${describeUnit(coordinate[2])}"`,
	].join("");
}

function describeUnit(value: number) {
	return value.toString().padStart(2, "0");
}
