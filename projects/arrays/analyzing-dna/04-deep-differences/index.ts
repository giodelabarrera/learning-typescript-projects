// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function deepDifferences(a: string[][], b: string[][]) {
	const result: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length || i < b.length; i += 1) {
		if (a[i].length !== b[i].length) {
			result[i] = undefined;
			continue;
		}

		const diff: (string | undefined)[] = [];
		for (let j = 0; j < a[i].length; j += 1) {
			diff.push(a[i][j] === b[i][j] ? a[i][j] : undefined);
		}
		result[i] = diff;
	}

	return result;
}
