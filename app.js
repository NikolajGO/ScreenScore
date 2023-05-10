"use strict";

//film database

const filmsData = [
  {
    id: 1,
    titel: "Jaws",
    udgivelsesår: 1967,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "action/adventure",
    poster:
      "https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85",
  },
  {
    id: 2,
    titel: "Close Encounters of the Third Kind",
    udgivelsesår: 1977,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "science ficion",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    titel: "Raiders of the Lost Ark",
    udgivelsesår: 1981,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "action/adventure",
    poster: "https://www.lucasfilm.com/app/uploads/IJ1-IA-241_R-480x711.jpg",
  },
  {
    id: 4,
    titel: "E.T. the Extra-Terrestrial",
    udgivelsesår: 1982,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "science ficion",
    poster: "https://m.media-amazon.com/images/I/71bIPWfTGJL.jpg",
  },
  {
    id: 5,
    titel: "Indiana Jones and the Temple of Doom",
    udgivelsesår: 1984,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "action/adventure",
    poster:
      "https://cdn.shopify.com/s/files/1/1057/4964/products/Indiana-Jones-and-the-Temple-of-Doom-Vintage-Movie-Poster-Original-1-Sheet-27x41-3642.jpg?v=1673931663",
  },
  {
    id: 6,
    titel: "The Color Purple",
    udgivelsesår: 1985,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "Drama",
    poster: "https://img.fruugo.com/product/4/52/14561524_max.jpg",
  },
  {
    id: 7,
    titel: "Empire of the Sun",
    udgivelsesår: 1987,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "Drama",
    poster:
      "https://m.media-amazon.com/images/I/41iN-iumaAL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    titel: "Indiana Jones and the Last Crusade",
    udgivelsesår: 1989,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "action/adventure",
    poster:
      "https://static.posters.cz/image/750/plakater/indiana-jones-the-last-crusade-one-sheet-2-i3283.jpg",
  },
  {
    id: 9,
    titel: "Jurassic Park",
    udgivelsesår: 1993,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "action/adventure",
    poster:
      "https://static.posters.cz/image/1300/plakater/jurassic-park-i75969.jpg",
  },
  {
    id: 10,
    titel: "Schindler's List",
    udgivelsesår: 1993,
    land: "USA",
    instruktør: "Steven Spielberg",
    gengre: "Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },

  ////////////////////////
  /////scorsese film/////

  {
    id: 11,
    titel: "Means Streets",
    udgivelsesår: 1973,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["krimi", "Drama"],
    poster:
      "https://m.media-amazon.com/images/I/51h0naTfOUL._AC_UF894,1000_QL80_.jpg",
  },

  {
    id: 12, //tilføj herfra
    titel: "Taxi Driver",
    udgivelsesår: 1976,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["krimi", "Drama"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },

  {
    id: 13,
    titel: "Raging Bull",
    udgivelsesår: 1980,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["sport", "Drama"],
    poster:
      "https://images.photowall.com/products/71046/raging-bull-3.jpg?h=699&q=85",
  },

  {
    id: 14,
    titel: "The King of Comedy",
    udgivelsesår: 1982,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["krimi", "Drama"],
    poster:
      "https://musicart.xboxlive.com/7/5c311200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  },

  {
    id: 15,
    titel: "Goodfellas",
    udgivelsesår: 1990,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["krimi", "Drama"],
    poster: "https://img.fruugo.com/product/7/05/14341057_max.jpg",
  },

  {
    id: 16,
    titel: "Cape Fear",
    udgivelsesår: 1993,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: "Drama",
    poster:
      "https://images.photowall.com/products/72068/cape-fear.jpg?h=699&q=85",
  },

  {
    id: 17,
    titel: "Gangs of New York",
    udgivelsesår: 1991,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["krimi", "thriller"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDg3MmI1ZDYtMDZjYi00ZWRlLTk4NzEtZjY4Y2U0NjE5YmRiXkEyXkFqcGdeQXVyNzAxMjE1NDg@._V1_.jpg",
  },

  {
    id: 18,
    titel: "The Aviator",
    udgivelsesår: 2004,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: "Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  },

  {
    id: 19,
    titel: "The Departed",
    udgivelsesår: 2006,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["krimi", "Drama"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
  },

  {
    id: 20,
    titel: "Hugo",
    udgivelsesår: 2011,
    land: "USA",
    instruktør: "Martin Scorsese",
    gengre: ["adventure", "fantasy"],
    poster:
      "https://m.media-amazon.com/images/I/51nw5JAEYFL._AC_UF894,1000_QL80_.jpg",
  },

  ////////////////////////
  /////Country/////
  {
    id: 21,
    titel: "Babettes gæstebud",
    udgivelsesår: 1988,
    land: "Denmark",
    instruktør: "Gabriel Axel",
    gengre: "Drama",
    poster:
      "https://content.gucca.dk/covers/big/b/a/babettes-gaestebud_563.jpg",
  },

  {
    id: 22,
    titel: "Pelle Erobreren",
    udgivelsesår: 1989,
    land: "Denmark",
    instruktør: "Bille August",
    gengre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/ylpvPfgWajxlqP70dxu6CveVzxr.jpg",
  },

  {
    id: 23,
    titel: "Dansen med Regitze",
    udgivelsesår: 1990,
    land: "Denmark",
    instruktør: "Kaspar Rostrup",
    gengre: "Drama",
    poster:
      "https://content.gucca.dk/covers/big/d/a/dansen-med-regitze_3217.jpg",
  },

  {
    id: 24,
    titel: "Efter brylluppet",
    udgivelsesår: 2007,
    land: "Denmark",
    instruktør: "Susanne Bier",
    gengre: "Drama",
    poster:
      "https://assets-p-dfi.pqcloud.eu/preview/AFGf4dAv47qANZv7fFdZkz/previews/maxWidth_1200_maxHeight_1200.jpg/*/AFGf4dAv47qANZv7fFdZkz_mini.jpg?authcred=R3Vlc3Q6R3Vlc3Q=",
  },

  {
    id: 25,
    titel: "Hævnen",
    udgivelsesår: 2011,
    land: "Denmark",
    instruktør: "Susanne Bier",
    gengre: "Drama",
    poster: "https://zentropa.dk/wp-content/uploads/2020/09/hposter1.jpg",
  },

  {
    id: 26,
    titel: "En kongelig affære",
    udgivelsesår: 2013,
    land: "Denmark",
    instruktør: "Nikolaj Arcel",
    gengre: "Drama",
    poster:
      "https://www.uv.es/recursos/fatwirepub/ccurl/367/701/un_assumpte_reial-2012,4.jpg",
  },

  {
    id: 27,
    titel: "Jagten",
    udgivelsesår: 2014,
    land: "Denmark",
    instruktør: "Thomas Vinterberg",
    gengre: "Drama",
    poster:
      "https://www.norden.org/sites/default/files/styles/content_size_800/public/images/Jagten%2520%2528Danmark%2529635025.jpeg?itok=_gYaxohF",
  },

  {
    id: 28,
    titel: "Krigen",
    udgivelsesår: 2016,
    land: "Denmark",
    instruktør: "Tobias Lindholm",
    gengre: "Drama",
    poster:
      "https://www.kino.dk/sites/default/files/movie-posters/krigenteaserplakat.jpg",
  },

  {
    id: 29,
    titel: "Under Sandet",
    udgivelsesår: 2017,
    land: "Denmark",
    instruktør: "Martin Zandvliet",
    gengre: "Drama",
    poster:
      "https://www.kino.dk/sites/default/files/movie-posters/undersandetposter1.jpg",
  },

  {
    id: 30,
    titel: "Druk",
    udgivelsesår: 2020,
    land: "Denmark",
    instruktør: "Thomas Winterberg",
    gengre: "Drama",
    poster:
      "https://resources.mynewsdesk.com/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto:good,w_746/mj9vamsnkwhcqoluqkbo",
  },

  ////////////////////////
  /////Wave/////
];

///// achievements til implementering i prototype 3
// const achData = [
//   {
//     achName: "Spielberg 5",
//     achReward: 10,
//     achXpl: "Watch 5 Movies directed by Steven Spielberg",
//     symbol: { src: "img/spielberg_achivement_bronze.jpg", alt: "Spielberg 5 symbol" }
//   },

//   {
//     achName: "Spielberg 10",
//     achReward: 10,
//     achXpl: "Watch 10 Movies directed by Steven Spielberg",
//     symbol: { src: "img/spielberg_achivement_silver.jpg", alt: "Spielberg 10 symbol" }
//   },

//   {
//     achName: "Scorsese 5",
//     achReward: 10,
//     achXpl: "Watch 5 Movies directed by Martin Scorsese",
//     symbol: { src: "img/scorsese_achivement_bronze.jpg", alt: "Scorsese 5 symbol" }
//   },

//   {
//     achName: "Scorsese 10",
//     achReward: 10,
//     achXpl: "Watch 10 Movies directed by Martin Scorsese",
//     symbol: { src: "img/scorsese_achivement_silver.jpg", alt: "Scorsese 10 symbol" }
//   },

//   {
//     achName: "Denmark 5",
//     achReward: 10,
//     achXpl: "Watch 5 Danish movies",
//     symbol: { src: "img/denmark_achivement_bronze.jpg", alt: "Denmark 5 symbol" }
//   },

//   {
//     achName: "Denmark 10",
//     achReward: 10,
//     achXpl: "Watch 10 Danish movies",
//     symbol: { src: "img/denmark_achivement_silver.jpg", alt: "Denmark 10 symbol" }
//   },

//   {
//     achName: "USA 20",
//     achReward: 10,
//     achXpl: "Watch 20 movies from the States",
//     symbol: { src: "img/USA_achivement.jpg", alt: "USA 20 symbol" }
//   },
// ]

let filmSetData = [];

//select items
const filmsSpielberg = this.document.querySelectorAll(".films-spielberg .film");
const filmsScorsese = this.document.querySelectorAll(".films-scorsese .film");
const filmsDenmark = this.document.querySelectorAll(".country .film");
const filmsWave = this.document.querySelectorAll(".wave .film");
const filmsSelect = this.document.querySelectorAll(".film");
const btnWatched = this.document.querySelectorAll(".Watched-btn");
const btnWatchList = this.document.querySelectorAll(".Watch-btn");

const filmSelectEls = document.querySelectorAll(".film");
const btnClosePopup = document.querySelector(".close-btn");
const closeOverlay = document.querySelector(".overlay");
const achPopup = document.querySelector(".achpopup-box");
const overlay = document.querySelector(".overlay");

const filmsContainer = [...document.querySelectorAll(".films__container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

//variables

let spielberg5 = false;
let spielberg10 = false;

let scorsese5 = false;
let scorsese10 = false;

let denmark5 = false;
let denmark10 = false;

let USA20 = false;

let achievementPoints = 0;
let filmSet = 0;

////////////////////////////////////////////
////////////SLIDER FUNCTION////////////////

filmsContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

////////////////////////////////////
//////achivement functioner/////////

//disse er ikke dynamisk codet af hensyn til fremtidige implementeringer --
//hvor koden kommer til at fungere anderledes (derfor overholder de pt ikke "dry"-principper)

///////////////////////////////////
////////SPIELBERG/////////////////
const checkAchSpielberg = function () {
  //tæl hvis filmSetData indeholder Steven Spielberg
  const spielbergFilms = filmSetData.filter(
    (film) => film.instruktør === "Steven Spielberg"
  );
  const numberOfSpielbergFilms = spielbergFilms.length;

  console.log(`spielberg: ${numberOfSpielbergFilms}`);

  if (numberOfSpielbergFilms === 5 && spielberg5 === false) {
    achievementPoints += 10;
    spielberg5 = true;
    console.log(spielberg5);

    achOpen();
    const achName = "Spielberg 5";
    const achReward = 10;
    popupContent(achName, achReward);
  }

  if (numberOfSpielbergFilms === 10 && spielberg10 === false) {
    achievementPoints += 10;
    spielberg10 = true;
    console.log(spielberg10);

    achOpen();
    const achName = "Spielberg 10";
    const achReward = 10;
    popupContent(achName, achReward);
  }
};

const checkAchSpielbergNeg = function () {
  const spielbergFilms = filmSetData.filter(
    (film) => film.instruktør === "Steven Spielberg"
  );

  if (spielbergFilms.length < 5 && spielberg5 === true) {
    achievementPoints -= 10;
    spielberg5 = false;
    console.log(spielberg5);
    console.log("haha");
  }
  if (spielbergFilms.length < 10 && spielberg10 === true) {
    achievementPoints -= 10;
    spielberg10 = false;
    console.log(spielberg10);
  }
};

///////////////////////////////////
////////SCORSESE/////////////////

const checkAchScorsese = function () {
  //tæl hvis filmSetData indeholder Martin Scorsese
  const scorseseFilms = filmSetData.filter(
    (film) => film.instruktør === "Martin Scorsese"
  );

  if (scorseseFilms.length === 5 && scorsese5 === false) {
    achievementPoints += 10;
    scorsese5 = true;

    achOpen();
    const achName = "scorsese 5";
    const achReward = 10;
    popupContent(achName, achReward);
  }

  if (scorseseFilms.length === 10 && scorsese10 === false) {
    achievementPoints += 10;
    scorsese10 = true;

    achOpen();
    const achName = "Scorsese 10";
    const achReward = 10;
    popupContent(achName, achReward);
  }
};

const checkAchScorseseNeg = function () {
  const scorseseFilms = filmSetData.filter(
    (film) => film.instruktør === "Martin Scorsese"
  );

  if (scorseseFilms.length < 5 && scorsese5 === true) {
    achievementPoints -= 10;
    scorsese5 = false;
  }
  if (scorseseFilms.length < 10 && scorsese10 === true) {
    achievementPoints -= 10;
    scorsese10 = false;
  }
};

//////////////////////////////////////////////
///////////Country//////////////////////////

//////////////////////////////////////////
//////DENMARK//////////////////////////

const checkAchDenmark = function () {
  //tæl hvis filmSetData indeholder Danmark under land
  const denmarkFilms = filmSetData.filter((film) => film.land === "Denmark");

  if (denmarkFilms.length === 5 && denmark5 === false) {
    achievementPoints += 10;
    denmark5 = true;

    achOpen();
    const achName = "Denmark 5";
    const achReward = 10;
    popupContent(achName, achReward);
  }

  if (denmarkFilms.length === 10 && denmark10 === false) {
    achievementPoints += 10;
    denmark10 = true;

    achOpen();
    const achName = "Denmark 10";
    const achReward = 10;
    popupContent(achName, achReward);
  }
};

const checkAchDenmarkNeg = function () {
  //til hvis Martin Scorsese
  const denmarkFilms = filmSetData.filter((film) => film.land === "Denmark");

  if (denmarkFilms.length < 5 && denmark5 === true) {
    achievementPoints -= 10;
    denmark5 = false;
  }

  if (denmarkFilms.length < 10 && denmark10 === true) {
    achievementPoints -= 10;
    denmark10 = false;
  }
};

////////////////////////////////////////////////////
////////////////////USA/////////////////////////////

const checkAchUSA = function () {
  //tæl hvis USA
  const USAFilms = filmSetData.filter((film) => film.land === "USA");

  if (USAFilms.length === 20 && USA20 === false) {
    achievementPoints += 10;
    USA20 = true;

    console.log("upperen");
    achOpen();
    const achName = "USA 20";
    const achReward = 10;
    popupContent(achName, achReward);
  }

  // if (USAFilms.length === 10 && USA10 === false) {
  //   achievementPoints += 10;
  //   USA10 = true;

  //   achOpen()
  //   const achName = "USA 10";
  //   const achReward = 10;
  //   popupContent(achName, achReward);
  // }
};

const checkAchUSANeg = function () {
  //tjeck og fjern hvis filSetData indeholder USA
  const USAFilms = filmSetData.filter((film) => film.land === "USA");

  console.log("nedern");
  if (USAFilms.length < 20 && USA20 === true) {
    achievementPoints -= 10;
    USA20 = false;
  }
};

/////////////////////////////////////////
// åben/luk function ved achivement popup

const achOpen = function () {
  achPopup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function () {
  achPopup.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !achPopup.classList.contains("hidden")) {
    closePopup();
  }
});

document.querySelector(".point").textContent = achievementPoints;
document.querySelector(".film-set").textContent = filmSet;

const popupContent = function (a, b) {
  const achName = (document.querySelector(
    ".achpopup-box-explain"
  ).textContent = `${a}`);
  const acReward = (document.querySelector(
    ".achpopup-box-point"
  ).textContent = `${b} point! `);
};

//////////////////////////////
///// achivement checker//////
const checkAch = function () {
  checkAchSpielberg();
  checkAchScorsese();
  checkAchDenmark();
  checkAchUSA();
};

const checkAchNeg = function () {
  checkAchSpielbergNeg();
  checkAchScorseseNeg();
  checkAchDenmarkNeg();
  checkAchUSANeg();
};

//direc, num, name
const testAch = function (direc, num) {
  //console.log(`film: ${ha}`);
  console.log(`instruktør: ${direc}, antal Film: ${num}`);
};

const clickTricker = function (i, id) {
  btnWatched[i].addEventListener("click", function () {
    // Toggle btn-active class
    this.classList.toggle("btn-active");

    if (this.classList.contains("btn-active")) {
      this.textContent = "✔ Watched";
    } else {
      this.textContent = "Watched?";
    }

    const filmToAddOrRemove = filmsData.find((film) => film.id === id);
    console.log(filmToAddOrRemove);

    if (!filmSetData.some((film) => film.id === id)) {
      //hvis btn-active class IKKE er activ så tilføj objektet til filmSetData
      filmSetData.push(filmToAddOrRemove);
      filmSet = filmSetData.length;
      console.log(filmSetData);
      checkAch();
      //testAch(filmToAddOrRemove.director, 5);
    } else {
      // hvis btn-active class er active så fjern objekt fra filmSetData
      filmSetData.splice(filmSetData.indexOf(filmToAddOrRemove), 1);
      console.log(filmSetData);
      filmSet = filmSetData.length;
      checkAchNeg();
    }
    // updater achievement score og antal film set
    document.querySelector(".point").textContent = achievementPoints;
    document.querySelector(".film-set").textContent = filmSet;

    //til senere implementering af bruger-side
    document.querySelector(".score-points").textContent = achievementPoints;
    document.querySelector(".films-logged").textContent = filmSet;
  }),
    btnWatchList[i].addEventListener("click", function () {
      // Toggle btn-active class
      this.classList.toggle("btn-active");

      if (this.classList.contains("btn-active")) {
        this.textContent = "Added to Watchlist";
      } else {
        this.textContent = "Add to Watchlist";
      }
    });
};

///////////////////////////////////////
//soft code film til bestemt plads

for (let i = 0; i < filmsSpielberg.length; i++) {
  const titel = filmsSpielberg[i].querySelector("#titel");
  titel.textContent = filmsData[i].titel;
  const year = filmsSpielberg[i].querySelector("#year");
  year.textContent = filmsData[i].udgivelsesår;
  const poster = filmsSpielberg[i].querySelector(".film__img");
  poster.src = filmsData[i].poster;
}

for (let i = 0; i < filmsScorsese.length; i++) {
  const titel = filmsScorsese[i].querySelector("#titel");
  titel.textContent = filmsData[i + 10].titel;
  const year = filmsScorsese[i].querySelector("#year");
  year.textContent = filmsData[i + 10].udgivelsesår;
  const poster = filmsScorsese[i].querySelector(".film__img");
  poster.src = filmsData[i + 10].poster;
}

for (let i = 0; i < filmsDenmark.length; i++) {
  const titel = filmsDenmark[i].querySelector("#titel");
  titel.textContent = filmsData[i + 20].titel;
  const year = filmsDenmark[i].querySelector("#year");
  year.textContent = filmsData[i + 20].udgivelsesår;
  const poster = filmsDenmark[i].querySelector(".film__img");
  poster.src = filmsData[i + 20].poster;
}

// for (let i = 0; i < filmsWave.length; i++) {
//   const titel = filmsWave[i].querySelector('#titel');
//   titel.textContent = filmsData[i + 30].titel;
//   const year = filmsWave[i].querySelector('#year')
//   year.textContent = filmsData[i + 30].udgivelsesår;
//   const poster = filmsWave[i].querySelector('.film__img')
//   poster.src = filmsData[i + 30].poster;
// }

for (let i = 0; i < filmsData.length; i++) {
  const id = filmsData[i].id;
  clickTricker(i, id);
}
