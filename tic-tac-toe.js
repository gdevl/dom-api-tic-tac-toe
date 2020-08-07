// add a function that listens to each div (square) is click
// use a click counter to keep track of which token to place
// (place x's on odd click counts and o's on even click counts)
// need a function that tracks

const playerX = [];
const playerO = [];
let allGrids = playerX.length + playerO.length;
let clickCount = 1;

function even(n) {
    return n % 2 === 0;
}

let solutions = [
    ['square-0', 'square-1', 'square-2'],
    ['square-3', 'square-4', 'square-5'],
    ['square-6', 'square-7', 'square-8'],
    ['square-0', 'square-3', 'square-6'],
    ['square-1', 'square-4', 'square-7'],
    ['square-2', 'square-5', 'square-8'],
    ['square-0', 'square-4', 'square-8'],
    ['square-2', 'square-4', 'square-6']
]

let winnerChecker = (solutions, player) => {
    for (let i = 0; i < solutions.length; i++) {
        let solution = solutions[i];

        if (player.includes(solution[0]) && player.includes(solution[1]) && player.includes(solution[2])) {
            console.log('We have a winner! Congratulations!');
            return true;
        }
    }
}

const tieChecker = (player1, player2, weHaveAWinner) => {
    return player1.length + player2.length === 9 && !weHaveAWinner;
}


const isSquareOccupied = (array1, array2, el) => {
    return (array1.includes(el) || array2.includes(el)); //
}

const gridClicker = () => {

    let gridSquares = document.querySelectorAll('.square'); // holds the squares divs
    let weHaveAWinner = false;
    for (let i = 0; i < gridSquares.length; i ++) {
        let gridSquare = gridSquares[i];
        gridSquare.addEventListener('click', event => {

            // check for winner
            if (weHaveAWinner) {
                return;
            }

            let current = event.currentTarget;
            let currentId = event.currentTarget.id;

            if (even(clickCount) === false) {
                if (isSquareOccupied(playerX, playerO, currentId)) {
                    return;
                } else {
                    current.innerHTML = "<img src='./images/player-x.svg'/>";
                    playerX.push(currentId);
                    if (winnerChecker(solutions, playerX)) {
                        weHaveAWinner = true;
                        return;
                    }
                    if (tieChecker(playerX, playerO, weHaveAWinner)) {
                        console.log('We have a tie!');
                        return;
                    }
                    clickCount += 1;
                    return;
                }
            }

            if (even(clickCount) === true) {
                if (isSquareOccupied(playerX, playerO, currentId)) {
                    return;
                } else {
                    current.innerHTML = "<img src='./images/player-o.svg'/>";
                    playerO.push(currentId);
                    if (winnerChecker(solutions, playerO)) {
                        weHaveAWinner=true;
                        // console.log(weHaveAWinner);
                        return;
                    }
                    if (tieChecker(playerX, playerO, weHaveAWinner)) {
                        console.log('We have a tie!');
                        return;
                    }
                    clickCount += 1;
                    return;
                }
            }
        })
    }

};

gridClicker();
