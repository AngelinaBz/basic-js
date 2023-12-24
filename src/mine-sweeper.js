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
function minesweeper(matrix) {
  let all = [];
  for (let i = 0; i < matrix.length; i++) {
    let cell = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let mine = 0;
      let nextI = i + 2;
      let prevI = i - 1;
      let nextJ = j + 2;
      let prevJ = j - 1;
      for (let maxI = Math.max(0, prevI); maxI < Math.min(nextI, matrix.length); maxI++) {
        for (let maxJ = Math.max(0, prevJ); maxJ < Math.min(nextJ, matrix[0].length); maxJ++) {
        mine = mine + matrix[maxI][maxJ];
      }
    }
    mine = mine - matrix[i][j];
    cell.push(mine);
  }
  all.push(cell);
}
return all;
}

module.exports = {
  minesweeper
};
