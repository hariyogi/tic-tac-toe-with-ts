export default function HeaderEll (name: string, desc: string) {
    const h1Ell = document.createElement("h1");
    h1Ell.textContent = name;
    h1Ell.classList.add("title");

    const descEll = document.createElement("p");
    descEll.textContent = desc;
    descEll.classList.add("title-desc");

    const header = document.createElement("header");
    header.appendChild(h1Ell);
    header.appendChild(descEll);

    return header;
}