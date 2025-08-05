// if else ladder

// grade system 

// 80 > and <= 100 -> A 
// 60 > and <= 80 -> B
// 35 >= and <= 60 -> C
// 35 < and <= 0 -> Fail

let perc;

perc = prompt("Enter Your Percentage :");

if(perc > 80 && perc <= 100){
    alert("Grade A");
}else if(perc > 60 && perc <= 80){
    alert("Grade B");
}else if(perc >= 35 && perc <= 60){
    alert("Grade C");
}else{
    alert("Fail");
}