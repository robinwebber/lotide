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
    } return result;

  }
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);