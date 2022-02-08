 'use strict';

// each employee shiuld has :
// - Employee ID
// - Full Name
// - Department:
// - Level:
// - Image URL
// - Salary
function employee(ID, FullName, Department, Level, imgurl, ran) {
  this.ID = ID;
  this.FullName = FullName;
  this.Department = Department;
  this.imagePath = imgurl;
  this.Level = Level;
  this.Salary = this.Salary() * 0.925;
  this.ran = ran;
  // this.ran=ran;
  employee.allEmployees.push(this);

}

employee.allEmployees = [];

employee.prototype.generateID = function () {
  this.ran = getRandomID();
};

//random 4 digits ID
function getRandomID() {
  let val = Math.floor(1000 + Math.random() * 9000);
  //console.log(val);
  return val;

}
function render() {
  let mySection_1 = document.getElementById('myEmployee');


  for (let i = 0; i < employee.allEmployees.length; i++) {
    let myEmployee = employee.allEmployees[i];
    console.log(myEmployee);
    // create the element 
    // append it to its parent 
    // add text content to the element || attributes

    let dev = document.createElement('div');
    dev.style.background = "#EEF2FF";

    dev.style.border = "thick solid #325288";
    dev.style.borderRadius = "12px";
    dev.style.padding = "20px";
    dev.style.width = "500px";
    dev.style.height = "300px";
    dev.style.textAlign = "center";
    dev.style.margin = "0 auto" // center 
    dev.style.marginBlock = "20px"


    mySection_1.appendChild(dev);



    let imge = document.createElement('img');
    dev.appendChild(imge);
    imge.setAttribute('src', myEmployee.imagePath);

    imge.setAttribute('alt', myEmployee.FullName);
    imge.style.height = "150px";



    let h4el = document.createElement('h1');
    dev.appendChild(h4el);
    h4el.style.fontSize = "20px";
    h4el.style.fontFamily = "Times New Roman";
    h4el.textContent = `Name: ${myEmployee.FullName} -ID: ${myEmployee.ID} `;


    let pe1 = document.createElement('h2');
    dev.appendChild(pe1);
    pe1.style.fontSize = "20px";

    pe1.textContent = `Department: ${myEmployee.Department} -Level: ${myEmployee.Level} `;



    /*
             const len = 4;
             ran12= parseInt((Math.random() * 9 + 1) * Math.pow(10,len-1), 10);
             let ran12=document.createElement('h2');
             dev.appendChild(ran12);
             ran12.textContent=myEmployee.ran12;*/

  }

}
/*// function number :
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   randomSalary= Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  Tax = (randomSalary*7.5);
 Salary = randomSalary - Tax ;
  return Salary;
}

 //Tax = (randomSalary*tax persentage)
 // netSalary = randomSalary - Tax 
 */

employee.prototype.Salary = function () {
  if (this.Level == "Senior") {
    return Math.floor(Math.random() * (2000 - 1500) + 1500);
  }
  else if (this.Level == "Mid-Senior") {
    return Math.floor(Math.random() * (1500 - 1000) + 1000);

  }
  else if (this.Level == "Junior") {
    return Math.floor(Math.random() * (1000 - 500) + 500);

  }
}






// console.log(employee.allEmployees);
// render();

/// HTML Events /////

let employeeForm = document.getElementById('employeeForm');

function addNewEmployee(event) {
  event.preventDefault();
  let FullName = event.target.FullName.value;
  let Department = event.target.Department.value;
  let Level = event.target.Level.value;
  let imgurl = event.target.imgurl.value;
  let empId = getRandomID();

  console.log(empId, FullName, Department, Level, imgurl);

  let newemployee = new employee(empId, FullName, Department, Level, imgurl);

  render();

  console.log(newemployee);
  newemployee.settingItems();
}
employeeForm.addEventListener('submit', addNewEmployee);


const Ghazi = new employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './images/Ghazi.jpg');
const Lana = new employee(1001, 'Lana Ali', 'Finance', 'Senior', './images/Lana.jpg');
const Tamara = new employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './images/Tamara.jpg');
const Safi = new employee(1003, 'Safi Walid', 'Development', 'Senior', './images/Safi.jpg');
const Omar = new employee(1004, 'Omar Zaid', 'Administration', 'Mid-Senior', './images/Omar.jpg');
const Rana = new employee(1005, 'Rana Saleh', 'Development', 'Junior', './images/Rana.jpg');
const Hadi = new employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './images/Hadi.jpg');


////local storage //////

//1. set date : save the data in local storage 

function settingItem() {
  let data = JSON.stringify(employee.allEmployees);// convert the data to JSON format 
  localStorage.setItem('employees', data);


}
 

//2. get date : take the data from local storage 

function gettingItem() {
  let stringObj = localStorage.getItem('employees');
  // console.log(stringObj);
  let parsObj = JSON.parse(stringObj);
  // console.log(parsObj);
  if (parsObj !== null) {
    employee.allEmployees = parsObj;
  }

  render();

}
gettingItem();