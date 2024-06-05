
let userList = [];

function Submit(event) {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  const user = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber
  }
  userList.push(user);
  updateTable();

  document.getElementById('firstName').value = null
  document.getElementById('lastName').value = null
  document.getElementById('phoneNumber').value = null
  console.log(userList, "List");
}

function updateTable() {
  const tableBody = document.getElementById('tableBody');

  tableBody.innerHTML = "";

  userList.forEach((user, index) => {
    tableBody.innerHTML = tableBody.innerHTML +
      `
        <tr>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.phoneNumber}</td>
          <td>
            <button onclick="editRecord(${index})">Edit</button>
            <button onclick="deleteRecord(${index})">Delete</button> </td>
        </tr>
        `
  })
}

function editRecord(index) {
  const user = userList[index];

  document.getElementById('firstName').value = user.firstName
  document.getElementById('lastName').value = user.lastName
  document.getElementById('phoneNumber').value = user.phoneNumber

  userList.splice(index, 1);
  updateTable();
}

function deleteRecord(index) {
  userList.splice(index, 1);
  updateTable();
}
