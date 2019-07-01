// create a function that accepts a callback function to go return the results of an array until a stopping condition is met
// declare the function
//make sure it accepts an array and a function that dictates the stopping condition
const takeUntil = function(array, callback) {
  // create a results array
  const results = [];
  // loop through the array (for of)
  for (let element of array) 
    // compare the current element to the stopping condition
    //console.log(callback);
    // first i need to see if the loop should be stopped
    if (callback(element)) {
      console.log('if statement element ===> ', (element));
      console.log('if statement truth value of callback function: ', callback(element));
      //console.log('line 15 value of element: ', element);
      //results.push(element);
      break;
    }

    else if (!callback(element)) {
      console.log('else if ===> with !operator ' + (!callback(element)) + ' actual value: ' + (callback(element)))
      console.log('else if element ===> ', element)
      results.push(element);
      
  }
 
  //return an array
  console.log('heeeeeey');
  return results;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);