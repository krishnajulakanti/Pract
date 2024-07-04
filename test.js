import employees from "./list.js"

let grpEmpByDept = employees.reduce((acc, emp) => {
  if (!acc[emp.department]) {
    acc[emp.department] = []
  }
  acc[emp.department].push(emp.name)
  return acc
}, {})
// console.log(grpEmpByDept)

let obj = {}
employees.forEach(emp => {
  if(!obj[emp.department]) {
    obj[emp.department] = []
  }
  obj[emp.department].push(emp.name)
})
// console.log(obj)


// Count Employees per department
let countByDept = employees.reduce((acc, emp)=>{
  if(!acc[emp.department]) {
    acc[emp.department] = 1
  } else {
    acc[emp.department]++
  }
  return acc
},{})

// console.log(countByDept)


//Aggregate Employee Salaries by Department
let salariesByDept = employees.reduce((acc, emp) => {
  if (!acc[emp.department]) {
    acc[emp.department] = emp.salary
  } else {
    acc[emp.department] += emp.salary
  }
  return acc
}, {})
console.log(salariesByDept, "salariesByDept")

let salariesTotal = employees.reduce((acc, emp) => {
  if (!acc[emp.department]) {
    acc[emp.department] = { totalSalary : 0}
  } 
  acc[emp.department].totalSalary += emp.salary
  return acc
}, {})
console.log(salariesTotal, "salariesTotal")


// Total Emp count & Aggregate Salary by Department
let empCountAndAggSalary = employees.reduce((acc, emp)=>{
  if(!acc[emp.department]){
    acc[emp.department] = { totalCount: 0, totalSalary: 0, avgSalary: 0, list: []}
  }
  acc[emp.department].list.push(emp.name)
  acc[emp.department].totalSalary += emp.salary;
  acc[emp.department].totalCount += 1;
  acc[emp.department].avgSalary = (acc[emp.department].totalSalary / acc[emp.department].totalCount)
  return acc
}, {})
// console.log(empCountAndAggSalary)

// Calculate Average Age by Department
