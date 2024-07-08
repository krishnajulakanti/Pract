import employees from "./list.js"

// Sort by Name

// let sortByName = employees.reduce((acc, emp)=>{
//   acc.push(emp.name)
//   return acc
// },[])

let sortByAge = employees.sort((a, b) => {
  return a.age - b.age
})

let sortByName = employees.sort((a, b) => {
  return a.name.charCodeAt(0) - b.name.charCodeAt(0)
})

// console.log(sortByName, "sortByName")

let catchFirstNames = employees.map(emp => {
  return emp.name.split(' ')[0]
})

console.log((catchFirstNames.toString()), "catch")

// employees.forEach(emp => console.log(emp.name))