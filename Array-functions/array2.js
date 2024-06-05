const words = ['foo', 'bar', 'apple', 'dog', 'avacado'];
const numbers = [1, 2, -3, 4, -5, 6, 7, 8, -9, 10];
const duplicateNumbers = [1, 2, -3, 1, 4, 2, -5, 6, -5, 7, 8, -9, 8, 10];

// Use map to square each element of an array.
console.log(numbers.map(num => num**2)); // console.log(numbers.map(num => Math.pow(num, 2)));

// Use filter to remove all duplicate elements from an array.
console.log(duplicateNumbers.filter(num => duplicateNumbers.indexOf(num) === duplicateNumbers.lastIndexOf(num)));

// Use reduce to calculate the product of all numbers in an array.
console.log(numbers.reduce((pro, curr) => curr* pro, 1));

// Use every to check if all elements of an array are positive.
console.log(numbers.every(num => num > 0));

// Use some to check if any element of an array is greater than 10.
console.log(numbers.some(num => num > 9));

// Use sort to sort an array of strings alphabetically.
console.log(words.sort());

// Use indexOf to find the index of the first occurrence of a specific element in an array.
console.log(duplicateNumbers.indexOf(2));

// Use find to find the first element that starts with the letter 'A' in an array of strings.
console.log(words.find(word => word.charAt(0).toUpperCase() === 'A'));

// Use map to convert an array of strings to uppercase.
console.log(words.map(word => word.toUpperCase()));