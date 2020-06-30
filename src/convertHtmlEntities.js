/**
 * Convert the characters &, <, >, " (double quote),and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 */
function convertHTML(str) {
	// Variables:
	const regEx = /[^\w\s]/g;

	let potentialPositives = findMatches(regEx, str);
	let finalStr = replaceEntities(str, potentialPositives);

	return finalStr;
}

/**
 * If matched sign found, returns an Array of Objects with matched sign, index and it's replace entitie.
 * Otherwise it returns an empty array.
 * @param regex the regular expresion use to search for any character that is not a word character.
 * @param originalStr the string against which to match the regular expression.
 */
function findMatches(regex, originalStr) {
	// Variables:
	let checkMatrix;
	let matchedSigns = [];

	while ((checkMatrix = regex.exec(originalStr)) !== null) { // MDN. RegEx.prototype.exec()
		let matchIndex = checkMatrix.index;
		let matchSign = checkMatrix[0];
		let replaceSign = replacer(matchSign);
		let positiveMatch = { matchIndex: matchIndex, matchSign: matchSign, replaceSign: replaceSign };
		matchedSigns.push(positiveMatch);
	}
	return matchedSigns;
}

/**
 * Return the corresponding **HTML entity** for the matched sign.
 * @param sign it is the reserved characters
 * (which would otherwise be interpreted as HTML code),
 * and invisible characters (like non-breaking spaces).
 */
function replacer(sign) {
	switch (sign) {
		case "&":
			return "&amp;";
			break;
		case "<":
			return "&lt;";
			break;
		case ">":
			return "&gt;";
			break;
		case "\"":
			return "&quot;";
			break;
		case "\'":
			return "&apos;";
			break;
		default:
			return;
			break;
	}
}

/**
 * If positiveFindings creates and return a transformed string, otherwise return the original string.
 * @param originalStr if no match found the original string will be returned.
 * @param positiveFindings it's an Array of Objects with matched sign, index and it's replace entity.
 */
function replaceEntities(originalStr, positiveFindings) {
	let arrayOfchars;
	let location = 0;
	let transformedStr;

	if (positiveFindings.length === 0) {
		return originalStr;
	} else {
		arrayOfchars = originalStr.split('');
		for (let index = 0; index < arrayOfchars.length; index++) {
			if ((location < positiveFindings.length) && (index === positiveFindings[location].matchIndex)) {
				arrayOfchars.splice(index, 1, positiveFindings[location].replaceSign);
				location++;
			}
		}
		transformedStr = arrayOfchars.join('');
		return transformedStr;
	}
}

module.exports = convertHTML;