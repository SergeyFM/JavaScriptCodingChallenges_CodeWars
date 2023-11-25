/*

    To test that everything's set up well and working.

*/

describe('Tests', function () {
    it("Test 1: 2 + 3 = 5", function () {
        expect(sum(2, 3)).toBe(5);
    });

    it('Test 2: 5 + -3 = 2', function () {
        expect(sum(5, -3)).toBe(2);
    });
});

test('666 + -999 = -333', () => {
    expect(sum(666, -999)).toBe(-333);
});

function sum(a, b) {
    console.log(`${a} + ${b}`);
    return a + b;
}
