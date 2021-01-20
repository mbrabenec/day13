// assign listeners

document.querySelector("#change__button").addEventListener("click", changeCol);

//event handlers

function changeCol () {

    let inputted = document.querySelectorAll("input");
    let values = [];


    for (let i = 0; i < inputted.length -1; i++) {
        values.push(Number(inputted[i].value));
    }

    if(isNaN(values[0]) || values[0] < 0 || values[0] > 255) {
        alert("check Red value: integers 0 - 255 inclusive");
        return;
    }

    if(isNaN(values[1]) || values[1] < 0 || values[1] > 255) {
        alert("check Green value: integers 0 - 255 inclusive");
        return;
    }

    if(isNaN(values[2]) || values[2] < 0 || values[2] > 255) {
        alert("check Blue value: integers 0 - 255 inclusive");
        return;
    }

    if(isNaN(values[3]) || values[3] < 0 || values[3] > 1) {
        alert("check Alpha value:  0.0 - 1.0 inclusive");
        return;
    }

    let newSelection = `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${values[3]})`;

    document.querySelector(".wrapper").style.background = newSelection;
    document.querySelector("span").textContent = " "+ newSelection;


    



}
