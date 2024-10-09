console.log("hello");
let firstOpp = '';
let operator = '';
let secondOpp = '';
let result = '';
 const button = document.querySelector(".btnText")
const display = document.querySelector(".display")

 function appendToDisplay(input) {
    display.value += input;   }
function clearDisplay() {
    display.value = ""; 
    firstOpp = '';
    operator = '';
    secondOpp = '';
    result = '';
}


function firstnum(num){
    if (operator === ''){firstOpp += num;}
    else {secondOpp+= num;}

}

function getoperator(opp){
    operator = opp;
}

function calculate() {
    let num1 = parseFloat(firstOpp);
    let num2 = parseFloat(secondOpp);

    if (operator === '+') {result = num1 + num2}
    if (operator === '-') {result = num1 - num2}
    if (operator === '/') {if(num2 === 0){result= "error u silly"} else { result = num1 / num2}}
    if (operator === '*') {result = num1 * num2}
    console.log(result)
    display.value = result; 
    firstOpp = result.toString(); // Prepare for the next calculation
    operator = '';
    secondOpp = '';
}

