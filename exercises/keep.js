'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

function keepFirst(str) {
    return str.substr(0,2)
}
function keepLast(str) {
    return str.substr(str.length-2,2)
}
function keepFirstLast(str) {
    return str.substr(0,2) + str.substr(str.length-2,2)
}


//* Begin of tests
const assert = require('assert');
assert.strictEqual(keepFirst('keepFirst'), "ke");
assert.strictEqual(keepLast('keepLast'), "st");
assert.strictEqual(keepFirstLast('keepFirstLast'), "kest");
// assert.fail('You must write your own tests');
// End of tests */
