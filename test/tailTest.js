// Pair coded with Nelly Main

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return ["goodbye", "adios"] for ["adieu", "goodbye", "adios"]', () => {
    assert.deepEqual(tail(["adieu", "goodbye", "adios"]), ["goodbye", "adios"]);
  });

  it('should return an empty array when given an array with one element', () => {
    assert.deepEqual(tail(["oneElement"]), []);
  });

  it('should not modify the input array', () => {

    const inputArray = ['this', 'is', 'input', 'array']
    assert.notDeepEqual(tail(inputArray), inputArray); 

  })

});