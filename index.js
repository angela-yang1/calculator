var numString = "";
var numArray = [];
let display = document.getElementById("displayResult");
let isPreviousResult = false;

listen()

function listen() {
  document.addEventListener("click", getButtonValue);
}

function getButtonValue() {
    let button = event.target.value;
    console.log(button);
    // if number or dot, call number function
    if (!isNaN(button) || button === ".") number(button);
    // if ac, reset everything
    else if (button === "AC") allClear();
    // if c, reset last number
    else if (button === "C") clear();
    // if =, calculate total
    else if (button === "=") calculate();
    // else (store number)
    else storeNumber(button);
}

function number(button) {
    console.log("function number");
    // if there is already a . - ignore
    if (numString.includes(".") && button === ".") return;
    // if already a 0 - ignore
    else if (numString === "0" && button === "0") return;
    // else add number to num string and update display
    else {
        numString += button; 
        display.value = numString;
    }
}

function allClear() {
    console.log("all clear");
    // clear everything
    numString = "";
    numArray = [];
    display.value = "0";
    isPreviousResult = false;
}

function clear() {
    console.log("clear");
    // clear last number
    numString = "";
    display.value = "0";
}

function storeNumber(button) {
    console.log("store number");
    // if empty - ignore
    // if string empty - push to array
    // else push to array, reset string
}

function calculate() {
    console.log("calculate");
    // caluclate the result
    // display result
    // save result as previous value
    // prevent unexpected behaviour
}