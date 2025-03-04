const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sorted = [];
  let numOfMinus1 = 0;
  arr.forEach((elem, id) => {
    if (elem == -1) {
      sorted[id] = elem;
      numOfMinus1++;
    }
  });
  const sortedHeights = arr.filter(elem => elem != -1).sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < sortedHeights.length + numOfMinus1; i++) {
    if (!sorted[i]) {
      sorted[i] = sortedHeights[j++];
    }
  }
  return(sorted);
}

module.exports = {
  sortByHeight
};
