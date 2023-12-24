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
function encodeLine(str) {
  let sum = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i]=== str[i+1]) {
      sum++;
    } else {
      result += `${sum}${str[i]}`;
      sum = 1;
    }
  }
  let newResult = result.replace(/1/g, '');
  return newResult;
}

module.exports = {
  encodeLine
};
