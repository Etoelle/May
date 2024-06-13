const cardsContainer = document.getElementById("cardsContainer");

function cardCreator() {
  TATTOOERS.forEach((tattooer) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const divFront = document.createElement("div");
    divFront.classList.add("side", "front");

    const ppFront = document.createElement("img");
    ppFront.src = tattooer.pp;
    ppFront.alt = tattooer.nom;
    ppFront.classList.add("pp");

    const instaFront = document.createElement("a");
    instaFront.textContent = tattooer.nom;
    instaFront.setAttribute("href", tattooer.insta);
    instaFront.setAttribute("target", "_blank");
    instaFront.classList.add("instaLink");

    const infosFront = document.createElement("div");
    const countryFront = document.createElement("div");
    countryFront.textContent = "Pays : " + tattooer.pays;
    const townFront = document.createElement("div");
    townFront.textContent = "Ville : " + tattooer.ville;
    const stylesFront = document.createElement("div");
    stylesFront.textContent = "Styles : " + tattooer.styles;
    infosFront.append(countryFront, townFront, stylesFront);
    infosFront.classList.add("infosFront");

    // const divBack = document.createElement("div");
    // divBack.classList.add("side", "back");

    // const instaBack = document.createElement("a");
    // instaBack.textContent = tattooer.nom;
    // instaBack.setAttribute("href", tattooer.insta);
    // instaBack.setAttribute("target", "_blank");
    // instaBack.classList.add("instaLink");

    // const imgBackContainer = document.createElement("div");
    // imgBackContainer.classList.add("imgBackContainer");

    cardsContainer.appendChild(divCard);
    divCard.appendChild(divFront);
    // divCard.append(divFront, divBack);
    divFront.append(instaFront, ppFront, infosFront);
    // divBack.append(instaBack, imgBackContainer);
  });
}
cardCreator();
