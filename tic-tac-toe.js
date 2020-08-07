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
<<<<<<< HEAD


    // gridSquares.forEach(gridSquare => {

    //     gridSquare.addEventListener('click', event => {
    //         // every time we click, we add the
            // let current = event.target;
            // let currentId = event.target.id;

    //         if (isSquareOccupied(playerX, playerO, currentId)) {
    //             return;
    //         }


    //         console.log('current= ' + current);
    //         console.log('currentId= ' + currentId);

            // if (!even(clickCount)) {
            //     current.innerHTML = "<img src='./images/player-x.svg'/>";
            //     playerX.push(currentId);
            //     clickCount++;
            //     console.log('playerX: ' + playerX);
            //     console.log(clickCount);
            //     return;
            // } else if (even(clickCount)) {
            //     current.innerHTML = "<img src='./images/player-o.svg'/>";
            //     playerO.push(currentId);
            //     clickCount++;
            //     console.log('playerO: ' + playerO);
            //     console.log(clickCount);
            //     return;
            // }
    //     });
    // });
=======
>>>>>>> f4cd111a281bd8bf2058276d0a0b590b976ef2b1

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
