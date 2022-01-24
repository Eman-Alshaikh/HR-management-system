'use strict';

// each drink shiuld has :
// - Employee ID
// - Full Name
// - Department:
// - Level:
// - Image URL
// - Salary
function employee(ID,FullName, Department,Level,Salary){
    this.ID=ID;
    this.FullName =FullName;
    this.Department =Department;
    this.imagePath = `./images/${this.ID}.png`;
    this.Level=Level;
    this.Salary =Salary;
    
}

const Ghaz1000   = new employee(1000,'Ghazi Samer','Administration','Senior');
const Lana1001   = new employee(1001,'Lana Ali','Finance','Senior');
const Tamara1002   = new employee(1002,'Tamara Ayoub','Marketing','Senior');
const Safi1003   = new employee(1003,'Safi Walid','Development','Senior');
const Omar1004 = new employee(1004,'Omar Zaid',	'Administration','Mid-Senior');
const Rana1005= new employee(1005,'Rana Saleh',	'Development','Junior');
const Hadi1006 = new employee(1006,'Hadi Ahmad','Finance','Mid-Senior');
 
// function number :
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
  

 employee.prototype.render = function(Department){
     if (this.Department=='Senior')
     {
        getRandomInt(1500,2000)
     }
     else if (this.Department=='Mid-Senior')
     {
        getRandomInt(1000,1500)
     }
     else if(this.Department=='Junior')
     {
        getRandomInt(500,1000)
     } 
    document.write(`<p>${this.name} has ${this.Salary} JD</p>`)//js interpolation
}


Lana1001.render(Department);
Tamara1002.render(Department);
Safi1003.render(Department);
Omar1004.render(Department);
Rana1005.render(Department);
اadi1006.render(Department);

