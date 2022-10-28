import Player from "../Player";

const player: Player[] = [];
let currPlayer = 0;
const occupiedCell: number[] = []

type cellOnClick = (index: number) => string | null;
type boardCallBack = (callBack: boardCallBackArgs) => void;

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


function BoardCell(args: boardCellArgs) {
    const div = document.createElement("div");
    div.classList.add("board-cell");
    div.style.height = args.size;
    div.style.width = args.size;
    div.id = `cell-${args.callIndex}`;
    div.addEventListener("click", (e) => {
        const symbol = args.onClick(args.callIndex);
        if(symbol !== null) {
            const target = e.target as HTMLDivElement;
            target.textContent = symbol;
        }
    });
    return div;
}

function doWhenCellClick(index: number, callBack: boardCallBack) {
    if(!occupiedCell.includes(index)) {
        const tempPlayer = player[currPlayer];
        occupiedCell.push(index);
        callBack({
            cellIndex: index,
            playerIndex: currPlayer
        });
        currPlayer = currPlayer === 0 ? 1 : 0;
        return tempPlayer.symbol;
    }else {
        return null;
    }
}

export function isBoardFull() {
    return occupiedCell.length === 9;
}


export default function Board(args: boardGameArgs) {
    player[0] = args.player1;
    player[1] = args.player2;

    currPlayer = 0;

    const boardGame = document.createElement("div");
    boardGame.classList.add("board-game");
    const cell: HTMLDivElement[] = [];
    for (let i = 0; i < 9; i++) {
        cell.push(BoardCell({
            size: "80px",
            callIndex: i,
            onClick: (index) => doWhenCellClick(index, args.callBack)
        }));
    }

    boardGame.append(...cell);
    return boardGame;
}