/**
 * Sums two arguments together. If only one is provided
 * then return a function that expects one argument and returns the sum.
 * @returns {number} the sum of two arguments
 */
function addTogether() {
	// Check if it has only one argument passed and it is a number, otherwise returns undefined
	if ((arguments.length === 1) && (typeof arguments[0]=== "number")) {
		return (n) => {
			if (typeof n === "number") {
				return arguments[0] + n;
			}
		}
	}
	// Check if the first two arguments passed are numbers, otherwise returns undefined
	if ((arguments.length > 1) && (typeof arguments[0] === "number") && (typeof arguments[1] === "number")) {
		return arguments[0] + arguments[1];
	}
}

module.exports = addTogether;