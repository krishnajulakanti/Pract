const words = ['foo', 'bars', 'apple', 'dogs', 'avacadoo'];
const numbers = [1, 2, -3, 4, -5, 6, 7, 8, -9, 10];
const duplicateNumbers = [1, 2, -3, 1, 4, 2, -5, 1, 6, -5, 7, 1, 8, -9, 8, 10];
const fractions = [1.2, 2.5, -3.2, 1.6, 4.5, 8.8, 10.1];
const squares = [4, 9, 10, 16, 36, 40, 49];

// Use every to check if all elements of an array are strings.
console.log(words.every(word => typeof (word) === 'string'));

// Use some to check if any element of an array is null.
console.log(words.some(word => word === null));

// Use sort to sort an array of strings by length.
console.log(words.sort((a, b) => a.length - b.length));

// Use find to find the first element that ends with the letter 's' in an array of strings.
console.log(words.find((word) => word.charAt(word.length - 1) === 's'));

// Use forEach to print the index and value of each element in an array in reverse order.
words.reverse().forEach((word, i) => console.log(`Index of ${word} is ${i}`));

// Use map to convert an array of numbers to their absolute values.
console.log(fractions.map(num => parseInt(num)));

// Use filter to remove all elements from an array that are not perfect squares.
console.log(squares.filter(num => Math.sqrt(num) % 1 === 0));

// Use reduce to count the number of occurrences of each element in an array.

const occurrenceCount = duplicateNumbers.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(occurrenceCount);
