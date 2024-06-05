const words = ['foo', 'bars', 'apple', 'dogs', 'avacadoo'];
const numbers = [1, 2, -3, 4, -5, 6, 7, 8, -9, 10];
const duplicateNumbers = [1, 2, -3, 1, 4, 2, -5, 1, 6, -5, 7, 1, 8, -9, 8, 10];
const fractions = [1.2, 2.5, -3.2, 1.6, 4.5, 8.8, 10.1];
const squares = [4, 9, 10, 16, 36, 40, 49];

const newString = 'Hwldmlmaqwqkl;k;aASsa1SADSAD';

// Use charAt to get the first character of a string.
console.log(newString.charAt(0));

// Use charAt to get the last character of a string.
console.log(newString.charAt(newString.length - 1));

// Use charAt to get the character at a specific index of a string.
// Use charAt to check if a string contains a specific character at a specific index.
console.log(newString.charAt(3) === 'd');

// Use charAt to iterate over all characters of a string.
newString.split('').forEach(item => console.log(item));

// Use charAt to count the number of occurrences of a specific character in a string.
console.log(newString.split('').filter(item => item === 'D').length);

// Use charAt to find the index of the first occurrence of a specific character in a string.
console.log(newString.split('').indexOf('w'));

// Use charAt to find the index of the last occurrence of a specific character in a string.
// Use charAt to find all indices of a specific character in a string.
// Use charAt to replace a specific character at a specific index in a string.
// Use charAt to insert a specific character at a specific index in a string.
// Use charAt to remove a specific character at a specific index in a string.
// Use charAt to reverse a string.
// Use charAt to check if a string is a palindrome.
// Use charAt to sort the characters of a string alphabetically.
// Use charAt to shuffle the characters of a string.
