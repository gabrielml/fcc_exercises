const sumFibs = require('../src/sumAllOddFibonacciNumbers');

describe('Sum all Fibonacci Numbers', () => {
	test('it should return the sum of all odd Fibonacci numbers that are less than or equal to the parameter', () => {

		const input = [0, 1, 1000, 4000000, 4, 75024, 75025];
		const output = [0, 1, 1785, 4613732, 5, 60696, 135721];

		for (let index = 0; index < input.length; index++) {
			expect(sumFibs(input[index])).toEqual(output[index]);
		}
	});
});
