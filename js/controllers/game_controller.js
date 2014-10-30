'use strict';

function GameController($scope, game, grid_size) {
    $scope.grid = new Array(grid_size);
    $scope.status_message = "";
    $scope.computer_first = false;
    $scope.game_over = false;
    $scope.human_player_name = "Human";
    $scope.computer_win_count = 0;
    $scope.human_win_count = 0;
    $scope.tie_count = 0;

    $scope.startGame = function(){
        $scope.status_message = "";
        $scope.game_over = false;
    	game.start($scope.grid.length, $scope.computer_first);
        console.log($scope.computer_first);
        $scope.status_message = "game started";
    }

    $scope.makeMove = function(col, row){
        var boardIndex, symbol, winner;
        boardIndex = (row * grid_size) + col;
        if(game.board && game.board.canMove(boardIndex) && !game.winner && !game.tie){
            // make move
            game.move(boardIndex);

            // check winner
            if(game.winner) {
                if(game.winner === game.board.X) {
                    $scope.status_message = "you lose!";
                    $scope.computer_win_count++;
                }
                if(game.winner === game.board.O) {
                    $scope.status_message = "you win!";
                    $scope.human_win_count++;
                }
                $scope.game_over = true;
            }

            // check tie
            if(game.tie){
                $scope.status_message = "tie! no one wins!";
                $scope.tie_count++;
                $scope.game_over = true;
            }
        }
    }

    $scope.makeMoveUsingKeyBoard = function ($event) {
        keyEvent = (window.event ? keyEvent.keyCode : keyEvent.which) + ")";
console.log(keyEvent);
    }

    $scope.getSquareSymbol = function(col, row){
        var boardIndex = (row * grid_size) + col;
        return game.board ? game.board.renderSquare(boardIndex) : "";
    }

    $scope.isSquareInWinningCombo = function(col, row){
        var boardIndex;
        if(game.board && game.winner && game.board.winning_combo){
            boardIndex = (row * grid_size) + col;
            return game.board.winning_combo.indexOf(boardIndex) > -1;
        }
        return false;
    }
}
