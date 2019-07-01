const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// create two empty arrays to hold the entered info
const eqArrays = function (firstArray, secondArray) {
  // first compare the lengths of the two arrays if not equal return false
  let result = true;
  if (firstArray.length !== secondArray.length) {
    result = false;
  } else {
    // compare elements of the arrays with a loop
    for (let i = 0; i < firstArray.length; i++) {
      // if array1[i] === array2[i] then continue
      if (firstArray[i] !== secondArray[i]) {
        result = false;
      }
    } 

  }

  return result;
};

const eqObjects = function(object1, object2) {
  
  // They have the same number of keys
  let length1 = Object.keys(object1).length;
  //console.log('length1 ===> ', length1);

  if (length1 !== Object.keys(object2).length) {
    //console.log('first test tripped ==> ', (length1 !== Object.keys(object2).length));
    return false;
  };

  for (let keys in object1) {
    if (Array.isArray(object1[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        console.log('line 51');
        return false;
      }
      console.log(eqArrays(object1[keys], object2[keys])); 
      console.log('has this tripped?');
      
    } else if (object1[keys] !== object2[keys]) {
      console.log('line 58');
      return false;
    } 

}
return true;
};

const assertObjectsEqual = function (ob1, ob2) {
  const inspect = require('util').inspect;
  if (eqObjects(ob1, ob2)) {
    console.log(`✅ Assertion Passed: ${inspect(ob1)} === ${inspect(ob2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = {
  a: 1,
  b: [1, 2, 'three']
};

const ba = {
  a: 1,
  b: [1, 2, 'three']
};

const ac = {
  a: 1,
  c: [1, 3, 9]
};

assertObjectsEqual(ab, ba);
assertObjectsEqual(ba, ac);
