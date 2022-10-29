const numberButton = document.querySelectorAll('.number');
const allClearButton = document.querySelector('.ac');
const delButton = document.querySelector('.del');
const equalButton = document.querySelector('.equal');
const operandButton = document.querySelectorAll('.operand');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

let currentOperandNumber = "";
let computedOperandNumber = "";

function remove() {
  currentOperandNumber = currentOperandNumber.slice(0,-1);
}

function allClear() {
  currentOperandNumber = "";
  computedOperandNumber = "";
}

function appendNumber(number) {
  if (number == "." && currentOperandNumber.includes('.')) return;
  if (number == "÷") number = "/";
  if (currentOperandNumber == "" && (number == '*' || number == '/')) return;
  if (computedOperandNumber !== "") {
    computedOperandNumber = "";
  }
  currentOperandNumber += number;
}

function display() {
  currentOperand.innerHTML = computedOperandNumber;
  previousOperand.innerHTML = currentOperandNumber;
}

function compute() {
  if (currentOperandNumber == "") return;
  if (currentOperandNumber.includes('/') || currentOperandNumber.includes('*') || currentOperandNumber.includes('+') || currentOperandNumber.includes('-')) {
  let computation = eval(currentOperandNumber);
  computedOperandNumber = computation;
  currentOperandNumber = ""
  }
}

numberButton.forEach(button => {
  button.addEventListener('click',() => {
    appendNumber(button.innerHTML);
    display();
  })
})

allClearButton.addEventListener('click',() => {
  allClear();
  display();
})

delButton.addEventListener('click',() => {
  remove();
  display();
})

operandButton.forEach(button => {
  button.addEventListener('click',() => {
    // operand(button.innerHTML);
    appendNumber(button.innerHTML)
    display();
  })
})

equalButton.addEventListener('click',() => {
  compute();
  display();
})

