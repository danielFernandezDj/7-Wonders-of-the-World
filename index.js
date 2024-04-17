// Select the card storage section & HUD Button Division.
const cardStorage = document.getElementById('card')
const hudButtonDiv = document.getElementById('hud-button-div')

// Select the Images in the storage.
const imgEgypt = document.getElementById("egypt")
cardStorage.appendChild(imgEgypt)
const imgIraq = document.getElementById("iraq")
cardStorage.appendChild(imgIraq)
const imgGreece = document.getElementById("greece")
cardStorage.appendChild(imgGreece)

// Select Q&A Text.
const textH3 = document.getElementById('h3Q')


// Declare the input variables in the outer scope.
let inputOne, inputTwo, inputThree, inputFour;
// Create buttons
function createButtons() {
  inputOne = document.createElement('button');
  inputTwo = document.createElement('button');
  inputThree = document.createElement('button');
  inputFour = document.createElement('button');

  [inputOne, inputTwo, inputThree, inputFour].forEach(function (input) {
    hudButtonDiv.appendChild(input);
    input.classList.add('button-style'); // Use classList.add() to add the class.
    input.textContent = 'append';
    applyUniqueColorsToButtons()
  });
} // createButtons();

function removeInputs() {
  while (hudButtonDiv.firstChild) {
    hudButtonDiv.removeChild(hudButtonDiv.firstChild)
  }
} // removeInputs()

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
let stopTimer = false; console.log(stopTimer)
let speedTimer = 50;
let start = true; // wen prest the Button-Start it turn TRUE;

// Live Points selection.
let livePoints = document.getElementById('menu-h2-live')
let startPoint = document.getElementById('point-number')

// Add the Card function to this array.
let arrayCardFunction = [Egypt, Iraq] //  , Greece
let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]

// When the game start a new card is selected.
if (start === true) {
  start = false;
  console.log(`Strat is ${start}`);
  selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)];
  selectRandomFunction();
}

//  Remove card from the array. 
function removeCardFromArray(indexCard) {
  // The card name goes in the 'indexCard'
  let index = arrayCardFunction.indexOf(indexCard);

  // Remove this card from the array.
  if (index !== -1) {
    arrayCardFunction.splice(index, 1);
    console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
    let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
    if (arrayCardFunction.length !== 0) {
      selectRandomFunction();
    } else {location.reload();} // Change in the future to an 'async Function()', and use 'await' until the player select 'start' a new game!
  }
}

// Remove Live Point and change to the next Card.
function removePointSolution(indexCard) {
  console.log(`you lose on Star point`);
  
  removeInputs() // Remove inputs.

  if (livePoints.textContent > 0) {
    livePoints.textContent--;
  } else {
    livePoints.textContent = 0;
    winCondition = false;
  }
  console.log(livePoints.textContent);
  console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
}


// ! Card 1-Egypt ••••••••••••••••••••••••••••••••••••
function Egypt() {
  console.log('Is in Egypt'); // checking if we are in this function.
  createButtons() // Create new 'inputs'.

  timeOut = false;
  winCondition = false;
  indexCard = "Egypt";

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgEgypt.style.display = "block" // display the image.

  textH3.textContent = "The Great Pyramid of Giza!" // Q&A text goes here.

  // Add Country Name to each input.
  inputOne.textContent = 'Egypt';
  inputTwo.textContent = 'Vegas';
  inputThree.textContent = 'India';
  inputFour.textContent = 'Pakistan';

  // Remove Point Input & change to other card.
  inputTwo.addEventListener('click', () => { imgEgypt.style.display = "none"; removePointSolution(Egypt) })
  inputThree.addEventListener('click', () => { imgEgypt.style.display = "none"; removePointSolution(Egypt) })
  inputFour.addEventListener('click', () => { imgEgypt.style.display = "none"; removePointSolution(Egypt) })

  // todo Increase Star-Point condition.
  let livePlusOne = 0
  inputOne.addEventListener('click', () => {
    stopTimer = true;
    removeInputs() // Remove the inputs.
    removeCardFromArray(Egypt)

    // if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++
      imgEgypt.style.display = "none"
    // }

    winCondition = true;
    console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Egypt()


// ! Card 2-Iraq ••••••••••••••••••••••••••••••••••••
function Iraq() {
  console.log('Is in Iraq'); // checking if we are in this function.
  createButtons() // Create new 'inputs'.

  timeOut = false;
  winCondition = false;
  indexCard = "Iraq";

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgIraq.style.display = "block"  // display the image.

  textH3.textContent = "The Hanging Gardens of Babylon!";  // Q&A text goes here.

  // Add Country Name to each input.
  inputOne.textContent = 'Brazil';
  inputTwo.textContent = 'Italia';
  inputThree.textContent = 'Iraq';
  inputFour.textContent = 'Roma';


  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgIraq.style.display = "none"; removePointSolution(Iraq) })
  inputTwo.addEventListener('click', () => { imgIraq.style.display = "none"; removePointSolution(Iraq) })
  inputFour.addEventListener('click', () => { imgIraq.style.display = "none"; removePointSolution(Iraq) })

  // todo Increase Star-Point condition.
  let livePlusOne = 0
  inputThree.addEventListener('click', () => {
    stopTimer = true;
    removeInputs() // Remove the inputs.
    removeCardFromArray(Iraq)

    // if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++
      imgIraq.style.display = "none"
    // }

    winCondition = true;
    console.log('Win Condition is TRUE! => remove this card from the array')

  }) 
} // Iraq()


// ! Game Card option 3-Greece ••••••••••••••••••••••••••••••••••••
// function Greece() {
//   timeOut = false;
//   winCondition = false;
//   indexCard = "Greece";

//   // Apply unique colors to buttons
//   applyUniqueColorsToButtons();
//   // display the image.
//   imgGreece.style.display = "block"
//   // display the new text.
//   textH3.textContent = "The Statue of Zeus at Olympia!";

//   // inputOne.textContent = 'Syria';
//   // inputTwo.textContent = 'Greece';
//   // inputThree.textContent = 'Romania';
//   // inputFour.textContent = 'Libya';

//   console.log('Is in Greece');

//   // Remove Point Input.
//   // inputOne.addEventListener('click', () => { imgGreece.style.display = "none"; removePointSolution(Greece) })
//   // inputThree.addEventListener('click', () => { imgGreece.style.display = "none"; removePointSolution(Greece) })
//   // inputFour.addEventListener('click', () => { imgGreece.style.display = "none"; removePointSolution(Greece) })

//   // I add the example here!


//   // Increase Star-Point condition.
//   // let livePlusOne = 0
//   // inputTwo.addEventListener('click', () => {
//   //   stopTimer = true;
//   //   if (livePlusOne === 0) {
//   //     livePlusOne += 1
//   //     startPoint.textContent++

//   //     // Delete this card from the array.
//   //     let index = arrayCardFunction.indexOf(Greece);
//   //     if (index !== -1) {
//   //       arrayCardFunction.splice(index, 1);
//   //       console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
//   //       let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
//   //       selectRandomFunction()
//   //     }
//   //     // Delete Image:
//   //     imgGreece.style.display = "none"
//   //   }
//   //   winCondition = true;
//   //   console.log('Win Condition is TRUE!')
//   // })
// }



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