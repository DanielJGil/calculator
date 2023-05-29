let num = "";
let num1 = 0;
let num2 = 0;
let op = "";
let sum = "";

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
  num2 = num1;
  num += "1";
  num1 = Number(num);
  sum = operate(sum, num1, op);

  display.textContent += 1;

  //   console.log("1 CLICK");
  //   console.log(`num ${num}`);
  //   console.log(`num1 ${num1}`);
  //   console.log(`num2 ${num2}`);
  //   console.log(`sum ${sum}`);
  //   console.log(`op ${op}`);
});

two.addEventListener("click", () => {
  num2 = num1;
  num += "2";
  num1 = Number(num);
  sum = operate(sum, num1, op);

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
  op = "+";
  display.textContent += "+";

  if (num2 === 0) {
    num2 = num1;
    num1 = Number(num);
    sum = num1;
  }

  num = "";
});

subtractOp.addEventListener("click", () => {
  op = "";
  op = "-";
  display.textContent += "-";

  if (num2 === 0) {
    num2 = num1;
    num1 = Number(num);
    sum = num1;
  }

  num = "";
});

multiplyOp.addEventListener("click", () => {
  op = "";
  op = "*";
  display.textContent += "*";

  if (num2 === 0) {
    num2 = num1;
    num1 = Number(num);
    sum = num1;
  }

  num = "";
});

divideOp.addEventListener("click", () => {
  op = "";
  op = "/";
  display.textContent += "/";

  if (num2 === 0) {
    num2 = num1;
    num1 = Number(num);
    sum = num1;
  }

  num = "";
});

equals.addEventListener("click", () => {
  num2 = Number(num);
  display.textContent = sum;
  num = "";
});
