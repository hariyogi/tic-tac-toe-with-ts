import Player from "../Player";

const player: Player[] = [];
let currPlayer = 0;
const occupiedCell: number[] = []

type cellOnClick = (index: number) => string | null;
type boardCallBack = (callBack: boardCallBackArgs) => void;

let disableClick = false;

const cellElls: HTMLElement[] = [];

const boardGame = document.createElement("div");
boardGame.classList.add("board-game");

interface boardCellArgs {
    callIndex: number,
    size: string,
    onClick: cellOnClick
}

interface boardGameArgs {
    player1: Player
    player2: Player,
    callBack: boardCallBack

}

interface boardCallBackArgs {
    cellIndex: number,
    playerIndex: number

}

function isCellOccupied(index: number) {
    return occupiedCell.includes(index);
}

function switchPlayer() {
    currPlayer = currPlayer === 0 ? 1 : 0
}

function appendOccupiedCell(cellindex: number) {
    occupiedCell.push(cellindex);
}

function BoardCell(args: boardCellArgs) {
    const div = document.createElement("div");
    div.classList.add("board-cell");
    div.style.height = args.size;
    div.style.width = args.size;
    div.id = `cell-${args.callIndex}`;
    div.addEventListener("click", (e) => {
        if (!disableClick) {
            const symbol = args.onClick(args.callIndex);
            if (symbol !== null) {
                const target = e.target as HTMLDivElement;
                target.textContent = symbol;
            }
        }
    });
    return div;
}

function doWhenCellClick(index: number, callBack: boardCallBack) {
    if (!isCellOccupied(index)) {
        const tempPlayer = player[currPlayer];
        appendOccupiedCell(index);
        callBack({
            cellIndex: index,
            playerIndex: currPlayer
        });
        switchPlayer();
        return tempPlayer.symbol;
    } else {
        return null;
    }
}

// Export Value

export function isBoardFull() {
    return occupiedCell.length === 9;
}

export function setBoardState(state: boolean) {
    disableClick = !state;
}

export function resetBoard() {
    occupiedCell.length = 0;
    currPlayer = 0;
    cellElls.forEach((el) => {
        el.textContent = "";
    });
}

export function exitBoard() {
    setBoardState(true);
    player.length = 0;
    currPlayer = 0;
    occupiedCell.length = 0;
    cellElls.length = 0;
}


export default function Board(args: boardGameArgs) {
    player[0] = args.player1;
    player[1] = args.player2;
    currPlayer = 0;

    for (let i = 0; i < 9; i++) {
        cellElls.push(BoardCell({
            size: "80px",
            callIndex: i,
            onClick: (index) => doWhenCellClick(index, args.callBack)
        }));
    }

    boardGame.replaceChildren(...cellElls);
    return boardGame;
}