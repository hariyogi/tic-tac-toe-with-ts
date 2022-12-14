import LeftSide from "./view/LeftSide.view";
import { MainBody, replaceBody } from "./view/MainBody.view";
import { chosseGameMethod, chossePlayerName } from "./view/StartGame.view";
import Player from "./Player";
import BuildGame, { initGame } from "./logic/Game.logic";
import "./styles/style.css"

const body = document.body;

body.appendChild(LeftSide());
body.appendChild(MainBody());

function setGameMethod() {
    replaceBody(chosseGameMethod(method => chosePlayerNameEll(method)));
}

function chosePlayerNameEll(method: "PLAYER" | "BOT") {
    replaceBody(chossePlayerName(method, (p1, p2, botLevel) => {
        const player1 = Player(p1, "O");
        const player2 = Player(p2, "X");
        playingTheGame(player1, player2, botLevel);
    }, () => setGameMethod()));
}

function playingTheGame(player1: Player, player2: Player, botLevel: "EASY" | "HARD" | null) {
    initGame({
        player1: player1,
        player2: player2,
        botLevel: botLevel
    });
    replaceBody(BuildGame(() => setGameMethod()));
}

setGameMethod();




