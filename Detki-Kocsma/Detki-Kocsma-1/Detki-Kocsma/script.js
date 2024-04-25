const header = document.querySelector("header h3")
const napok = document.querySelector(".napok")
const cimsor = document.querySelector("#elozo, #kovetkezo")

const Osszhonap = [
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
]

let date = new Date();
let honap = date.getMonth();
let ev = date.getFullYear();


function render() {
    const start = new Date(ev, honap, 1).getDay();
    const endDate = new Date(ev, honap + 1, 0).getDate();
    const end = new Date(ev, honap, endDate).getDay();
    const endPrev = new Date(ev, honap, 0).getDate();


    let honapok = "";

    for (let i = start; i > 0; i--) {
        honapok += `<li class="inactive">${endPrev - i + 1}</li>`;
    }
    for (let i = 1; i <= endDate; i++) {
        let className =
          i === date.getDate() &&
          honap === new Date().getMonth() &&
          ev === new Date().getFullYear()
            ? ' class="today"'
            : "";
        honapok += `<li${className}>${i}</li>`;
      }
    for (let i = end; i < 6; i++) {
        honapok += `<li class="inactive">${i - end + 1}</li>`;
    }

    napok.innerHTML = honapok;
    header.textContent = `${Osszhonap[honap]} ${ev}`;
}


    cimsor.addEventListener("click", (event) => {
        const btnId = event.target.id;

        if (btnId === "elozo" && honap === 0) {
            ev--;
            honap = 11;
        } else if (btnId === "kovetkezo" && honap === 11) {
            ev++;
            honap = 0;
        } else {
            honap = btnId === "kovetkezo" ? honap + 1 : honap - 1;
        }

        date = new Date(ev, honap, new Date().getDate());
        ev = date.getFullYear();
        honap = date.getMonth();

        render();


    });

render();
