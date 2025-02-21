export function pickMany<T, K extends keyof T>(container: T, keys: K[]) {
	return keys.map((key) => container[key]);
}

pickMany({ a: 1, b: 2, c: 3 }, ["a", "c"]);
