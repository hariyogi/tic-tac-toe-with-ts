interface Player {
    name: string
    symbol: "X" | "O"
    cellOccupied: number[]
    score: number
    appendScore(): void
    addingCellOccupied(index: number): void
}

const Player = (name: string, symbol: "X" | "O") : Player => {
    const cellOccupied: number[] = [];
    let score = 0;

    const appendScore = () => {
        score++;
    }

    const addingCellOccupied = (index: number) => {
        if(!cellOccupied.includes(index)) {
            cellOccupied.push(index);
        }
    } 

    return {name, symbol, cellOccupied, score, appendScore, addingCellOccupied};
}

export default Player;