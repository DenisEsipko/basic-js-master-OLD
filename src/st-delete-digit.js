import {NotImplementedError} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default
function deleteDigit(num) {

    let result = 0;
    const num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    num_digits.reverse()
    for (let index = 0; index < num_digits.length; index++) {
        let n = 0;

         for (let i = 0; i <num_digits.length ; i++) {
            if (i !== index) {
                n = n * 10 + num_digits[i];

            }
        }
        // console.log(n +" N")
        // console.log(result +" res")
        result = Math.max(n, result);
        //console.log("**")
    }
    return result;

}

//console.log(deleteDigit(7895));
