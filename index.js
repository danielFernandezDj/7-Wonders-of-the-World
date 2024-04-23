
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
const imgTurkey = document.getElementById('turkey')
cardStorage.appendChild(imgTurkey)
const imgTurkey2 = document.getElementById('turkey2')
cardStorage.appendChild(imgTurkey2)
const imgGreece2 = document.getElementById('greece2')
cardStorage.appendChild(imgGreece2)
const imgEgypt2 = document.getElementById('egypt2')
cardStorage.appendChild(imgEgypt2)

// Select Q&A Text.
const textH3 = document.getElementById('h3Q')

// Live Points selection.
let livePoints = document.getElementById('menu-h2-live')
let startPoint = document.getElementById('point-number')

let inputOne, inputTwo, inputThree, inputFour;
let buttonArrayInit = false;

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
    initInputSound()
    buttonArrayInit = true
  });
}

// π --------------------------- Audio & FX --------------------------- π
// Audio Over Inputs 
function initInputSound() {
  let inputAudio = 0.4;

  inputOne.addEventListener('mouseover', () => {
    const audioButton = document.getElementById('audio-hover-button')
    audioButton.volume = inputAudio
    audioButton.currentTime = 0;
    audioButton.play();
  })
  inputTwo.addEventListener('mouseenter', () => {
    const audioButton = document.getElementById('audio-hover-button')
    audioButton.volume = inputAudio
    audioButton.currentTime = 0;
    audioButton.play();
  })
  inputThree.addEventListener('mouseenter', () => {
    const audioButton = document.getElementById('audio-hover-button')
    audioButton.volume = inputAudio
    audioButton.currentTime = 0;
    audioButton.play();
  })
  inputFour.addEventListener('mouseenter', () => {
    const audioButton = document.getElementById('audio-hover-button')
    audioButton.volume = inputAudio
    audioButton.currentTime = 0;
    audioButton.play();
  })
}

// Audio Button Main Menu 
const menuButton = document.getElementById('start-menu-button')
menuButton.addEventListener('mouseenter', () => {
  const audioMainMenuButton = document.getElementById('audio-hover-button')
  audioMainMenuButton.volume = 0.3;
  audioMainMenuButton.currentTime = 0;
  audioMainMenuButton.play();
})

menuButton.addEventListener('click', () => {
  const audioClickButton = document.getElementById('audio-hover-button')
  audioClickButton.volume = 0.3;
  audioClickButton.currentTime = 0;
  audioClickButton.play()
})

// •••••••••••••••••••••••••••••• How To Play '?' Icon ••••••••••••••••••••••••••••••
const howToPlayIcon = document.getElementById('how-to-play-icon')
howToPlayIcon.addEventListener('mouseenter', () => {
  const howToPlayIcon = document.getElementById('audio-hover-button')
  howToPlayIcon.volume = 0.3;
  howToPlayIcon.currentTime = 0;
  howToPlayIcon.play();
})

// •••••••••••••••••••••••••••••• open How to Play menu ••••••••••••••••••••••••••••••
const getHowPlayButton = document.getElementById('how-to-play-icon')
const getDivHowPlayMenu = document.getElementById('how-play-div')
const howImageButton = document.getElementById('how-img-button')

getHowPlayButton.addEventListener('click', () => {
  getDivHowPlayMenu.style.display = "block";
})

howImageButton.addEventListener('click', () => {
  getDivHowPlayMenu.style.display = "none";

  const audioHowToPlay = document.getElementById('audio-hover-button')
  audioHowToPlay.volume = 0.3;
  audioHowToPlay.currentTime = 0; // Reset audio to start
  audioHowToPlay.play()
})

// audio of How to play
getHowPlayButton.addEventListener('click', () => {
  const audioHowToPlay = document.getElementById('audio-hover-button')
  audioHowToPlay.volume = 0.3;
  audioHowToPlay.currentTime = 0; // Reset audio to start
  audioHowToPlay.play()
})

howImageButton.addEventListener('mouseenter', () => {
  const audioHowToPlay = document.getElementById('audio-hover-button')
  audioHowToPlay.volume = 0.3;
  audioHowToPlay.currentTime = 0; // Reset audio to start
  audioHowToPlay.play()
})


// •••••••••••••••••••••••••••••• Button Election Audio ••••••••••••••••••••••••••••••
function wrongOption() {
  const wrongOptionAudio = document.getElementById('audio-wrong-option')
  wrongOptionAudio.volume = 0.2;
  wrongOptionAudio.currentTime = 0; // Reset audio to start
  wrongOptionAudio.play();
}

function correctOption() {
  const correctOptionAudio = document.getElementById('audio-correct-option')
  correctOptionAudio.volume = 0.2;
  correctOptionAudio.currentTime = 0; // Reset audio to start
  correctOptionAudio.play();
}


// •••••••••••••••••••••••••••••• Variables. ••••••••••••••••••••••••••••••
let cardAwaitTimer = 500;
let musicVolume = 0.3;
// Time Var variables. > not used!
// let stopTimer = false; console.log(`Stop timer is = ${stopTimer}!`)
// let speedTimer = 10;


// Set a delay timer for 'async' functions.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// •••••••••••••••••••••••••••••• Delay Function ••••••••••••••••••••••••••••••
async function removeInputs() {
  while (hudButtonDiv.firstChild) {
    hudButtonDiv.removeChild(hudButtonDiv.firstChild)
  }
}

// •••••••••••••••••••••••••••••• Input Color ••••••••••••••••••••••••••••••
// Random Inputs-Color.
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


// •••••••••••••••••••••••••••••• Main Menu ••••••••••••••••••••••••••••••
function startMenu() {
  // Get Menu Div's.
  const startMenuContainer = document.getElementById('start-menu-container')
  // Get Buttons and apply a Condition.
  document.getElementById('start-menu-button').addEventListener('click', async () => {
    // music
    const audio = document.getElementById("introAudio");
    audio.volume = musicVolume;
    audio.play();

    //button audio

    // Delay >>
    console.log("Waiting some seconds...");
    await delay(500); // Waiting some seconds (2000 milliseconds)
    startMenuContainer.style.display = 'none';
    console.log('Button is press it!')
    selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)];
    selectRandomFunction();
  })
} startMenu()


//  •••••••••••••••••••••••••••••• Game Play Section ••••••••••••••••••••••••••••••
// Add the Card function to this array.
let arrayCardFunction = [Egypt, Iraq, Greece, Turkey, Turkey2, Greece2, Egypt2]  // <<<
selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]

async function checkLivePoints() {
  if (parseInt(livePoints.textContent) <= 1) {
    await delay(500);
    window.open('assets/html/endMenu.html', '_self')
  }
}

function PlayNewAudio(urlAudio) {
  playAudio = new Audio(urlAudio);
  playAudio.play()
}

// •••••••••••••••••••••••••••••• Remove 'card' from the array ••••••••••••••••••••••••••••••
async function removeCardFromArray(indexCard) {
  let index = arrayCardFunction.indexOf(indexCard);

  // Remove this card from the array.
  if (index !== -1) {
    arrayCardFunction.splice(index, 1);
    console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
    let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
    if (arrayCardFunction.length !== 0) {
      selectRandomFunction();
    } else {
      console.log("Waiting some seconds...");
      await delay(500);
      window.open('assets/html/winMenu.html', '_self')
    }
  }
}

// Remove Live Point and change to the next Card. 
function removePointSolution(indexCard) {
  let index = arrayCardFunction.indexOf(indexCard); // The card name goes in the 'indexCard'
  removeInputs()
  selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
  selectRandomFunction();
  checkLivePoints();

  if (livePoints.textContent > 0) {
    livePoints.textContent--;
  } else {
    livePoints.textContent = 0;
    winCondition = false;
  }
}


// •••••••••••••••••••••••••••••• GamePlay Card ••••••••••••••••••••••••••••••
// ! Card 1-Egypt ••••••••••••••••••••••••••••••••••••
function Egypt() {
  createButtons()
  applyUniqueColorsToButtons();
  indexCard = "Egypt";
  imgEgypt.style.display = "block"
  textH3.textContent = "The Great Pyramid of Giza!"

  inputOne.textContent = 'Egypt';
  inputTwo.textContent = 'Vegas';
  inputThree.textContent = 'India';
  inputFour.textContent = 'Pakistan';

  // Remove Point Input & change to other card.
  inputTwo.addEventListener('click', () => { imgEgypt.style.display = "none"; wrongOption(); removePointSolution(Egypt) })
  inputThree.addEventListener('click', () => { imgEgypt.style.display = "none"; wrongOption(); removePointSolution(Egypt) })
  inputFour.addEventListener('click', () => { imgEgypt.style.display = "none"; wrongOption(); removePointSolution(Egypt) })

  // Increase Star-Point condition.
  inputOne.addEventListener('click', async () => {
    correctOption()
    removeInputs()
    removeCardFromArray(Egypt)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer);
    }

    startPoint.textContent++
    imgEgypt.style.display = "none"
  })
}

// ! Card 2-Iraq ••••••••••••••••••••••••••••••••••••
function Iraq() {
  createButtons()
  applyUniqueColorsToButtons();
  indexCard = "Iraq";
  imgIraq.style.display = "block"
  textH3.textContent = "The Hanging Gardens of Babylon!";

  inputOne.textContent = 'Brazil';
  inputTwo.textContent = 'Italia';
  inputThree.textContent = 'Iraq';
  inputFour.textContent = 'Roma';

  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgIraq.style.display = "none"; wrongOption(); removePointSolution(Iraq) })
  inputTwo.addEventListener('click', () => { imgIraq.style.display = "none"; wrongOption(); removePointSolution(Iraq) })
  inputFour.addEventListener('click', () => { imgIraq.style.display = "none"; wrongOption(); removePointSolution(Iraq) })

  // Increase Star-Point condition.
  inputThree.addEventListener('click', async () => {
    correctOption()
    removeInputs()
    removeCardFromArray(Iraq)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer);
    }
    startPoint.textContent++
    imgIraq.style.display = "none"
  })
}

// ! Card  3-Greece ••••••••••••••••••••••••••••••••••••
function Greece() {
  createButtons()
  applyUniqueColorsToButtons();
  indexCard = "Greece";
  imgGreece.style.display = "block";
  textH3.textContent = "The Statue of Zeus at Olympia!";

  inputOne.textContent = 'Syria';
  inputTwo.textContent = 'Greece';
  inputThree.textContent = 'Romania';
  inputFour.textContent = 'Libya';

  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgGreece.style.display = "none"; wrongOption(); removePointSolution(Greece) })
  inputThree.addEventListener('click', () => { imgGreece.style.display = "none"; wrongOption(); removePointSolution(Greece) })
  inputFour.addEventListener('click', () => { imgGreece.style.display = "none"; wrongOption(); removePointSolution(Greece) })

  // Increase Star-Point condition.
  inputTwo.addEventListener('click', async () => {
    correctOption()
    removeInputs()
    removeCardFromArray(Greece)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer);
    }
    startPoint.textContent++
    imgGreece.style.display = "none";
  })
}

// ! Card  4-Turkey ••••••••••••••••••••••••••••••••••••
function Turkey() {
  createButtons()
  applyUniqueColorsToButtons();
  indexCard = "Turkey";
  imgTurkey.style.display = "block"
  textH3.textContent = "The Temple of Artemis at Ephesus!";

  inputOne.textContent = 'Georgia';
  inputTwo.textContent = 'Turkey';
  inputThree.textContent = 'Syria';
  inputFour.textContent = 'Armenia';

  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgTurkey.style.display = "none"; wrongOption(); removePointSolution(Turkey) })
  inputThree.addEventListener('click', () => { imgTurkey.style.display = "none"; wrongOption(); removePointSolution(Turkey) })
  inputFour.addEventListener('click', () => { imgTurkey.style.display = "none"; wrongOption(); removePointSolution(Turkey) })

  // Increase Star-Point condition.
  inputTwo.addEventListener('click', async () => {
    correctOption()
    removeInputs()
    removeCardFromArray(Turkey)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer);
    }
    startPoint.textContent++
    imgTurkey.style.display = "none"
  })
}

// ! Card  5-Turkey-2 ••••••••••••••••••••••••••••••••••••
function Turkey2() {
  createButtons()
  applyUniqueColorsToButtons();
  indexCard = "Turkey2";
  imgTurkey2.style.display = "block"
  textH3.textContent = "The Mausoleum at Halicarnassus!";

  inputOne.textContent = 'Turkey';
  inputTwo.textContent = 'Roma';
  inputThree.textContent = 'Italia';
  inputFour.textContent = 'Armenia';

  // Remove Point Input & change to other card.
  inputTwo.addEventListener('click', () => { imgTurkey2.style.display = "none"; wrongOption(); removePointSolution(Turkey2) })
  inputThree.addEventListener('click', () => { imgTurkey2.style.display = "none"; wrongOption(); removePointSolution(Turkey2) })
  inputFour.addEventListener('click', () => { imgTurkey2.style.display = "none"; wrongOption(); removePointSolution(Turkey2) })

  // Increase Star-Point condition.
  inputOne.addEventListener('click', async () => {
    correctOption()
    removeInputs()
    removeCardFromArray(Turkey2)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer);
    }
    startPoint.textContent++
    imgTurkey2.style.display = "none"
  })
}

// ! Card  6-Greece-2 ••••••••••••••••••••••••••••••••••••
function Greece2() {
  createButtons()
  applyUniqueColorsToButtons();
  indexCard = "Greece2";
  imgGreece2.style.display = "block"
  textH3.textContent = "The Colossus of Rhodes!";

  inputOne.textContent = 'Israel';
  inputTwo.textContent = 'Roma';
  inputThree.textContent = 'Romania';
  inputFour.textContent = 'Greece';

  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgGreece2.style.display = "none"; wrongOption(); removePointSolution(Greece2) })
  inputTwo.addEventListener('click', () => { imgGreece2.style.display = "none"; wrongOption(); removePointSolution(Greece2) })
  inputThree.addEventListener('click', () => { imgGreece2.style.display = "none"; wrongOption(); removePointSolution(Greece2) })

  // Increase Star-Point condition.
  inputFour.addEventListener('click', async () => {
    correctOption()
    removeInputs()
    removeCardFromArray(Greece2)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer);
    }
    startPoint.textContent++
    imgGreece2.style.display = "none"
  })
}

// ! Card 7-Egypt-2 ••••••••••••••••••••••••••••••••••••
function Egypt2() {
  createButtons()
  applyUniqueColorsToButtons();
  indexCard = "Egypt2";
  imgEgypt2.style.display = "block";
  textH3.textContent = "The Lighthouse of Alexandria!";

  inputOne.textContent = 'Spain';
  inputTwo.textContent = 'Georgia';
  inputThree.textContent = 'Greece';
  inputFour.textContent = 'Egypt';

  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgEgypt2.style.display = "none"; wrongOption(); removePointSolution(Egypt2) })
  inputTwo.addEventListener('click', () => { imgEgypt2.style.display = "none"; wrongOption(); removePointSolution(Egypt2) })
  inputThree.addEventListener('click', () => { imgEgypt2.style.display = "none"; wrongOption(); removePointSolution(Egypt2) })

  // Increase Star-Point condition.
  inputFour.addEventListener('click', async () => {
    correctOption()
    removeInputs()
    removeCardFromArray(Egypt2)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer);
    }
    startPoint.textContent++
    imgEgypt2.style.display = "none";
  })
}

// Time var section ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// let timeVar = document.getElementById("time-var");
// let timeProgress = document.getElementById('time-var-progress')
// let i = parseFloat(window.getComputedStyle(timeVar).width
// function countdown() { 
//   let interval = setInterval(function () {
//     timeProgress.style.width = i + "px"; // Set the width of timeVar

//     if (stopTimer == false) {
//       console.log(i);
//       i--;
//     } else { i = i; console.log(i); }

//     // To remove 1 Live.
//     if (i < 18) {
//       clearInterval(interval);
//       livePoints.textContent -= "1" // Live condition.
//       winCondition = false;
//       console.log("Blast off!");
//     }

//     // Change the timer background Color.
//     if (i === 150) {
//       timeProgress.style.backgroundColor = 'red'
//     }
//     // Reduce the time speed wen the player get Points.
// //  }, speedTimer);
