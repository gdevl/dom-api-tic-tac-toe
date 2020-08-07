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

// if playerx || o. length >= 3 then start checking
//

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
            console.log(`${player} is the winner`);
            return true
        }
    }
}

console.log('winner checker' + winnerChecker(solutions, ['square-6', 'square-2', 'square-4']))

const isSquareOccupied = (array1, array2, el) => {
    return (array1.includes(el) || array2.includes(el)); //
}

const gridClicker = () => {

    let gridSquares = document.querySelectorAll('.square'); // holds the squares divs
    let weHaveAWinner = false;
    for (let i = 0; i < gridSquares.length; i ++) {
        let gridSquare = gridSquares[i];
        gridSquare.addEventListener('click', event => {
            let current = event.currentTarget;
            let currentId = event.currentTarget.id;

            if (weHaveAWinner === true) {
                return;
            }

            if (even(clickCount) === false) {
                if (isSquareOccupied(playerX, playerO, currentId)) {
                    return;
                } else {
                    current.innerHTML = "<img src='./images/player-x.svg'/>";
                    playerX.push(currentId);
                    //add a condition if winnerChecker is true then create alert
                    if (winnerChecker(solutions, playerX)) {
                        weHaveAWinner = true
                        return;
                    }
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
                    if (winnerChecker(solutions, playerO)) {
                        weHaveAWinner=true;
                        return;
                    }
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
