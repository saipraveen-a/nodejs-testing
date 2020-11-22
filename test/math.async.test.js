const expect = require('chai').expect;
// import math file
const math = require('../math');
describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', async () => {
            const result = await math.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            math.add(2, 2).then(result => expect(result).to.equal(4));
        });
    });
    
    describe('math.multiply() Test', () => {
        it('should equal 3', async () => {
            const result = await math.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            math.multiply(5, 2).then(result => expect(result).to.equal(10));
        });
    });
});