// assign listeners

document.querySelector("#change__button").addEventListener("click", changeCol);

//event handlers

let history = [];

function changeCol () {
    let values = [];
    let inputted = document.querySelectorAll("input");
    
    for (let i = 0; i < inputted.length -1; i++) {
        values.push(Number(inputted[i].value));
    }

    if (isNaN(values[0]) || values[0] < 0 || values[0] > 255) {
        alert("check Red value: integers 0 - 255 inclusive");
        return;
    }

    if (isNaN(values[1]) || values[1] < 0 || values[1] > 255) {
        alert("check Green value: integers 0 - 255 inclusive");
        return;
    }

    if (isNaN(values[2]) || values[2] < 0 || values[2] > 255) {
        alert("check Blue value: integers 0 - 255 inclusive");
        return;
    }

    if (isNaN(values[3]) || values[3] < 0 || values[3] > 1) {
        alert("check Alpha value:  0.0 - 1.0 inclusive");
        return;
    }

    let newSelection = `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${values[3]})`;

    //ud background

    document.querySelector(".wrapper").style.background = newSelection;
    document.querySelector("span").textContent = " "+ newSelection;

    // add to history (array + visual in DOM)

    history.push(values);

    let newRecord = document.createElement("div");

    newRecord.style.height = "5vw";
    newRecord.style.background = newSelection;
    
    newRecord.classList.add((history.length)-1);
    newRecord.addEventListener("click", showAgain)

    let where = document.querySelector(".history__container");
    where.insertBefore(newRecord, where.childNodes[0]);   
}

function showAgain (e) {
    let colorInfo = history[e.target.className];

    document.querySelector("#r").value = colorInfo[0];
    document.querySelector("#g").value = colorInfo[1];
    document.querySelector("#b").value = colorInfo[2];
    document.querySelector("#a").value = colorInfo[3];

    document.getElementById("change__button").click();
}