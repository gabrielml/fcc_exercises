const steamrollArray = require("../src/steamroller");

describe('SteamrollArray function', () => {
	test('It should return a flatten array after processing a three-level array', () => {
		expect(steamrollArray([[["a"]],[["b"]]])).toEqual(["a", "b"]);
	});

	test('It should return a flatten array after processing a four-level array ', () => {
		expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
	});

	test('It should return a flatten array after processing a four-level array with an empty array', () => {
		expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
	});

	test('It should return a flatten array after processing a four-level array with an object as value', () => {
		expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
	});

});
