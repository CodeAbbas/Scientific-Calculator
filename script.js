const buttons = document.querySelectorAll(".button");
const display = document.getElementById("result");
let currentValue = "";

function calculate(value) {
  switch (value) {
    case "sin":
      currentValue = Math.sin(currentValue);
      break;
    case "cos":
      currentValue = Math.cos(currentValue);
      break;
    case "tan":
      currentValue = Math.tan(currentValue);
      break;
    case "asin":
      currentValue = Math.asin(currentValue);
      break;
    case "acos":
      currentValue = Math.acos(currentValue);
      break;
    case "atan":
      currentValue = Math.atan(currentValue);
      break;
    case "ln":
      currentValue = Math.log(currentValue);
      break;
    case "log":
      currentValue = Math.log10(currentValue);
      break;
    case "x^y":
      currentValue = Math.pow(currentValue, parseFloat(display.value));
      break;
    case "e^x":
      currentValue = Math.exp(currentValue);
      break;
    case "10^x":
      currentValue = Math.pow(10, currentValue);
      break;
    case "sqrt":
      currentValue = Math.sqrt(currentValue);
      break;
    case "cbrt":
      currentValue = Math.cbrt(currentValue);
      break;
    case "n!":
      currentValue = factorial(currentValue);
      break;
    case "1/x":
      currentValue = 1 / currentValue;
      break;
    case "%":
      currentValue *= 0.01;
      break;
    case "pi":
      currentValue = Math.PI;
      break;
    case "e":
      currentValue = Math.E;
      break;
    default:
      currentValue += value;
  }

  display.value = currentValue;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "clear") {
      currentValue = "";
    } else if (value === "=") {
      try {
        currentValue = eval(currentValue);
      } catch (error) {
        currentValue = "Error";
      }
    } else {
      calculate(value);
    }

    display.value = currentValue;
  });
});
