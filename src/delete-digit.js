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
function deleteDigit(n) {
  let result = 0;
  let newN = String(n).split('').map(Number);
  let revN = newN.reverse();
  let length = revN.length;
  for (let i = 0; i < length; i++) {
    let count = 0;
    for (let j = length - 1; 0 <= j; j--) {
      if (j !== i) {
          count = count * 10 + revN[j];
      }
    }
    if (count > result) {
      result = count;
    } else {
      result = result;
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
