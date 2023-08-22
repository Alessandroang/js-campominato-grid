// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// // Seleziono il bottone che genererà una griglia quadrata
// const buttonGrid = document.getElementById("Button-grid");

// // Assegno un evento al bottone che genera una griglia
// buttonGrid.addEventListener("click", function () {
//   console.log("Hai fatto clic sul bottone");

//   // Seleziono l'elemento con id grid
//   const gridTable = document.getElementById("grid");
//   gridTable.innerHTML = "";

//   // Creo le celle per ogni numero e genero numeri da 1 a 100
//   for (let i = 1; i <= 100; i++) {
//     // Creo un elemento div nell'HTML
//     const cellaGrid = document.createElement("div");

//     // Assegno una classe all'elemento div
//     cellaGrid.className = "cella";

//     // Aggiungo il numero come testo all'interno della cella
//     cellaGrid.textContent = i;

//     // Aggiungo gli elementi alla griglia
//     gridTable.appendChild(cellaGrid);
//   }
// });

// Seleziono il bottone che genererà la griglia di gioco
const buttonGrid = document.getElementById("Button-grid");
const difficultySelect = document.getElementById("difficulty-select"); // Selezione dell'elemento select per la difficoltà
const gridTable = document.getElementById("grid"); // Selezione dell'elemento che conterrà la griglia

// Funzione per gestire il clic su una cella
function handleClick(cellaCliccata) {
  const numeroCella = parseInt(cellaCliccata.textContent);

  console.log(`Hai cliccato sulla cella numero ${numeroCella}`);

  // Coloro la cella di azzurro
  cellaCliccata.style.backgroundColor = "blue";
}

// Funzione per generare la griglia in base alla difficoltà selezionata
function generateGrid(difficulty) {
  let gridSize;

  if (difficulty === "facile") {
    gridSize = 100;
  } else if (difficulty === "medio") {
    gridSize = 81;
  } else if (difficulty === "difficile") {
    gridSize = 49;
  }

  gridTable.innerHTML = "";
  gridTable.className = difficulty;

  // Creazione delle celle per la griglia in base al numero di caselle
  for (let i = 1; i <= gridSize; i++) {
    const cellaGrid = document.createElement("div");
    cellaGrid.className = "cella";
    cellaGrid.textContent = i;

    // Aggiunta dell'evento di click a ogni cella
    cellaGrid.addEventListener("click", function () {
      handleClick(cellaGrid);
    });

    gridTable.appendChild(cellaGrid);
  }
}

// Assegno un evento al bottone che genera la griglia
buttonGrid.addEventListener("click", function () {
  const selectedDifficulty = difficultySelect.value;
  generateGrid(selectedDifficulty); // Generazione della griglia in base alla difficoltà
});
