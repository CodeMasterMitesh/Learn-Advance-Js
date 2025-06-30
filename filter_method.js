let num = [1,2,3,4,5,6];

// filter
// Filter Method 
// Feature	            Description
// What it does	        Filters the array and returns items that match a condition
// Returns	            A new array (shorter, equal, or empty)
// Does not	Change the original array
// Best for	Getting only matching values (e.g., even numbers, passed students)

// let evenNumber = num.filter((ele)=>{
//     return ele % 2 !== 0;
// });

// console.log(evenNumber);

// let oddNumber = num.filter((ele)=>{
//     return ele % 2 !== 0;
// });

// console.log(evenNumber);
// this is associative array
const Students = [
    {name: "Chirag", marks : 85,roll_no : 501},
    {name: "Devanshi" , marks : 78,roll_no : 502},
    {name: "Jay" , marks : 65,roll_no : 503},
    {name: "Mitesh" , marks : 55,roll_no : 504},
    {name: "Bharat" , marks : 90,roll_no : 504},
    {name: "Jignesh" , marks : 70,roll_no : 505},
]

let newArray = Students.map((ele)=>{
    return ele.roll_no;
});

console.log(newArray);


// let highestMarks = Students.filter((ele)=>{
//     return ele.marks > 70;
// });

// console.log(highestMarks);