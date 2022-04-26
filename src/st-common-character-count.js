import { NotImplementedError } from '../extensions/index.js';
import {assert} from "chai";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default
function getCommonCharacterCount(s1, s2) {
    let sum = 0;

    let len1 = s1.length;
    let len2 = s2.length;

    const arr = s2.split('');

    for (let i = 0; i < len1; i++) {
        let k = 0;
        while (k < len2) {
            if (s1.charAt(i) === arr[k]) {
                sum++;
                arr.splice(k, 1);
                len2 = s2.length;
                break;
            }
            k++;
        }
    }
    //console.log(sum);
    return sum;

}

// getCommonCharacterCount('aabcc', 'adcaa')//, 3);
// getCommonCharacterCount('zzzz', 'zzzzzzz')//, 4);
// getCommonCharacterCount('abca', 'xyzbac')//, 3);
