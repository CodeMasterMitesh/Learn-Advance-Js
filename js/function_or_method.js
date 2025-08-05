// arrow function
// count vowels from string
// a e i o u
// let count = 0;
// let countVowels = (str) =>
// {
//     for (const element of str) {
//         if(element === "a" || element === "e" || element === "i" || element === "o" || element === "u" ){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("xyz");


// forEach use for array and forEach is high order/leval method/function
// callback function parameters (val,indexNumber,Array)
// arr.forEach(callbackfunction)
// let arr = [1,2,3,4,5];
let strArry = ["Ahmedabad","Baroda","Rajkot","Surat"];

// strArry.forEach(function getValue(ele){
//     console.log(ele);
// });

strArry.forEach((ele,i,cityArray)=>{
    console.log(ele,i,cityArray);
});
// map 
// filter
// reduce 