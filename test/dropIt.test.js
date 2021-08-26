const dropElements = require("../src/dropIt.js");

describe('Drop it function', () => {
	test('It should return an array of numbers once the condition is satisfied', () => {
		expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).toEqual([3, 4]);
	});

	test('It should return an empty array because the condition is not satisfied', () => {
		expect(dropElements([1, 2, 3, 4], function (n) {return n >= 5;})).toEqual([]);
	});
});
