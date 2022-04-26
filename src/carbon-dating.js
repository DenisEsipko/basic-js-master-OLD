import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity ) {
    // округлям по условия задачи активногсть к целому числу
    let activity  = parseFloat(sampleActivity);
    const K = 0.693 / HALF_LIFE_PERIOD;
    // отбрасываем не число,  строку, активногсть меньше 0 и больше современного
    if(Number.isNaN(activity) || (typeof sampleActivity !== 'string') || (activity <= 0 || activity > 15) ){
        return false
    } else {
       // t =пер(N0/ N)k    где N0 совремнная актиность N входная (прошлая)
        // K константу скорости реакции
        // период это логарифм
      return   Math.ceil((Math.log(MODERN_ACTIVITY / activity)) / K);

    }
}
