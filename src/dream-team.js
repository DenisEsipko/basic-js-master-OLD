import {NotImplementedError} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


export default function createDreamTeam(members) {

    if (!Array.isArray(members)) {
        return false;
    } else {
        console.log("---")
        return members
            .filter(intem => typeof (intem) === "string")
            .map(intem => intem.trim())
            .map(intem => intem[0].toUpperCase())
            .sort()
            .join('')
    }
}

// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])// => 'ADMM'
//createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])// => 'LOO'
//createDreamTeam(3)