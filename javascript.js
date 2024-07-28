//Make reference to container div element
const container = document.querySelector(".container");

//Create 16x16 grids of square divs
let gridNum = 16;
//Get the dimension of container from CSS
const container_width = container.clientWidth;
const container_height = container.clientHeight;

document.addEventListener("DOMContentLoaded", () =>
    {createGrid(gridNum)
    //Add eventListener to change color
    }
)

function createGrid(gridNum) {
    for (let i = 0; i < gridNum**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (container_width/gridNum) + "px";
        square.style.height = (container_height/gridNum) + "px";
        container.appendChild(square);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
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

