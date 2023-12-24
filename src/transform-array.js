const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
/**
--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next duplicates the next element of the array in the transformed array.
--double-prev duplicates the previous element of the array in the transformed array.
 */
function transform(arr) {
  let result = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arrLength = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arrLength > i + 1) {
        i++;
      }
    } 
    else if (arr[i] === '--double-next') {
      if (arrLength > i + 1) {
        result.push(arr[i + 1]);
      }
    }
    else if (arr[i] === '--discard-prev') {
      if (result.length > 0 && result[result.length - 1] === arr[i - 1]) {
        result.pop();
      }
    }  
    else if (arr[i] === '--double-prev') {
      if (arr[i - 1] && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]);
      }
    } 
    else {
      result.push(arr[i]);
    }
  } 
  return result;
}

module.exports = {
  transform
};
