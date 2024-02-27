// Recuperation des valeurs/elements HTML
const form = document.getElementById("form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const select = document.getElementById("select");
const result = document.getElementById("result");

// Creation des events
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Recuperation de la valeur du select (add, sub, mul, div)
  console.log("Valeur de l'element select: ", select.value);

  // Recuperation de la valeur des inputs
  console.log("Valeur de l'element input1: ", input1.value);
  console.log("Valeur de l'element input2: ", input2.value);

  // Utilisation de la valeur du select pour effectuer l'operation correspondante
  switch (select.value) {
    case "add":
      console.log("calcul choisi addition");
      // Affichage du resultat de l'addition
      result.innerText = Number(input1.value) + Number(input2.value);
      break;
    case "mul":
      console.log("calcul choisi multiplication");
      result.innerText = Number(input1.value) * Number(input2.value);
      break;
    case "div":
      console.log("calcul choisi division");
      if (Number(input2.value) === 0) {
        result.innerText = "Erreur: Division par zéro";
      } else {
        result.innerText = Number(input1.value) / Number(input2.value);
      }
      break;
    case "sub":
      console.log("calcul choisi soustraction");
      result.innerText = Number(input1.value) - Number(input2.value);
      break;

    default:
      console.log("calcul non géré");
      result.innerText = "Erreur: Calcul non géré";
      break;
  }

  // Affichage du resultat
});