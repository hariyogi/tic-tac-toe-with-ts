import Player from "../Player";
import Board, { isBoardFull, setBoardState, resetBoard, exitBoard } from "../view/Board.view";
import ScoreBoard, {
    changeScore,
    appendRonde,
    setWhoisWin,
    setDraw,
    resetWhoIsWin,
    exitScore
} from "../view/Scoreboard.view";

const player: Player[] = [];
let gameReady = false;
let gameOver = false;

const div = document.createElement("div");

const nextRoundBtn = document.createElement("button");
nextRoundBtn.textContent = "Ronde Selanjutnya"
nextRoundBtn.classList.add("game-over-btn");
nextRoundBtn.addEventListener("click", () => resetGame());

const backToHomeBtn = document.createElement("button");
backToHomeBtn.textContent = "Kembali ke Menu Utama"
backToHomeBtn.classList.add("game-over-btn");

export function initGame(player1: Player, player2: Player) {
    console.log(player);
    player[0] = player1;
    player[1] = player2;
    gameReady = true;
}

export default function BuildGame(backToHome: () => void) {
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

    backToHomeBtn.addEventListener("click", () => {
        exitGame();
        backToHome();
    });

    div.replaceChildren(scoreBoard, board);
    return div;

}

function handleGame(cellIndex: number, playerIndex: number) {
    const tempPlayer = player[playerIndex];
    tempPlayer.addingCellOccupied(cellIndex);
    if (isPlayerWin(tempPlayer)) {
        gameOver = true;
        tempPlayer.score++;
        console.log(tempPlayer.score);
        changeScore(tempPlayer.score, playerIndex);
        setWhoisWin(tempPlayer);
    } else if (isBoardFull()) {
        gameOver = true;
        appendRonde();
        setDraw();
    }

    if (gameOver) {
        showGameOverButton();
        setBoardState(false);
    }
}

function showGameOverButton() {
    div.appendChild(nextRoundBtn);
    div.appendChild(backToHomeBtn);
}

function resetGame() {
    appendRonde();
    gameOver = false;
    setBoardState(true);
    resetBoard();
    resetWhoIsWin();
    player[0].resetCellOccupied();
    player[1].resetCellOccupied();
    div.removeChild(nextRoundBtn);
    div.removeChild(backToHomeBtn);
}

function exitGame() {
    gameOver = false;
    exitBoard();
    exitScore();
    player.length = 0;
}

function isPlayerWin(player: Player) {
    const co = player.cellOccupied;
    return (co.includes(0) && co.includes(1) && co.includes(2))
        || (co.includes(3) && co.includes(4) && co.includes(5))
        || (co.includes(6) && co.includes(7) && co.includes(8))
        || (co.includes(0) && co.includes(4) && co.includes(8))
        || (co.includes(2) && co.includes(4) && co.includes(6))
        || (co.includes(1) && co.includes(4) && co.includes(7))
        || (co.includes(0) && co.includes(3) && co.includes(6))
        || (co.includes(2) && co.includes(5) && co.includes(8));
}