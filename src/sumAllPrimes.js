//@ts-check

/**
 * sum all primes numbers
 * @param {number} num - A positive integer greather than 1
 * @returns {number} sumPrimeNumbers - Returns the sum of all
 * prime numbers that are less than or equal to num 
 */
function sumPrimes(num) {
    // Variables:
    let isPrime = true;
    let sumPrimeNumbers = 0;

    for (let currentNumber = 2; currentNumber <= num; currentNumber++) {
        for (let divisor = 2; divisor < currentNumber; divisor++) {
            if (currentNumber % divisor === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            sumPrimeNumbers += currentNumber;
        }
        isPrime = true;
    }
    return sumPrimeNumbers;
}

module.exports = sumPrimes;