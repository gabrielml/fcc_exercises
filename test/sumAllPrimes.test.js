const sumPrimes = require('../src/sumAllPrimes');

describe('Prime Numbers', ()=>{
    test('it should always return a number', () => {
        
        let input = 10;

        expect(sumPrimes(input)).not.toBeNaN();
    });

    test('it should return the sum of prime numbers', () => {
        
        let input = [10, 977];
        let output = [17, 73156];

        for (let index = 0; index < input.length; index++) {
            expect(sumPrimes(input[index])).toEqual(output[index]);
        }
    });
});