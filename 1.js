const parent = document.querySelector("#parentBlock");
console.log(parent);

window.addEventListener('load",() => {
console.log("ON.LOAD");

const parent = document.querySelector("#parentBlock");
console.log("INSIDE.LOAD", parent);

let list = [
    { id: 1, title: "Angular" },
    { id: 2, title: "cpp" },
    { id: 2, title: "daat structure" },

    {
        id: 1, title: "css"
    },
    { id: 2, title: "HTML" },
    { id: 2, title: "Javascript" },
];


for (let i = 0; i < 10; i++) {
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";

    newElement.children[0].innerHTML = item.title;

    parent.insertBefore(newElement, parent.firstChild);
}
});