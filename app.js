const TrueOrFalseBoolean = (grade) => {
    if(grade % 10===0) {
        return true
    }
    else {
        return false
    }
}

console.log(TrueOrFalseBoolean(30))

//-------------------------------------

let number = "2 ";
let day;

switch (number) {
    case "1":   
        day = "Monday";
        break;
    case "2":   
        day = "Tuesday";
        break;
    case "3":   
        day = "Wednesday";
        break;
    case "4":   
        day = "Thursday";
        break;
    case "5":   
        day = "Friday";
        break;
    case "6":   
        day = "Saturday";
        break; 
    case "7":   
        day = "Sunday";
        break;
}

console.log(day)

