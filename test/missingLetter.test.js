const fearNotLetter = require('../index');

describe('fearNotLetter function', () => {
	test('it should return the missing letter', () => {
		const input = "abce";
		const output = "d";

		expect(fearNotLetter(input)).toEqual(output);
	});
});