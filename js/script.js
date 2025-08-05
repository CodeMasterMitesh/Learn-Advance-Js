// three variable keyword in Js var ,let, const
// var age = 33;
// var age = 25;
// var age = 31;
// var name = "Mitesh";
// var price = 33.25;

{
    let age = 31;
    console.log(age);
}

{
    let age = 35;
    console.log(age);
}

// const price = 105;
// console.log(price);

// Data Type in Js 
// Premetive data type 
// Number ,String ,Boolean , Undefined ,Null ,Bigint ,Symbol

let amount = 250;
let name = "Mitesh";

let isFollow = true;
let modal;

let page = null;

let bigNo = BigInt(5444);
let sym = Symbol("###");

console.log(typeof amount);
console.log(typeof name);
console.log(typeof isFollow);
console.log(typeof modal);
console.log(typeof page);
console.log(typeof bigNo);
console.log(typeof sym);

// Non Premetive data type 
// Object 

const studentData = {
    name : "Kiran",
    grade : "A",
    percentage : 95.25,
    class : 10,
};

studentData.name = "Suraj";
console.log(typeof studentData);
console.log(studentData['class']);
console.log(studentData.percentage);
console.log(typeof studentData.name);
console.log(typeof studentData.percentage);
console.log(studentData.name);

// artmetic operators 
// assignment operators 
// comparision operators
// logical operators
// 
// +,-,*,/, % , exponent  **