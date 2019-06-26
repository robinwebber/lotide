const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


// create a function that takes in an object and a value.
const findKeyByValue = function(object, value) {
  // It should scan the object and return the first key which contains the given value.
  
  // return a string that is equal to the key
  // this will have to be empty to start
  let result = '';

  // some kind of if statement while going through to see if the value of a key is equal to value
  // try the object.key to make an array to give value to a search in the object
  let keyGenerator = Object.keys(object);
  //console.log(keyGenerator);
  
  for (let i = 0; i < keyGenerator.length; i++) {
    let placeHolderKey = keyGenerator[i];
    //console.log(placeHolderKey);
    if (object[placeHolderKey] === value) {
      result = placeHolderKey;
      // console.log(placeHolderKey);
      // console.log(result);
      return result;
    } else {
      result = undefined;
    }
  

    // If no key with that given value is found, then it should return 'undefined'.



  }
  return result;
};
 
//console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));


assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Versailles"), undefined);