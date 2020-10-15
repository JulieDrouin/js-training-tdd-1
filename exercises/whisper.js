'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

function whisper(str) {
    return "*" +str.toLowerCase() +"*"
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(whisper('First'), "*first*");
assert.strictEqual(whisper('LAST'), "*last*");
assert.strictEqual(whisper('firstLAST'), "*firstlast*");
// assert.fail('You must write your own tests');
// End of tests */
