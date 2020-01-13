let fishList = [
  ["Aulopiformes",	"Synodontidae",	"Poisson lézard",	"Synodus saurus"],
  ["Aulopiformes",	"Anguilliformes",	"Anguille",	"Anguilla anguilla"],
  ["Aulopiformes",	"Congridae",	"Congre",	"Conger conger"],
  ["Atheriniformes",	"Atherinidae",	"Joël",	"Atherina boyeri"]
];

function addTittle(tittle1, tittle2, tittle3, tittle4){
  fishList.push([tittle1, tittle2, tittle3, tittle4]);
}
addTittle("Ordre", "Famille", "Nom vernaculaire", "Nom binomial");

// create a function that takes an array of strings as parameters
function displayTable(array){
  let i= 0;
  let j= 0;
  let currentElement;
  let currentElement2;
  // the tittles data are on the last currentElement from array
  // I don't manage to put array.length so i put it on 4 for this exercice
  // I should try to push the tittles on array[0] OR creat another array for the tittles
  let dataTittle = array[4];

  // create the table in the HTML body
  let tableHTML = document.createElement("table");
  document.body.appendChild(tableHTML);
  // create the <thead> in the <table>
  let tableHead = document.createElement("thead");
  tableHTML.appendChild(tableHead);
  // create the <tr> in the <thead>
  let tableHeadR = document.createElement("tr");
  tableHead.appendChild(tableHeadR);
  // initialize the <th>
  let tableHeadH;
  // browse table items and stop on the last currentElement of the array dataTittle to create as many <th> as currentElement
  while(j<dataTittle.length){
    currentElement= dataTittle[j];
    // create the <th> in the <tr>
    tableHeadH = document.createElement("th");
    tableHeadR.appendChild(tableHeadH);
    // put content and syle in the <th>
    tableHeadH.textContent = currentElement;
    tableHeadH.style.color = "red";
    // increment j to go to next currentElement
    j++;
  }

  // create the <tbody> and put it in the table
  let tableBody = document.createElement("tbody");
  tableHTML.appendChild(tableBody);
  // initialize <tr> and <td>
  let tableR;
  let tableD;

  // browse table items and stop on the last currentElement wanted
  while (i<array.length-1){
    currentElement = array[i];
    // create <tr> and put it in <tbody>
    tableR = document.createElement("tr");
    tableBody.appendChild(tableR);
    // j must be on 0 after the second while to start in the new currentElement from the first element
    j=0;
    // browse table items and stop on the last currentElement2
    while (j<currentElement.length){
      currentElement2 = currentElement[j];
      // create <td> and put it in <tr>
      tableD = document.createElement("td");
      tableR.appendChild(tableD);
      // put a content in the <td>
      tableD.textContent = currentElement2;
      // increment j to go on the newt currentElement2
      if(j == currentElement.length-1){
        tableD.style.fontStyle = "italic";
      }
      j++;
    }
    // increment i to go on the next currentElement
    i++;
  }
  return tableHTML;
}
// call the function with the fishList array
displayTable(fishList);
