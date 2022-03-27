const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let S1 = [];
  let S2 = [];

  for (let z = 0; z < s1.length; z++) {S1.push(s1[z])}
  for (let q = 0; q < s2.length; q++) {S2.push(s2[q])}

  let count = 0;
  for (let i = 0; i < S1.length; i++){
    let x = S1[i];
    // console.log(x)
    for (let j = 0; j < S2.length; j++){
      let y = S2[j];
      // console.log(y)
      if (y === x){
        S1.splice(S1.indexOf(x), 1);
        S2.splice(S2.indexOf(y), 1);
        count++;
        i--;
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
