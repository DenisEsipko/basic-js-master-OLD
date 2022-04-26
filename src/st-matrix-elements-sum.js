import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default
function getMatrixElementsSum(matrix) {
    let width = matrix[0].length  // ширина 4
    let height = matrix.length  // высота 3
    let sum = 0;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            //console.log(matrix[j][i])
            if(matrix[j][i]===0){
                break;
            }
            else {
                //console.log(matrix[j][i])
                sum+=matrix[j][i]
            }
        }
    }
    console.log(sum)
    return sum;
}

// let matrix = [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 7]];
// getMatrixElementsSum(matrix)