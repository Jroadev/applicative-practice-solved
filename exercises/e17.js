/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

const youngestPerson = minBy(
  [
    { name: "jon", age: 29 },
    { name: "peter", age: 30 },
    { name: "andrey", age: 22 },
  ],
  (person) => person.age
); // gives us { name: "andrey", age: 22 }

export function minBy(array, cb) {
  // Your code goes here...
  let min = array[0];
  for (let val of array) {
    if (cb(val) < cb(min)) {
      min = val;
    }
  }
  return min
}


export function maxBy(array, cb) {
  // Your code goes here...
  let max = array[0];
  for (let val of array) {
    if (cb(val) > cb(max)) {
      max = val;
    }
  }
  return max
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function