const board = document.querySelector('.board');
let cells = document.querySelectorAll('.cell');
let x = '<i class=\"fas\" >&#xf00d;</i>';
let y = '<i class=\"far fa-circle\" ></i>';
let turn = document.querySelector('.turn');
sym = ['<i class=\"fas\" style=\"font-size:40px\">&#xf00d;</i>', '<i class=\"far fa-circle\" style=\"font-size:40px\" ></i>'];

const restart = document.getElementById('restart');
let winner = document.querySelector('.message-text');
let popUp = document.getElementById('message');


var i = 0;

chance = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [2, 4, 6], [0, 4, 8]
]

startGame();

let xComb = [];
let oComb = [];

function startGame() {
    i = 0;
    turn.innerHTML = sym[i] + '\'s Turn';
    cells.forEach(element => {
        element.innerHTML = '';
        element.addEventListener('click', printSymbol, { once: true });
    });
    popUp.style.display = 'none';
}

function printSymbol(event) {
    let value = event.target;
    let len;
    if (i === 0 && value.innerHTML === '') {
        value.innerHTML = x;
        i = 1;
        xComb.push(event.target.id);
        turn.innerHTML = sym[i] + '\'s Turn';
        len = xComb.length;
    }
    else if (i === 1 && value.innerHTML === '') {
        value.innerHTML = y;
        i = 0;
        oComb.push(event.target.id);
        turn.innerHTML = sym[i] + '\'s Turn';
        len = oComb.length;
    }
    checkWinner(len);
}

function checkWinner(len) {
    chance.forEach(combinations => {
        xCount = 0;
        oCount = 0;
        for (let index = 0; index < combinations.length; index++) {
            for (let j = 0; j < len; j++) {
                if (combinations[index] == xComb[j]) {
                    xCount++;
                }
                else if (combinations[index] == oComb[j]) {
                    oCount++;
                    break;
                }
            }
        }
        if (xCount == 3) {
            endGame(x);
        }
        if (oCount == 3) {
            endGame(y);
        }
    });
    tie()
}

function tie() {
    if (xComb.length + oComb.length == 9) {
        endGame('Tie')
    }
}

function endGame(who) {
    xComb.splice(0);
    oComb.splice(0);
    turn.innerHTML = '';
    popUp.style.display = 'block';
    cells.forEach(element => {
        element.removeEventListener('click', printSymbol);
    });
    if (who == 'Tie') {
        winner.innerHTML = who;
    }
    else {
        winner.innerHTML = who + ' Won!';
    }
}