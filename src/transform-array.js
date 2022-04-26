import {NotImplementedError} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default
function transform(arr) {
    const newArr = [];

    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    if (arr.length === 0) {
        return [];
    }


//--discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
        }
        //-discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
        else if (arr[i] === '--discard-prev') {
            if (!(arr[i - 2] === '--discard-next')) {
                newArr.pop();
            }
            //--double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
        } else if (arr[i] === '--double-next') {
            if (i !== arr.length - 1) {
                newArr.push(arr[i + 1]);
            }
            //--double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
        } else if (arr[i] === '--double-prev') {
            if (i !== 0 && !(arr[i - 2] === '--discard-next')) {
                newArr.push(arr[i - 1]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }

    //console.log(newArr)
    return newArr;

}

//transform([1, 2, 3, '--discard-next', 1337]) //[1, 2, 3]
// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) //[1, 2, 3, 4, 5]
// transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]) [1, 2, 3, 1337, 4, 5]