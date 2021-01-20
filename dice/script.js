// event listeners

document.querySelector(".button__under").addEventListener("click", play);
document.querySelector(".button__over").addEventListener("click", play);
document.querySelector(".button__lucky7").addEventListener("click", play);
document.getElementById("myBet").addEventListener("input", displayBet);

// global vars

let bank = 1000;

// event handler

function play(e) {

    let bet = getBet();
    let diceTotal = rollDice();

    if (e.target.className === "button__under" && (diceTotal < 7)) payOut(2* bet); 
    if (e.target.className === "button__over" && (diceTotal > 7)) payOut(2* bet);
    if (e.target.className === "button__lucky7" && (diceTotal === 7)) payOut(4* bet);  
    
    if(bank === 0) alert("game over");
}

// helper functions

function payOut (amount) {

    bank = bank + amount;
    document.querySelector(".output__bank").innerHTML = bank;
}

function getBet () {

    let bet = document.getElementById("myBet").value;

    if (bet <= bank) {
        bank = bank - bet;
        refreshBank();
        return bet;
    } else {
        alert("not enough money");
        return false;
    }
}

function rollDice () { 

    let files = ['url("side1.png")', 'url("side2.png")', 'url("side3.png")', 'url("side4.png")', 'url("side5.png")', 'url("side6.png")',]
    
    let outcome1 = Math.floor(Math.random() *6) +1;
    let outcome2 = Math.floor(Math.random() *6) +1;
    
    let fileReq1 = files[outcome1 -1];
    document.querySelector(".dice1__display").style.backgroundImage = fileReq1;

    let fileReq2 = files[outcome2 -1];
    document.querySelector(".dice2__display").style.backgroundImage = fileReq2;

    return outcome1 + outcome2;
}

function displayBet () {

    document.querySelector(".output__bet").innerHTML = document.getElementById("myBet").value;
}

function refreshBank () {

    document.querySelector(".output__bank").innerHTML = bank;
}
