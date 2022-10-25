const mainBody = document.createElement("main");
mainBody.classList.add("main-body");

export const MainBody = () => mainBody;

export const replaceBody = (content: HTMLElement) => {
    mainBody.replaceChildren(content);
}
