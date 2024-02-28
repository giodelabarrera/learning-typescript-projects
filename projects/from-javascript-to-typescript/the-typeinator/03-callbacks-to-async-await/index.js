// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	return new Promise((res) => {
		setTimeout(() => {
			res(knownEmotions.has(emotion));
		}, 1000);
	});
}

function speak(knownEmotions, newEmotion, phrase) {
	return new Promise(async (res, rej) => {
		const hasEmotion = await checkEmotion(knownEmotions, newEmotion);
		if (hasEmotion) {
			res(`"${phrase}" (${newEmotion})`);
		} else {
			rej(new Error(`Does not compute. I do not understand ${newEmotion}.`));
		}
	});
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
