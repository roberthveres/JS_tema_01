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
const locDeMunca = "Programator"
const Nevasta = "Johanna"
const Casa = "Transilvania"
const Copii = "5"

const concatenare = (a, b, c, d) => {
   return "Eu voi fi " + a + "," + b + " va fi nevasta mea," + "vom trai in: " + c + " si vom avea " + d + " copii"
}

console.log(concatenare(locDeMunca,Nevasta,Casa,Copii))
// ------------------------------------

let number = "8";
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
    default:
        console.log(number + " " + "it is not a day of the week")    
}

console.log(day)

