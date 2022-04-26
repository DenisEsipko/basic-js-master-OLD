import {NotImplementedError} from '../extensions/index.js';
import {assert} from "chai";

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default
function countCats(matrix) {
    let num = 0;
    matrix.map(row => {
        row.map(token => {
            if (token === '^^') num += 1;
        });
    })
    return num;
}


