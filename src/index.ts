import LeftSide from "./view/LeftSide.view";
import { MainBody, replaceBody } from "./view/MainBody.view";
import { chosseGameMethod, chossePlayerName } from "./view/StartGame.view";
import Board from "./view/Board.view";
import Player from "./Player";
import ScoreBoard from "./view/Scoreboard.view";
import "./styles/style.css"

const body = document.body;

body.appendChild(LeftSide());
body.appendChild(MainBody());

function setGameMethod() {
    replaceBody(chosseGameMethod(method => chosePlayerNameEll(method)));
}

function createGameBoard(player1: Player, player2: Player) {
    const div = document.createElement("div");
    div.appendChild(ScoreBoard({
        player1: player1,
        player2: player2
    }));

    div.appendChild(Board({
        player1: player1,
        player2: player2,
        callBack: (args) => console.log(args)
    }));

    return div;
}

function chosePlayerNameEll(method: "PLAYER" | "BOT") {
    replaceBody(chossePlayerName(method, (p1: string, p2: string) => {
        const player1 = Player(p1, "O");
        const player2 = Player(p2, "X");
        replaceBody(createGameBoard(player1, player2));
    }, () => setGameMethod()));
}

setGameMethod();




