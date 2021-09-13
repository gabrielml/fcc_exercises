/**
 * @author gML <gabrielmljob@gmail.com>
 * Calculate the orbital period for a small body orbiting a central body
 * according to kepler’s Third Law.
 * @param {{name: string, avgAlt: number}} arr - An array of objects with the
 * name of the small object orbiting the Earth and it’s average altitude in
 * kilometers.
 * @returns {{name: string, orbitalPeriod: number}} `modifiedArr` - A new array that transforms
 * the element's average altitude into their __orbital periods in seconds__.
 * Knowing that the _radius of the earth is 6367.4447 kilometers_, and the
 * _GM (standard gravitational parameter) value of earth is
 * 398600.4418 km3s-2_.
 * @see For futher information see _"Small body orbiting a central body"_
 * {@link <https://en.wikipedia.org/wiki/Orbital_period>}
 */
function orbitalPeriod(arr) {
	// Variables
	const GM = 398600.4418; // Notes: 1. μ (mu)
	const EARTH_RADIUS = 6367.4447;
	const TAU = 2 * Math.PI; // Notes: 2. 𝜏 (tau)
	let semiMajorAxis = 0; // = EARTH_RADIUS + object.avgAlt
	let T = 0; // The orbital period T (in seconds)
	let modifiedArr = arr;

	for (const element of modifiedArr) {
		// Calculate the orbital period:
		semiMajorAxis = Math.pow((EARTH_RADIUS + element.avgAlt), 3);
		T = Math.round(TAU * Math.sqrt((semiMajorAxis/GM)));
		// Insert the new key-Value pair {orbitalPeriod : T}
		element.orbitalPeriod = T;
		// Remove "avgAlt" property from objects.
		delete element.avgAlt;
	}
	return modifiedArr;
}

module.exports = orbitalPeriod;

/**
 * NOTES:
 * 1. The "standard gravitational parameter" of a body, denoted μ (mu), is the
 * product of the gravitational constant G by the mass M of this body. 𝜇 = GM.
 * 𝜇 (mu) is the twelfth letter of the Greek alphabet.
 *
 * 2. See Tau(2pi) https://es.wikipedia.org/wiki/Tau_(2%CF%80). 𝜏 (tau) is the 19th letter of the
 * Greek alphabet. The symbol τ was chosen in reference to τορνος (turn in Greek) since in mathematics
 * τ-radians are equivalent to a complete turn.
 */