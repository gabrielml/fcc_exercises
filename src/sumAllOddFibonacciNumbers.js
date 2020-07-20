/**
 * function sum of all odd Fibonacci numbers that are less
 * than or equal to the given parameter
 * @param {number} num - A positive integer
 * @returns {number} num - An array of numbers
 */
function sumFibs(num) {
	let arrayNum = [];
	let previousNum = 0;
	let actualNum = 1;
	let nextFib = 0;
	let sumAllOddNums = 0;

	if (num <= 0) return 0;
	if (num === 1) return 1;


	arrayNum.push(previousNum, actualNum);

	while ((nextFib = previousNum + actualNum) <= num) {
		actualNum = nextFib;
		previousNum = actualNum - previousNum;
		arrayNum.push(nextFib);
	}

	sumAllOddNums = arrayNum.filter(number => number % 2 !== 0).reduce((prevNum, actNum) => prevNum + actNum);

	return sumAllOddNums;
}

module.exports = sumFibs;