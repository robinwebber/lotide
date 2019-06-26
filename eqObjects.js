const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
 
//create a function that compares two objects
const eqObjects = function(object1, object2) {

  // returns true if the objects have identical keys with identical values
  // return false if otherwise
  // need a variable to hold ultimate answer
  let numOfKeysTest = undefined;
  //console.log('initial value of numofkeys test ' + numOfKeysTest);
  let valueOfKeysTest = true;
  //console.log('initial value of valueofkeystest ' + valueOfKeysTest);

  let firstObKeys = Object.keys(object1);
  let secondObKeys = Object.keys(object2);

  if (firstObKeys.length === secondObKeys.length) {
    numOfKeysTest = true;
  } else {
    numOfKeysTest = false;
  }
  //console.log('judgement of numofkeys test ' + numOfKeysTest);
  //return numOfKeysTest;

  //After that check, loop through the keys returned by Object.keys for one of the objects (not both). 
  for (var i of firstObKeys) {
    if (Array.isArray(object1[i])) {
      valueOfKeysTest = eqArrays(object1[i], object2[i])
    } else {
      valueOfKeysTest = object1[i] !== object2[i];
    }

    // if (object1[i] !== object2[i]) {
    //   valueOfKeysTest = false;
    // } else if (Array.isArray(object1[i]) ) {
    //   valueOfKeysTest = eqArrays(object1[i], object2[i]);
    // }
  };
  // console.log('judgement of valueofkeystest ' + valueOfKeysTest);


  

  
  console.log(numOfKeysTest && valueOfKeysTest);
  return (numOfKeysTest && valueOfKeysTest);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // false

// console.log(objectKeyNumberComparer(ab, ba));
// console.log(objectKeyNumberComparer(ab, abc));
//console.log(numberOfKeysInObject(abc));


// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);