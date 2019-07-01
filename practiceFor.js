const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countInArray = function (arr, str) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      counter += 1;
    }
  } 
  return counter;

};

const countOnly = function(allItems, itemsToCount) {
  const resultObject = {};
  for (key in itemsToCount) {
    console.log(key);
    const howManyTimesName = countInArray(allItems, key) || undefined;
    resultObject[key] = howManyTimesName;
    console.log(resultObject);
  }
  return resultObject;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], undefined);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);