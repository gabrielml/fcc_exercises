let orbitalPeriod = require("../src/orbitalPeriod");

describe('Orbital period function (expressed in seconds)', () => {
	test('It should return the orbital period for an array of one object', () => {
		expect(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])).toEqual([{name: "sputnik", orbitalPeriod: 86400}]);
	});
	test('It should return the orbital period for an array of objects', () => {
		expect(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).toEqual([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
	});


});
