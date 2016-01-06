'use strict';

$(document).ready(function () {

    let gameBoard = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8']
    ]

    let currentPlayer = 'X';

    //let row0 = gameBoard[0];
    //let row1 = gameBoard[1];
    //let row2 = gameBoard[2];

    //console.log(gameBoard[0][1]);

    $('td').on('click', function () {
        let td = $(this);
        if (!td.text()) {
            //Get the row and col of the clicked td
            let coords: string[] = td.attr('id').split(','); // ['' , '']
            let row = parseInt(coords[0]);
            let col = parseInt(coords[1]);
            //console.log(gameBoard[row][col]);

            //Update the gameBoard
            gameBoard[row][col] = currentPlayer;
            td.text(currentPlayer);

            //Switch players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            //Check row for winner
            for (let i = 0; i < 3; i++) {
                checkWinner(gameBoard[i]);
            }
            //Check col for winner
            for (let i = 0; i < 3; i++) {
                checkWinner([gameBoard[0][i],
                            gameBoard[1][i],
                            gameBoard[2][i]]);
            }

            //Check Diagonal (backslash)
            checkWinner([gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]]);

            //Check Diagonal (backslash)
            checkWinner([gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]]);
        }

    });

});


function checkWinner(line: string[]) {
    if (line.every(function (ele) {
        return ele == line[0];
    })) {
        console.log(`Player ${line[0]} won`);
    }
}