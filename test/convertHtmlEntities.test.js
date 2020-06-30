const convertHTML = require('../src/convertHtmlEntities');

describe('convertHTML function', () => {
	test('it should convert characters to HTML entities', () => {
		const input = ["Dolce & Gabbana", "Hamburgers < Pizza < Tacos", "Sixty > twelve", 'Stuff in "quotation marks"', "Schindler's List", "<>", "abc"];
		const output = ["Dolce &amp; Gabbana", "Hamburgers &lt; Pizza &lt; Tacos", "Sixty &gt; twelve", 'Stuff in &quot;quotation marks&quot;', "Schindler&apos;s List", "&lt;&gt;", "abc"];

		for (let index = 0; index < input.length; index++) {
			expect(convertHTML(input[index])).toEqual(output[index]);
		}
	});

});
