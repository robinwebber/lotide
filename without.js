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

// Implement without which will return a subset of a given array, removing unwanted elements.
// This function should take in a source array and a itemsToRemove array.
// It should return a new array with only those elements from source that are not present in the itemsToRemove array.
const without = function (source, itemsToRemove) {
// create an empty array to hold the desired elements make it match source cause we will remove elements rather than add them
  let wantedElements = [];
  // filter through the source array comparing elements to itemsToRemove with a nested loop
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      wantedElements.push(source[i]);
    } 
  } 
  return wantedElements;
};

module.exports = without;
// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(['hey', 'how', 'are', 'you'], ['how', 'you']));

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);