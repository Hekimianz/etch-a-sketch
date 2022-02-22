// Make a grid of divs
let gridContainer = document.querySelector(".gridContainer");
let newGridSide = 16;
let newGrid = newGridSide * newGridSide;


for (let i = 1; i <= newGrid; i++) {
    let gridElem = document.createElement("div");
    gridContainer.appendChild(gridElem);
    gridElem.classList.add("square")
}

// Make divs change color when you hover over them
let square = document.querySelectorAll(".square");
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseenter", function () {
        square[i].style.backgroundColor = "black";
    })
}
// Add a button that will clear the current grid
let reset = document.querySelector(".reset");
for (let i = 0; i < square.length; i++) {
    reset.addEventListener("click", function () {
        square[i].style.backgroundColor = "white";
    })
}
// On the same button, ask the user the size of the new grid and make new grids

// Add a "rainbow" colors button
