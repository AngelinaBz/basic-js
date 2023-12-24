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

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    };

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let index = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.match(/[A-Z]/)) {
        let shift = key.charCodeAt(index % key.length) - 65;
        let charCode = ((message.charCodeAt(i) - 65) + shift) % 26 + 65;
        result += String.fromCharCode(charCode);
        index++;
      }
      else {
        result += char;
      }
    }
    let reverseResult = result.split('').reverse().join('');
    if (this.type) {
      return result;
    }
    else return reverseResult;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decResult = '';
    let index = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = encryptedMessage[i];
      if (char.match(/[A-Z]/)) {
        let shift = key.charCodeAt(index % key.length) - 65;
        let charCode = ((encryptedMessage.charCodeAt(i) - 65) - shift + 26) % 26 + 65;
        decResult += String.fromCharCode(charCode);
        index++;
      }
      else decResult += char;
    }
    let reverseDecResult = decResult.split('').reverse().join('');
    if (this.type) {
      return decResult;
    }
    else return reverseDecResult;
  }
}
module.exports = {
  VigenereCipheringMachine
};
