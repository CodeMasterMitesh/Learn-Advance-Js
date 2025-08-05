// Reduce Method 
// Parameter	Description
// accumulator	Holds the running total/result
// currentValue	Current item being processed in the array
// initialValue	(Optional) The initial value of the accumulator
// accumulator = 0 -> currentValue = 1 = accumulator = accumulator + currentValue; // 1
// accumulator = 1 -> currentValue = 2 = accumulator = accumulator + currentValue; // 3
// accumulator = 3 -> currentValue = 3 = accumulator = accumulator + currentValue; // 6
// let arr = [1,2,3,4,5];

// let sum = arr.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// });
// console.log(sum);


// let factorial = arr.reduce((accumulator,currentValue)=>{
//     return accumulator * currentValue;
// });

// console.log(factorial);


let product_rate = [750,150,650,850,950,450,780,950];


let total = product_rate.reduce((acc,curr)=>{
    // console.log(acc);
    // console.log(curr);
    return acc + curr; // 750 + 150
});

// function sum (t,c){
//     return t + c;
// }

// let total = product_rate.reduce(sum,0);
console.log(total);

// let lengthOfArr = product_rate.length;
// console.log(lengthOfArr);

// let avg = total / lengthOfArr;

// console.log(avg);

// foreach 
// map 
// filter
// reduce 

// 1 * 2 * 3 * 4 * 5 = 5