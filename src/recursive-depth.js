import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default
class DepthCalculator {
  calculateDepth(arr) {
      let deepArray = 1;
      for (const arrElement of arr) {
          if (Array.isArray(arrElement)) {
              deepArray += this.calculateDepth(arr.flat());
              break;
          }
      }
      return deepArray;
  }
}
