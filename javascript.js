//Make reference to container div element
const container = document.querySelector(".container");

//Create 16x16 grids of square divs
let gridNum = 16;
//Get the dimension of container from CSS
const container_width = container.clientWidth;
const container_height = container.clientHeight;

document.addEventListener("DOMContentLoaded", () =>
    {createGrid(gridNum)})

function createGrid(gridNum) {
    for (let i = 0; i < gridNum**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (container_width/gridNum) + "px";
        square.style.height = (container_height/gridNum) + "px";
        container.appendChild(square);
    }
    //Select all the square elements and assign a class to them
    //Then add event handler to change each of their color
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            //Make each square a random RGB value
            //RGB format: rgb(0-255,0-255,0-255)
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            square.style.backgroundColor = "rgb("+ red + "," + green + "," + blue + ")";
        })
    });
}


//Add button to top of screen to ask for number of squares
const button = document.createElement("button");
button.textContent = "Choose your grid size (from 1 to 100)";
document.body.insertBefore(button, container);
button.addEventListener("click", () => {
        let userInput = prompt("Enter grid size (1-100)");
        while (parseInt(userInput) > 100 || parseInt(userInput) < 1 || !Number.isInteger(parseInt(userInput))) {
            if (userInput == null) break;
            else {
                userInput = prompt("Enter grid size (1-100)");
            }
        }
        gridNum = parseInt(userInput);

        //Then reset the grid with the new grid size
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.remove()
        });
        createGrid(gridNum);        
    })
