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
    onCellClick: boardCallBack

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
                target.classList.remove("hint");
                target.textContent = symbol;
            }
        }
    });
    div.addEventListener("mouseover", (e) => {
        if(!disableClick && !isCellOccupied(args.callIndex)) {
            const target = e.target as HTMLDivElement;
            target.classList.add("hint");
            target.textContent = player[currPlayer].symbol;
        }
    })

    div.addEventListener("mouseout", (e) => {
        if(!disableClick && !isCellOccupied(args.callIndex)) {
            const target = e.target as HTMLDivElement;
            target.classList.remove("hint");
            target.textContent = "";
        }
    })

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

/**
 * Buat baru boardnya
 */
 function recreate() {
    setBoardState(true);
    player.length = 0;
    currPlayer = 0;
    occupiedCell.length = 0;
    cellElls.length = 0;
}

// Export Value

export function isBoardFull() {
    return occupiedCell.length === 9;
}

/**
 * Ketika state false maka board tidak dapat di klik / di disable
 * @param state true untuk enable dan false untuk disable.
 */
export function setBoardState(state: boolean) {
    disableClick = !state;
}

/**
 * Reset semua board untuk lanjut bermain lagi.
 */
export function resetBoard() {
    occupiedCell.length = 0;
    currPlayer = 0;
    cellElls.forEach((el) => {
        el.textContent = "";
        el.style.backgroundColor = "";
        el.style.color = "";
    });
}

export function highlightCell(...index: number[]) {
    index.forEach(i => {
        console.log(i);
        const cell = cellElls[i];

        if(cell != null) {
            cell.style.backgroundColor = "#B3FFAE";
        }
    });
}

/**
 * Membuat board baru untuk bermain game.
 * @returns boardGame Element
 */
export default function Board(args: boardGameArgs) {
    // Reset semua sebelum buat baru.
    recreate();
    player[0] = args.player1;
    player[1] = args.player2;
    currPlayer = 0;

    for (let i = 0; i < 9; i++) {
        cellElls.push(BoardCell({
            size: "80px",
            callIndex: i,
            onClick: (index) => doWhenCellClick(index, args.onCellClick)
        }));
    }

    boardGame.replaceChildren(...cellElls);
    return boardGame;
}