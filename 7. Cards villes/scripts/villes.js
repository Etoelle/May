const CITIES = [
  {
    name: "Bruxelles",
    image: "/images/brussels.jpg",
    country: "Belgium",
    continent: "Europe",
    nbResidents: 194_291,
  },
  {
    name: "Buenos Aires",
    image: "/images/buenosaires.jpeg",
    country: "Argentina",
    continent: "South America",
    nbResidents: null,
  },
  {
    name: "Ischia",
    image: "/images/ischia.png",
    country: "Italy",
    continent: "Europe",
    nbResidents: 62_027,
  },
  {
    name: "Lisbonne",
    image: "/images/lisboa.jpg",
    country: "Portugal",
    continent: "Europe",
    nbResidents: null,
  },
  {
    name: "Londres",
    image: "/images/london.jpg",
    country: "United Kingdoms",
    continent: "Europe",
    nbResidents: 8_982_000,
  },
  {
    name: "Madrid",
    image: "/images/madrid.jpg",
    country: "Spain",
    continent: "Europe",
    nbResidents: null,
  },
  {
    name: "Ottawa",
    image: "/images/ottawa.jpg",
    country: "Canada",
    continent: "North America",
    nbResidents: 994_837,
  },
  {
    name: "Seoul",
    image: "/images/seoul.png",
    country: "Korea",
    continent: "Asia",
    nbResidents: 9_776_000,
  },
  {
    name: "Sydney",
    image: "/images/sydney.png",
    country: "Australia",
    continent: "Australia",
    nbResidents: 5_312_000,
  },
  {
    name: "Tokyo",
    image: "/images/tokyo.jpg",
    country: "Japan",
    continent: "Asia",
    nbResidents: 13_096_000,
  },
  {
    name: "Washington",
    image: "/images/washington.jpg",
    country: "United States of America",
    continent: "North America",
    nbResidents: 7_786_000,
  },
  {
    name: "Zagreb",
    image: "/images/zagreb.jpg",
    country: "Croatia",
    continent: "Europe",
    nbResidents: null,
  },
];
const BODY = document.querySelector("body");

function formatResidents(residents) {
  if (residents === null || residents === undefined) {
    return "donnée indisponible";
  } else if (typeof residents === "number") {
    return residents.toLocaleString("fr-FR") + " habitants";
  } else {
    return "donnée invalide";
  }
}

function cardCreator() {
  CITIES.forEach((town) => {
    const CARD_SECTION = document.createElement("section");

    const PIC_IMG = document.createElement("img");
    PIC_IMG.src = town.image;
    PIC_IMG.alt = town.name;

    const DIV_INFOS = document.createElement("div");
    const DIV_NAME = document.createElement("div");
    const DIV_COUNTRY = document.createElement("div");
    const DIV_CONTINENT = document.createElement("div");
    const DIV_RESIDENTS = document.createElement("div");

    DIV_NAME.textContent = `Ville : ${town.name}`;
    DIV_COUNTRY.textContent = `Pays : ${town.country}`;
    DIV_CONTINENT.textContent = `Continent : ${town.continent} `;
    DIV_RESIDENTS.textContent = `Résidents: ${formatResidents(
      town.nbResidents
    )}`;

    DIV_INFOS.append(DIV_NAME, DIV_COUNTRY, DIV_CONTINENT, DIV_RESIDENTS);
    CARD_SECTION.append(PIC_IMG, DIV_INFOS);
    BODY.appendChild(CARD_SECTION);
  });
}

cardCreator();
