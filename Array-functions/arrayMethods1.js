// Given an array of numbers, use forEach to increment each element by 1.

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => console.log(number + 1))

const newNumbers = numbers.map(number => number +1)

// console.log(newNumbers);

// Given an array of numbers, use map to double each element.

const doubleNum = numbers.map(number =>  number*2);

// console.log(doubleNum);

// Given an array of temperatures in Fahrenheit, use map to convert each temperature to Celsius.

const Celsius = [45, 50, 68, 80, 90].map(num => (5/9)*(num -32))

// console.log(Celsius);

// Given an array of strings representing words, use map to capitalize the first letter of each word.

const capWords = ['apple', 'bat', 'cat'].map(word => word.charAt(0).toUpperCase() + word.slice(1))

// console.log(capWords);

// Given an array of numbers, use filter and map to filter out odd numbers and then use map to double each even number.

const doubleEven = numbers.filter(num => num % 2 === 0 ).map(num => num * 2)

// console.log(doubleEven);

// Given an array of strings, use map to create a new array containing the lengths of each string.

const strLength = ['apple', 'bat', 'cat'].map(word => word.length)

// console.log(strLength);

// Given two arrays, one containing first names and the other containing last names, use map to combine them into a single array of full names.

const fNames = ['apple', 'bat', 'cat']
const lNames = ['dog', 'eat', 'fat']

const fullNames = fNames.map((fName, index) => fName +'' + lNames[index])

console.log(fullNames);

