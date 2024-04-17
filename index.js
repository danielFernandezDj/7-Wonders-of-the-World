// Select the card storage section. 
const cardStorage = document.getElementById('card')

// Select the Images in the storage.
// Egypt
const imgEgypt = document.getElementById("egypt")
cardStorage.appendChild(imgEgypt)
// Iraq
const imgIraq = document.getElementById("iraq")
cardStorage.appendChild(imgIraq)
// Greece
const imgGreece = document.getElementById("greece")
cardStorage.appendChild(imgGreece)

// Select Q&A Text.
const textH3 = document.getElementById('h3Q')

// Select Inputs.
const inputOne = document.getElementById('option-one')
const inputTwo = document.getElementById('option-two')
const inputThree = document.getElementById('option-three')
const inputFour = document.getElementById('option-four')

// Function to random Inputs-Color.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// To change the button colors to a random color.
function applyUniqueColorsToButtons() {
  const colors = ['#ff839d', '#ffd77c', '#66b5ef', '#74cdcd'];
  const shuffledColors = shuffleArray(colors);
  const buttons = document.querySelectorAll('.button-style');

  buttons.forEach((button, index) => {
    button.style.backgroundColor = shuffledColors[index % shuffledColors.length];
  });
}


// ! Variables.
let winCondition = false; // console.log(winCondition)
let timeOut = false;
let stopTimer = false; console.log(stopTimer)
let start = true; // wen prest the Button-Start it turn TRUE;
let speedTimer = 50;
let indexCard = ""; // add the name of the card function at the card

// Live Points selection.
let livePoints = document.getElementById('menu-h2-live')
let startPoint = document.getElementById('point-number')

// todo  To select a Random card when the game START.
// Select all functions in a 'array'.
let arrayCardFunction = [Egypt, Iraq, Greece]
let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]

// When the game starts or a new card is selected.
if (start === true) {
  start = false;
  console.log(`Strat is ${start}`);
  selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)];
  selectRandomFunction();
}


// To Remove Live Point and change to the next Card.
function removePointSolution(indexCard) {
  console.log(`you lose on Star point`);

  // Delete this card from the array.
  let index = arrayCardFunction.indexOf(indexCard); // The card name goes in the 'indexCard'
  if (index !== -1) {
    arrayCardFunction.splice(index, 1);
    console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
    let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
    selectRandomFunction()
  }

  if (livePoints.textContent > 0) {
    livePoints.textContent--;
  } else {
    livePoints.textContent = 0;
    winCondition = false;
  }
  console.log(livePoints.textContent);
  console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
}


// ! Game Card option 1-Egypt ••••••••••••••••••••••••••••••••••••
function Egypt() {
  timeOut = false;
  winCondition = false;
  indexCard = "Egypt";

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();
  // display the image.
  imgEgypt.style.display = "block"
  // display the new text.
  textH3.textContent = "The Great Pyramid of Giza!"

  inputOne.textContent = 'Egypt';
  inputTwo.textContent = 'Vegas';
  inputThree.textContent = 'India';
  inputFour.textContent = 'Pakistan';

  console.log('Is in Egypt');

  // Remove Point Input. handleInputClick
  inputTwo.addEventListener('click', () => { imgEgypt.style.display = "none"; removePointSolution(Egypt) })
  inputThree.addEventListener('click', () => { imgEgypt.style.display = "none"; removePointSolution(Egypt) })
  inputFour.addEventListener('click', () => { imgEgypt.style.display = "none"; removePointSolution(Egypt) })

  // Increase Star-Point condition.
  let livePlusOne = 0
  inputOne.addEventListener('click', () => {
    stopTimer = true;

    if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++

      // Delete this card from the array.
      let index = arrayCardFunction.indexOf(Egypt);
      if (index !== -1) {
        arrayCardFunction.splice(index, 1);
        console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
        let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
        selectRandomFunction();
      }
      // Delete Image:
      imgEgypt.style.display = "none"
    }
    winCondition = true;
    console.log('Win Condition is TRUE!')
  })
}


// ! Game Card option 2-Iraq ••••••••••••••••••••••••••••••••••••
function Iraq() {
  timeOut = false;
  winCondition = false;
  indexCard = "Iraq";

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();
  // display the image.
  imgIraq.style.display = "block"
  // display the new text.
  textH3.textContent = "The Hanging Gardens of Babylon!";

  inputOne.textContent = 'Brazil';
  inputTwo.textContent = 'Italia';
  inputThree.textContent = 'Iraq';
  inputFour.textContent = 'Roma';

  console.log('Is in Iraq');

  // Remove Point Input.
  inputOne.addEventListener('click', () => { imgIraq.style.display = "none"; removePointSolution(Iraq) })
  inputTwo.addEventListener('click', () => { imgIraq.style.display = "none"; removePointSolution(Iraq) })
  inputFour.addEventListener('click', () => { imgIraq.style.display = "none"; removePointSolution(Iraq) })

  // Increase Star-Point condition.
  let livePlusOne = 0
  inputThree.addEventListener('click', () => {
    stopTimer = true;
    if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++

      // Delete this card from the array.
      let index = arrayCardFunction.indexOf(Iraq);
      if (index !== -1) {
        arrayCardFunction.splice(index, 1);
        console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
        let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
        selectRandomFunction()
      }
      // Delete Image:
      imgIraq.style.display = "none"
    }
    winCondition = true;
    console.log('Win Condition is TRUE!')
  })
}


// ! Game Card option 3-Greece ••••••••••••••••••••••••••••••••••••
//! Mi solucion definitiva es crear una funcion que cree botones nuevos y luuego otra funcion que 
//! los elimine. Y a si se acabaria el problemita the los botones que me tiene hasta los 'cojones'!
//!
//!
//!
//!
function Greece() {
  timeOut = false;
  winCondition = false;
  indexCard = "Greece";

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();
  // display the image.
  imgGreece.style.display = "block"
  // display the new text.
  textH3.textContent = "The Statue of Zeus at Olympia!";

  inputOne.textContent = 'Syria';
  inputTwo.textContent = 'Greece';
  inputThree.textContent = 'Romania';
  inputFour.textContent = 'Libya';

  console.log('Is in Greece');

  // Remove Point Input.
  inputOne.addEventListener('click', () => { imgGreece.style.display = "none"; removePointSolution(Greece) })
  inputThree.addEventListener('click', () => { imgGreece.style.display = "none"; removePointSolution(Greece) })
  inputFour.addEventListener('click', () => { imgGreece.style.display = "none"; removePointSolution(Greece) })

  // I add the example here!


  // Increase Star-Point condition.
  let livePlusOne = 0
  inputTwo.addEventListener('click', () => {
    stopTimer = true;
    if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++

      // Delete this card from the array.
      let index = arrayCardFunction.indexOf(Greece);
      if (index !== -1) {
        arrayCardFunction.splice(index, 1);
        console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
        let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
        selectRandomFunction()
      }
      // Delete Image:
      imgGreece.style.display = "none"
    }
    winCondition = true;
    console.log('Win Condition is TRUE!')
  })
}



// Time var section ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
let timeVar = document.getElementById("time-var");
let timeProgress = document.getElementById('time-var-progress')

function countdown() {
  let i = parseFloat(window.getComputedStyle(timeVar).width)
  let interval = setInterval(function () {
    timeProgress.style.width = i + "px"; // Set the width of timeVar

    if (stopTimer == false) {
      console.log(i);
      i--;
    } else { i = i; console.log(i); }

    // To add 1 star point.
    if (i < 18) {
      clearInterval(interval);
      timeOut = true
      winCondition = false;
      livePoints.textContent -= "1" // Live condition.
      console.log("Blast off!");
    }
    // Change the timer background Color.
    if (i === 150) {
      timeProgress.style.backgroundColor = 'red'
    }
    // Reduce the time speed wen the player get Points.
  }, speedTimer);
}



// TODO: add the poUp action
// // Lose conditions:
// If you select the wrong option you lose 1-live; => and change to a random card.
// if the time is 0 you lose 1-live; => and change to a random card.
// if your Live points is == 0, top game =>
// then Pop-Up your Lose.

// Win condition:
// // You get one star if player select the right option;
// => then delete this card from the array - and change to a random card. 
// Player wins wen get the total of 7 stars.
// => then Pop Up your Win