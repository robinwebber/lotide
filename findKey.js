const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//create a function that takes an array of objects and a callback function
const findKey = function(object, callBack) {
  // result will be a string
  let result = '';
  // the stopping condition is a function (callBack)
  // loop must look through the array of objects and return the string with the key of value matching callBack
  //
  for (let keys in object) {
    // console.log('key ===> ', keys);
    // console.log('objectkeys ===> ', object[keys]);
    // console.log('truthyness of function ===> ', callBack(keys));
    // console.log('stars? ===> ', object[keys]['stars']);
    if (callBack(object[keys])) {
      // console.log('callback test ===>', (callBack(object[keys])))
      result = keys;
      return result;
    }
    
  }

  return result;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));