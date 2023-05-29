let num = "";
let op = "";
let sum = "";

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
const clear = document.querySelector(".clear");

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

clear.addEventListener("click", () => {
  num = "";
  op = "";
  sum = 0;

  display.textContent = "";
});

one.addEventListener("click", () => {
  num += "1";
  num = Number(num);

  display.textContent += 1;
});

two.addEventListener("click", () => {
  num += "2";
  num = Number(num);

  display.textContent += 2;
});

three.addEventListener("click", () => {
  num += "3";
  num = Number(num);

  display.textContent += 3;
});

four.addEventListener("click", () => {
  num += "4";
  num = Number(num);

  display.textContent += 4;
});

five.addEventListener("click", () => {
  num += "5";
  num = Number(num);

  display.textContent += 5;
});

six.addEventListener("click", () => {
  num += "6";
  num = Number(num);

  display.textContent += 6;
});

seven.addEventListener("click", () => {
  num += "7";
  num = Number(num);

  display.textContent += 7;
});

eight.addEventListener("click", () => {
  num += "8";
  num = Number(num);

  display.textContent += 8;
});

nine.addEventListener("click", () => {
  num += "9";
  num = Number(num);

  display.textContent += 9;
});

zero.addEventListener("click", () => {
  num += "0";
  num = Number(num);

  display.textContent += 0;
});

addOp.addEventListener("click", () => {
  if (op === "-") {
    sum -= Number(num);
    sum = Number(sum);

    op = "+";

    display.textContent = sum;
    display.textContent += "+";
  } else if (op === "*") {
    sum *= Number(num);
    sum = Number(sum);

    op = "+";

    display.textContent = sum;
    display.textContent += "+";
  } else if (op === "/") {
    sum /= Number(num);
    sum = Number(sum);

    op = "+";

    display.textContent = sum;
    display.textContent += "+";
  } else {
    sum += Number(num);
    sum = Number(sum);

    op = "+";

    display.textContent = sum;
    display.textContent += "+";
  }

  num = "";
});

subtractOp.addEventListener("click", () => {
  if (op === "+") {
    sum += Number(num);
    sum = Number(sum);

    op = "-";

    display.textContent = sum;
    display.textContent += "-";
  } else if (op === "*") {
    sum *= Number(num);
    sum = Number(sum);

    op = "-";

    display.textContent = sum;
    display.textContent += "-";
  } else if (op === "/") {
    sum /= Number(num);
    sum = Number(sum);

    op = "-";

    display.textContent = sum;
    display.textContent += "-";
  } else {
    if (sum === 0 || sum === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "-";

      display.textContent = sum;
      display.textContent += "-";
    } else {
      sum -= Number(num);
      sum = Number(sum);

      op = "-";

      display.textContent = sum;
      display.textContent += "-";
    }
  }
  num = "";
});

multiplyOp.addEventListener("click", () => {
  if (op === "-") {
    sum -= Number(num);
    sum = Number(sum);

    op = "*";

    display.textContent = sum;
    display.textContent += "*";
  } else if (op === "+") {
    sum += Number(num);
    sum = Number(sum);

    op = "*";

    display.textContent = sum;
    display.textContent += "*";
  } else if (op === "/") {
    sum /= Number(num);
    sum = Number(sum);

    op = "*";

    display.textContent = sum;
    display.textContent += "*";
  } else {
    if (sum === 0 || sum === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "*";

      display.textContent = sum;
      display.textContent += "*";
    } else {
      sum *= Number(num);
      sum = Number(sum);

      op = "*";

      display.textContent = sum;
      display.textContent += "*";
    }
  }

  num = "";
});

divideOp.addEventListener("click", () => {
  if (op === "+") {
    sum += Number(num);
    sum = Number(sum);

    op = "/";

    display.textContent = sum;
    display.textContent += "/";
  } else if (op === "*") {
    sum *= Number(num);
    sum = Number(sum);

    op = "/";

    display.textContent = sum;
    display.textContent += "/";
  } else if (op === "-") {
    sum -= Number(num);
    sum = Number(sum);

    op = "/";

    display.textContent = sum;
    display.textContent += "/";
  } else {
    if (sum === 0 || sum === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "/";

      display.textContent = sum;
      display.textContent += "/";
    } else {
      sum /= Number(num);
      sum = Number(sum);

      op = "/";

      display.textContent = sum;
      display.textContent += "/";
    }
  }

  num = "";
});

equals.addEventListener("click", () => {
  sum = operate(sum, num, op);
  display.textContent = sum;
  num = "";

  //   console.log("CLICK");
  //   console.log(`num ${num}`);
  //   console.log(`sum ${sum}`);
  //   console.log(`op ${op}`);
});
