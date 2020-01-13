function firstScreenDisplay(tittleContent, paragraphContent, ctaContent) {
  // create the <h1> in the HTML body
  let screenTittle = document.createElement("h1");
  document.body.appendChild(screenTittle);
  // put content in the <h1>
  screenTittle.textContent = tittleContent;

  // create the <p> in the HTML body
  let description = document.createElement("p");
  document.body.appendChild(description);
  // put content in the <p>
  description.textContent = paragraphContent;

  // create the <input type="button"> in the HTML body
  let callToAction = document.createElement("input");
  document.body.appendChild(callToAction);
  callToAction.type = "button";
  // put content on the button
  callToAction.value = ctaContent;
  return callToAction;
}
// call the function with our info
firstScreenDisplay("Cinéma le Dauphin", "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi).","Voir les films à l'affiche cette semaine" )

// create the table for the current week movies
let weekMovies = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT'S YOU GONNA DO WHEN THE WORLD'S ON FIRE?", "Roberto Minervini", "États-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du sud", "2018", "1h06", "vostfr"],
];

function moviesSelectionDisplay(array) {
  let i=1;
  let j=0;
  let dataHead = array[0];
  let currentElement;
  let currentElement2;
  let tableHTML = document.createElement("table");
  document.body.appendChild(tableHTML);


  let tableHead = document.createElement("thead");
  tableHTML.appendChild(tableHead);
  let tableHeadR = document.createElement("tr");
  tableHead.appendChild(tableHeadR);
  let tableHeadH;
  while(j<dataHead.length){
    currentElement= dataHead[j];
    tableHeadH = document.createElement("th");
    tableHeadR.appendChild(tableHeadH);
    tableHeadH.textContent = currentElement;
    j++;
  }


  let tableBody = document.createElement("tbody");
  tableHTML.appendChild(tableBody);
  let tableR;
  let tableD;

  while (i<array.length){
    currentElement = array[i];
    tableR = document.createElement("tr");
    tableBody.appendChild(tableR);
    j=0;

    while (j<currentElement.length){
      currentElement2 = currentElement[j];
      tableD = document.createElement("td");
      tableR.appendChild(tableD);
      tableD.textContent = currentElement2;
      j++;
    }
    i++;
  }
  return tableHTML;
}

// I don't manage to understand how to make the call To Action display the weekmovies on the click
// callToAction.addEventListener("click", moviesSelectionDisplay(weekMovies) {
//
// }, false);

moviesSelectionDisplay(weekMovies);
