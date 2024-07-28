//Make reference to container div element
const container = document.querySelector(".container");

//Create 16x16 grids of square divs
let gridNum = 16;
//Get the dimension of container from CSS
const container_width = container.clientWidth;
const container_height = container.clientHeight;


for (let i = 0; i < gridNum**2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = (container_width/gridNum) + "px";
    square.style.height = (container_height/gridNum) + "px";
    container.appendChild(square);

    console.log(container.style.width);
}

//Add eventListener to change color
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
});

//Add button to top of screen to ask for number of squares
const button = document.createElement("button");
button.textContent = "Choose your grid size (from 1 to 100)";
document.body.insertBefore(button, container);
button.addEventListener("click", () => {
        gridNum = prompt("Enter grid size (1-100)");
        while (gridNum > 100 || gridNum < 1 || !Number.isInteger(gridNum)) {
            if (gridNum == null) break;
            else {gridNum = prompt("Enter grid size (1-100)");}
        }
    }
)
//Then reset the grid with the new grid size
