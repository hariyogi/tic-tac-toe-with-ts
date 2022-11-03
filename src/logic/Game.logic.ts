import Player from "../Player";
import Board, {
    appendSymbol,
    setPlayerSymbol,
    setBoardState,
    resetBoard,
    highlightCell,
} from "../view/Board.view";

import ScoreBoard, {
    changeScore,
    appendRonde,
    setWhoisWin,
    setDraw,
    resetWhoIsWin,
    exitScore
} from "../view/Scoreboard.view";

interface initArgs {
    player1: Player
    player2: Player
    botLevel: "EASY" | "HARD" | null
}

const player: Player[] = [];
const occupiedCell: number[] = [];
let currPlayerIndex = 0;
let againstBot = false;
let bot: "EASY" | "HARD" | null = null;
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

export function initGame({ player1, player2, botLevel }: initArgs) {
    console.log(player);
    player[0] = player1;
    player[1] = player2;
    if (botLevel != null) {
        againstBot = true;
        bot = botLevel;
    }
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

    const board = Board((index) =>
        handleGame(index)
    );

    backToHomeBtn.addEventListener("click", () => {
        exitGame();
        backToHome();
    });

    div.replaceChildren(scoreBoard, board);
    return div;

}

function getUnOccupiedCell() {
    const unOccCell: number[] = [];

    for (let i = 0; i < 9; i++) {
        if (!occupiedCell.includes(i)) {
            unOccCell.push(i);
        }
    }

    return unOccCell;
}

function isBoardFull() {
    return occupiedCell.length >= 9;
}

function switchPlayer() {
    currPlayerIndex = currPlayerIndex === 1 ? 0 : 1;
    setPlayerSymbol(player[currPlayerIndex].symbol);
}

function handleGame(cellIndex: number) {
    occupiedCell.push(cellIndex);
    const tempPlayer = player[currPlayerIndex];
    tempPlayer.addingCellOccupied(cellIndex);
    const playerWinIndex = isPlayerWin(tempPlayer);

    if (playerWinIndex.length !== 0) {
        gameOver = true;
        tempPlayer.score++;
        highlightCell(...playerWinIndex);
        changeScore(tempPlayer.score, currPlayerIndex);
        setWhoisWin(tempPlayer);
    } else if (isBoardFull()) {
        gameOver = true;
        appendRonde();
        setDraw();
    }

    if (gameOver) {
        showGameOverButton();
        setBoardState(false);
    } else if (againstBot && currPlayerIndex === 0) {
        console.log("Easy Bot think...");
        switchPlayer();
        easyBotThink();
    } else {
        switchPlayer();
    }
}

function easyBotThink() {
    const onOccupiedCell = getUnOccupiedCell();
    console.log(onOccupiedCell);
    const randomCell = randomSuggestion(onOccupiedCell);
    appendSymbol(randomCell);
    handleGame(randomCell);
}

function randomSuggestion(unOccupiedCell: number[]) {
    const random = Math.floor(Math.random() * unOccupiedCell.length);

    return unOccupiedCell[random];
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
    occupiedCell.length = 0;
    currPlayerIndex = 0;
    setPlayerSymbol(player[currPlayerIndex].symbol);
    div.removeChild(nextRoundBtn);
    div.removeChild(backToHomeBtn);
}

function exitGame() {
    gameOver = false;
    exitScore();
    player.length = 0;
}

function isPlayerWin(player: Player) {
    const co = player.cellOccupied;
    if ((co.includes(0) && co.includes(1) && co.includes(2))) {
        return [0, 1, 2];
    } else if ((co.includes(3) && co.includes(4) && co.includes(5))) {
        return [3, 4, 5];
    } else if ((co.includes(6) && co.includes(7) && co.includes(8))) {
        return [6, 7, 8];
    } else if ((co.includes(0) && co.includes(4) && co.includes(8))) {
        return [0, 4, 8];
    } else if ((co.includes(2) && co.includes(4) && co.includes(6))) {
        return [2, 4, 6];
    } else if ((co.includes(1) && co.includes(4) && co.includes(7))) {
        return [1, 4, 7];
    } else if ((co.includes(0) && co.includes(3) && co.includes(6))) {
        return [0, 3, 6];
    } else if ((co.includes(2) && co.includes(5) && co.includes(8))) {
        return [2, 5, 8];
    } else {
        return [];
    }
}