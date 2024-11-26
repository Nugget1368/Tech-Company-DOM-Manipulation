let employees = [];
const addEmployee = () => {
  let firstName = document.querySelector("input#first-name").value;
  let lastName = document.querySelector("input#last-name").value;
  let age = Number(document.querySelector("input#age").value);
  let job = document.querySelector("select#profession").value;

  if (isNumber(age)) {
    let employee = {
      name: `${firstName} ${lastName}`,
      age: age,
      job: job,
      email: `${firstName}.${lastName}@techcompany.se`,
    };
    employees.push(employee);
    updateList(employees);
    cancelEmployee();
  } else {
    alert("Please enter a valid age");
  }
};

const cancelEmployee = () => {
  document.querySelector("input#first-name").value = "";
  document.querySelector("input#last-name").value = "";
  document.querySelector("input#age").value = "";
  document.querySelector("select#profession").value = "none-chosen";
};

const updateList = (arrEmployees) => {
  let employeeList = document.querySelector("ul#employees-list");
  let filters = filterList();
  console.log(filters);
  employeeList.innerHTML = "";
  arrEmployees.forEach((employee) => {
    let li = document.createElement("li");
    li.textContent = `${employee.name} ${employee.age} ${employee.job} ${employee.email}`;
    employeeList.append(li);
  });
};

const filterList = () => {
  let filteredOptions = [];
  document.querySelectorAll(
    "section.filter-section div input[type=checkbox]:checked"
  ).forEach((checkbox) => {
    filteredOptions.push(checkbox.value);
  });
  return filteredOptions;
};

function isNumber(num) {
  return !isNaN(parseInt(num)) && isFinite(num);
}

document
  .querySelector("button#register-btn")
  .addEventListener("click", addEmployee);
document
  .querySelector("button#cancel-btn")
  .addEventListener("click", cancelEmployee);
document
  .querySelectorAll("input[type=checkbox]").forEach((check) => {
    check.addEventListener("change", updateList(employees));
  });
