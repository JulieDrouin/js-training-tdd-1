'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

function jadenCase(str) {
    let res = []
    let spli = str.split(" ")
    for (let index = 0; index < spli.length; index++) {
        const element = spli[index];
        res.push(element.charAt(0).toUpperCase() + element.substring(1))
    }
    return res.join(' ')
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(jadenCase('How are you ?'), "How Are You ?");
assert.strictEqual(jadenCase('jadenCase'), "JadenCase");
// assert.strictEqual(jadenCase('jadenCase'), "kest");

// assert.fail('You must write your own tests');
// End of tests */
