import Player from "../Player"

interface scoreBoardArgs {
    player1: Player
    player2: Player
}

const container = document.createElement("div");
container.classList.add("score-board-cont");

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-cont");

const rondeEll = document.createElement("h2");
rondeEll.classList.add("ronde");
rondeEll.id = "ronde";

const whoIsWinEll = document.createElement("p");
whoIsWinEll.id = "who-is-win";

let ronde = 1;


function buildScore(player: Player, playerNum: number) {
    const nameEll = document.createElement("p");
    nameEll.classList.add("score-name");
    nameEll.textContent = player.name;

    const scoreEll = document.createElement("p");
    scoreEll.classList.add("score-value");
    scoreEll.textContent = "0";
    scoreEll.id = `score-${playerNum}`;

    const div = document.createElement("div");
    div.appendChild(nameEll);
    div.appendChild(scoreEll);
    return div;
}


export function changeScore(score: number, playerNum: number) {
    const scoreEll = document.querySelector(`#score-${playerNum}`);
    if(scoreEll == null) {
        throw `Player No ${playerNum} tidak ditemukan`;
    }

    scoreEll.textContent = `${score}`;
}

export function appendRonde() {
    ronde++;

    rondeEll.textContent = `RONDE ${ronde}`;
}

export function setWhoisWin(player: Player) {
    whoIsWinEll.textContent = `${player.name} Menang`;
    container.appendChild(whoIsWinEll);
}

export function setDraw() {
    whoIsWinEll.textContent = "Yah draw...";
    container.appendChild(whoIsWinEll);
}

export function resetWhoIsWin() {
    whoIsWinEll.remove();
}

export function exitScore() {
    ronde = 1;
}


export default function ScoreBoard(args: scoreBoardArgs) {
    rondeEll.textContent = `RONDE ${ronde.toString()}`;
    container.appendChild(rondeEll);
    container.appendChild(scoreContainer);
    const scoreP1 = buildScore(args.player1, 0);
    const scoreP2 = buildScore(args.player2, 1);
    scoreContainer.append(scoreP1, scoreP2);
    return container;
}