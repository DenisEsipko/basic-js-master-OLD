import {NotImplementedError} from '../extensions/index.js';

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
export default
class VigenereCipheringMachine {

//https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%92%D0%B8%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%B0#JavaScript

    //true (или ничего), чтобы создать прямую машину
    // false, чтобы создать обратную машину

    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(str, key) {
        return this.Vizhener(str, key, 'encrypt');

    }

    decrypt(str, key) {
        return this.Vizhener(str, key, 'decrypt');

    }

    Vizhener(str, key, mode) {
        if (!str || !key || !mode) throw Error('Incorrect arguments!')
        str = str.toUpperCase();
        key = key.toUpperCase();
        let res = [];
        for (let i = 0, j = 0; i < str.length; i++) {
            if (str[i].match(/[A-Z]/)) {
                if (mode == 'decrypt') {
                    res.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)));
                } else {
                    res.push(String.fromCharCode((str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)));
                }
                j++;
            } else {
                res.push(str[i]);
            }
        }
        return this.direct ? res.join('') : res.reverse().join('');
    }


}

//const directMachine = new VigenereCipheringMachine();
// let messageEncrypt = directMachine.encrypt('Hello World!', 'code');
// let messageEncrypt1 = directMachine.decrypt('Jsopq Zstzg!', 'code');
 //console.log(messageEncrypt); // "Jhpnr Yrvng!"  /Jsopq Zstzg!
// console.log(messageEncrypt1); // "Jhpnr Yrvng!"  /Jsopq Zstzg!


//console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); //=> 'AEIHQX SX DLLU!'
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));// => 'ATTACK AT DAWN!'