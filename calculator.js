var numString = "";
var numArray = [];
let display = document.getElementById("displayResult");
let isPreviousResult = false;

listen()

function listen() {
    const calc = document.getElementById("buttons");

    calc.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === "INPUT";
        if (!isButton) return;
        getButtonValue();
    })
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
    else if (button === "%") convertPercentage();
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
    if (numString === "") return;
    // if string empty - 
    else if (isNaN(numString[numString.length -1])) {
        numString = numString.slice(0, -1) + button;
    }
    // else push to array, reset string
    else {
        numString += button;
    }
    display.value = numString;
}

function calculate() {
    console.log("calculate");
    numString = numString.replace(/x/g, "*");
    numString = eval(numString).toString();
    display.value = numString;
    // caluclate the result
    // display result
    // save result as previous value
    // prevent unexpected behaviour
}

function convertPercentage() {
    if (numString === "0" || numString === "") return;
    else {
        numString = (parseFloat(numString) / 100).toString();
        display.value = numString;
    }
}