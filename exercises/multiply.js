'use strict';

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code:

function multiply(num1, num2) {
    // let res = 0
    // if(num2 < 0) { 
    //     for (let index = 0; index > num2; index--) {
    //         res -=num1
    //     }
    //     return res
    // }
    // for (let index = 0; index < num2; index++) {
    //     res +=num1
    // }
    // return res
    let result = 0;
    for (let index = 0; index < Math.abs(num2); index++) {
        result += Math.abs(num1);        
    }

    return (num1 < 0  && num2 > 0) || (num1 > 0 && num2 < 0) 
        ? -result 
        : result;
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof multiply, 'function');
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes('Math.imul'), false);
assert.strictEqual(multiply.toString().includes('*'), false);
assert.strictEqual(multiply.toString().includes('/'), false);
assert.strictEqual(multiply(34, 78), 2652);
assert.strictEqual(multiply(123, 0), 0);
assert.strictEqual(multiply(0, -230), 0);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(123, -22), -2706);
assert.strictEqual(multiply(-22, 123), -2706);
assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
