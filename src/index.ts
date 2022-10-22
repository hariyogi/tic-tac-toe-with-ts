
type status = "ACTIVE" | "BLOCK";

interface User {
    name: string;
    id: number;
}

const user = (name: string, id: number) : User | string => {
    return {name, id};
}


function component() {
    const element = document.createElement("div");
    
    element.textContent = "Hello webpack use TypeScript";

    const test = user("Bimbim", 12);
    const mumi = "Mumi";
    const cicak : unknown = '';

    console.log(cicak);

    mumi.toLowerCase();

    return element;
}

document.body.appendChild(component());