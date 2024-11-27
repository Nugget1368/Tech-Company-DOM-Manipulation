let employees = [];
let filteredOptions = [];
if (localStorage.getItem("employees")) {
  employees = JSON.parse(localStorage.getItem("employees"));
}
const addEmployee = () => {
  let firstName = document.querySelector("input#first-name").value;
  let lastName = document.querySelector("input#last-name").value;
  let age = Number(document.querySelector("input#age").value);
  let job = document.querySelector("select#profession").value;

  if (isNumber(age) && age > 0) {
    let employee = {
      name: `${firstName} ${lastName}`,
      age: age,
      job: job,
      email: `${firstName}.${lastName}@techcompany.se`,
    };
    employees.push(employee);
    updateList(employees);
    cancelEmployee();
    localStorage.setItem("employees", JSON.stringify(employees));
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

const updateList = () => {
  let employeeList = document.querySelector("ul#employees-list");
  employeeList.innerHTML = "";
  let filters = filterList();
  employees = sortArray(employees);
  employees.forEach((employee) => {
    if (
      filters.includes(employee.job) ||
      filters.includes("Alla") ||
      filters.length === 0
    ) {
      let li = document.createElement("li");
      li.textContent = `${employee.name} ${employee.age} ${employee.job} ${employee.email}`;
      employeeList.append(li);
    }
  });
};

const filterList = () => {
  let allBoxes = document.querySelectorAll(
    "section.filter-section div input[type=checkbox]"
  );
  filteredOptions = [];
  allBoxes.forEach((box) => {
    if (box.checked) {
      filteredOptions.push(box.value);
    }
  });
  return filteredOptions;
};

const sortArray = (employees) => {
  const select = document.querySelector("select#sort");

  switch (select.value) {
    case "Förnamn (stigande)":
      return employees.sort((a, b) => a.name.localeCompare(b.name));
    case "Förnamn (fallande)":
      return employees.sort((a, b) => b.name.localeCompare(a.name));
    case "Ålder (stigande)":
      return employees.sort((a, b) => a.age - b.age);
    case "Ålder (fallande)":
      return employees.sort((a, b) => b.age - a.age);
    default:
      return employees;
  }
};

function isNumber(num) {
  return !isNaN(parseInt(num)) && isFinite(num);
}
//Event listeners
document
  .querySelector("button#register-btn")
  .addEventListener("click", addEmployee);
document
  .querySelector("button#cancel-btn")
  .addEventListener("click", cancelEmployee);
document.querySelectorAll("input[type=checkbox]").forEach((check) => {
  check.addEventListener("change", updateList);
});
document
  .querySelector("select#sort")
  .addEventListener("change", updateList);

updateList(employees);
