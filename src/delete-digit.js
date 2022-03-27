const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  arr1 = [];
  let x = n.toString();
  let y = '';

  for (let i = 0; i < x.length; i++){
    y = x.slice(0, i) + x.slice(i+1)
    arr1.push(Number(y))
  }
  return Math.max(...arr1)
}

module.exports = {
  deleteDigit
};
