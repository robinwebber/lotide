

// const eqArrays = function (firstArray, secondArray) {
//   // first compare the lengths of the two arrays if not equal return false
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   } else {
//     // compare elements of the arrays with a loop
//     for (let i = 0; i < firstArray.length; i++) {
//       // if array1[i] === array2[i] then continue
//       if (firstArray[i] !== secondArray[i]) {
//         return false;
//       }
//     } return true;
//   }
// };

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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
assertArraysEqual([1, 2, 3], ['3', 2, 1]);
assertArraysEqual(['hey', 'how', 'are', 'you'], ['hey', 'how', 'are', 'you']);