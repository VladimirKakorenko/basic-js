const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param disksNumber
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let x = 0;

  for (let i = 0; i < disksNumber; ++i){
    x += Math.pow(2, i)
  }
  let time = x * 3600 / turnsSpeed
  time = Math.floor(time)

  return {
    turns: x,
    seconds: time
  }
}

module.exports = {
  calculateHanoi
};
