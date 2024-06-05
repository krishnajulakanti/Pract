const words = ['foo', 'bar', 'apple', 'dog', '', 'avacadoo'];
const numbers = [1, 2, -3, 4, -5, 6, 7, 8, -9, 10];
const duplicateNumbers = [1, 2, -3, 1, 4, 2, -5, 6, -5, 7, 8, -9, 8, 10];

// Use filter to remove all empty strings from an array.
console.log(words.filter(word => word.length !== 0));

// Use reduce to concatenate all elements of an array into a single string.
console.log(words.reduce((full, curr) => full.concat(curr)));

// Use sort to sort an array of objects by a specific property.
const objArray = [
  {
    name: 'Pohn',
    age: 30
  },
  {
    name: 'Xane',
    age: 25
  },
  {
    name: 'Mary',
    age: 20
  },
  {
    name: 'John',
    age: 30
  }
];
console.log(objArray.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}));

// Use find to find the first element that contains the substring 'abc' in an array of strings.
console.log(words.find(word => word.includes('oo')));

// Use map to convert an array of numbers to strings.
console.log(numbers.map(num => num.toString())); // String(num)

// Use filter to remove all elements from an array that are not divisible by 3.
console.log(numbers.filter(num => num % 3 === 0));

// Use reduce to find the maximum number in an array.
console.log(numbers.reduce((max, curr) => {
  if (max > curr) {
    return max;
  } else return curr;
}));

// Use indexOf to find the index of the first occurrence of a specific element after a given index in an array.
console.log(duplicateNumbers.indexOf(1, 4));
