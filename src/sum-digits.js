const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sumDigits(n) {
    let strNum = n.toString().split('');
    let sum = strNum.map(Number).reduce(function (a, b) {
    return a + b;
  }, 0);
    return sum;
  }
  let sum = sumDigits(n);
  if (sum < 10)
      return sum;
  else
      return sumDigits(sum);
}

module.exports = {
  getSumOfDigits
};
