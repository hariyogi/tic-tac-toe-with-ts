import LeftSide from "./view/LeftSide.view";
import { MainBody, replaceBody } from "./view/MainBody.view";
import { ChosseGameMethod } from "./view/StartGame.view";
import "./styles/style.css"

const body = document.body;

body.appendChild(LeftSide());
body.appendChild(MainBody());

replaceBody(ChosseGameMethod(method => {
    console.log(method);
}));


