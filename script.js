let size;

// styling the container
const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";


const button = document.getElementById("button");

button.addEventListener("click", (e) => {
    let input = window.prompt("Enter a number");
    size = input;
    let totalSquares = size * size;

    containerWidth = size * 25;
    container.style.width = containerWidth + "px";

    // creating squares 16*16
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.className = "square";
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.backgroundColor = "#eeeeee";
        // div.style.border = "1px black solid";
        container.appendChild(div);
    }

    const square = document.getElementsByClassName("square");
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseenter", (e) => {
            square[i].style.backgroundColor = "red"
        });
    }
});



