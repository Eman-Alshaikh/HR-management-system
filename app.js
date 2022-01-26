'use strict';
alert("welcome");
// each employee shiuld has :
// - Employee ID
// - Full Name
// - Department:
// - Level:
// - Image URL
// - Salary
function employee(ID,FullName, Department,Level){
    this.ID=ID;
    this.FullName =FullName;
    this.Department =Department;
    this.imagePath = `./images/${this.ID}.png`;
    this.Level=Level;
    this.Salary =this.Salary()*0.925;
    
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

 employee.prototype.Salary = function(){
     if (this.Level=="Senior")
     {
         return Math.floor(Math.random() * (2000 - 1500) + 1500); 
     }
     else if (this.Department=="Mid-Senior")
     {
      return Math.floor(Math.random() * (1500 - 1000) + 1000); 

     }
     else if(this.Department=="Junior")
     {
      return Math.floor(Math.random() * (1000 - 500) + 500); 

     } 
}

employee.prototype.render=function()
{
   document.write(`<p>Name : ${this.FullName} has ${this.Salary} JD</p>`)
 
}
const Ghaz1000   = new employee(1000,'Ghazi Samer','Administration','Senior');
const Lana1001   = new employee(1001,'Lana Ali','Finance','Senior');
const Tamara1002   = new employee(1002,'Tamara Ayoub','Marketing','Senior');
const Safi1003   = new employee(1003,'Safi Walid','Development','Senior');
const Omar1004 = new employee(1004,'Omar Zaid',	'Administration','Mid-Senior');
const Rana1005= new employee(1005,'Rana Saleh',	'Development','Junior');
const Hadi1006 = new employee(1006,'Hadi Ahmad','Finance','Mid-Senior');
 
const employees_array=[Ghaz1000,Lana1001 ,Tamara1002 ,Safi1003 ,Omar1004,Rana1005,Hadi1006]

for (let i=0; i<7;i++)
{
   employees_array[i].render();
}
 


