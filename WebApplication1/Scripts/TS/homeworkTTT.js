'use strict';
$(document).ready(function () {
    var gameBoard = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8']
    ];
    var currentPlayer = 'X';
    //let row0 = gameBoard[0];
    //let row1 = gameBoard[1];
    //let row2 = gameBoard[2];
    //console.log(gameBoard[0][1]);
    $('td').on('click', function () {
        var td = $(this);
        if (!td.text()) {
            //Get the row and col of the clicked td
            var coords = td.attr('id').split(','); // ['' , '']
            var row = parseInt(coords[0]);
            var col = parseInt(coords[1]);
            //console.log(gameBoard[row][col]);
            //Update the gameBoard
            gameBoard[row][col] = currentPlayer;
            td.text(currentPlayer);
            //Switch players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            //Check row for winner
            for (var i_1 = 0; i_1 < 3; i_1++) {
                checkWinner(gameBoard[i_1]);
            }
            //Check col for winner
            for (var i_2 = 0; i_2 < 3; i_2++) {
                checkWinner([gameBoard[0][i_2],
                    gameBoard[1][i_2],
                    gameBoard[2][i_2]]);
            }
            //Check Diagonal (backslash)
            checkWinner([gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]]);
            //Check Diagonal (backslash)
            checkWinner([gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]]);
        }
    });
});
function checkWinner(line) {
    if (line.every(function (ele) {
        return ele == line[0];
    })) {
        console.log("Player " + line[0] + " won");
    }
}
