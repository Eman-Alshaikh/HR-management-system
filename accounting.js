//define array of employees 
employee.array_employee = [];

function render() {
  let mySection = document.getElementById('table');



  let tableEL = document.createElement('table');
  mySection.appendChild(tableEL);

  let trEl = document.createElement('tr');
  tableEL.appendChild(trEl);

  let thEL = document.createElement('th');
  trEl.appendChild(thEL);
  thEL.textContent = "Department"


  let totals = document.createElement('th');
  trEl.appendChild(totals);
  totals.textContent = "# of employees"

  let Total = document.createElement('th');
  trEl.appendChild(Total);
  Total.textContent = "Total Salary"

  let average = document.createElement('th');
  trEl.appendChild(average);
  average.textContent = "Average"



  for (let i = 0; i < employee.array_employee.length; i++) {
    let table = employee.array_employee[i];
    let trEl = document.createElement('tr');
    tableEL.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    //tdEl.textContent = 

    let td1El = document.createElement('td');
    trEl.appendChild(td1El);
    // td1El.textContent =emplyee_table;

    let tdsalary = document.createElement('td');
    tdsalary.appendChild(tdsalary);
    //tdsalary.textContent=emplyee_table.Salary;

    let avg = document.createElement('td');
    avg.appendChild(avg);
    // avg.textContent=emplyee_table;


  }

}


