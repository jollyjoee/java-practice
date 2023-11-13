const numbers = [5, 10, -2, 15, 20, -3, -4, 25, 30];

let positiveSum = 0; // Changed 'const' to 'let'
const positiveIndices = [];
const negativeIndices = [];
const newPositiveArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveSum += numbers[i]; // Added positive value to positiveSum
    positiveIndices.push(i);
    newPositiveArray.push(numbers[i] / 5);
  } else if (numbers[i] < 0) {
    negativeIndices.push(i);
  }
}

console.log("Sum of positive integers:", positiveSum);
console.log("Indices of positive integers:", positiveIndices);
console.log("New array of positive integers:", newPositiveArray);
console.log("Indices of negative integers:", negativeIndices);