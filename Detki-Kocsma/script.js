const honaps = document.querySelector("header h3")
const napok = document.querySelector(".dates")
const cimsor = document.querySelector("#prev, #next")

const honapok = [
    "Január",
    "Február",
    "Március",
    "Április",
    "Május",
    "Június",
    "Július",
    "Augusztus",
    "Szeptember",
    "Október",
    "December",

];


let date = new Date();
let honap = date.getMonth();
let ev = date.getFullYear();


function render() {
    const start = new Date(ev, honap, 1).getDay();
    const endDate = new Date(ev, honap + 1, 0).getDate();
    const end = new Date(ev, honap, endDate).getDay();
    const endPrev = new Date(ev, honap, 0).getDate();


    let datesHtml = "";
}