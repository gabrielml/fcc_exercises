/**
 * This function flatten a nested array
 * @param {Array} arr - An array with varying levels of nesting
 * @returns A flatten array
 */
function steamrollArray(arr) {
	// Variables:
	let flattenedArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			flattenedArray.push(arr[i]);
		} else {
			flattenedArray = flattenedArray.concat(steamrollArray(arr[i]));
			// Opt 2: Use .push() method with spread operator "..." and change flattenedArray variable from let to const.
			// flattenedArray.push(...steamrollArray(arr[i]));
		}
	}
	return flattenedArray;
}

module.exports = steamrollArray;