/**
 *
 * @param {Array<number>} arr - An array of numbers
 * @param {number} func - Returns `true` when the iterate element is passed through it
 * @returns {Array<number>} an array once the condition is satisfied, otherwise, return an empty array
 */
function dropElements(arr, func) {
	let result = []; // Create a new Array
	for (let i = 0; i != arr.length; i++) {
		if (func(arr[i])) {
			return result = arr.slice(i);
		}
	}
	return [];
}

module.exports = dropElements;