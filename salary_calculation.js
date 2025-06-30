let salary;

salary = prompt("Enter Your Monthly Salary : ");

let basic_pay = salary / 2;
console.log("Basic Pay = ",basic_pay);

let hra = basic_pay * 40 / 100;
console.log("HRA = ",hra);

let other_allowances = basic_pay * 60 / 100;
console.log("Other Allowances = ",other_allowances);

let pf = basic_pay * 12 / 100;
console.log("PF = ",pf);

let ESI = salary * 0.75 / 100;
console.log("ESI = ",ESI);

let Profession_Tax  = 200;
console.log("Profession Tax = ",Profession_Tax);