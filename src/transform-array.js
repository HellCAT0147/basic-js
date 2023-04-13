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

function MyThrower(message) {
  this.message = message;
}

function transform(arr) {
  if (!Array.isArray(arr)) throw new MyThrower("'arr' parameter must be an instance of the Array!");
  let result = [], double = false, discard = false, notControl = false, deleted = '';
  loop: for (let elem of arr) {
    if (elem === undefined) continue;
    if (typeof elem == 'string') {
      switch (elem) {
        case '--double-next':
          double = true;
          break;
        case '--double-prev':
          if (deleted == '' && result.length)
            result.push(result[result.length-1]);
          break;
        case '--discard-next':
          discard = true;
          break;
        case '--discard-prev':
          if (deleted == '')
            deleted = result.pop();
          break;
        default: notControl = true;
      }
    }
    if (typeof elem != 'string' || notControl) {
      notControl = false;
      if (double) {
        result.push(elem);
        double = false;
      }
      if (discard) {
        discard = false;
        if (typeof elem == 'number') {
          deleted = elem;
          continue loop;
        }
      }
      result.push(elem);
      deleted = '';
    }
  }
  return result;
}

module.exports = {
  transform
};
