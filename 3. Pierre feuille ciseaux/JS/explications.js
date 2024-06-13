//! img joueur, toutes les images dans l'id player-hand
const IMG_PLAYER = document.querySelectorAll("#player-hand img");

//! tableau de valeurs possibles
const CHOICES = ["pierre", "feuille", "ciseaux"];

//! Ajouter event aux img du joueur
for (const IMG of IMGS_PLAYER) {
  // argument (e) après click, c'est toujours l'événement qui vient d'être déclenché au click. Si code évolue, le e ne bouge pas même si l'image est modifiée.
  // on peut mettre n'importe quoi mais souvent e ou event
  IMG.addEventListener("click", (e) => {
    console.log(e.target.alt);
    // e = variable contenant un objet qui représente l'événement qui vient d'être déclenché
    // on y retrouve des infos pratiques
    // target = élément html qui a déclenché l'événement
    // alt = moyen le plus facile pour récupérer les mots clefs pour le tableau de CHOICES, évite de devoir créer un id en plus ou de chercher le mot dans la source
    const playerChoice = e.target.al;
    console.log(playerChoice);

    //! Générer choix IA
    // entre 0 et 0.9999
    // fois 3 pour entre 0 et 2.9999
    // Math floor pour arrondi inférieur donc entre 0 et 2

    //? const nbRand = Math.floor(Math.random()*3)
    //? const computerChoice = CHOICES[nbRand]

    // racourcis :
    const computerChoice = CHOICES[Math.floor(Math.random() * 3)];
    console.log("COMPUTER : ", computerChoice);
    //MAJ IMG
    IMG_COMPUTER.src = `./images/$(computerChoice).img`;
    // IMG_COMPUTER.setAttribute("src", `./images/$(computerChoice).img`)

    //! Savoir qui a gagné
    if (playerChoice === computerChoice) {
      console.log("Égalité");
      // RESULT.textContent ou innerText
      RESULT.innerText = "C'est une égalité";
    } else if (
      (playerChoice === "pierre" && computerChoice === "ciseaux") ||
      (playerChoice === "feuille" && computerChoice === "pierre") ||
      (playerChoice === "ciseaux" && computerChoice === "feuille")
    ) {
      console.log("Gagné");
      RESULT.innerText = `$(playerChoice) gagne contre $(computerChoice)`;
    } else {
      console.log("Perdu");
      RESULT.innerText = `$(playerChoice) perd contre $(computerChoice)`;
    }
  });
}
