let num = "";
let num1 = 0;
let num2 = 0;
let oper = "";

const displayValue = [];

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const addOp = document.querySelector(".add");
const subtractOp = document.querySelector(".subtract");
const multiplyOp = document.querySelector(".multiply");
const divideOp = document.querySelector(".divide");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (a, b, op) => {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return subtract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else if (op === "/") {
    return divide(a, b);
  } else {
    return "Invalid Input";
  }
};

one.addEventListener("click", () => {
  num += "1";
  display.textContent += 1;
});

two.addEventListener("click", () => {
  num += "2";
  display.textContent += 2;
});

three.addEventListener("click", () => {
  num += "3";
  display.textContent += 3;
});

four.addEventListener("click", () => {
  num += "4";
  display.textContent += 4;
});

five.addEventListener("click", () => {
  num += "5";
  display.textContent += 5;
});

six.addEventListener("click", () => {
  num += "6";
  display.textContent += 6;
});

seven.addEventListener("click", () => {
  num += "7";
  display.textContent += 7;
});

eight.addEventListener("click", () => {
  num += "8";
  display.textContent += 8;
});

nine.addEventListener("click", () => {
  num += "9";
  display.textContent += 9;
});

zero.addEventListener("click", () => {
  num += "0";
  display.textContent += 0;
});

addOp.addEventListener("click", () => {
  op = "";
  num1 = Number(num);
  num = "";
  op = "+";
  display.textContent += "+";
});

subtractOp.addEventListener("click", () => {
  op = "";
  num1 = Number(num);
  num = "";
  op = "-";
  display.textContent += "-";
});

multiplyOp.addEventListener("click", () => {
  op = "";
  num1 = Number(num);
  num = "";
  op = "*";
  display.textContent += "*";
});

divideOp.addEventListener("click", () => {
  op = "";
  num1 = Number(num);
  num = "";
  op = "/";
  display.textContent += "/";
});

equals.addEventListener("click", () => {
  num2 = Number(num);
  num = "";
  let sum = operate(num1, num2, op);
  display.textContent = sum;
});
