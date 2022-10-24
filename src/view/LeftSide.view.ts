import Header from "./Header.view";
import { TitleDescEll as Title, ValueDescEll as Value, DescriptionEll as Description } from "./Desc.view";

const leftSideEll = document.createElement("div");
leftSideEll.classList.add("left-side");

export default function LeftSide() {
    const header = Header("Tic Tac Toe", "Permainan Masa Kini");
    const about = Description(
        Title("Tentang"),
        Value("Tic Tac Toe adalah permain papan dengan 2 pemain biasanya menggunakan simbol X dan O."
            + "Kondisi menang tic tac toe adalah ketika 1 pemain berhasil menjejerkan 3 simbolnya secara tegak, lurus atau silang"
        )
    );
    const howToPlay = Description(
        Title("Cara bermain"),
        Value("Klik disalah satu kotak dan jejerkan simbol hingga berjejer 3")

    );
    leftSideEll.appendChild(header);
    leftSideEll.appendChild(about);
    leftSideEll.appendChild(howToPlay);
    return leftSideEll;
}