'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

function yell(string) {
    return string.toUpperCase();
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(yell('yo'), "YO");
assert.strictEqual(yell('hello world'), "HELLO WORLD");
assert.strictEqual(yell('Coucou'), "COUCOU");
// assert.fail('You must write your own tests');

// End of tests */
