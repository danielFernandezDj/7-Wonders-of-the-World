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
const textH3 = document.getElementById('h3')

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

function applyUniqueColorsToButtons() {
  const colors = ['#ff839d', '#ffd77c', '#66b5ef', '#74cdcd'];
  const shuffledColors = shuffleArray(colors);
  const buttons = document.querySelectorAll('.button-style');

  buttons.forEach((button, index) => {
    button.style.backgroundColor = shuffledColors[index % shuffledColors.length];
  });
}


// ! Variables.
let winCondition = false;
let timeOut = false;
let speedTimer = 50;
console.log(winCondition)

// Live Points selection.
let livePoints = document.getElementById('menu-h2-live')
let startPoint = document.getElementById('point-number')


//  GamePlay option 1-Egypt ••••••••••••••••••••••••••••••••••••
function Egypt() {
  timeOut = false;
  winCondition = false;

  // In this part it will be music and soundFX. 

  // Call the function to apply unique colors to buttons
  applyUniqueColorsToButtons();
  // display the image.
  imgEgypt.style.display = "block"
  // display the new text.
  textH3.textContent = 'From what country is "The Great Pyramid of Giza"'

  inputOne.textContent = 'Egypt';
  inputTwo.textContent = 'Vegas';
  inputThree.textContent = 'India';
  inputFour.textContent = 'Pakistan';

  // Reduce Live condition.
  [inputTwo, inputThree, inputFour].forEach(function (input) {
    input.addEventListener('click', function (event) {
      console.log("Button" + event.target.id + "is pressed.");

      if (livePoints.textContent > 0) {
        livePoints.textContent--
      } else { livePoints.textContent = 0; winCondition = false;}
      console.log(livePoints.textContent)
    });
  });

  // Increase Live condition.
  let livePlusOne = 0
  inputOne.addEventListener('click', () => {
    if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++
    }
    winCondition = true;
    console.log('Win Condition is TRUE!')
  })
} // Egypt();

//  GamePlay option 1-Iraq ••••••••••••••••••••••••••••••••••••
function Iraq() {
  timeOut = false;
  winCondition = false;

  // In this part it will be music and soundFX. 

  // Call the function to apply unique colors to buttons
  applyUniqueColorsToButtons();
  // display the image.
  imgIraq.style.display = "block"
  // display the new text.
  textH3.textContent = 'From what country is "The Hanging Gardens of Babylon"'

  inputOne.textContent = 'Brazil';
  inputTwo.textContent = 'Italia';
  inputThree.textContent = 'Iraq';
  inputFour.textContent = 'Roma';

  // Reduce Live condition.
  [inputOne, inputTwo, inputFour].forEach(function (input) {
    input.addEventListener('click', function (event) {
      console.log("Button" + event.target.id + "is pressed.");

      if (livePoints.textContent > 0) {
        livePoints.textContent--
      } else { livePoints.textContent = 0; winCondition = false;}
      console.log(livePoints.textContent)
    });
  });

  // Increase Live condition.
  let livePlusOne = 0
  inputThree.addEventListener('click', () => {
    if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++
    }
    winCondition = true;
    console.log('Win Condition is TRUE!')
  })
} // Iraq();

//  GamePlay option 1-Iraq ••••••••••••••••••••••••••••••••••••
function Greece() {
  timeOut = false;
  winCondition = false;

  // In this part it will be music and soundFX. 

  // Call the function to apply unique colors to buttons
  applyUniqueColorsToButtons();
  // display the image.
  imgGreece.style.display = "block"
  // display the new text.
  textH3.textContent = 'From what country is "The Hanging Gardens of Babylon"'

  inputOne.textContent = 'Brazil';
  inputTwo.textContent = 'Italia';
  inputThree.textContent = 'Iraq';
  inputFour.textContent = 'Roma';

  // Reduce Live condition.
  [inputOne, inputThree, inputFour].forEach(function (input) {
    input.addEventListener('click', function (event) {
      console.log("Button" + event.target.id + "is pressed.");

      if (livePoints.textContent > 0) {
        livePoints.textContent--
      } else { livePoints.textContent = 0; winCondition = false;}
      console.log(livePoints.textContent)
    });
  });

  // Increase Live condition.
  let livePlusOne = 0
  inputTwo.addEventListener('click', () => {
    if (livePlusOne === 0) {
      livePlusOne += 1
      startPoint.textContent++
    }
    winCondition = true;
    console.log('Win Condition is TRUE!')
  })
} Greece();



// Time var section ••••••••••••••••••••••••••••••••••••
let timeVar = document.getElementById("time-var");
let timeProgress = document.getElementById('time-var-progress')

function countdown() {
  let i = parseFloat(window.getComputedStyle(timeVar).width)
  let interval = setInterval(function () {
    timeProgress.style.width = i + "px"; // Set the width of timeVar
    console.log(i);
    i--;
    if (i < 18) {
      clearInterval(interval);
      timeOut = true
      winCondition = false;
      livePoints.textContent -= "1" // Live condition.
      console.log("Blast off!");
    }
    if (i === 150) {
      timeProgress.style.backgroundColor = 'red'
    }
    // Reduce the time speed wen the player get Points.
  }, speedTimer);
}
countdown();


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