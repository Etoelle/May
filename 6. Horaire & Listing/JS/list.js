const people = [
  {
    avatar: "/Avatars/Alexandra.png",
    nom: "Wathelet",
    prenom: "Alexandra",
    mot: "Nailtech",
  },
  {
    avatar: "/Avatars/Amandine.png",
    nom: "Ameye",
    prenom: "Amandine",
    mot: "Solaire",
  },
  {
    avatar: "/Avatars/Béné.png",
    nom: "Lagasse",
    prenom: "Béné",
    mot: "Cultivée",
  },
  {
    avatar: "/Avatars/Fathima.png",
    nom: "Bouazzaoui",
    prenom: "Fathima",
    mot: "Indépendante",
  },
  {
    avatar: "/Avatars/Ksenia.png",
    nom: "Kozjanova",
    prenom: "Kzenia",
    mot: "Raiponce",
  },
  {
    avatar: "/Avatars/Lara.png",
    nom: "Lauro",
    prenom: "Lara",
    mot: "Solitaire",
  },
  {
    avatar: "/Avatars/Laurie.png",
    nom: "Serwier",
    prenom: "Laurie",
    mot: "Musicienne",
  },
  {
    avatar: "/Avatars/Magaly.png",
    nom: "Fernandez Garcia",
    prenom: "Magaly",
    mot: "Douée",
  },
  {
    avatar: "/Avatars/Maissaa.png",
    nom: "El Bachiri",
    prenom: "Maissaa",
    mot: "Stylée",
  },
  {
    avatar: "/Avatars/Sounia.png",
    nom: "Mhalla Dit Aounallah",
    prenom: "Sounia",
    mot: "Chaleureuse",
  },
  {
    avatar: "/Avatars/Sounya.png",
    nom: "Abattouy",
    prenom: "Sounya",
    mot: "Discrète",
  },
  {
    avatar: "/Avatars/Tamara.png",
    nom: "Vandebroeck",
    prenom: "Tamara",
    mot: "Inspirante",
  },
  {
    avatar: "/Avatars/Zuzana.png",
    nom: "Droppova",
    prenom: "Zuzana",
    mot: "Joviale",
  },
];

const tbody = document.querySelector("#peopleContainer tbody");

function rowCreator() {
  people.forEach((person, index) => {
    const tr = document.createElement("tr");

    const tdAvatar = document.createElement("td");
    const imgAvatar = document.createElement("img");
    imgAvatar.src = person.avatar;
    imgAvatar.alt = `${person.prenom} ${person.nom}`;
    tdAvatar.appendChild(imgAvatar);
    tr.appendChild(tdAvatar);

    const tdSurname = document.createElement("td");
    tdSurname.textContent = person.nom;
    tr.appendChild(tdSurname);

    const tdName = document.createElement("td");
    tdName.textContent = person.prenom;
    tr.appendChild(tdName);

    const tdWord = document.createElement("td");
    tdWord.textContent = person.mot;
    tr.appendChild(tdWord);

    tbody.appendChild(tr);

    if (index % 2 !== 0) {
      tr.classList.add("impair");
    }
  });
}

rowCreator();
