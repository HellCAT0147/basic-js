const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = [];
  names.forEach(name => {
    if (newNames.includes(name)) {
      name += '(1)';
      let i = 2;
      while (newNames.includes(name)) {
        name = name.slice(0, -2);
        name += i + ')';
        i++;
      }
    }
    newNames.push(name);
  });
  return newNames;
}

module.exports = {
  renameFiles
};
