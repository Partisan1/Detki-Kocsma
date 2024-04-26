const header = document.querySelector("header h3")
const napok = document.querySelector(".datumok")
const cimsor = document.querySelectorAll("#elozo, #kovetkezo")
const background = document.querySelector("body")
const currentDate = document.querySelector(".currentDate p")
const time = document.querySelector(".ido h2")


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
  "November",
  "December",
]

const hetNapjai = [
  "Vasárnap",
  "Hétfő",
  "Kedd",
  "Szerda",
  "Csütörtök",
  "Péntek",
  "Szombat",
];

//Idő és dátum 

let date = new Date();
let honap = date.getMonth();
let ev = date.getFullYear();
let nap = date.getDate();
let today = hetNapjai[date.getDay()];
let currentMonth = Osszhonap[date.getMonth()]

function updateTime(){
  const most = new Date();
    const ora = most.getHours();
    const perc = most.getMinutes();
    const masodperc = most.getSeconds();

    const ido = `${ora.toString().padStart(2, '0')}:${perc.toString().padStart(2, '0')}:${masodperc.toString().padStart(2, '0')}`;
    time.innerText = ido;
}
let maiDate = `${ev}. ${currentMonth} ${nap}., ${today}`
currentDate.innerHTML = maiDate

//Háttérkép

header.id = new Date().getMonth() + 1;

if (header.id === "1" || header.id === "2" || header.id === "12") {
    background.style.backgroundImage = "url('./img/tél.jpg')";
} else if (header.id === "3" || header.id === "4" || header.id === "5") {
    background.style.backgroundImage = "url('./img/spring.jpg')";
} else if (header.id === "6" || header.id === "7" || header.id === "8") {
    background.style.backgroundImage = "url('./img/nyár.jpg')";
} else if (header.id === "9" || header.id === "10" || header.id === "11") {
    background.style.backgroundImage = "url('./img/ősz.jpg')";
}

function changeBackgroundAndMonth(direction) {
  if (direction === "elozo") {
    header.id = parseInt(header.id) - 1;
    if (header.id < 1) header.id = 12;
  } else if (direction === "kovetkezo") {
    header.id = parseInt(header.id) + 1;
    if (header.id > 12) header.id = 1;
  }
  if (header.id === "1" || header.id === "2" || header.id === "12") {
    background.style.backgroundImage = "url('./img/tél.jpg')";
  } else if (header.id === "3" || header.id === "4" || header.id === "5") {
    background.style.backgroundImage = "url('./img/spring.jpg')";
  } else if (header.id === "6" || header.id === "7" || header.id === "8") {
    background.style.backgroundImage = "url('./img/nyár.jpg')";
  } else if (header.id === "9" || header.id === "10" || header.id === "11") {
    background.style.backgroundImage = "url('./img/ősz.jpg')";
  }
}


//Naptár létrehozása

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

cimsor.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "elozo" && honap === 0) {
      ev--;
      honap = 11;
      header.id
    } else if (btnId === "kovetkezo" && honap === 11) {
      ev++;
      honap = 0;
    } else {
      honap = btnId === "kovetkezo" ? honap + 1 : honap - 1;
    }

    date = new Date(ev, honap, new Date().getDate());
    ev = date.getFullYear();
    honap = date.getMonth();
    
    
    changeBackgroundAndMonth(btnId)

    render();
  });
});


render();
updateTime();
setInterval(updateTime, 1000);