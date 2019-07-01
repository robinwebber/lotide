// const eqArrays = function (firstArray, secondArray) {
//   // first compare the lengths of the two arrays if not equal return false
//   let result = true;
//   if (firstArray.length !== secondArray.length) {
//     result = false;
//   } else {
//     // compare elements of the arrays with a loop
//     for (let i = 0; i < firstArray.length; i++) {
//       // if array1[i] === array2[i] then continue
//       if (firstArray[i] !== secondArray[i]) {
//         result = false;
//       }
//     } return result;

//   }
// };
const assertArraysEqual = require('./assertArraysEqual');
// const assertArraysEqual = function (firstArray, secondArray) {
//   // first compare the lengths of the two arrays if not equal return false
//   if (firstArray.length !== secondArray.length) {
//     return console.log(`❌ Assertion failed: ${firstArray} !== ${secondArray}`);
//   } else {
//     // compare elements of the arrays with a loop
//     for (let i = 0; i < firstArray.length; i++) {
//       // if array1[i] === array2[i] then continue
//       if (firstArray[i] !== secondArray[i]) {
//         return console.log(`❌ Assertion failed: ${firstArray} !== ${secondArray}`);
//       }
//     }
//   } return console.log(`✅ Assertion passed: ${firstArray} === ${secondArray}`);
// };

// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(arr) {
  // create an empty array to hold middle values or be returned empty
  const midArray = [];
// For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length <= 2 ) {
    return midArray;
    // For arrays with odd number of elements, an array containing a single middle element should be returned.
    // determine if arr is odd or even length

  } else if (arr.length % 2 !== 0) {

    // i need to determine which element would be the middle (i'll do something like divide by 2 then math.ceil)
    midArray.push(arr[Math.floor(arr.length / 2)]);
    return midArray;

    // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else if (arr.length % 2 === 0) {
    midArray.push(arr[(arr.length / 2) - 1])
    midArray.push(arr[arr.length / 2]);

  }
  return midArray;
};

//console.log(middle([1, 2, 3, 4]));

module.exports = middle;