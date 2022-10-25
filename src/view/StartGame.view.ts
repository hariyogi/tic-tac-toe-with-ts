
function createMethodButton(content: string, id: string, onClick: () => void) {
    const methodButton = document.createElement("button");
    methodButton.id = id;
    methodButton.textContent = content;
    methodButton.addEventListener("click", () => onClick());
    return methodButton;
}

function createNameInput(label: string, id: string, onChange: (value: string) => void) {
    const containerEll = document.createElement("div");
    containerEll.classList.add("name-input-cont");

    const labelEll = document.createElement("label");
    labelEll.textContent = label;
    labelEll.htmlFor = id;
    containerEll.appendChild(labelEll);

    const input = document.createElement("input");
    input.id = id;
    input.name = id;
    input.type = "text";
    input.placeholder = "Masukan nama";
    input.addEventListener("change", (e) => {
        const target = e.target as HTMLInputElement;
        onChange(target.value);
    })

    containerEll.appendChild(input);

    return containerEll;
}

export function chosseGameMethod (
    callBack: (method: "PLAYER" | "BOT") => void
) {
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

export function chossePlayerName(
    method: "PLAYER" | "BOT",
    callBack: (player1: string, player2: string) => void,
    onBack: () => void
) {
    let player1Name = "Player 1";
    let player2Name = "Player 2";

    const container = document.createElement("div");
    container.classList.add("insert-name");

    const title = document.createElement("h2");
    title.textContent = "Masukan nama pemain...";
    container.appendChild(title);
    
    const player1 = createNameInput(
        "Player 1", 
        "player-1", 
        (c) => player1Name = c
    );

    const player2 = createNameInput(
        "Player 2", 
        "player-2",
        (c) => player2Name = c
    );

    container.appendChild(player1);

    if(method === "PLAYER") {
        container.appendChild(player2);
    }

    const nextButton = document.createElement("button");
    nextButton.addEventListener("click", () => callBack(player1Name, player2Name));
    nextButton.textContent = "Lanjut";
    nextButton.type = "button";

    const backButton = document.createElement("button");
    backButton.addEventListener("click", () => onBack());
    backButton.classList.add("back-btn");
    backButton.textContent = "Kembali";
    backButton.type = "button";

    container.appendChild(nextButton);
    container.appendChild(backButton);
    return container;
}

