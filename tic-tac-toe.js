// add a function that listens to each div (square) is click
// use a click counter to keep track of which token to place
// (place x's on odd click counts and o's on even click counts)
// need a function that tracks

const playerX = [];
const playerO = [];
let clickCount = 1;

function even(n) {
    return n % 2 === 0;
}

const isSquareOccupied = (array, el) => {
    return array.includes(el);
}

const gridClicker = () => {
    let gridSquares = document.querySelectorAll('.square'); // holds the squares divs
    gridSquares.forEach(gridSquare => {

        gridSquare.addEventListener('click', event => {
            // every time we click, we add the
            let current = event.target
            console.log(current)
            if (!even(clickCount)) {
                current.innerHTML = "<img src='./images/player-x.svg'/>";
                // add square id to the player x array.
                // playerX.push(current);
            } else {
                current.innerHTML = "<img src='./images/player-o.svg'/>";
            }
            clickCount++
        });
    });
};

gridClicker();

// console.log(playerX)
// console.log(clickCount)
