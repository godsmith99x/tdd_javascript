const expect = require('chai').expect;

describe('test_suite1', function () {
    it('test1', function () {
        expect(true).to.equal(true);
    });
});

/* Example of nested Test Suites */

describe('test_suite2', function () {
    describe('test_suite3', function () {
        it('test3', function () {
            expect(true).to.equal(true);
        });
    });
    it('test2', function () {
        expect(true).to.equal(true);
    });
});