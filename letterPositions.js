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

// function to remove spaces from strings
const removeSpaces = function (str) {
  let noSpaceString = str.split(' ').join('');
  return noSpaceString;
};

const indexPositionLister = function (string, char) {
  let indexPositions = [];
  for (let i = 0; i < string.length; i++) {
    //push the index number[i] into the indexPositions array
    if (char === ' ') {

    } else if (string.charAt(i) === char) {
      indexPositions.push(i);
    }
  }
  return indexPositions;
};

//console.log(indexPositionLister('lighthouse in the house', 'h'));




const letterPositions = function(sentence) {
  //empty object to hold results
  const results = {};
  // the key for the results object has to be a letter
  // the value must be the index positions of that letter
  //already have a remove spaces function (that doesn't work for this, i need to ignore spaces...)
  // let noSpacesString = removeSpaces(sentence);
  //i can reuse some of the old code to create the letters 
  //to assign value to key i should use the result of a function
  //said function should return index positions of characters in a string
  for (letter of sentence) {
    if (letter === ' ') {
    } else {
      results[letter] = indexPositionLister(sentence, letter);
    }
  
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));