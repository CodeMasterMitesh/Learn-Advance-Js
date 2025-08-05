let day = prompt("Enter Day In Number (1 to 6)");
// let today = new Date().getDay();
// console.log(today);
// console.log(typeof day);
switch(new Date().getDay()){
    case parseInt(day) : 
    console.log("Today Is Monday");
    break;

    case parseInt(day): 
    console.log("Today Is Tuesday");
    break;

    case parseInt(day) : 
    console.log("Today Is Wenesday");
    break;

    case parseInt(day): 
    console.log("Today Is Thursday");
    break;

    case parseInt(day) : 
    console.log("Today Is Friday");
    break;

    case parseInt(day) : 
    console.log("Today Is Saturday");
    break;

    case parseInt(day) : 
    console.log("Today Is Sunday");
    break;

    default :
    console.log("Invalid Input");
    break;
}