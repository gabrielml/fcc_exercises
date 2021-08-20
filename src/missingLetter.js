function fearNotLetter(str) {
	// Variables:
	let alphabetPattern = "abcdefghijklmnopqrstuvwxyz";
	let missingLetter;
	// Identify first & last letter in de "str":
	let firstLetterStr = str.charAt(0);
	let lastLetterStr = str.charAt(str.length - 1);
	let strIndex = 0;

	let alphabetSection = alphabetPattern.slice(alphabetPattern.indexOf(firstLetterStr), alphabetPattern.indexOf(lastLetterStr) + 1);


	for (let index = 0; index <= alphabetSection.length; index++) {
		if (alphabetSection.charAt(index) !== str.charAt(strIndex)) {
			typeof missingLetter === "undefined" ? missingLetter = alphabetSection.charAt(index) : missingLetter += alphabetSection.charAt(index);
			// missingLetter = alphabetSection.charAt(index);
			strIndex--;
		}
		strIndex++;
	}

	return missingLetter;
}

module.exports = fearNotLetter;