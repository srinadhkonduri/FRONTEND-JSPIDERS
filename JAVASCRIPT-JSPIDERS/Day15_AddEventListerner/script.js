// var allInput = document.querySelectorAll("input");
// console.log(allInput);
// allInput[0].addEventListener("click", function () {
//     document.body.style.backgroundColor = "red";
// });

allInput[1].addEventListener(
    "mouseover",
    () => (document.body.style.backgroundColor = "blue")
);

// allInput[2].addEventListener("dblclick", function () {
//     document.body.style.backgroundColor = "green";
// });

// PAC MAN GAME

const grid = document.getElementById("grid");
const width = 14; // 14x14 grid = 196 squares
let pacmanCurrentIndex = 90;

// Layout Legend: 0 = pac-dot, 1 = wall, 2 = pacman start
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1,
    0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

// Draw the grid
function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("div");
        grid.appendChild(square);

        if (layout[i] === 0) {
            square.classList.add("pac-dot");
        } else if (layout[i] === 1) {
            square.classList.add("wall");
        }
    }
}

createBoard();

const squares = Array.from(document.querySelectorAll("#grid div"));

// Draw initial Pac-Man
squares[pacmanCurrentIndex].classList.add("pacman");

// Move Pac-Man
function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pacman");

    switch (e.key) {
        case "ArrowLeft":
            if (
                pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex - 1].classList.contains("wall")
            )
                pacmanCurrentIndex -= 1;
            break;
        case "ArrowRight":
            if (
                pacmanCurrentIndex % width < width - 1 &&
                !squares[pacmanCurrentIndex + 1].classList.contains("wall")
            )
                pacmanCurrentIndex += 1;
            break;
        case "ArrowUp":
            if (
                pacmanCurrentIndex - width >= 0 &&
                !squares[pacmanCurrentIndex - width].classList.contains("wall")
            )
                pacmanCurrentIndex -= width;
            break;
        case "ArrowDown":
            if(
                pacmanCurrentIndex + width < width * width &&
                !squares[pacmanCurrentIndex + width].classList.contains("wall")
            )
                pacmanCurrentIndex += width;
            break;
    }

    squares[pacmanCurrentIndex].classList.add("pacman");

    // Eat dot
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
        squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
}

document.addEventListener("keydown", movePacman);
