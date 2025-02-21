export function zip<T, U>(a: T[], b: U[]): (T | U)[] {
	const result: (T | U)[] = [];

	const maxLength = Math.max(a.length, b.length);
	for (let i = 0; i < maxLength; i++) {
		if (a[i]) {
			result.push(a[i]);
		}
		if (b[i]) {
			result.push(b[i]);
		}
	}

	return result;
}
