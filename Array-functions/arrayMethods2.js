// Given an array of numbers, use forEach to calculate the total sum of all numbers in the array.

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(num => {
  sum += num
})
// console.log(sum);

// Given an array of strings, use filter to filter out strings longer than a specified length.

const strings = ['apple', 'bat', 'cat', 'eagle', 'fissure'];
// console.log(strings.filter(str => str.length <= 4));

// Given an array of numbers, use reduce and forEach to calculate the average value of all numbers in the array.
// console.log((numbers.reduce((sum, current) => sum + current, 0))/(numbers.length));

// Given an array of strings, use reduce and forEach to find the longest word in the array.

const longWord = strings.reduce(((long, curr) => {
  if (curr.length > long.length) { 
    return curr
  } else return long
}), '')

console.log(longWord);

