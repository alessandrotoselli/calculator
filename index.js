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
let result = null;

numberBtns.forEach((button) => {
    button.addEventListener('click', () => writeNumber(button.textContent));
});

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.textContent));
});

equalBtn.addEventListener('click', () => checkData())

acBtn.addEventListener('click', () => resetScreen());

function writeNumber(number) {
    if(result === null) {
        screenText.textContent += number;
    } else {
        screenText.textContent = '';
        screenText.textContent += number;
        result = null;
    }
    if (operator === '') {
        firstNumber += number;
    } else {
        secondNumber += number;
    }
}

function setOperation(newOperator) {
    if(secondNumber === ''){
        screenText.textContent = '';
        operator = newOperator;
    } else {
        checkData();
        operator = newOperator;
        firstNumber = result;
    }
}

function checkData() {
    if(firstNumber !== '' && secondNumber !== '' && operator !== '') {
        operate();
    }
}

function operate(){
    if(operator === '+'){
        result = add(Number(firstNumber), Number(secondNumber));
        screenText.textContent = result;
    } else if(operator === '-'){
        result = subtract(Number(firstNumber), Number(secondNumber));
        screenText.textContent = result;
    } else if(operator === 'X'){
        result = multiply(Number(firstNumber), Number(secondNumber));
        screenText.textContent = result;
    } else if(operator === '/'){
        result = divide(Number(firstNumber), Number(secondNumber));
        screenText.textContent = result;
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
    result = null;
}