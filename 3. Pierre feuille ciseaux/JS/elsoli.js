const BTNE = document.getElementById("btnElephant");
const BTNS = document.getElementById("btnSouris");
const BTNL = document.getElementById("btnLion");
const CHOIX_IA = document.getElementById("jeuChoixIA");
const RESULT = document.getElementById("resultat");
const SCORE_V = document.getElementById("jeuVousTotal");
const SCORE_IA = document.getElementById("jeuIATotal");

const CHOIX_POSSIBLES_IA = [
  "/Img/elefant.png",
  "/Img/souris.png",
  "/Img/lion.png",
];
function choiceOnClick(event) {
  console.log(event.target);
  const BTN_ID = event.target.id;
  let CHOIX_JOUEUR_INDEX;

  if (BTN_ID === "btnElephant") {
    CHOIX_JOUEUR_INDEX = 0;
  } else if (BTN_ID === "btnSouris") {
    CHOIX_JOUEUR_INDEX = 1;
  } else {
    CHOIX_JOUEUR_INDEX = 2;
  }

  const RANDOM_INDEX = Math.floor(Math.random() * CHOIX_POSSIBLES_IA.length);
  const IMG = CHOIX_POSSIBLES_IA[RANDOM_INDEX];
  CHOIX_IA.querySelector("img").src = IMG;

  switch (CHOIX_JOUEUR_INDEX) {
    case 0:
      if (RANDOM_INDEX === 0) {
        RESULT.innerText = `Égalité`;
      } else if (RANDOM_INDEX === 1) {
        RESULT.innerText = `Perdu`;
        SCORE_IA.innerText++;
      } else {
        RESULT.innerText = `Gagné`;
        SCORE_V.innerText++;
      }
      break;
    case 1:
      if (RANDOM_INDEX === 0) {
        RESULT.innerText = `Gagné`;
        SCORE_V.innerText++;
      } else if (RANDOM_INDEX === 1) {
        RESULT.innerText = `Égalité`;
      } else {
        RESULT.innerText = `Perdu`;
        SCORE_IA.innerText++;
      }
      break;
    case 2:
      if (RANDOM_INDEX === 0) {
        RESULT.innerText = `Perdu`;
        SCORE_IA.innerText++;
      } else if (RANDOM_INDEX === 1) {
        RESULT.innerText = `Gagné`;
        SCORE_V.innerText++;
      } else {
        RESULT.innerText = `Égalité`;
      }
      break;
  }

  // if (parseInt(SCORE_V.innerText) === 3) {
  //   setTimeout(() => {
  //     SCORE_V.innerText = "0";
  //     SCORE_IA.innerText = "0";
  //   }, 500);
  // }
}

BTNE.addEventListener("click", choiceOnClick);
BTNS.addEventListener("click", choiceOnClick);
BTNL.addEventListener("click", choiceOnClick);
