const buildHash = require('../pages/index').buildHash;

//
const testData = buildHash();
//
describe('Jenkins test suite', () => {
    test('hash returns a UUID', () => {
        expect(typeof testData[0] === 'string').toBeTruthy();
    });
    test('hash returns a UUID', () => {
        expect(testData[1].getDay()).toBe(new Date().getDay());
    });
});
