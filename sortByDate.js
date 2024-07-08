import employees from "./list.js"

// Group by Year & Sort by Start date

// let sortByYear = employees.reduce((acc, emp)=>{
//   let [year, month, date] = emp.startDate.split("-")
//   if (!acc[year]){
//     acc[year] = []
//   }
//   acc[year].push(`Name: ${emp.name}, Month: ${parseInt(month)+1}`)
//   return acc
// }, {})
// console.log(sortByYear)

let sortByYearAndMonth = employees.reduce((acc, emp) => {
  let [year, month, date] = emp.startDate.split("-")
  if (!acc[year]) {
    acc[year] = []
  }
  acc[year].push({
    name: emp.name,
    month: parseInt(month),
    date: parseInt(date),
    startDate: emp.startDate
  });
  return acc
}, {})

for (let year in sortByYearAndMonth) {
  sortByYearAndMonth[year].sort((a, b) => {
    if (a.month === b.month) {
      return a.date - b.date
    } else {
      return a.month - b.month
    }
  })
}

console.log(sortByYearAndMonth)