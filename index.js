'use strict';

const {
    abSum,
    centuryByYear,
    fibonacciSequence,
    matrixTransposition,
    smilesEntry
} = require('./warmup');

// Выведет `11`
console.info(abSum(1, 10));

// Выведет `20`
console.info(centuryByYear(1950));

// Выведет `6`
console.info(fibonacciSequence(3));

// Выведет `[
//    [1, 4, 7],
//    [2, 5, 8],
//    [3, 6, 9]
// ]`
console.info(matrixTransposition([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

// Выведет `2`
console.info(smilesEntry(':-) (-:'));
