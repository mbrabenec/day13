// add event listeners

document.querySelector(".button__lucky").addEventListener("click", lucky)

// event handler

function lucky () {

    console.log(Math.floor(Math.random() *6) +1);

}





