// for loop 
// while 
// do while
// for in 
// for of 
let table = 5;
// for(let i = 1; i <= 10; i++) {
//     console.log(`${table} * ${i} = ${i * table}`);
// }

// 5 * 1 = 5
// while loop
// let n = 11;
// let sum = 0;
// let even = 0;
// let odd = 0;
// while(n <= 10){

//     if(n % 2 == 0){
//         even+=n;
//     }else{
//         odd+=n;
//     }
//     // console.log(n);
//     sum+=n;
//     // console.log("Welcome To Patel Web");
//     n++;
// }
// console.log(sum);
// console.log(even);
// console.log(odd);


// do while 

// do{
//     if(n % 2 == 0){
//         even+=n;
//     }else{
//         odd+=n;
//     }
//     // console.log(n);
//     sum+=n;
//     // console.log("Welcome To Patel Web");
//     n++;
// }while(n <= 10);

// console.log(sum);
// console.log(even);
// console.log(odd);

// for of loop -> array or string
// for in loop
// let fname = "JavaScript";
// let s = 0;
// for (let e of fname) {
//     console.log(e);
//     s++;
// }
// console.log(s);


const Student = {
    name : "Mitesh",
    per : 65,
    couse : "PHP",
    education : "B.Com"
}

for (let k in Student) {
    console.log(k,"=",Student[k]);
}