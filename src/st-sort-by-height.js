import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default
function sortByHeight(arr) {
    let newArr = arr.filter((e) => e >= 0).sort((a,b)=>a-b);
   // console.log(newArr)
    arr.forEach((element, index) => {
        if (element >= 0) {
            arr[index] = newArr.shift();
            //console.log(arr)
        }
    });
    return arr;
}

//console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
