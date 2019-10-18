import {add} from "./string-calculator";

describe('String Calculator Tests', () => {
    test('should return zero when empty string passed in parameters', () => {
        // Act
        const parameters: string = '';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 0;
        expect(result).toEqual(expected);
    });
    test('should return 4 when "4" passed in parameters', () => {
        // Act
        const parameters: string = '4';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 4;
        expect(result).toEqual(expected);
    });
    test('should return 1 when "1" passed in parameters', () => {
        // Act
        const parameters: string = '1';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 1;
        expect(result).toEqual(expected);
    });
    test('should return 3 when "1,2" passed in parameters', () => {
        // Act
        const parameters: string = '1,2';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 3;
        expect(result).toEqual(expected);
    });
    test('should return 10 when "5,5" passed in parameters', () => {
        // Act
        const parameters: string = '5,5';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 10;
        expect(result).toEqual(expected);
    });
    test('should return 15 when "5,5,5" passed in parameters', () => {
        // Act
        const parameters: string = '5,5,5';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 15;
        expect(result).toEqual(expected);
    });
    test('should return 15 when "10,30,495,58454" passed in parameters', () => {
        // Act
        const parameters: string = '10,30,495,58454';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 58989;
        expect(result).toEqual(expected);
    });
    test('should return 15 when "5\n5,5" passed in parameters', () => {
        // Act
        const parameters: string = '5\n5,5';

        // Arrange
        const result: number = add(parameters);

        // Assert
        const expected: number = 15;
        expect(result).toEqual(expected);
    });
});
