const assertEqual = require('./assertEqual');

// Head function exercise for lotide (Lighthouse)

// Copy and pasted assertEqual function from previous exercise
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const head = function(array) {
  let first = array[0];
  return first;
};

// test to make sure I am getting my expected output
// console.log(head([3, 10, 15, 20]));
// console.log(head(['hey', 'how\'s', 'it', 'going?']));
// console.log(head(['this is the only thing here']));
// console.log(head([]));

// test using assertEqual function

module.exports = head;

