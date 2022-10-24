
const TitleDescEll = (title: string, className?: string) => {
    const h2Ell = document.createElement("h2");
    h2Ell.textContent = title;
    if (className !== undefined) {
        h2Ell.classList.add(className);
    }else {
        h2Ell.classList.add("title-desc");
    }

    return h2Ell;
}

const ValueDescEll = (content: string, className?: string) => {
    const pEll = document.createElement("p");
    pEll.textContent = content;
    if (className !== undefined) {
        pEll.classList.add(className);
    }else {
        pEll.classList.add("value-desc");
    }

    return pEll;
}

function DescriptionEll(title: HTMLHeadingElement, value: HTMLParagraphElement) {
    const div = document.createElement("description");
    div.appendChild(title);
    div.appendChild(value);
    return div;
}

export { TitleDescEll, ValueDescEll, DescriptionEll };