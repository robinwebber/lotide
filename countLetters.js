// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const letterInstancesCounter = function (string, character) {
  let letterCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      letterCount += 1;
      //console.log(letterCount);
    }
  }
  return letterCount;
}

//console.log(letterInstancesCounter('I hope this works is the problem that it is case sensitive', 'i'))

const removeSpaces = function (str) {
  let noSpaceString = str.split(' ').join('');
  return noSpaceString;
};
//console.log(removeSpaces('Is this working?'));

// take a string and count the times each character happens
const countLetters = function (str) {
  // crearte an empty object to populate with results
  const letterCountObject = {};
  //because we are ignoring spaces i need to take str and remove spaces
  countableString = removeSpaces(str);
  // sort through the countablestring to see how many times the letters occur
  // make an external function to count characters in a string
  let charCount = letterInstancesCounter(countableString);
  // populate the lettercountobject with the letters as a key and the count as value
  // use a loop somehow
  for (var letter of countableString) {
    //console.log(letter);
    letterCountObject[letter] = letterInstancesCounter(countableString, letter);
    
  }
  return letterCountObject;
}

module.exports = countLetters;
//console.log(countLetters("lighthouse in the house"));

// let testResult = countLetters('lighthouse in the house');

// assertEqual(testResult['l'], 1);
// assertEqual(testResult['h'], 4);