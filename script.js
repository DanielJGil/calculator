// Fix overflow of numbers, set limit

let num = "";
let op = "";
let sum = "";
let deletedNum = "";

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
const decimal = document.querySelector(".decimal");
const back = document.querySelector(".back");

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

window.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    e.preventDefault();
    num += "1";

    display.textContent += 1;
  } else if (e.key === "2") {
    e.preventDefault();
    num += "2";

    display.textContent += 2;
  } else if (e.key === "3") {
    e.preventDefault();
    num += "3";

    display.textContent += 3;
  } else if (e.key === "4") {
    e.preventDefault();
    num += "4";

    display.textContent += 4;
  } else if (e.key === "5") {
    e.preventDefault();
    num += "5";

    display.textContent += 5;
  } else if (e.key === "6") {
    e.preventDefault();
    num += "6";

    display.textContent += 6;
  } else if (e.key === "7") {
    e.preventDefault();
    num += "7";

    display.textContent += 7;
  } else if (e.key === "8") {
    e.preventDefault();
    num += "8";

    display.textContent += 8;
  } else if (e.key === "9") {
    e.preventDefault();
    num += "9";

    display.textContent += 9;
  } else if (e.key === "0") {
    e.preventDefault();
    num += "0";

    display.textContent += 0;
  } else if (e.key === "c" || e.key === "C") {
    e.preventDefault();
    num = "";
    op = "";
    sum = "";

    display.textContent = "";
  } else if (e.key === "b" || e.key === "B" || e.key === "Backspace") {
    e.preventDefault();
    num = num.substring(0, num.length - 1);

    display.textContent = sum + op + num;
  } else if (e.key === ".") {
    e.preventDefault();
    if (num.includes(".") === false) {
      num += ".";
      display.textContent += ".";
    }
  } else if (
    e.key === "+" ||
    e.key === "a" ||
    e.key === "A" ||
    e.key === "p" ||
    e.key === "P"
  ) {
    e.preventDefault();
    if (op === "-") {
      sum -= Number(num);
      sum = Number(sum);

      op = "+";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "+";
    } else if (op === "*") {
      if (num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "+";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "+";
      } else {
        sum *= Number(num);
        sum = Number(sum);

        op = "+";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "+";
      }
    } else if (op === "/") {
      if (num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "+";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "+";
      } else {
        sum /= Number(num);
        sum = Number(sum);

        op = "+";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
          display.textContent += "+";
        } else if (op === "+" && num === 0) {
          display.textContent = "BANK CARD DOWNLOADED";
        } else {
          display.textContent = sum;
          display.textContent += "+";
        }
      }
    } else {
      sum += Number(num);
      sum = Number(sum);

      op = "+";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "+";
    }

    num = "";
  } else if (
    e.key === "-" ||
    e.key === "s" ||
    e.key === "S" ||
    e.key === "m" ||
    e.key === "M"
  ) {
    e.preventDefault();
    if (op === "+") {
      sum += Number(num);
      sum = Number(sum);

      op = "-";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "-";
    } else if (op === "*") {
      if (num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "-";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "-";
      } else {
        sum *= Number(num);
        sum = Number(sum);

        op = "-";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "-";
      }
    } else if (op === "/") {
      if (num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "-";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "-";
      } else {
        sum /= Number(num);
        sum = Number(sum);

        op = "-";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
          display.textContent += "-";
        } else if (op === "-" && num === 0) {
          display.textContent = "BANK CARD DOWNLOADED";
        } else {
          display.textContent = sum;
          display.textContent += "-";
        }
      }
    } else {
      if (sum === 0 || sum === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "-";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "-";
      } else {
        sum -= Number(num);
        sum = Number(sum);

        op = "-";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "-";
      }
    }
    num = "";
  } else if (
    e.key === "*" ||
    e.key === "m" ||
    e.key === "M" ||
    e.key === "t" ||
    e.key === "T"
  ) {
    e.preventDefault();
    if (op === "-") {
      sum -= Number(num);
      sum = Number(sum);

      op = "*";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "*";
    } else if (op === "+") {
      sum += Number(num);
      sum = Number(sum);

      op = "*";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "*";
    } else if (op === "/") {
      if (num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "*";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "*";
      } else {
        sum /= Number(num);
        sum = Number(sum);

        op = "*";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
          display.textContent += "*";
        } else if (op === "*" && num === 0) {
          display.textContent = "BANK CARD DOWNLOADED";
        } else {
          display.textContent = sum;
          display.textContent += "*";
        }
      }
    } else {
      if (sum === 0 || sum === "" || num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "*";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "*";
      } else {
        sum *= Number(num);
        sum = Number(sum);

        op = "*";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "*";
      }
    }

    num = "";
  } else if (e.key === "/" || e.key === "d" || e.key === "D") {
    e.preventDefault();
    if (op === "+") {
      sum += Number(num);
      sum = Number(sum);

      op = "/";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "/";
    } else if (op === "*") {
      if (num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "/";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "/";
      } else {
        sum *= Number(num);
        sum = Number(sum);

        op = "/";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "/";
      }
    } else if (op === "-") {
      sum -= Number(num);
      sum = Number(sum);

      op = "/";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "/";
    } else {
      if (sum === 0 || sum === "" || num === "") {
        sum += Number(num);
        sum = Number(sum);

        op = "/";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
        } else {
          display.textContent = sum;
        }
        display.textContent += "/";
      } else {
        sum /= Number(num);
        sum = Number(sum);

        op = "/";

        if (sum !== Math.trunc(sum)) {
          display.textContent = sum.toFixed(1);
          display.textContent += "/";
        } else if (op === "/" && num === 0) {
          display.textContent = "BANK CARD DOWNLOADED";
        } else {
          display.textContent = sum;
          display.textContent += "/";
        }
      }
    }

    num = "";
  } else if (
    e.key === "Enter" ||
    e.key === "=" ||
    e.key === "e" ||
    e.key === "E"
  ) {
    e.preventDefault();
    num = Number(num);

    sum = operate(sum, num, op);
    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else if (op === "/" && num === 0) {
      display.textContent = "BANK CARD DOWNLOADED";
    } else {
      display.textContent = sum;
    }

    op = "";
    num = sum;
    sum = "";
  }
});

clear.addEventListener("click", () => {
  num = "";
  op = "";
  sum = "";

  display.textContent = "";
});

decimal.addEventListener("click", () => {
  if (num.includes(".") === false) {
    num += ".";
    display.textContent += ".";
  }
});

back.addEventListener("click", () => {
  num = num.substring(0, num.length - 1);

  display.textContent = sum + op + num;
});

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
  if (op === "-") {
    sum -= Number(num);
    sum = Number(sum);

    op = "+";

    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else {
      display.textContent = sum;
    }
    display.textContent += "+";
  } else if (op === "*") {
    if (num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "+";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "+";
    } else {
      sum *= Number(num);
      sum = Number(sum);

      op = "+";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "+";
    }
  } else if (op === "/") {
    if (num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "+";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "+";
    } else {
      sum /= Number(num);
      sum = Number(sum);

      op = "+";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
        display.textContent += "+";
      } else if (op === "+" && num === 0) {
        display.textContent = "BANK CARD DOWNLOADED";
      } else {
        display.textContent = sum;
        display.textContent += "+";
      }
    }
  } else {
    sum += Number(num);
    sum = Number(sum);

    op = "+";

    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else {
      display.textContent = sum;
    }
    display.textContent += "+";
  }

  num = "";
});

subtractOp.addEventListener("click", () => {
  if (op === "+") {
    sum += Number(num);
    sum = Number(sum);

    op = "-";

    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else {
      display.textContent = sum;
    }
    display.textContent += "-";
  } else if (op === "*") {
    if (num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "-";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "-";
    } else {
      sum *= Number(num);
      sum = Number(sum);

      op = "-";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "-";
    }
  } else if (op === "/") {
    if (num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "-";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "-";
    } else {
      sum /= Number(num);
      sum = Number(sum);

      op = "-";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
        display.textContent += "-";
      } else if (op === "-" && num === 0) {
        display.textContent = "BANK CARD DOWNLOADED";
      } else {
        display.textContent = sum;
        display.textContent += "-";
      }
    }
  } else {
    if (sum === 0 || sum === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "-";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "-";
    } else {
      sum -= Number(num);
      sum = Number(sum);

      op = "-";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
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

    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else {
      display.textContent = sum;
    }
    display.textContent += "*";
  } else if (op === "+") {
    sum += Number(num);
    sum = Number(sum);

    op = "*";

    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else {
      display.textContent = sum;
    }
    display.textContent += "*";
  } else if (op === "/") {
    if (num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "*";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "*";
    } else {
      sum /= Number(num);
      sum = Number(sum);

      op = "*";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
        display.textContent += "*";
      } else if (op === "*" && num === 0) {
        display.textContent = "BANK CARD DOWNLOADED";
      } else {
        display.textContent = sum;
        display.textContent += "*";
      }
    }
  } else {
    if (sum === 0 || sum === "" || num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "*";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "*";
    } else {
      sum *= Number(num);
      sum = Number(sum);

      op = "*";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
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

    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else {
      display.textContent = sum;
    }
    display.textContent += "/";
  } else if (op === "*") {
    if (num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "/";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "/";
    } else {
      sum *= Number(num);
      sum = Number(sum);

      op = "/";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "/";
    }
  } else if (op === "-") {
    sum -= Number(num);
    sum = Number(sum);

    op = "/";

    if (sum !== Math.trunc(sum)) {
      display.textContent = sum.toFixed(1);
    } else {
      display.textContent = sum;
    }
    display.textContent += "/";
  } else {
    if (sum === 0 || sum === "" || num === "") {
      sum += Number(num);
      sum = Number(sum);

      op = "/";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
      } else {
        display.textContent = sum;
      }
      display.textContent += "/";
    } else {
      sum /= Number(num);
      sum = Number(sum);

      op = "/";

      if (sum !== Math.trunc(sum)) {
        display.textContent = sum.toFixed(1);
        display.textContent += "/";
      } else if (op === "/" && num === 0) {
        display.textContent = "BANK CARD DOWNLOADED";
      } else {
        display.textContent = sum;
        display.textContent += "/";
      }
    }
  }

  num = "";
});

equals.addEventListener("click", () => {
  num = Number(num);

  sum = operate(sum, num, op);
  if (sum !== Math.trunc(sum)) {
    display.textContent = sum.toFixed(1);
  } else if (op === "/" && num === 0) {
    display.textContent = "BANK CARD DOWNLOADED";
  } else {
    display.textContent = sum;
  }

  op = "";
  num = sum;
  sum = "";

  // console.log("CLICK");
  // console.log(`num ${num}`);
  // console.log(`sum ${sum}`);
  // console.log(`op ${op}`);
});
