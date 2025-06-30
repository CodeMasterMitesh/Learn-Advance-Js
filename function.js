// function is block of code 
// function not call itself you want to call function
// 
// let str = "Patel Web Solution";
// console.log(str.toUpperCase());

// function msg() 
// {
//     // console.log("Good Morning");
//     alert("Good Morining");
// }

// msg();
// function with parameters 

// function sum(x,y){  // this is function parameters and function parameters is variable 
//     // console.log(x+y);
//     // alert(x + y);

//     return x + y;
// }

// let x = 20;
// let y = 23;
// let z = sum(x,y);

// console.log(z);

// if(z % 2 == 0){
//     console.log("This is Even number");
// }else{
//     console.log("This is Odd number");
// }


// arrow function in js 
// moder js arrow function
let name;
let notification = (name)=>{
    console.log("Hello Students " + name);
    // return "Hello Students " + name;
}

console.log(notification("!How Are You?"));


let sum = (a,b) =>{
    return a + b;
}
console.log(sum(1,7));


let mul = (x,y) =>{
    return x * y;
}
console.log(mul(1,7));


let table = (num)=>{
    for (let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + (num * i));
        
    }
}

// console.log(table);
table(9);
