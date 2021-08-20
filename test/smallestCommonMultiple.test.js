let smallestCommonMultiple = require("../src/smallestCommonMultiple");


describe('Smallest commoms multiple function', () => {
	test('it should throws if parameter is not an array of numbers', () => {
		const input = 'foo';

		expect(() => { smallestCommonMultiple.smallestCommons(input); }).toThrow();
	});
});


describe('Prime Factorization Approach', () => {

	test('it should returns an array of prime numbers', () => {
		const input = [81, 77, 33, 32, 10, 9, 5, 2];
		const output = [[3, 3, 3, 3], [7, 11], [3, 11], [2, 2, 2, 2, 2], [2, 5], [3, 3], [5], [2]];
		for (let i = 0; i < input.length; i++) {
			expect(smallestCommonMultiple.primeFactorization(input[i])).toEqual(output[i]);
		}
	});
});
