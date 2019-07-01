// assertEqual function
console.log('\n');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    } 

  }

  return result;
};


// below code was built with reference to https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/

// Implement the defintion for function eqObjects which will take in two objects and returns true or false, 
  //based on a perfect match.

// This time I will take a difference approach, using return false; or return true; so that the value of the function is boolean
const eqObjects = function(object1, object2) {
  
  // They have the same number of keys
  let length1 = Object.keys(object1).length;
  //console.log('length1 ===> ', length1);

  if (length1 !== Object.keys(object2).length) {
    //console.log('first test tripped ==> ', (length1 !== Object.keys(object2).length));
    return false;
  };

  for (let keys in object1) {
    if (Array.isArray(object1[keys])) {
      if (!Array.isArray(object2[keys])) {
        return false;
      }
      if (!eqArrays(object1[keys], object2[keys])) {
        console.log('line 51');
        return false;
      }
      // console.log(eqArrays(object1[keys], object2[keys])); 
      // console.log('has this tripped?');
      
    } else if (object1[keys] !== object2[keys]) {
      console.log('line 58');
      return false;
    } 

}
return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { a: "1", c: "2" };
// assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false);

const xy = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const zx = { c: "1", d: ["2", 3, 5] };
const ef = { c: "1", d: ["2", 3] };
const gh = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(ef, gh), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, zx), false);