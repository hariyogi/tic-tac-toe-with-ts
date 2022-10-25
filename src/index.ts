import LeftSide from "./view/LeftSide.view";
import { MainBody, replaceBody } from "./view/MainBody.view";
import { chosseGameMethod, chossePlayerName } from "./view/StartGame.view";
import "./styles/style.css"

const body = document.body;

body.appendChild(LeftSide());
body.appendChild(MainBody());

function setGameMethod() {
    replaceBody(chosseGameMethod(method => chosePlayerNameEll(method)));
}

function chosePlayerNameEll(method: "PLAYER" | "BOT") {
    replaceBody(chossePlayerName(method, (p1: string, p2: string) => {
        console.log(p1);
        console.log(p2)
    }, () => setGameMethod()));
}

setGameMethod();




