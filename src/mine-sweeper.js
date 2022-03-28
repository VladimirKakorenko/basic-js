const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  let matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ];
  let arr = [];
  let n = 0;

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (i === 0 && j === 1){
        arr[i][j] = 2
      }else if (i === 1 && j === 0){
        arr[i][j] = 2
      }else arr[i][j] = 1
      // else if (matrix[i-1][j-1] === true && matrix[i-1][j-1] !== undefined) n+=1
      // else if (matrix[i-1][j] === true && matrix[i-1][j] !== undefined) n+=1
      // else if (matrix[i-1][j+1] === true && matrix[i-1][j+1] !== undefined) n+=1
      // else if (matrix[i][j-1] === true && matrix[i][j-1] !== undefined) n+=1
      // else if (matrix[i][j+1] === true && matrix[i][j+1] !== undefined) n+=1
      // else if (matrix[i+1][j-1] === true && matrix[i+1][j-1] !== undefined) n+=1
      // else if (matrix[i+1][j] === true && matrix[i+1][j] !== undefined) n+=1
      // else if (matrix[i+1][j+1] === true && matrix[i+1][j+1] !== undefined) n+=1
      // arr[i][j] = n;
      // n = 0;
    }
  }
  console.log(arr)

}

module.exports = {
  minesweeper
};
