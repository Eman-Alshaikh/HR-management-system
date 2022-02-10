' use strict'
let allEmployee = [];

function employee(employeeID, fullName, department, level, empImage) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department  
    this.level = level  
    this.empImage = empImage;
    
    this.salary();

    allEmployee.push(this);
}

let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Junior", "Mid-Senior", "Senior"];

let emplooyesDiv = document.getElementById("emplooyes");

employee.prototype.render = function () {
    let emp = document.createElement("div");
    emp.style.background = "#EEF2FF";

    emp.style.border = "thick solid #325288";
    emp.style.borderRadius = "12px";
    emp.style.padding = "20px";
    emp.style.width = "500px";
    emp.style.height = "300px";
    emp.style.textAlign = "center";
    emp.style.margin = "0 auto"  
    emp.style.marginBlock = "20px"

    emp.innerHTML = `
        <img alt="img" src="${this.empImage}" width="150" height="150">
        <div class="info">
            <h5>Id: ${this.employeeID}</h5>
            <h5>Name: ${this.fullName}</h5>
            <h5>Depaertment: ${this.department}</h5>
            <h5>Level: ${this.level}</h5>
            <h5>Salary: ${this.salary}</h5>
        </div>
    `;

    emp.className = "emp";
    emplooyesDiv.appendChild(emp);
};

function saveToLocalStorage(data) {
    let stringiFedData = JSON.stringify(allEmployee)
    localStorage.setItem("emplooyes", stringiFedData);
}

function getData() {
    var data = localStorage.getItem("emplooyes");
    if (!data) return;
    let parsedData = JSON.parse(data)
    console.log(typeof data);
    allEmployee= [];

    for (let i = 0; i < parsedData.length; i++) {
        const emp = parsedData[i];
        var newEmp = new employee(emp.employeeID, emp.fullName, emp.department, emp.level, emp.empImage);
        newEmp.render();
    }
}

employee.prototype.salary = function () {
    if (this.level == "Senior") {
        var sal = Math.floor(Math.random() * (2000 - 1500)) + 1500;
        this.salary = sal - (sal * 0.075);
    }
    else if (this.level == "Mid-Senior") {
        var sal = Math.floor(Math.random() * (1500 - 1000)) + 1000;
        this.salary = sal - (sal * 0.075);
    }
    else {
        var sal = Math.floor(Math.random() * (1000 - 500)) + 500;
        this.salary = sal - (sal * 0.075);
    }
}
getData();

if (allEmployee.length == 0) {
    let ghaziEmployee = new employee(1000, "Ghazi Samer", department[0], level[2], '.\\images\\Ghazi.jpg');
    let lanaEmployee = new employee(1001, "Lana Ali", department[3], level[2], ".\\images\\Lana.jpg");
    let tamaraEmployee = new employee(1002, "Tamara Ayoub", department[1], level[2], ".\\images\\Tamara.jpg");
    let saifEmployee = new employee(1003, "Safi Walid", department[0], level[1], ".\\images\\Safi.jpg");
    let omarEmployee = new employee(1004, "Omar Zaid", department[2], level[2], ".\\images\\Omar.jpg");
    let ranaEmployee = new employee(1005, "Rana Saleh", department[2], level[0], ".\\images\\Rana.jpg");
    let hadiEmployee = new employee(1006, "Hadi Ahmad", department[3], level[1], ".\\images\\Hadi.jpg");

    ghaziEmployee.render();
    lanaEmployee.render();
    tamaraEmployee.render();
    saifEmployee.render();
    omarEmployee.render();
    ranaEmployee.render();
    hadiEmployee.render();

    saveToLocalStorage();
}
var getRandomId = function () {
    return Math.floor(Math.random() * (9000 - 1000)) + 1000;
}

let empMain = document.getElementById("employeeMain");
let title = document.createElement("h2");
title.textContent = "Add New Emplooye :"
empMain.insertBefore(title, empMain.childNodes[0]);

let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
 
    let newEmployee = new employee(getRandomId(), fullName, department, level, empImage);
    newEmployee.render();
    saveToLocalStorage();
    form.reset();
}



