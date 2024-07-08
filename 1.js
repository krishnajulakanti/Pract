const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const sum = numbers.reduce((acc, num)=>acc+num,0)
// console.log(sum)

const maxNum = numbers.reduce((acc, num)=> num > acc ? num : acc, 0)
// console.log(maxNum)

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit)=>{
  if(!acc[fruit]){
    acc[fruit] = 1
  } else {
    acc[fruit]++
  }
  return acc
},{})

// console.log(count)