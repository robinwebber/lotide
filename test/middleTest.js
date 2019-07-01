// Pair coded with Nelly Main

const middle = require('../middle');
const assert = require('chai').assert;

describe('#middleTest', () => {
  it('should return an empty array for an array with 1 element', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return an empty array for an array with 2 elements', () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it('for an array with an odd number of elements it should return the middle element', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('for an array with an even number of elements it should return an array with the 2 middle elements', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});

