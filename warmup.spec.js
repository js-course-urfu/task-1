/* eslint-env mocha */
'use strict';

const assert = require('assert');

const {
    abSum,
    centuryByYear,
    fibonacciSequence,
    matrixTransposition,
    smilesEntry
} = require('./warmup');

describe('A+B sum', () => {
    it('Должна вернуть `150`', () => {
        assert.strictEqual(abSum(10, 140), 150);
    });
});

describe('Century by year', () => {
    it('Должна вернуть `21`', () => {
        assert.strictEqual(centuryByYear(2019), 21);
    });
});

describe('Fibonacci sequence', () => {
    it('Для n=5 должна вернуть `120`', () => {
        assert.strictEqual(fibonacciSequence(5), 120);
    });
});

describe('Matrix transposition', () => {
    it('Должна транспонировать квадратную матрицу 3x3', () => {
        assert.deepStrictEqual(
            matrixTransposition([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]), [
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9]
            ]);
    });
});

describe('Smiles entry', () => {
    it('Должна вернуть `4`', () => {
        assert.strictEqual(smilesEntry(':-)(-::-):-:::-(-:'), 4);
    });
});
