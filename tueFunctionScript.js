function logger (param) {
  console.log(param)
};

logger("kismacska"); //FÜGVÉNY MEGHÍVÁSA csak ilyenkor fut le.

//let result = logger(100)
//console.log(result)


function sumTwoNumbers(number1, number2) {
//console.log(number1, number2)
let sum = number1 + number2;
return sum; // ITT TÉR VISSZA A FÜGGVÉNY AZ EREDMÉNNYEL
}

let result = sumTwoNumbers(5, 10);
logger(result);

logger(sumTwoNumbers(5, 10));