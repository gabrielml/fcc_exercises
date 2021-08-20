/**
 * Find the smallest common multiple of all sequential numbers in the range between the provided parameters
 * @param {Array<number>} arr - An array of numbers
 * @returns {number} A positive integer. Least common multiple
 */
function smallestCommons(arr) {
	// Variables:
	let primeNumbersMatrix = [];
	let lcm = 1; // least common multiple

	// Check if parameter is an array
	if (!Array.isArray(arr) || arr.some(isNaN)) {
		throw new Error('parameter is not an array of numbers!');
	}

	// Sort the array:
	arr.sort(function (a, b) {
		return a - b;
	});
	let currentNumber = arr[0];
	let lastNumber = arr[arr.length - 1];

	// Store the prime factors of each number greather than 1 in a matrix:
	while (currentNumber <= lastNumber) {
		if (currentNumber > 1) {
			primeNumbersMatrix.push(primeFactorization(currentNumber));
		}
		currentNumber++;
	}
	// Create an array with unduplicate prime numbers:
	let primeNumbers = [... new Set(primeNumbersMatrix.flat())];

	// Calculate the least common multiple (lcm) through prime numbers
	primeNumbers.forEach(primeNumber => {
		lcm *= greatestNumOfTimes(primeNumber, primeNumbersMatrix);
	})

	return lcm;
}

/**
 * Function based on "Prime Factorization Approach"
 * @param {number} originalNumber - A positive integer
 * @returns {Array<number>} An array of numbers
 */
function primeFactorization(originalNumber) {
	let primeNumbers = [];
	let sieve = [];
	let dividend = originalNumber;
	let divisor = 2;

	// Check for compound numbers
	for (let compoundNum = divisor << 1; compoundNum <= originalNumber; compoundNum += divisor) {
		sieve.push(compoundNum);
	}
	// Construct an array of only prime numbers
	while (dividend >= divisor) {
		if (!sieve.includes(divisor) && dividend % divisor === 0) {
			primeNumbers.push(divisor);
			dividend = dividend / divisor;
		} else {
			divisor++;
		}
	}
	return primeNumbers;
}
/**
 *
 * @param {number} primeNumber - A positive integer
 * @param {Array<number>} matrix  - A matrix with the prime factors of each number
 * @returns {number} each factor multiplied the greatest number of times it occurs
 */
function greatestNumOfTimes(primeNumber, matrix) {
	// Variables:
	let accumulator = 1;
	let currentCounter = 0;
	let finalCounter = 0;
	// Iterate the matrix looking for the highest number of repetitions of the current prime number:
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === primeNumber) {
				currentCounter++;
			}
		}
		if (currentCounter > finalCounter) {
			finalCounter = currentCounter;
		}
		currentCounter = 0;
	}
	// The prime number is raised to the highest power obtained and then stored:
	while (finalCounter > 0) {
		accumulator *= primeNumber;
		finalCounter--;
	}
	return accumulator;
}

module.exports = { smallestCommons, primeFactorization };