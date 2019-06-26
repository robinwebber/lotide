const assertArraysEqual = function (firstArray, secondArray) {
  // first compare the lengths of the two arrays if not equal return false
  if (firstArray.length !== secondArray.length) {
    return console.log(`❌ Assertion failed: ${firstArray} !== ${secondArray}`);
  } else {
    // compare elements of the arrays with a loop
    for (let i = 0; i < firstArray.length; i++) {
      // if array1[i] === array2[i] then continue
      if (firstArray[i] !== secondArray[i]) {
        return console.log(`❌ Assertion failed: ${firstArray} !== ${secondArray}`);
      }
    }
  } return console.log(`✅ Assertion passed: ${firstArray} === ${secondArray}`);
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
    } return result;

  }
};

const flatten = function (arr) {
  //make empty array to hold values
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    //need to test if element is an array- we will use a loop
    // first case it is not an array
    if (!arr[i].isArray) {

     returnArr = returnArr.push(arr[i]);

    } else if (arr[i].isArray) {
    for (let j = 0; j < arr[i].length; j++) {
      returnArr = returnArr.push(arr[i][j]);
    }
  }
  
  //if it not an array add it to our returnArr
} return returnArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));