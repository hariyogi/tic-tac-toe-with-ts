type onCellClick = (index: number) => void;

let disableClick = false;
let currPlayerSymbol: "X" | "O" = "O";

const cellElls: HTMLElement[] = [];

const boardGame = document.createElement("div");
boardGame.classList.add("board-game");

interface boardCellArgs {
    callIndex: number,
    size: string,
    onCellClick: onCellClick
}

function BoardCell(args: boardCellArgs) {
    const div = document.createElement("div");
    div.classList.add("board-cell");
    div.style.height = args.size;
    div.style.width = args.size;
    div.id = `cell-${args.callIndex}`;

    div.addEventListener("click", () => {
        if (!disableClick && !div.classList.contains("occupied")) {
            div.classList.remove("hint");
            div.textContent = currPlayerSymbol;
            div.classList.add("occupied");
            args.onCellClick(args.callIndex);
        }
    });

    div.addEventListener("mouseover", () => {
        if (!disableClick && !div.classList.contains("occupied")) {
            div.classList.add("hint");
            div.textContent = currPlayerSymbol;
        }
    })

    div.addEventListener("mouseout", () => {
        if (!disableClick && !div.classList.contains("occupied")) {
            div.classList.remove("hint");
            div.textContent = "";
        }
    })

    return div;
}

/**
 * Buat baru boardnya
 */
function recreate() {
    setBoardState(true);
    cellElls.length = 0;
}

// Export Value

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
    cellElls.forEach((el) => {
        el.textContent = "";
        el.style.backgroundColor = "";
        el.style.color = "";
        el.classList.remove("occupied");
    });
}

export function highlightCell(...index: number[]) {
    index.forEach(i => {
        console.log(i);
        const cell = cellElls[i];

        if (cell != null) {
            cell.style.backgroundColor = "#B3FFAE";
        }
    });
}

export function setPlayerSymbol(playerSymbol: "O" | "X") {
    currPlayerSymbol = playerSymbol;
}

export function appendSymbol(cellIndex: number) {
    const cell = cellElls[cellIndex];
    cell.classList.remove("hint");
    cell.textContent = currPlayerSymbol;
    cell.classList.add("occupied");
}

/**
 * Membuat board baru untuk bermain game.
 * @returns boardGame Element
 */
export default function Board(onCellClick: onCellClick) {
    // Reset semua sebelum buat baru.
    recreate();

    for (let i = 0; i < 9; i++) {
        cellElls.push(BoardCell({
            size: "80px",
            callIndex: i,
            onCellClick: onCellClick
        }));
    }

    boardGame.replaceChildren(...cellElls);
    return boardGame;
}