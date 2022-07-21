//On declare nos constantes et variables

const TAUX_INTERET = 1.64;
const TAUX_ASSURANCE = 0.34;
//Declaration des variables;
let emprunt = document.getElementById("emprunt");
let durer = document.getElementById("durer");
let mensualite = document.getElementById("mensualite");
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
  // const valEmprunt = getValue("emprunt");
  // const valDurer = getValue("durer");
  const min = target.min;
  const max = target.max;

  if (e.target.type !== "range") {
    target = document.getElementById("emprunt");
    alert(target.value);
  }
  if (e.target.name === "emprunt") {
    c = "€";
    let bgSize = ((parseInt(target.value)- min) * 100) / (max - min) + "% 100%";
    let labelPosition = ((parseInt(target.value) - min) * 100) / (max - min) - 10;
    document.querySelector("#empruntValue").style =
      "visibility:visible;left:" + labelPosition + "%";
    target.style.backgroundSize = bgSize;
    document.querySelector("#empruntValue").innerHTML =
      addSpace(target.value) + " " + c;
  }
  if (e.target.name === "durer") {
    c = "ans";
    let bgSize = ((parseInt(target.value) - min) * 100) / (max - min) + "% 100%";
    let labelPosition = ((parseInt(target.value) - min) * 100) / (max - min) - 10;

    document.querySelector("#durerValue").style =
      "visibility:visible;left:" + labelPosition + "%";
    target.style.backgroundSize = bgSize;
    document.querySelector("#durerValue").innerHTML =
      addSpace(target.value) + " " + c;
  }
  //console.log(labelPosition);

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


//Function qui afficher le button avec la class voirPlus lors d'un clic sur le bouton
document.querySelector(".voirPlus").addEventListener("click", () => {
  document.getElementById("content").style = "max-height:5000px";
  var op = document.querySelectorAll(".opacite");

  for (let i = 0; i < op.length; i++) {
    op[i].style = "opacity:1";
  }
});

//Function qui s'ocuppe d'afficher les données dans le html
function finishLoad() {
  document.getElementById("loading").style.display = "none";
  document.querySelector(".main").style.display = "flex";
}

function createView(tableau) {
  document.getElementById("content").innerHTML = "";
  let opacite = 1;
  for (i = 0; i < tableau.length; i++) {
    if (i > 1 && i < 10) {
      document.querySelector(".voirPlus").style = "visibility:visible";
      document.getElementById("content").innerHTML += `
  <div class="flex center row fullWidth responsive opacite${opacite} opacite">
  <aside>${tableau[i][0]}</aside>
    <aside>${tableau[i][1]}€</aside>
    <aside>${tableau[i][2]}€</aside>
    <aside>${tableau[i][3]}€</aside>
    <aside>${addSpace(Math.round(tableau[i][4] * 100) / 100)}€</aside>
  </div>`;
      opacite++;
    } else {
      document.getElementById("content").innerHTML += `
  <div class="flex center row fullWidth responsive">
  <aside>${tableau[i][0]}</aside>
    <aside>${tableau[i][1]}€</aside>
    <aside>${tableau[i][2]}€</aside>
    <aside>${tableau[i][3]}€</aside>
    <aside>${addSpace(Math.round(tableau[i][4] * 100) / 100)}€</aside>
  </div>
  `;
    }
  }
}

function getValue(value) {
  let val = "";
  if (value == "emprunt") {
    val = (document.querySelector("#empruntValue").innerText.split("€"))[0]

  } else if (value == "durer") {
    val = (document.querySelector("#durerValue").innerText.split("ans"))[0]

  }
  return val.replace(/\s/g, '');
}

