
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
};

module.exports = eqObjects;
