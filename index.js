var numString = ''
var numArray = []
let display = document.getElementById('display')
let isPreviousResult = false

listen()

function listen() {
  document.addEventListener('click', getButtonValue)
}

function getButtonValue() {
    let button = event.target.value;
    console.log(button);
    // if number or dot, call number function
    // if ac, reset everything
    // if c, reset last number
    // if =, calculate total
    // else (store number)
}

function number(button) {
    console.log("function number");
    // if there is already a . - ignore
    // if already a 0 - ignore
    // else add number to num string and update display
}

function allClear() {
    console.log("all clear");
    // clear everything
}

function clear() {
    console.log("clear");
    // clear last number
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