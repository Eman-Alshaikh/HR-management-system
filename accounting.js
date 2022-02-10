' use strict'
//10/2/2022
let allEmployee = [];

function employee(employeeID, fullName, department, level, empImage) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department ; 
  this.level = level  ;
  this.empImage = empImage;

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

function getemployeesData() {
  var info = localStorage.getItem("emplooyes");
  if (!info) return;
  let parsedData = JSON.parse(info)
   allEmployee = [];

  for (let i = 0; i < parsedData.length; i++) {
    const emp = parsedData[i];
    var newEmployee = new employee(emp.employeeID, emp.fullName, emp.department, emp.level, emp.empImage);
    allEmployee.push(newEmployee);
  }
}

getemployeesData();




let adminEmployees ={
  employeesNumber : 0,
  thetotalSalaray : 0,
  theAvgSalary: function() {
    return this.thetotalSalaray / this.employeesNumber;
  }
}
let marketEmployees ={
  employeesNumber : 0,
  thetotalSalaray : 0,
  theAvgSalary: function() {
    return this.thetotalSalaray / this.employeesNumber;
  }
}
let developEmployees ={
  employeesNumber : 0,
  thetotalSalaray : 0,
  theAvgSalary: function() {
    return this.thetotalSalaray / this.employeesNumber;
  }
}
let financeEmployees ={
  employeesNumber : 0,
  thetotalSalaray : 0,
  theAvgSalary: function() {
    return this.thetotalSalaray / this.employeesNumber;
  }
}

let allEmployees ={
  employeesNumber : 0,
  thetotalSalaray : 0,
  theAvgSalary: function() {
    return this.thetotalSalaray / this.employeesNumber;
  }
}

allEmployee.forEach(e => {
  if(e.department === "Administration")
  {
    adminEmployees.employeesNumber++;
    adminEmployees.thetotalSalaray += e.salary;
  }
  else if(e.department === "Marketing")
  {
    marketEmployees.employeesNumber++;
    marketEmployees.thetotalSalaray += e.salary;
  }
  else if(e.department === "Development")
  {
    developEmployees.employeesNumber++;
    developEmployees.thetotalSalaray += e.salary;
  }
  else if(e.department === "Finance")
  {
    financeEmployees.employeesNumber++;
    financeEmployees.thetotalSalaray += e.salary;
  }

  allEmployees.employeesNumber++;
  allEmployees.thetotalSalaray += e.salary;
});

let mainDiv = document.getElementById("mainDiv");

let  empoyeesDiv= document.getElementById("employees")

let render = function () {
  let empTable = document.createElement("empTable");
  innerHtml = "";
  //CREATE THE TABLE 
  empTable.innerHTML = `
  <table id="hrtable">
   <tr>
      <th>Department</th>
      <th># of Emplooyes</th>
      <th>The total Salary</th>
      <th>The Average</th>
   </tr>
   <tr>
      <th>Administration</th>
      
      <th>${adminEmployees.employeesNumber}</th>
      <th>${adminEmployees.thetotalSalaray.toFixed()}</th>
      <th>${adminEmployees.theAvgSalary().toFixed()}</th>
   </tr>
   <tr>
      <th>Marketing</th>
      <th>${marketEmployees.employeesNumber}</th>
      <th>${marketEmployees.thetotalSalaray.toFixed()}</th>
      <th>${marketEmployees.theAvgSalary().toFixed()}</th>
   </tr>
   <tr>
      <th>Development</th>
      <th>${developEmployees.employeesNumber}</th>
      <th>${developEmployees.thetotalSalaray.toFixed()}</th>
      <th>${developEmployees.theAvgSalary().toFixed()}</th>
   </tr>
   <tr>
      <th>Finance</th>
      <th>${financeEmployees.employeesNumber}</th>
      <th>${financeEmployees.thetotalSalaray.toFixed()}</th>
      <th>${financeEmployees.theAvgSalary().toFixed()}</th>
   </tr>
   <tr>
      <th>The total </th>
      <th>${allEmployees.employeesNumber}</th>
      <th>${allEmployees.thetotalSalaray.toFixed()}</th>
      <th>${allEmployees.theAvgSalary().toFixed()}</th>
   </tr>
</table>`;
empoyeesDiv.appendChild(empTable);
}

render();


