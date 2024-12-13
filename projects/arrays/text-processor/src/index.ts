type AlignType = "left" | "middle" | "right";

export type AlignmentOptions = {
	align?: AlignType;
	width: number;
};

/*
alignTexts(["ab cd", "abc def", "a bc def"], { align: "right", width: 4 })

[
	["  ab", "  cd"],
	[" abc", " def"],
	["a bc", " def"]
]

[[""], { align: "right", width: 2 }, [["  "]]],
*/

export function alignTexts(
	texts: string[],
	options: AlignmentOptions
): string[][] {
	if (options?.align === undefined) options.align = "left";

	return texts.map((text) => {
		const lines = splitLines(text, options.width);
		return alignLines(lines, options);
	});
}

function splitLines(text: string, width: number) {
	const result: string[] = [];

	let line = "";
	for (const word of text.split(" ")) {
		if (line == "") {
			line = word;
		} else if (`${line} ${word}`.length <= width) {
			line += ` ${word}`;
		} else {
			result.push(line);
			line = word;
		}
	}

	result.push(line);
	line = "";

	return result;
}

function alignLines(lines: string[], options: AlignmentOptions) {
	return lines.map((line) => {
		switch (options.align) {
			case "left":
				return line.padEnd(options.width);
			case "right":
				return line.padStart(options.width);
			case "middle": {
				const remainingSpace = options.width - line.length;

				return remainingSpace
					? [
							" ".repeat(Math.floor(remainingSpace / 2)),
							line,
							" ".repeat(Math.ceil(remainingSpace / 2)),
					  ].join("")
					: line;
			}
			default:
				return line;
		}
	});
}
