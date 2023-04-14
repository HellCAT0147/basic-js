const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
function MyThrower(message) {
  this.message = message;
}
class VigenereCipheringMachine {
  constructor(straight = true) {
    this.straight = straight;
  }
  
  encrypt(word, key) {
    if (!word || !key) {
      throw new MyThrower('Incorrect arguments!');
    }
    let result = '';
    let j = 0;
    for (let i = 0; i < word.length; i++) {
      let letterNum = word.toUpperCase().charCodeAt(i);
      if (letterNum >= 65 && letterNum <= 90) {
        let add = key.toUpperCase().charCodeAt(j % (key.length)) - 65;
        let toResult = letterNum + add;
        if (toResult > 90) toResult -= 26;
        result += String.fromCharCode(toResult);
        j++;
      } else {
        result += word[i];
      }
    }
    if (this.straight)
      return result;
    else
      return result.split('').reverse().join('');
  }
  decrypt(word, key) {
    if (!word || !key) {
      throw new MyThrower('Incorrect arguments!');
    }
    let result = '';
    let j = 0;
    for (let i = 0; i < word.length; i++) {
      let letterNum = word.toUpperCase().charCodeAt(i);
      if (letterNum >= 65 && letterNum <= 90) {
        let subtract = key.toUpperCase().charCodeAt(j % (key.length)) - 65;
        let toResult = letterNum - subtract;
        if (toResult < 65) toResult += 26;
        result += String.fromCharCode(toResult);
        j++;
      } else {
        result += word[i];
      }
    }
    if (this.straight)
      return result;
    else
      return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
