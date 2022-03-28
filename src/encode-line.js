const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let s = '';
  n = 0;

  for (let i = 0; i < str.length; i++){
    if (str[i] !== str[i+1]){
      console.log(str[i]);
      if (i + 1 !== 1){
        s += i + 1;
      }
      s += str[i];
      str = str.slice(i+1);
      i = -1;
    }
  }
  return s;
}

module.exports = {
  encodeLine
};
