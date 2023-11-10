const numberBtns = document.querySelectorAll('.numberBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const equalBtn = document.getElementById('equalBtn');
const pointBtn = document.getElementById('pointBtn');
const delBtn = document.getElementById('delBtn');
const acBtn = document.getElementById('acBtn');

let screenText = document.getElementById('onScreenText');

let operator = '';
let firstNumber = 0;
let secondNumber = 0;

numberBtns.forEach((button) => {
    button.addEventListener('click', () => writeNumber(button.textContent));
});

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.textContent));
});

equalBtn.addEventListener('click', () => checkData())

acBtn.addEventListener('click', () => resetScreen());

function writeNumber(number) {
    screenText.textContent += number;
    if (operator === '') {
        firstNumber += number;
    } else {
        secondNumber += number;
    }
}

function setOperation(newOperator) {
    screenText.textContent = '';
    operator = newOperator;
    if(secondNumber !== '') {
        checkData();
    }
}

function checkData() {
    if(firstNumber !== '' && secondNumber !== '' && operator !== '') {
        operate();
    }
}

function operate(){
    if(operator === '+'){
        screenText.textContent = add(Number(firstNumber), Number(secondNumber));
    } else if(operator === '-'){
        screenText.textContent = subtract(Number(firstNumber), Number(secondNumber));
    } else if(operator === 'X'){
        screenText.textContent = multiply(Number(firstNumber), Number(secondNumber));
    } else if(operator === '/'){
        screenText.textContent = divide(Number(firstNumber), Number(secondNumber));
    }
    firstNumber = Number(screenText.textContent);
    secondNumber = '';
}

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2){
    return (num1 - num2);
}

function multiply(num1, num2){
    return (num1 * num2);
}

function divide(num1, num2){
    return (num1 / num2);
}

function resetScreen() {
    screenText.textContent = '';
    firstNumber = '';
    firstNumberCache = 0;
    secondNumber = '';
    secondNumberCache = 0;
    operator = '';
}