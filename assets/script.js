const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//------------------------- Ajout clics gauche et droit dans la console

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

arrow_left.addEventListener("click", () => {
  console.log("click gauche");
});

arrow_right.addEventListener("click", () => {
  console.log("click droit");
});

//------------------------- Initialisation des valeurs (bullet et images)

const imageBanner = document.querySelector(".banner-img");
// on fait une variable pour récupérer l'image avec la class .banner-img
imageBanner.src = "assets/images/slideshow/" + slides[0].image;
//on indique à la variable la source de l'image (le chemin relatif + ce qu'elle correspond dans le tableau pr avoir la bonne image)

let cpt = 0;
let bullet = document.querySelector(".dots");
//on fait une variable qui sélectionne la div avec la class dots

for (let i = 0; i < slides.length; i++) {
  //boucle pour initialiser le nombre de bullet à placer
  let el = document.createElement("div");
  el.classList.add("dot");
  bullet.appendChild(el);
  //on crée une div .dot à l'intérieur de la div .dots

  if (i == cpt) el.classList.add("dot_selected");
  //Condition si i est égale à 0, la div avec la class .dot aura la class .dot_selected.
}

//------------- changement de bullet au déroulement du slide

function changeDotSelected() {
  let lstDots = document.querySelectorAll(".dot");
  //fonction avec une variable qui récupère la div avec la class .dot

  for (let i = 0; i < lstDots.length; i++) {
    lstDots[i].classList.remove("dot_selected");
    //le nombre correspondant à la div dot ( donc 0, 1, 2, 3 ) ne doit pas avoir la class .dot_selected sauf si ( voir condition en dessous)

    if (i == cpt) lstDots[i].classList.add("dot_selected");
    // condition qui indique que si i est égale à 0, la div .dot prend la class .dot_selected
  }
}

//-------------- changement d'images au clic

const arrowleft = document.querySelector(".arrow_left");

arrowleft.addEventListener("click", function () {
  if (cpt == 0) {
    cpt = slides.length - 1;
  } else {
    cpt = cpt - 1;
  }

  // condition si le compteur est égale à 0, alors cpt = longueur du tableau -1 ( on enlève pour aller en arrière), sinon

  imageBanner.src = "assets/images/slideshow/" + slides[cpt].image;
  // on indique la source à afficher selon le nombre du compteur.

  changeDotSelected();
  // on appelle la fonction pour que le changement de bullet fonctionne
});

const arrowright = document.querySelector(".arrow_right");

arrowright.addEventListener("click", function () {
  if (cpt == slides.length - 1) {
    cpt = 0;
  } else {
    cpt = cpt + 1;
  }

  imageBanner.src = "assets/images/slideshow/" + slides[cpt].image;

  changeDotSelected();
});

// //------------------------ ajout des bullets
// const dotContainer = document.querySelector(".dots");

// // pour savoir le nombre d'éléments dans le tableau on fait un console.log
// console.log(slides.length);
// let dots = [];
