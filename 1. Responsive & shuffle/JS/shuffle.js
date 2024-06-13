const BTN_SHUFFLE = document.getElementById("btnShuffle");

// ! Option 1, plus longue
// let cardDruide = document.getElementById("cardDruide");
// let cardDemoniste = document.getElementById("cardDemoniste");
// let cardMage = document.getElementById("cardMage");
// let cardPaladin = document.getElementById("cardPaladin");
// let cardVoleur = document.getElementById("cardVoleur");

// BTN_SHUFFLE.addEventListener("click", () => {
//   cardDruide.style.order = Math.ceil(Math.random() * 10);
//   cardDemoniste.style.order = Math.ceil(Math.random() * 10);
//   cardMage.style.order = Math.ceil(Math.random() * 10);
//   cardPaladin.style.order = Math.ceil(Math.random() * 10);
//   cardVoleur.style.order = Math.ceil(Math.random() * 10);
// });

// ! Option 2, mieux
const CONTAINER = document.getElementById("cardsContainer");
BTN_SHUFFLE.addEventListener("click", () => {
  for (const CARD of CONTAINER.children) {
    CARD.style.order = Math.ceil(Math.random() * 10);
  }
});

// ! Option 3, plus rapide
