import Player from "../Player";
import Board, { isBoardFull } from "../view/Board.view";
import ScoreBoard, { changeScore } from "../view/Scoreboard.view";

const player: Player[] = [];
let gameReady = false;
let gameOver = false;

const div = document.createElement("div");

export function initGame(player1: Player, player2: Player) {
    player[0] = player1;
    player[1] = player2;
    gameReady = true;
}

export default function BuildGame() {
    if (!gameReady) {
        throw "Need call initGame()";
    }

    const scoreBoard = ScoreBoard({
        player1: player[0],
        player2: player[1]
    });

    const board = Board({
        player1: player[0],
        player2: player[1],
        callBack: (args) => handleGame(args.cellIndex, args.playerIndex)
    });

    div.appendChild(scoreBoard);
    div.appendChild(board);
    return div;

}

function handleGame(cellIndex: number, playerIndex: number) {
    const tempPlayer = player[playerIndex];
    tempPlayer.addingCellOccupied(cellIndex);
    console.log(`${tempPlayer.cellOccupied} player ${playerIndex}`);
    if(isPlayerWin(tempPlayer)) {
        gameOver = true;
        tempPlayer.score++;
        console.log(tempPlayer.score);
        changeScore(tempPlayer.score, playerIndex);
        console.log(`Player ${tempPlayer.name} win`);
    }else if(isBoardFull()) {
        gameOver = true;
        console.log("draw");
    }
}

function isPlayerWin(player: Player) {
    const co = player.cellOccupied;
    return (co.includes(0) && co.includes(1) && co.includes(2))
        || (co.includes(3) && co.includes(4) && co.includes(5))
        || (co.includes(6) && co.includes(7) && co.includes(8))
        || (co.includes(0) && co.includes(4) && co.includes(8))
        || (co.includes(2) && co.includes(4) && co.includes(8))
        || (co.includes(1) && co.includes(4) && co.includes(7))
        || (co.includes(0) && co.includes(3) && co.includes(6))
        || (co.includes(2) && co.includes(5) && co.includes(8));
}