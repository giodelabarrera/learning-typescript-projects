// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function shallowDifferences(a: string[], b: string[]) {
	if (a.length !== b.length) return undefined;

	const result = [];

	for (let i = 0; i < a.length; i++) {
		result.push(a[i] === b[i] ? a[i] : undefined);
	}

	return result;
}
