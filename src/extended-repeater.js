import {NotImplementedError} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


export default function repeater(str, options) {
    let newString = "";
    //`addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
    // addition` по умолчанию являются **строками**.
    let additional = "";

//`repeatTimes` устанавливает число повторений `str` по умолчани 1
    options.repeatTimes = options.repeatTimes || 1;

    //separator` это строка, разделяющая повторения `str`
    options.separator = options.separator || "+";

    //`addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
    if (options.addition === undefined) {
        options.addition = "";
    }

    //`additionRepeatTimes` устанавливает число повторений `addition`
    options.additionRepeatTimes = options.additionRepeatTimes || 1;

    //`additionSeparator` это строка, разделяющая повторения `addition`
    options.additionSeparator = options.additionSeparator || "|";

    for (let i = 1; i < options.additionRepeatTimes; i++) {
        additional += options.addition + options.additionSeparator;
    }
    additional += options.addition;

    for (let i = 1; i < options.repeatTimes; i++) {
        newString += str + additional + options.separator;
    }
    newString += str + additional;
    //console.log(newString)
    return newString;

}
// repeater('STRING', { repeatTimes: 3, separator: '**',
//      addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
// //* => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'