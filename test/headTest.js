// Pair coded with Nelly Main

const assert = require('chai').assert;
const head = require('../head');
describe('#head',() => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('returns not equal when comparing 2 different strings with capitalisation', () => {
    assert.notEqual(head(["boo, bam, beep"]), "BOO");
  });
  it('return "not equal when comparing a number to a number string', () => {
    assert.notStrictEqual(head([1,2,3]), "1");
  });
});