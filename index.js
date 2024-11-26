let employees = [];
const addEmployee = () => {
    let firstName =  document.querySelector("input#first-name").value;
    let lastName =  document.querySelector("input#last-name").value;
    let age =  Number(document.querySelector("input#age").value);
    let job = document.querySelector("select#profession").value;
    let employee = {
        name : `${firstName} ${lastName}`,
        age : age,
        job : job,
        email : `${firstName}.${lastName}@techcompany.se`
    }
    employees.push(employee);
    updateList(employees);
    cancelEmployee();
}

const cancelEmployee = () => {
    document.querySelector("input#first-name").value = "";
    document.querySelector("input#last-name").value = "";
    document.querySelector("input#age").value = "";
    document.querySelector("select#profession").value = "none-chosen";
}

const updateList = (arrEmployees) => {
    let employeeList = document.querySelector("ul#employees-list");
    employeeList.innerHTML = "";
    arrEmployees.forEach(employee => {
        let li = document.createElement("li");
        li.textContent = `${employee.name} ${employee.age} ${employee.job} ${employee.email}`;
        employeeList.append(li);
    });
};

let btn = document.querySelector("button#register-btn").addEventListener("click", addEmployee);
document.querySelector("button#cancel-btn").addEventListener("click", cancelEmployee);
