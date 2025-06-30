// collection of data and store in single variable means array 
// in js array store multiple data type in single varaible
// every elements in array have index number strating with 0
let cities = ["Ahmedabad","Rajkot","Baroda","Surat","Jamnagar","Patan"];
            //  0           1        2        3        4         5
cities[2] = "Junagad";
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);

// console.log(cities);

// for(let i = 0;i < cities.length; i++){
//     console.log(cities[i]);
// }

// for (let ele of cities) {
//     console.log(ele);
// }

let marks = [65,66,36,80,75,64,52];

let sum = 0;    

for (const m of marks) {
    sum+=m;
}
console.log(sum);

let per = sum * 100 / 700;

console.log(per);

console.log("Average : ",sum/marks.length);

