//Make reference to container div element
const container = document.querySelector(".container");

//Create standard sqaure div element



//Create 16x16 grids of square divs
let gridNum = 16;
//Get the dimension of container from CSS
const container_width = container.clientWidth;
const container_height = container.clientHeight;


for (let i = 0; i < gridNum**2; i++) {
    const square = document.createElement("div");
    square.style.width = (container_width/gridNum) + "px";
    square.style.height = (container_height/gridNum) + "px";
    container.appendChild(square);

    console.log(container.style.width);
}