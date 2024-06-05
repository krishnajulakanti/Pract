const tableBody = document.getElementById('tableBody');

const userList = [
  {
    "id": 1,
    "firstName": "Ram",
    "lastName": "krishna",
    "age": 10
  },
  {
    "id": 2,
    "firstName": "Phani",
    "lastName": "mahesh",
    "age": 20
  },
  {
    "id": 3,
    "firstName": "Sanjay",
    "lastName": "gandhi",
    "age": 30
  },
  {
    "id": 4,
    "firstName": "Abdul",
    "lastName": "kalam",
    "age": 40
  },
  {
    "id": 5,
    "firstName": "Giri",
    "lastName": "kumar",
    "age": 50
  }
];

tableBody.innerHTML = "";

userList.forEach((user) => {
  tableBody.innerHTML +=
    `<tr>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.age}</td>
    </tr>
  `
})