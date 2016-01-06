'use strict';
/*
//user takes 'X' and user starts first
let turn = 'X';

let user = 'X', computer = 'O', none = ' ';
let win = [
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

let winner = null;

let gameOver = true;

$(document).ready(function () {
        //user to choose a square
        $('#One').click(function () {
            if (gameBoard[0] === ' ') {
                $(this).prepend(user);
                gameBoard[0] = user;
                computerChoice();
                checkWin();
            }
            console.log(gameBoard)
        });
        $('#Two').click(function () {
            if (gameBoard[1] === ' ') {
                $(this).prepend(user);
                gameBoard[1] = user;
            }
            console.log(gameBoard)
        });
        $('#Three').click(function () {
            if (gameBoard[2] === ' ') {
                $(this).prepend(user);
                gameBoard[2] = user;
            }
            console.log(gameBoard)
        });
        $('#Four').click(function () {
            if (gameBoard[3] === ' ') {
                $(this).prepend(user);
                gameBoard[3] = user;
            }
            console.log(gameBoard)
        });
        $('#Five').click(function () {
            if (gameBoard[4] === ' ') {
                $(this).prepend(user);
                gameBoard[4] = user;
            }
            console.log(gameBoard)
        });
        $('#Six').click(function () {
            if (gameBoard[5] === ' ') {
                $(this).prepend(user);
                gameBoard[5] = user;
            }
            console.log(gameBoard)
        });
        $('#Seven').click(function () {
            if (gameBoard[6] === ' ') {
                $(this).prepend(user);
                gameBoard[6] = user;
            }
            console.log(gameBoard)
        });
        $('#Eight').click(function () {
            if (gameBoard[7] === ' ') {
                $(this).prepend(user);
                gameBoard[7] = user;
            }
            console.log(gameBoard)
        });
        $('#Nine').click(function () {
            if (gameBoard[8] === ' ') {
                $(this).prepend(user);
                gameBoard[8] = user;
            }
            console.log(gameBoard)
        });


    //to reset to New Game
    //$('#newGame').click(function () {
    //    $('#One').text(' ');
    //    $('#Two').text(' ');
    //    $('#Three').text(' ');
    //    $('#Four').text(' ');
    //    $('#Five').text(' ');
    //    $('#Six').text(' ');
    //    $('#Seven').text(' ');
    //    $('#Eight').text(' ');
    //    $('#Nine').text(' ');
    //    let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    //    gameOver = false;
    //});
});
*/
/*

function switchTurn() {
    if (checkWin(turn)) {
        setMessage(turn + ' won the game!');
        winner = turn;
    } else if (turn === 'X') {
        turn = 'O';
        setMessage("It's " + turn + "'s turn.");
    } else {
        turn = 'O';
        setMessage("It's " + turn + "'s turn.");
    }
}

function nextTurn() {
    $('.square').click(function () {
        if (winner != null) {
            setMessage('The game is over.')
        } else if (gameBoard[1] === ' ') {
            $(this).prepend(turn);
            gameBoard[1] = turn;
            switchTurn();
        } else {
            setMessage('That square is already used.');
        });
});

function setMessage(msg) {
    $('#message').text(msg);
}

function checkWin(move) {
    let result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    let result = false;
}

*/
