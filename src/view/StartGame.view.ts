
function createMethodButton(content: string, id: string, onClick: () => void) {
    const methodButton = document.createElement("button");
    methodButton.id = id;
    methodButton.textContent = content;
    methodButton.addEventListener("click", () => onClick());
    return methodButton;
}

export const ChosseGameMethod = (
    callBack: (method: "PLAYER" | "BOT") => void
) => {
    const title = document.createElement("h2");
    title.textContent = "Pilih mode permainan";
    title.classList.add("title");

    const playerVsPlayer = createMethodButton(
        "Player vs Player",
        "pvp",
        () => callBack("PLAYER")
    );

    const playerVsBot = createMethodButton(
        "Player vs Bot",
        "com",
        () => callBack("BOT")
    );

    const div = document.createElement("div");
    div.classList.add("game-method")
    div.appendChild(title);
    
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("method-button");
    div.appendChild(buttonGroup);

    buttonGroup.appendChild(playerVsPlayer);
    buttonGroup.appendChild(playerVsBot);
    return div;
}

// export function chossePlayerName(method: "PLAYER" | "BOT") {
//     if(method === "PLAYER") {

//     }
// }

