const addTogether = require('../src/addTogether');

describe('addTogether - Arguments Optional', () => {
	test('It should return undefined if it has only one argument passed and it is not a number', () => {
		expect(addTogether("http://bit.ly/IqT6zt")).toBe(undefined);
		expect(addTogether([2])).toBe(undefined);
	});

	test('It should return a function if it has only one argument passed', () => {
		expect(addTogether(5)(7)).toBe(12);
	});

	test('It should return undefined if any of the two parameters passed are not a number', () => {
		expect(addTogether(2)([3])).toBe(undefined);
	});

	test('It should return undefined if any of the first two parameters passed are not a number', () => {
		expect(addTogether(2, "3")).toBe(undefined);
	});

	test('It should return the sum of two numbers passed as arguments', () => {
		expect(addTogether(2,3)).toBe(5);
	});
});