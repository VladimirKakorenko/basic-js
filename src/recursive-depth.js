const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let x = 0;
class DepthCalculator {
  calculateDepth( arr ) {
    return Array.isArray(arr) ?
        1 + Math.max(...arr.map(Array.isArray)) :
        0;
  }
}

module.exports = {
  DepthCalculator
};
