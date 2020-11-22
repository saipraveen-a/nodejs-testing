const assert = require('assert');
describe('Simple Math Test', () => {
 it('should return 2', () => {
        assert.strictEqual(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.strictEqual(3 * 3, 9);
    });
});

const expect = require('chai').expect;
describe('Simple Math Test With Chai', () => {
 it('should return 2', () => {
        expect(1 + 1).to.equal(2);
    });
 it('should return 9', () => {
        expect(3 * 3).to.equal(9);
    });
});