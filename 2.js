function ReverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// console.log(ReverseString('hello'))

function isPalindrome(str){
  let reversed = ReverseString(str)
  return reversed == str ? true : false
}

// console.log(isPalindrome('ele'));

function fizzBuzz(n) {
  // Write your code here
  for (let i= 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      return 'Fizz'
    } else {
      return i
    }
  }

}

fizzBuzz(15)