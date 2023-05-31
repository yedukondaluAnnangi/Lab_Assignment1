console.log('print hello')

// Function to generate a random number between a given range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage example
var minRange = 1;
var maxRange = 100;
var randomNum = generateRandomNumber(minRange, maxRange);
console.log("Random number between " + minRange + " and " + maxRange + ": " + randomNum);
