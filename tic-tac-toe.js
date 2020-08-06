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
    return (array1.includes(el) || array2.includes(el));
}
// console.log(isSquareOccupied(['square-0', 'square-1'], 'square-0'));
const gridClicker = () => {

    let gridSquares = document.querySelectorAll('.square'); // holds the squares divs
    

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

    for (let i = 0; i < gridSquares.length; i ++) {
        let gridSquare = gridSquares[i];
        gridSquare.addEventListener('click', event => {
            let current = event.target;
            let currentId = event.target.id;

            if (isSquareOccupied(playerX, playerO, currentId)) {
                return;
            }

            if (!even(clickCount)) {
                current.innerHTML = "<img src='./images/player-x.svg'/>";
                playerX.push(currentId);
                clickCount+=1;
                console.log('playerX: ' + playerX);
                console.log(clickCount);
                return;
            } else if (even(clickCount)) {
                current.innerHTML = "<img src='./images/player-o.svg'/>";
                playerO.push(currentId);
                clickCount+=1;
                console.log('playerO: ' + playerO);
                console.log(clickCount);
                return;
            }

        })
    }

};

gridClicker();

// console.log(playerX)
// console.log(clickCount)
