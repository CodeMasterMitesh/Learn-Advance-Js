// if else ladder

// grade system 

// 80 > and <= 100 -> A 
// 60 > and <= 80 -> B
// 35 >= and <= 60 -> C
// 35 < and <= 0 -> Fail

let day;
let pHoliday;
day = prompt("Enter Your Today Day Name :");

if(day === "Monday"){
    pHoliday = prompt("Today is Public Holiday ? (Enter Yes/No) ");
    if(pHoliday == "Yes"){
        alert("Todays Is Monday But Today Is Public Holiday");
    }else{
        alert("Todays Is Monday and Today Is Working");
    }
}else if(day === "Tuesday"){
    alert("Todays Is Tuesday and Today Is Working");
}else if(day === "Wenesday"){
    alert("Todays Is Tuesday and Today Is Working");
}else if(day === "Thursday"){
    alert("Todays Is Thursday and Today Is Working");
}else if(day === "Friday"){
    alert("Todays Is Friday and Today Is Working");
}else if(day === "Saturday"){
    alert("Todays Is Saturday and Today Is Working");
}else if(day === "Sunday"){
    alert("Todays Is Sunday and Today Is Holiday");
}else{
    alert("Invalid Input");
}