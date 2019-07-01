// Our map function will take in two arguments
  // 1. an array to map
//const words = ['ground', 'control', 'to', 'major', 'tom'];
  // 2. a callback function
// the map function will return a new array based on the results of the callback function

// create two empty arrays to hold the entered info
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
//     } 

//   }

//   return result;
// };

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


const map = function(array, callBack) {
  
  const results = [];
  for (let item of array) {
    results.push(callBack(item)); 
  }

  return results;
};

module.exports = map;
  // tests

// const coolWords = ['dude', 'man', 'chick', 'bro'];

// const results1 = map(words, word => word[0]);
// // console.log(results1);

// const testResult2 = map(coolWords, coolness => coolness += 's');
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(testResult2, ['dudes', 'mans', 'chicks', 'bros']);

