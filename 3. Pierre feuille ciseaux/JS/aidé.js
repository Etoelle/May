// ! Long
// const BTNE = document.getElementById("btnElephant");
// const BTNS = document.getElementById("btnSouris");
// const BTNL = document.getElementById("btnLion");
// const CHOIX_IA = document.getElementById("jeuChoixIA");

// const CHOIX_POSSIBLES_IA = [
//   "/Img/elefant.png",
//   "/Img/souris.png",
//   "/Img/lion.png",
// ];

// BTNE.addEventListener("click", () => {
//   const RANDOM_INDEX = Math.floor(Math.random() * CHOIX_POSSIBLES_IA.length);
//   const IMG = CHOIX_POSSIBLES_IA[RANDOM_INDEX];
//   CHOIX_IA.querySelector("img").src = IMG;
// });
// BTNS.addEventListener("click", () => {
//   const RANDOM_INDEX = Math.floor(Math.random() * CHOIX_POSSIBLES_IA.length);
//   const IMG = CHOIX_POSSIBLES_IA[RANDOM_INDEX];
//   CHOIX_IA.querySelector("img").src = IMG;
// });
// BTNL.addEventListener("click", () => {
//   const RANDOM_INDEX = Math.floor(Math.random() * CHOIX_POSSIBLES_IA.length);
//   const IMG = CHOIX_POSSIBLES_IA[RANDOM_INDEX];
//   CHOIX_IA.querySelector("img").src = IMG;
// });

// ! ChatGPT
// const CHOIX_IA = document.getElementById("jeuChoixIA");
// const CHOIX_POSSIBLES_IA = [
//   "/Img/elefant.png",
//   "/Img/mouse.png",
//   "/Img/lion.png",
// ];

// function clickBtn() {
//   const RANDOM_INDEX = Math.floor(Math.random() * CHOIX_POSSIBLES_IA.length);
//   const IMG = CHOIX_POSSIBLES_IA[RANDOM_INDEX];
//   CHOIX_IA.querySelector("img").src = IMG;
// }

// document.getElementById("btnElephant").addEventListener("click", clickBtn);
// document.getElementById("btnSouris").addEventListener("click", clickBtn);
// document.getElementById("btnLion").addEventListener("click", clickBtn);

// ! Refait
const BTNE = document.getElementById("btnElephant");
const BTNS = document.getElementById("btnSouris");
const BTNL = document.getElementById("btnLion");
const CHOIX_IA = document.getElementById("jeuChoixIA");

const CHOIX_POSSIBLES_IA = [
  "/Img/elefant.png",
  "/Img/souris.png",
  "/Img/lion.png",
];

function onClick() {
  const RANDOM_INDEX = Math.floor(Math.random() * CHOIX_POSSIBLES_IA.length);
  const IMG = CHOIX_POSSIBLES_IA[RANDOM_INDEX];
  CHOIX_IA.querySelector("img").src = IMG;
}

BTNE.addEventListener("click", onClick);
BTNS.addEventListener("click", onClick);
BTNL.addEventListener("click", onClick);
