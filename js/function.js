//On declare nos constantes et variables
const TAUX_INTERET = 1.64;
const TAUX_ASSURANCE = 0.34;
//Declaration des variables;
let emprunt=document.getElementById("emprunt");
let durer=document.getElementById("durer");
let mensualite=document.getElementById("mensualite");
let tauxAssurance = document.getElementById("tauxAssurance");
let tauxInteret = document.getElementById("tauxInteret");
let rangeInputs = document.querySelectorAll(".range");

//Espace addEventListener pour les évènements
tauxInteret.addEventListener("input", () => {
  isNumber(tauxInteret, TAUX_INTERET);
});

tauxAssurance.addEventListener("input", () => {
  isNumber(tauxAssurance, TAUX_ASSURANCE);
});

// On declare nos fonctions
// function qui verifie si le champ est un nombre
function isNumber(element, defaultValue) {
  if (isNaN(document.getElementById("tauxInteret").innerText)) {
    document.getElementById("tauxInteret").innerText = defaultValue;
  }
}

function handleInputChange(e) {
  let target = e.target;
  let c;
  if (e.target.type !== "range") {
    target = document.getElementById("emprunt");
  }
  if (e.target.name === "emprunt") {
    c = "€";
  }
  if (e.target.name === "durer") {
    c = "ans";
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;
  let bgSize = ((val - min) * 100) / (max - min) + "% 100%";
  let labelPosition = ((val - min) * 100) / (max - min) - 10;
  //console.log(labelPosition);

  document.querySelector("#empruntValue").style =
    "visibility:visible;left:" + labelPosition + "%";
  target.style.backgroundSize = bgSize;
  document.querySelector("#empruntValue").innerHTML =
    addSpace(val) + " " + c;
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

// Crée une function qui rajoute un espace à un prix qui comporte 3 chiffres
function addSpace(prix) {
  let prixWithSpace = prix.toString();
  let prixWithSpaceArray = prixWithSpace.split("");
  let prixWithSpaceArrayLength = prixWithSpaceArray.length;
  let prixWithSpaceArrayLengthMinusOne = prixWithSpaceArrayLength - 1;
  let prixWithSpaceArrayLengthMinusTwo = prixWithSpaceArrayLength - 2;
  let prixWithSpaceArrayLengthMinusThree = prixWithSpaceArrayLength - 3;
  if (prixWithSpaceArrayLength > 3) {
    prixWithSpaceArray.splice(prixWithSpaceArrayLengthMinusThree, 0, " ");
  } else if (prixWithSpaceArrayLength > 2) {
    prixWithSpaceArray.splice(prixWithSpaceArrayLengthMinusTwo, 0, " ");
  } else if (prixWithSpaceArrayLength > 1) {
    prixWithSpaceArray.splice(prixWithSpaceArrayLengthMinusOne, 0, " ");
  }
  let prixWithSpaceString = prixWithSpaceArray.join("");
  return prixWithSpaceString;
}