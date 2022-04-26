import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default
function calculateHanoi(disksNumber, turnsSpeed ) {
    const calculate = {
        turns: 0,
        seconds: 0
    }
    //Отсюда методом математической индукции заключаем, что минимальное число ходов,
    // необходимое для решения головоломки, равно 2( в степени N) − 1, где N — число дисков.
     //calculate.turns =  2** disksNumber - 1;
     calculate.turns =  2** disksNumber-1;

    //turnsSpeed` — скорость перемещения дисков (в **ходах** в **час**).
    calculate.seconds = Math.trunc(calculate.turns / turnsSpeed * 3600);

    return calculate;
}

