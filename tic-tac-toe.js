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

const isSquareOccupied = (array1, array2, el) => {
    return (array1.includes(el) || array2.includes(el)); // 
}

const gridClicker = () => {

    let gridSquares = document.querySelectorAll('.square'); // holds the squares divs

    for (let i = 0; i < gridSquares.length; i ++) {
        let gridSquare = gridSquares[i];
        gridSquare.addEventListener('click', event => {
            let current = event.currentTarget;
            let currentId = event.currentTarget.id;

            if (even(clickCount) === false) {
                if (isSquareOccupied(playerX, playerO, currentId)) {
                    return;
                } else {
                    current.innerHTML = "<img src='./images/player-x.svg'/>";
                    playerX.push(currentId);
                    clickCount += 1;
                    console.log(`incremented clickCount= ${clickCount}`);
                    console.log('playerX: ' + playerX);
                    console.log(`----------`);
                    return;
                } 
            }
            
            if (even(clickCount) === true) {
                if (isSquareOccupied(playerX, playerO, currentId)) {
                    return;
                } else {
                    current.innerHTML = "<img src='./images/player-o.svg'/>";
                    playerO.push(currentId);
                    clickCount += 1;
                    console.log(`incrememented clickCount= ${clickCount}`);
                    console.log('playerO: ' + playerO);
                    console.log(`----------`);
                    return;
                }
            }
        })
    }
};

gridClicker();

// console.log(playerX)
// console.log(clickCount)
