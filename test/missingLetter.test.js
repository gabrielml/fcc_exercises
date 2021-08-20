const fearNotLetter = require('../src/missingLetter');

describe('fearNotLetter function', () => {
	test('it should return the missing letter', () => {
		const input = ["abce", "abcdefghjklmno", "stvwx", "bcdf"];
		const output = ["d", "i", "u", "e"];

		for (let i = 0; i < input.length; i++) {
			expect(fearNotLetter(input[i])).toEqual(output[i]);
		}
	});

	test('it should return "undefined" if all letters are present', () => {
		const input = "abcdefghijklmnopqrstuvwxyz";

		expect(fearNotLetter(input)).toBeUndefined();
	});

});