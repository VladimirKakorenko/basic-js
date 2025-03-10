const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let x = [];
  let y = 0;

  arr.forEach(i => {
    if (i !== -1) x.push(i)
  })
  x.sort((a, b) => a - b)
  for (let j = 0; j < arr.length; j++){
    if (arr[j] !== -1){
      arr[j] = x[y];
      y += 1;
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
