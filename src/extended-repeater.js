const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  for (let i = 0; i < (options.repeatTimes !== undefined ? options.repeatTimes : 1); i++) {
    if (i+1 != (options.repeatTimes !== undefined ? options.repeatTimes : 1)) {
      result += str;
      for (let j = 0; j < (options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1); j++) {
        if (j+1 != (options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1))
          result += (options.addition !== undefined ? options.addition : '') + (options.additionSeparator !== undefined ? options.additionSeparator : '|');
        else
          result += (options.addition !== undefined ? options.addition : '');
      }
      result += (options.separator !== undefined ? options.separator : '+');
    } else {
      result += str;
      for (let j = 0; j < (options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1); j++) {
        if (j+1 != (options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1))
          result += (options.addition !== undefined ? options.addition : '') + (options.additionSeparator !== undefined ? options.additionSeparator : '|');
        else
          result += (options.addition !== undefined ? options.addition : '');
      }
    }
  }
  return result;
}

module.exports = {
  repeater
};
