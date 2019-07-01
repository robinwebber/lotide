// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countInArray = function (arr, str) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      counter += 1;
    }
  } 
  return counter;

};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // make an empty object to hold final answer which needs to be an object
  const countObject = {};
  //loop over each key in itemsToCount with a for in loop
  for (const name in itemsToCount) {
    const namesCount = countInArray(allItems, name) || undefined;
    console.log(namesCount);
    countObject[name] = namesCount;

  }
  console.log(countObject);
  return countObject;
  // the key is jason
  // find how many times jason is in the array

  // find the values of the the items in the array
  //add an entry to the object - the name that we are looking for
  // see if the key exists, if not create it with a value of undefined
  // if the key exists we need to increase the count
};

module.exports = countOnly;

// test cases
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], undefined);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);