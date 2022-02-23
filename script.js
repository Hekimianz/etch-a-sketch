let gridContainer = document.querySelector(".gridContainer");
let newGridSide = 16;
let newGrid = newGridSide * newGridSide;
let newSize = (700 / newGridSide) + "px";
function main() {
    // Make a grid of divs
    for (let i = 1; i <= newGrid; i++) {
        let gridElem = document.createElement("div");
        gridContainer.appendChild(gridElem);
        gridElem.classList.add("square")
        gridElem.style.backgroundColor = "white";
    }

    // Make divs change color when you hover over them
    let square = document.querySelectorAll(".square");
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseenter", function () {
            square[i].style.backgroundColor = "black";
        })
    }

    // Add a button that will change the current grid
    let reset = document.querySelector(".reset");
    for (let i = 0; i < square.length; i++) {
        reset.addEventListener("click", function () {
            square[i].style.backgroundColor = "white";
        })
    }


    //ask the user for the size of the new grid and resize it
    reset.addEventListener("click", function () {
        newGridSide = parseInt(prompt("How many squares would you like the new sketch pad to be? limit: 100"));
        newGrid = newGridSide * newGridSide;
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        // make new grid
        if (newGridSide <= 100) {
            for (let i = 1; i <= newGrid; i++) {
                let gridElem = document.createElement("div");
                gridContainer.appendChild(gridElem);
                gridElem.classList.add("square")
                gridElem.style.backgroundColor = "white";

                newSize = (700 / newGridSide);
                gridElem.style.width = `${newSize}px`;
                gridElem.style.height = `${newSize}px`;
            }
        }
        else {
            alert("Please input a number from 1 to 100.")
        }
        // add a Clear button
        clear.addEventListener("click", function () {
            for (let i = 0; i < square.length; i++) {
                square[i].style.backgroundColor = "white";
            }
        })

        // make hover effect for new grid
        let square = document.querySelectorAll(".square");

        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener("mouseenter", function () {
                square[i].style.backgroundColor = "black";
            })
        }
    })

    // set the starting size
    for (let i = 0; i < square.length; i++) {
        square[i].style.width = "43.75px";
        square[i].style.height = "43.75px";
    }

    // buttons click effect
    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mousedown", function () {
            buttons[i].style.backgroundColor = "#E6D329";
            buttons[i].style.width = "90%";
            buttons[i].style.height = "90%";
            buttons[i].style.fontSize = "90%"
        });
        buttons[i].addEventListener("mouseup", function () {
            buttons[i].style.backgroundColor = "#FDE72E";
            buttons[i].style.width = "100%";
            buttons[i].style.height = "100%";
            buttons[i].style.fontSize = "101%"

        });
    }
}




main();
// clear button
let clear = document.querySelector(".clear");
let square = document.querySelectorAll(".square");

for (let i = 0; i < square.length; i++) {
    clear.addEventListener("click", function () {
        square[i].style.backgroundColor = "white";

    })
}








