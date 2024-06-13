const btnPlay = document.getElementById("btnPlay");
const penduContainer = document.getElementById("penduContainer");
const msg = document.getElementById("penduMessage");
const img = document.getElementById("penduImg");
const wordToFind = document.getElementById("wordToFind");
const wrongLetters = document.getElementById("wrongLetters");
const inputLetter = document.getElementById("inputLetter");
const btnResetInput = document.getElementById("resetInput");
const btnConfirm = document.getElementById("btnConfirm");

let randomIndexWord;
let randomWord;
let randomWordHidden;

const imgPendu = [
  "/Img/1.png",
  "/Img/2.png",
  "/Img/3.png",
  "/Img/4.png",
  "/Img/5.png",
  "/Img/6.png",
  "/Img/7.png",
];

//! Function Start
function startGame() {
  randomIndexWord = Math.floor(Math.random() * mots.length);
  randomWord = mots[randomIndexWord].toLowerCase();
  randomWordHidden = randomWord.replace(/./g, "_").split("");

  let indexImg = 0;
  wordToFind.innerText = randomWordHidden.join("");
  img.querySelector("img").src = imgPendu[indexImg];
  wrongLetters.innerText = "";
  inputLetter.value = "";
  msg.innerText = "";

  console.log(randomIndexWord);
  console.log(randomWord);
}

//! Function Confirm Input
function confirmInput() {
  msg.innerText = "";
  const inputValue = inputLetter.value;
  const inputValueConverted = inputValue.trim().toLowerCase().split("");

  if (inputValueConverted.length == 1) {
    if (randomWord.includes(inputValueConverted)) {
      console.log("oui");
      for (let indexWord = 0; indexWord < randomWord.length; indexWord++) {
        if (randomWord[indexWord] == inputValueConverted) {
          randomWordHidden[indexWord] = inputValueConverted;
          wordToFind.innerText = randomWordHidden.join("");
        } else {
          console.log("next");
        }
      }
    } else {
      console.log("non");
      indexImg++;
      if (indexImg < imgPendu.length) {
        wrongLetters.innerText += inputValueConverted;
        img.querySelector("img").src = imgPendu[indexImg];
      } else {
        msg.innerText = "Perdu, le mot à trouver était : " + randomWord;
      }
    }
  } else {
    msg.innerText = "La lettre encodée n'est pas valide";
  }

  console.log(inputValueConverted);
  inputLetter.value = "";
  inputLetter.focus();
}

startGame();
let indexImg = 0;

//! Play Button
btnPlay.addEventListener("click", () => {
  startGame();
});

//! Reset Button
btnResetInput.addEventListener("click", () => {
  inputLetter.value = "";
});

//! Confirm Button
btnConfirm.addEventListener("click", () => {
  confirmInput();
});

//! Confirm Enter Keycap
inputLetter.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    confirmInput();
  }
});
