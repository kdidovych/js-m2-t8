'use strict';

let n = prompt('Enter factorial number. (small number like 5)');
console.log(factorial(n));

/**
 * Factorial calculation example with recursion
 *
 * @param {Number} n
 * @returns {Number}
 */
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
