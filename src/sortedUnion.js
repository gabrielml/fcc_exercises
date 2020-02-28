function uniteUnique(...arr){
	let flattenedArray = arr.reduce((accumulator, currentValue) => {
		return accumulator.concat(currentValue);
	}, []);

	let filteredArray = flattenedArray.filter((currentValue, index) => {
		return flattenedArray.indexOf(currentValue) === index;
	});
	return filteredArray;
}

module.exports = uniteUnique;