/**
 * Return an English translated sentence of the passed binary string
 * @param {string} str - A binary space separated string
 * @returns An English translated sentence
 */
function binaryAgent(str) {
  // Variables:
  let binaryArray = [];
  let decimalArray = [];
  let enCharArray = [];
  let englishSentence;

  // Convert String to an Array of "binary characters"
  binaryArray = str.split(" "); // (!) Whitespace describes where each split should occur!
  // Covert Array from binary to decimal
  for (const element of binaryArray) {
    decimalArray.push(parseInt(element, 2));
  }
  // Convert the sequence of UTF-16 code units (decimal numbers) to it's equivalent character.
  decimalArray.forEach(element => enCharArray.push(String.fromCharCode(element)));
  // Convert array to string
  englishSentence = enCharArray.join('');

  return englishSentence;
}

module.exports = binaryAgent;
