import {NotImplementedError} from '../extensions/index.js';
import {assert} from "chai";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    let temp = {};
    let len;
    let str = "";
    for (const element of domains) {
        let arr_str = element.split(".");
        len = arr_str.length - 1;

        for (let i = 0; i < arr_str.length; i++) {
            str += "." + arr_str[len];

            if (!temp.hasOwnProperty([`${str}`])) {
                temp[`${str}`] = 1;
            } else {
                temp[`${str}`] += 1;
            }
            --len;
        }
        str = "";
    }
    //console.log(temp)
    return temp;
}


//let domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];
//console.log(getDNSStats(domains));
//getDNSStats(['epam.com'])//, { '.com': 1, '.com.epam': 1 });
//getDNSStats(['epam.com', 'info.epam.com'])//, { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// getDNSStats([])//, {});

// console.log(
//     [...'addd'].join(".")
// );