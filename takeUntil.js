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


// create a function that accepts a callback function to go return the results of an array until a stopping condition is met
// declare the function
//make sure it accepts an array and a function that dictates the stopping condition
const takeUntil = function(array, callback) {
  // create a results array
  const results = [];
  // loop through the array (for of)
  for (let element of array)
  // compare the current element to the stopping condition
    
    // first i need to see if the loop should be stopped
    if (callback(element)) {
      
      break;

    } else if (!callback(element)) {
     
      results.push(element);
      
    }
    //return an array
  return results;

};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual()