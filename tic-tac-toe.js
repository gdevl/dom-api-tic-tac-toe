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


const gridClicker = () => {
    let gridSquares = document.querySelectorAll('.square'); // holds the squares divs
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('click', event => {
            // every time we click, we add the 
            if (clickCount)
        })
    })


    // buttons.forEach(button => {
    //     button.addEventListener('click', event => {
    //         let toRemove = event.target.parentNode.id;
    //         console.log(toRemove);
    //         localStorage.removeItem(toRemove);
    //         location.reload();
    //     });
    // });
}