let arr = [1,2,3,4,5,6];

// arr.forEach((ele,idx,arr)=>{
//     console.log(ele,idx,arr);
// })
let newArray = [];
arr.forEach((ele)=>{
    // console.log(ele * ele);
   return newArray.push(ele * ele);
});

console.log(newArray);

// foreach and map -> diffrenec map return new array
// arr.map((ele,idx,arr)=>{
//     console.log(ele,idx,arr);
// });

// let newArry = arr.map((ele)=>{
//     // console.log(ele * ele);
//     return ele ** ele;
// });

// console.log(newArry);
// console.log(arr);