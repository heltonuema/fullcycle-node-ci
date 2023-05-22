import {describe, expect, test} from '@jest/globals';
import {multiplica, soma} from "./calc"; 

describe('calc module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(soma(1,2)).toBe(3);
    });
  });

describe('calc module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(multiplica(1,2)).toBe(2);
    });
  });