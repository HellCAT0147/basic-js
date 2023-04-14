const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}
  domains.forEach(elem => {
    let preResult = [];
    let arr = elem.split('.');
    let str = '';
    for (let elem2 of arr.reverse()) {
      str += '.' + elem2;
      preResult.push(str);
    }
    preResult.forEach(elem2 => {
      if (!result.hasOwnProperty(elem2))
        result[elem2] = 1;
      else
        result[elem2]++;
    });
  });
  return result;
}

module.exports = {
  getDNSStats
};
