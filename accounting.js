'use strict';
 
//4/2/2022 @ 9 PM /////////

let employeesTable=document.getElementById('employeesTable');
function readDataFromLocalS(){
  let josnArray = localStorage.getItem("employees");
   console.log(josnArray);
  let arr = JSON.parse(josnArray); // convert JSON Format to normal
  if(arr !== null){
      return arr;
  
  }else{
      return [];
  }

}
 ///////////////
function render(){
  employeesTable.innerHTML='';
  let table = document.createElement('table');
  employeesTable.appendChild(table);
  table.style.border = "4px solid  black";
  table.style.alignContent = "center";


  let localSArray = readDataFromLocalS();
  console.log(localSArray);
  let admCount = 0 ;
  let markCount = 0 ;
  let devCount = 0 ;
  let finCount = 0 ;
  let totalSadm = 0;
  let totalSmark = 0;
  let totalSdev = 0;
  let totalSfin= 0;
  let avgAdm  = 0;
  let avgmark = 0 ;
  let avgdev = 0;
  let avgfin = 0 ;
  //////////////////////////////////////
  
 // first row
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);
  let th1= document.createElement('th');
  th1.style.border="2px solid black";
  th1.style.padding = "10px";
  tr1.appendChild(th1);    
  let th2= document.createElement('th');
  th2.style.border="2px solid black";
  th2.style.padding = "10px";
  tr1.appendChild(th2);
  let th3= document.createElement('th');
  th3.style.border="2px solid black";
  th3.style.padding = "10px";
  tr1.appendChild(th3);
  let th4= document.createElement('th');
  th4.style.border="2px solid black";
  th4.style.padding = "10px";
  tr1.appendChild(th4);

  th1.textContent = 'Department';
  th2.textContent = '#Of Employees';
  th3.textContent = 'Total Salary';
  th4.textContent = "Avgerage"
///////////////////////////////////////////////////////// 
for(let i = 0 ; i <localSArray.length ; i++){
  if(localSArray[i].Department== "Administration"){
      admCount++;
      totalSadm = totalSadm + localSArray[i].Salary;
      }
      else if(localSArray[i].Department == "Marketing"){
          markCount++;
          totalSmark = totalSmark + localSArray[i].Salary;

      }else if(localSArray[i].Department == "Development"){
          devCount++;
          totalSdev = totalSdev + localSArray[i].Salary;

      }else if(localSArray[i].Department == "Finance"){
          finCount++;
          totalSfin = totalSfin + localSArray[i].Salary;

      }
} 
 //Avrage : 
avgAdm = Math.floor(totalSadm/admCount) ;
if(isNaN(avgAdm)){
  avgAdm = "";
} 
avgmark = Math.floor(totalSmark/markCount);
if(isNaN(avgmark)){
  avgmark = "";
} 
avgdev = Math.floor(totalSdev/devCount);
if(isNaN(avgdev)){
  avgdev = "";
} 
avgfin = Math.floor(totalSfin/finCount);
if(isNaN(avgfin)){
  avgfin = "";
} 
/////////////////////////////////////////////
let totalEmp = (admCount + devCount + finCount + markCount);
let totalSalary =( totalSfin + totalSdev + totalSadm +totalSmark) ; 

let avgSalary = Math.floor(totalSalary/totalEmp);

 
//SECOND ROW 

  let tr2 = document.createElement('tr');
  table.appendChild(tr2);

      let td1= document.createElement('td');
      tr2.appendChild(td1);
      td1.style.border="2px solid black";
      td1.style.padding = "10px";
      td1.textContent ='Adminstration';

      let td2= document.createElement('td');
      tr2.appendChild(td2);
      td2.style.border="2px solid black";
      td2.style.padding = "10px";
      td2.textContent = admCount;

      let td3= document.createElement('td');
      tr2.appendChild(td3);
      td3.style.border="2px solid black";
      td3.style.padding = "10px";
      td3.textContent = totalSadm;

      let td4= document.createElement('td');
      tr2.appendChild(td4);
      td4.style.border="2px solid black";
      td4.style.padding = "10px";
      td4.textContent = avgAdm;
///THIRD ROW 

let tr3 = document.createElement('tr');
table.appendChild(tr3);

  let td11= document.createElement('td');
  tr3.appendChild(td11);
  td11.style.border="2px solid black";
  td11.style.padding = "10px";
  td11.textContent ='Marketing';

  let td22= document.createElement('td');
  tr3.appendChild(td22);
  td22.style.border="2px solid black";
  td22.style.padding = "10px";
  td22.textContent = markCount;

  let td33= document.createElement('td');
  tr3.appendChild(td33);
  td33.style.border="2px solid black";
  td33.style.padding = "10px";
  td33.textContent = totalSmark;

  let td44= document.createElement('td');
  tr3.appendChild(td44);
  td44.style.border="2px solid black";
  td44.style.padding = "10px";
  td44.textContent = avgmark;

//FOURTH ROW

let tr4 = document.createElement('tr');
table.appendChild(tr4);

  let td111= document.createElement('td');
  tr4.appendChild(td111);
  td111.style.border="2px solid black";
  td111.style.padding = "10px";
  td111.textContent ='Development';

  let td222= document.createElement('td');
  tr4.appendChild(td222);
  td222.style.border="2px solid black";
  td222.style.padding = "10px";
  td222.textContent = devCount;

  let td333= document.createElement('td');
  tr4.appendChild(td333);
  td333.style.border="2px solid black";
  td333.style.padding = "10px";
  td333.textContent = totalSdev;

  let td444= document.createElement('td');
  tr4.appendChild(td444);
  td444.style.border="2px solid black";
  td444.style.padding = "10px";
  td444.textContent = avgdev;


//FIFTH ROW

let tr5 = document.createElement('tr');
table.appendChild(tr5);

  let td1111= document.createElement('td');
  tr5.appendChild(td1111);
  td1111.style.border="2px solid black";
  td1111.style.padding = "10px";
  td1111.textContent ='Finance';

  let td2222= document.createElement('td');
  tr5.appendChild(td2222);
  td2222.style.border="2px solid black";
  td2222.style.padding = "10px";
  td2222.textContent = finCount;

  let td3333= document.createElement('td');
  tr5.appendChild(td3333);
  td3333.style.border="2px solid black";
  td3333.style.padding = "10px";
  td3333.textContent = totalSfin;

  let td4444= document.createElement('td');
  tr5.appendChild(td4444);
  td4444.style.border="2px solid black";
  td4444.style.padding = "10px";
  td4444.textContent = avgfin;
 /////////////////////////////////////////////////////

let tr6 = document.createElement('tr');
table.appendChild(tr6);

  let td11111= document.createElement('td');
  tr6.appendChild(td11111);
  td11111.style.border="2px solid black";
  td11111.style.padding = "10px";
  td11111.textContent ='Total';

  let td22222= document.createElement('td');
  tr6.appendChild(td22222);
  td22222.style.border="2px solid black";
  td22222.style.padding = "10px";
  td22222.textContent = totalEmp;

  let td33333= document.createElement('td');
  tr6.appendChild(td33333);
  td33333.style.border="2px solid black";
  td33333.style.padding = "10px";
  td33333.textContent = totalSalary;

  let td44444= document.createElement('td');
  tr6.appendChild(td44444);
  td44444.style.border="2px solid black";
  td44444.style.padding = "10px";
  td44444.textContent = avgSalary;

}
render();




 