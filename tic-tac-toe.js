// add a function that listens to each div (square) is click
// use a click counter to keep track of which token to place
// (place x's on odd click counts and o's on even click counts)
// need a function that tracks

const playerX = [];
const playerO = [];
let allGrids = playerX.length + playerO.length;
let clickCount = 1;
let header = document.getElementById('game-status');
let newGameBtn = document.getElementById('new-game');
let giveUpBtn = document.getElementById('give-up');
let giveUpPushed = false

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
            if (giveUpPushed) {
                return
            }
            // check for winner
            if (weHaveAWinner) {
                return;
            }


            let current = event.currentTarget;
            let currentId = event.currentTarget.id;

            if (!even(clickCount)) {
                if (isSquareOccupied(playerX, playerO, currentId)) {
                    return;
                } else {
                    current.innerHTML = "<img src='./images/player-x.svg'/>";
                    playerX.push(currentId);
                    if (winnerChecker(solutions, playerX)) {
                        weHaveAWinner = true;
                        let winnerContent = document.createTextNode('Player X is the winner!');
                        header.append(winnerContent);
                        newGameBtn.classList.remove('btn-disable')
                        return;
                    }
                    if (tieChecker(playerX, playerO, weHaveAWinner)) {
                        let titleContent = document.createTextNode('There is a tie, good jo both??');
                        header.append(titleContent);
                        newGameBtn.classList.remove('btn-disable')
                        return;
                    }
                    clickCount += 1;
                    return;
                }
            }

            if (even(clickCount)) {
                if (isSquareOccupied(playerX, playerO, currentId)) {
                    return;
                } else {
                    current.innerHTML = "<img src='./images/player-o.svg'/>";
                    playerO.push(currentId);
                    if (winnerChecker(solutions, playerO)) {
                        weHaveAWinner=true;
                        let winnerContent = document.createTextNode('Player O is the winner!');
                        header.append(winnerContent);
                        newGameBtn.classList.remove('btn-disable')
                        // console.log(weHaveAWinner);
                        return;
                    }
                    if (tieChecker(playerX, playerO, weHaveAWinner)) {
                        let titleContent = document.createTextNode('There is a tie, good jo both??');
                        header.append(titleContent);
                        newGameBtn.classList.remove('btn-disable')
                        return;
                    }
                    clickCount += 1;
                    return;
                }
            }
        })
    }
};

const newGame = () => {
    newGameBtn.addEventListener('click', event =>{
        location.reload()
    })
}
const giveUp = () => {
    giveUpBtn.addEventListener('click', event => {
        if (even(clickCount)) {
            let winnerContent = document.createTextNode('Player O is the winner!');
            header.append(winnerContent);
            giveUpBtn.classList.add('btn-disable');
            newGameBtn.classList.remove('btn-disable')
            giveUpPushed = true
        } else {
            let winnerContent = document.createTextNode('Player X is the winner!');
            header.append(winnerContent);
            giveUpBtn.classList.add('btn-disable');
            newGameBtn.classList.remove('btn-disable')
            giveUpPushed = true
        }
    })
}

gridClicker();
newGame();
giveUp();
