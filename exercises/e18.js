/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */


export function getGreatestDiscoveryYear(data) {
   // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let arrOfDiscoveryYears = data.asteroids.map((asteroid) => asteroid.discoveryYear);
  let mostFrequent = (arr) => {
    let counts = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    let maxCount = Math.max(...Object.values(counts));
    return Number(Object.keys(counts).find((key) => counts[key] === maxCount));
  }
  return mostFrequent(arrOfDiscoveryYears);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
