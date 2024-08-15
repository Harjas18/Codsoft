let operand1 = null,
    operation = null,
    currentinput = "";

const screen = document.getElementById("result");

function handleNumber() {
    currentinput += this.value;
    screen.value = currentinput || '0';
}

function handleDecimal() {
    if (!currentinput.includes(".")) {
        currentinput += ".";
        screen.value = currentinput;
    }
}

function handleOperation() {
    if (currentinput !== "") {
        operation = this.value;
        operand1 = currentinput;
        currentinput = "";
        screen.value = '0';
    }
}

function handleEquals() {
    if (operand1 !== null && operation !== null && currentinput !== "") {
        screen.value = calculate(operand1, operation, currentinput);
        currentinput = screen.value; 
        operation = null;
        operand1 = null;
    }
}

function handleDelete() {
    if (currentinput.length > 0) {
        currentinput = currentinput.slice(0, -1); 
        screen.value = currentinput || '0'; 
    }
}

function calculate(o1, op, o2) {
    const num1 = parseFloat(o1);
    const num2 = parseFloat(o2);
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error"; 
            }
            return num1 / num2;
        default:
            return "Error"; 
    }
}

function clear() {
    operand1 = null;
    operation = null;
    currentinput = '';
    screen.value = '0'; 
}

const numbers = document.getElementsByClassName("number");
const operations = document.getElementsByClassName("operator");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', handleNumber, false);
}

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', handleOperation, false);
}

document.getElementById("equals").addEventListener('click', handleEquals);
document.getElementById("decimal").addEventListener('click', handleDecimal);
document.getElementById("clear").addEventListener('click', clear);
document.getElementById("del").addEventListener('click', handleDelete); 