// Use forEach to print each element of an array.
const words = ['foo', 'bar', 'baz'];
words.forEach(word => console.log(word));

// Use map to double each element of an array.
const numbers = [1, 2, -3, 4, -5, 6, 7, 8, -9, 10];
console.log(numbers.map(num => num * 2));

// Use filter to remove all odd numbers from an array.
console.log(numbers.filter(num => num%2 === 0));

// Use reduce to calculate the sum of all numbers in an array.
console.log(numbers.reduce((sum, curr) => sum + curr, 0));

// Use every to check if all elements of an array are even numbers.
console.log(numbers.every(num => num%2 === 0));

// Use some to check if any element of an array is negative.
console.log(numbers.some(num => num <= 0));

// Use sort to sort an array of numbers in ascending order.
console.log(numbers.sort((a, b) => a - b));

// Use sort to sort an array of numbers in descending order.
// console.log(numbers.sort((a, b) => b - a));

// Use indexOf to find the index of a specific element in an array.
console.log(numbers.indexOf(5));

// Use find to find the first even number in an array.
console.log(numbers.find(num => num%2 === 0));

// Use forEach to print the index and value of each element in an array.
numbers.forEach((num, index) => console.log(`index of ${num} is ${index}`));