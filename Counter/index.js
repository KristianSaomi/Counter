//Positive counter
let countPositive = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    countPositive.innerText = count;
}
//Negative counter 
let countNegative = document.getElementById("count-el");


function deCrement() {
    count = count - 1;
    countNegative.innerText = count;
}
// 
let saveEl = document.getElementById("save-el")

function save() {
    let countStr = " " + count + " "
    saveEl.innerHTML += " " + "(" + countStr +")"; 

    console.log(count)
    
}