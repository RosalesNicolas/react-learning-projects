import { describe, expect, test } from 'vitest'
import { add , subtract, multiply} from './math.helpers'


describe('add', () => {
   test('should add two positives numbers', () => {
    // ! 1. Arrange 
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a,b);

    // ! 3. Assert
    expect(result).toBe(a+b);

    }); 
})

describe('Test de restas', () => {
    test('Con minuendo mayor que sustraendo', () => {
        // ! 1. Arrange
        const minuendo = 5;
        const sustraendo = 3;  
        // ! 2. Act
        const result = subtract(minuendo, sustraendo);
        // ! 3. Assert
        expect(result).toBe(minuendo - sustraendo);
    });
    test('Tiene que dar positivo', () => {
        // ! 1. Arrange
        const minuendo = 5;
        const sustraendo = 3;  
        // ! 2. Act
        const result = subtract(minuendo, sustraendo);
        // ! 3. Assert
        expect(result).toBeGreaterThan(0);
    });
});

describe('Multiplicaciones:', () => {
    test('Ambos positivos', () => {
        // ! 1. Arrange
        const a = 4;
        const b = 5;
        // ! 2. Act
        const result = multiply(a,b);   
        // ! 3.Assert
        expect(result).toBe(a * b);
    });
    test('Uno negativo', () => {
        // ! 1. Arrange
        const a = -4;
        const b = 5;
        // ! 2. Act
        const result = multiply(a,b);
        const bool = result < 0;
        // ! 3.Assert
        expect(bool).toBe(true);
    });
    test('Ambos negativos', () => {
        // ! 1. Arrange
        const a = -4;
        const b = -5;
        // ! 2. Act
        const result = multiply(a,b);   
        const bool = result > 0;
        // ! 3.Assert
        expect(bool).toBe(true);
    });
})