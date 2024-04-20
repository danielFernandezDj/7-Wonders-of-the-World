
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
    audioButton.currentTime = 0; // Reset audio to start
    audioButton.play();
  })
  inputTwo.addEventListener('mouseenter', () => {
    const audioButton = document.getElementById('audio-hover-button')
    audioButton.volume = inputAudio
    audioButton.currentTime = 0; // Reset audio to start
    audioButton.play();
  })
  inputThree.addEventListener('mouseenter', () => {
    const audioButton = document.getElementById('audio-hover-button')
    audioButton.volume = inputAudio
    audioButton.currentTime = 0; // Reset audio to start
    audioButton.play();
  })
  inputFour.addEventListener('mouseenter', () => {
    const audioButton = document.getElementById('audio-hover-button')
    audioButton.volume = inputAudio
    audioButton.currentTime = 0; // Reset audio to start
    audioButton.play();
  })
}

// Audio Button Main Menu 
const menuButton = document.getElementById('start-menu-button')
menuButton.addEventListener('mouseenter', () => {
  const audioMainMenuButton = document.getElementById('audio-hover-button')
  audioMainMenuButton.volume = 0.3;
  audioMainMenuButton.currentTime = 0; // Reset audio to start
  audioMainMenuButton.play();
})

menuButton.addEventListener('click', () => {
  const audioClickButton = document.getElementById('audio-hover-button')
  audioClickButton.volume = 0.3;
  audioClickButton.currentTime = 0; // Reset audio to start
  audioClickButton.play()
})

// •••••••••••••••••••••••••••••• How To Play '?' Icon ••••••••••••••••••••••••••••••
const howToPlayIcon = document.getElementById('how-to-play-icon')
howToPlayIcon.addEventListener('mouseenter', () => {
  const howToPlayIcon = document.getElementById('audio-hover-button')
  howToPlayIcon.volume = 0.3;
  howToPlayIcon.currentTime = 0; // Reset audio to start
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
// Audio Wrong election
function wrongOption() {
  const wrongOptionAudio = document.getElementById('audio-wrong-option')
  wrongOptionAudio.volume = 0.2;
  wrongOptionAudio.currentTime = 0; // Reset audio to start
  wrongOptionAudio.play();
}

// Audio Correct election
function correctOption() {
  const correctOptionAudio = document.getElementById('audio-correct-option')
  correctOptionAudio.volume = 0.2;
  correctOptionAudio.currentTime = 0; // Reset audio to start
  correctOptionAudio.play();
}


// •••••••••••••••••••••••••••••• Variables. ••••••••••••••••••••••••••••••
let winCondition = false; // console.log(winCondition)
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
// Live Points selection.
let livePoints = document.getElementById('menu-h2-live')
let startPoint = document.getElementById('point-number')

// Add the Card function to this array.
let arrayCardFunction = [Egypt, Iraq, Greece, Turkey, Turkey2, Greece2, Egypt2]  // <<<
selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]

// When the live is 0 => open the Loser HTML file.
async function checkLivePoints() {
  if (parseInt(livePoints.textContent) <= 1) {
    console.log(`Live is equal to 0! •••••••••••••••••••••••••••••••••••••••••`);

    // Open the HTML lose file.
    console.log("Waiting some seconds...");
    // todo: Put button audio here!

    await delay(500); // Waiting some seconds (2000 milliseconds)
    window.open('assets/html/endMenu.html', '_self')
  }
}

// Testing the Timer Function.
async function startAfterDelay() {
  console.log("Waiting for 2 seconds...");
  await delay(1000); // Wait for 2 seconds (2000 milliseconds)
  console.log("2 seconds have passed. Starting now!");
  // Put your code here that you want to execute after the delay
}

function PlayNewAudio(urlAudio) {
  playAudio = new Audio(urlAudio); // 'path/to/your/audio/file.mp3'
  playAudio.play()
}

// •••••••••••••••••••••••••••••• Remove 'card' from the array ••••••••••••••••••••••••••••••
async function removeCardFromArray(indexCard) {
  // The card name goes in the 'indexCard'
  let index = arrayCardFunction.indexOf(indexCard);

  // Remove this card from the array.
  if (index !== -1) {
    arrayCardFunction.splice(index, 1);
    console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
    let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
    if (arrayCardFunction.length !== 0) {
      selectRandomFunction();
    } else {
      // Open the HTML lose file. 
      console.log("Waiting some seconds...");
      await delay(500); // Waiting some seconds (2000 milliseconds)
      // todo: Put button audio here!

      window.open('assets/html/winMenu.html', '_self')
    }
  }
}

// Remove Live Point and change to the next Card. 
function removePointSolution(indexCard) {
  // console.log(`you lose on Star point`);

  // The card name goes in the 'indexCard'
  let index = arrayCardFunction.indexOf(indexCard);

  removeInputs() // Remove inputs.

  selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
  selectRandomFunction();

  checkLivePoints();

  if (livePoints.textContent > 0) {
    livePoints.textContent--;
  } else {
    livePoints.textContent = 0;
    winCondition = false;
  }
  // console.log(`The removePointSolution it works`);
  console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
}

// •••••••••••••••••••••••••••••• GamePlay Card ••••••••••••••••••••••••••••••
// ! Card 1-Egypt ••••••••••••••••••••••••••••••••••••
function Egypt() { // <<<<<<<<<<<<<<<<<<<<<<<<<
  console.log('Is in Egypt'); // checking if we are in this function.
  createButtons() // Create new 'inputs'.

  winCondition = false;
  indexCard = "Egypt"; // <<<<<<<<<<<<<<<<<<<<<<<<<

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgEgypt.style.display = "block" // <<<<<<<<<<<<<<<<<<<<<<<<<

  textH3.textContent = "The Great Pyramid of Giza!" // Q&A text goes here.

  // Add Country Name to each input. // <<<<<<<<<<<<<<<<<<<<<<<<<
  inputOne.textContent = 'Egypt';
  inputTwo.textContent = 'Vegas';
  inputThree.textContent = 'India';
  inputFour.textContent = 'Pakistan';

  // Remove Point Input & change to other card.
  inputTwo.addEventListener('click', () => { imgEgypt.style.display = "none"; wrongOption(); removePointSolution(Egypt) })
  inputThree.addEventListener('click', () => { imgEgypt.style.display = "none"; wrongOption(); removePointSolution(Egypt) })
  inputFour.addEventListener('click', () => { imgEgypt.style.display = "none"; wrongOption(); removePointSolution(Egypt) })

  // Increase Star-Point condition.
  let livePlusOne = 0

  inputOne.addEventListener('click', async () => { // <<<<<<<<<<<<<<<<<<<<<<<<<
    correctOption() // Audio
    removeInputs() // Remove the inputs.
    removeCardFromArray(Egypt) // <<<<<<<<<<<<<<<<<<<<<<<<<

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer); // Waiting some seconds (2000 milliseconds)
      // todo: Put the 'Won' audio here!

    }

    // if (livePlusOne === 0) {
    livePlusOne += 1
    startPoint.textContent++
    imgEgypt.style.display = "none" // <<<<<<<<<<<<<<<<<<<<<<<<<
    // }

    winCondition = true;
    // console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Egypt()

// ! Card 2-Iraq ••••••••••••••••••••••••••••••••••••
function Iraq() { // <<<<<<<<<<<<<<<<<<<<<<<<<
  console.log('Is in Iraq'); // checking if we are in this function.
  createButtons() // Create new 'inputs'.

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
  inputOne.addEventListener('click', () => { imgIraq.style.display = "none"; wrongOption(); removePointSolution(Iraq) })
  inputTwo.addEventListener('click', () => { imgIraq.style.display = "none"; wrongOption(); removePointSolution(Iraq) })
  inputFour.addEventListener('click', () => { imgIraq.style.display = "none"; wrongOption(); removePointSolution(Iraq) })

  // todo Increase Star-Point condition.
  let livePlusOne = 0
  inputThree.addEventListener('click', async () => {
    correctOption() // Audio
    removeInputs() // Remove the inputs.
    removeCardFromArray(Iraq)

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer); // Waiting some seconds (2000 milliseconds)
      // todo: Put the 'Won' audio here!

    }

    // if (livePlusOne === 0) {
    livePlusOne += 1
    startPoint.textContent++
    imgIraq.style.display = "none"
    // }

    winCondition = true;
    // console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Iraq()

// ! Card  3-Greece ••••••••••••••••••••••••••••••••••••
function Greece() { // <<<<<<<<<<<<<<<<<<<<<<<<<
  console.log('Is in Greece'); // checking if we are in this function.
  createButtons() // Create new 'inputs'.

  winCondition = false;
  indexCard = "Greece"; // <<<<<<<<<<<<<<<<<<<<<<<<<

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgGreece.style.display = "block"  // display the image. // <<<<<<<<<<<<<<<<<<<<<<<<<

  textH3.textContent = "The Statue of Zeus at Olympia!";  // Q&A text goes here.

  // Add Country Name to each input.  // <<<<<<<<<<<<<<<<<<<<<<<<<
  inputOne.textContent = 'Syria';
  inputTwo.textContent = 'Greece';
  inputThree.textContent = 'Romania';
  inputFour.textContent = 'Libya';

  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgGreece.style.display = "none"; wrongOption(); removePointSolution(Greece) })
  inputThree.addEventListener('click', () => { imgGreece.style.display = "none"; wrongOption(); removePointSolution(Greece) })
  inputFour.addEventListener('click', () => { imgGreece.style.display = "none"; wrongOption(); removePointSolution(Greece) })

  // Increase Star-Point condition.
  let livePlusOne = 0
  inputTwo.addEventListener('click', async () => { // <<<<<<<<<<<<<<<<<<<<<<<<<
    correctOption() // Audio
    removeInputs() // Remove the inputs.
    removeCardFromArray(Greece) // <<<<<<<<<<<<<<<<<<<<<<<<<

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer); // Waiting some seconds (2000 milliseconds)
    }

    // if (livePlusOne === 0) {
    livePlusOne += 1
    startPoint.textContent++
    imgGreece.style.display = "none" // <<<<<<<<<<<<<<<<<<<<<<<<<
    // }

    winCondition = true;
    // console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Greece()

// ! Card  4-Turkey ••••••••••••••••••••••••••••••••••••
function Turkey() { // <<<<<<<<<<<<<<<<<<<<<<<<<
  console.log('Is in Turkey'); // checking if we are in this function. 
  createButtons() // Create new 'inputs'.  

  winCondition = false;
  indexCard = "Turkey"; // <<<<<<<<<<<<<<<<<<<<<<<<<

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgTurkey.style.display = "block"  // display the image. // <<<<<<<<<<<<<<<<<<<<<<<<<

  textH3.textContent = "The Temple of Artemis at Ephesus!";  // Q&A text goes here.

  // Add Country Name to each input.  // <<<<<<<<<<<<<<<<<<<<<<<<<
  inputOne.textContent = 'Georgia';
  inputTwo.textContent = 'Turkey';
  inputThree.textContent = 'Syria';
  inputFour.textContent = 'Armenia';


  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgTurkey.style.display = "none"; wrongOption(); removePointSolution(Turkey) })
  inputThree.addEventListener('click', () => { imgTurkey.style.display = "none"; wrongOption(); removePointSolution(Turkey) })
  inputFour.addEventListener('click', () => { imgTurkey.style.display = "none"; wrongOption(); removePointSolution(Turkey) })

  // todo Increase Star-Point condition.
  let livePlusOne = 0
  inputTwo.addEventListener('click', async () => { // <<<<<<<<<<<<<<<<<<<<<<<<<
    correctOption() // Audio
    removeInputs() // Remove the inputs.
    removeCardFromArray(Turkey) // <<<<<<<<<<<<<<<<<<<<<<<<<

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer); // Waiting some seconds (2000 milliseconds)
      // todo: Put the 'Won' audio here!

    }

    // if (livePlusOne === 0) {
    livePlusOne += 1
    startPoint.textContent++
    imgTurkey.style.display = "none" // <<<<<<<<<<<<<<<<<<<<<<<<<
    // }

    winCondition = true;
    // console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Turkey()

// ! Card  5-Turkey-2 ••••••••••••••••••••••••••••••••••••
function Turkey2() { // <<<<<<<<<<<<<<<<<<<<<<<<<
  console.log('Is in Turkey-2'); // checking if we are in this function. 
  createButtons() // Create new 'inputs'.  

  winCondition = false;
  indexCard = "Turkey2"; // <<<<<<<<<<<<<<<<<<<<<<<<<

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgTurkey2.style.display = "block"  // display the image. // <<<<<<<<<<<<<<<<<<<<<<<<<

  textH3.textContent = "The Mausoleum at Halicarnassus!";  // Q&A text goes here. // <<<<<<<< text

  // Add Country Name to each input.  // <<<<<<<<<<<<<<<<<<<<<<<<<
  inputOne.textContent = 'Turkey';
  inputTwo.textContent = 'Roma';
  inputThree.textContent = 'Italia';
  inputFour.textContent = 'Armenia';


  // Remove Point Input & change to other card.
  inputTwo.addEventListener('click', () => { imgTurkey2.style.display = "none"; wrongOption(); removePointSolution(Turkey2) }) // <<
  inputThree.addEventListener('click', () => { imgTurkey2.style.display = "none"; wrongOption(); removePointSolution(Turkey2) }) // <<
  inputFour.addEventListener('click', () => { imgTurkey2.style.display = "none"; wrongOption(); removePointSolution(Turkey2) }) // <<

  // todo Increase Star-Point condition.
  let livePlusOne = 0
  inputOne.addEventListener('click', async () => { // <<<<<<<<<<<<<<<<<<<<<<<<<
    correctOption() // Audio
    removeInputs() // Remove the inputs.
    removeCardFromArray(Turkey2) // <<<<<<<<<<<<<<<<<<<<<<<<<

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer); // Waiting some seconds (2000 milliseconds)
      // todo: Put the 'Won' audio here!

    }

    // if (livePlusOne === 0) {
    livePlusOne += 1
    startPoint.textContent++
    imgTurkey2.style.display = "none" // <<<<<<<<<<<<<<<<<<<<<<<<<
    // }

    winCondition = true;
    // console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Turkey2()

// ! Card  6-Greece-2 ••••••••••••••••••••••••••••••••••••
function Greece2() { // <<<<<<<<<<<<<<<<<<<<<<<<<
  console.log('Is in Greece-2'); // checking if we are in this function.
  createButtons() // Create new 'inputs'.

  winCondition = false;
  indexCard = "Greece2"; // <<<<<<<<<<<<<<<<<<<<<<<<<

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgGreece2.style.display = "block"  // display the image. // <<<<<<<<<<<<<<<<<<<<<<<<<

  textH3.textContent = "The Colossus of Rhodes!";  // Q&A text goes here. // <<<<<<<< text

  // Add Country Name to each input.  // <<<<<<<<<<<<<<<<<<<<<<<<<
  inputOne.textContent = 'Israel';
  inputTwo.textContent = 'Roma';
  inputThree.textContent = 'Romania';
  inputFour.textContent = 'Greece';


  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgGreece2.style.display = "none"; wrongOption(); removePointSolution(Greece2) }) // << img
  inputTwo.addEventListener('click', () => { imgGreece2.style.display = "none"; wrongOption(); removePointSolution(Greece2) }) // << img
  inputThree.addEventListener('click', () => { imgGreece2.style.display = "none"; wrongOption(); removePointSolution(Greece2) }) // << img

  // todo Increase Star-Point condition.
  let livePlusOne = 0
  inputFour.addEventListener('click', async () => { // <<<<<<<<<<<<<<<<<<<<<<<<<
    correctOption() // Audio
    removeInputs() // Remove the inputs.
    removeCardFromArray(Greece2) // <<<<<<<<<<<<<<<<<<<<<<<<<

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer); // Waiting some seconds (2000 milliseconds)
      // todo: Put the 'Won' audio here!

    }

    // if (livePlusOne === 0) {
    livePlusOne += 1
    startPoint.textContent++
    imgGreece2.style.display = "none" // <<<<<<<<<<<<<<<<<<<<<<<<<
    // }

    winCondition = true;
    // console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Greece2()

// ! Card 7-Egypt-2 ••••••••••••••••••••••••••••••••••••
function Egypt2() { // <<<<<<<<<<<<<<<<<<<<<<<<<
  console.log('Is in Egypt-2'); // checking if we are in this function.
  createButtons() // Create new 'inputs'.

  winCondition = false;
  indexCard = "Egypt2"; // <<<<<<<<<<<<<<<<<<<<<<<<<

  // Apply unique colors to buttons
  applyUniqueColorsToButtons();

  imgEgypt2.style.display = "block" // <<<<<<<<<<<<<<<<<<<<<<<<<

  textH3.textContent = "The Lighthouse of Alexandria!" // Q&A text goes here. // <<<<<<<< text  

  // Add Country Name to each input. // <<<<<<<<<<<<<<<<<<<<<<<<<
  inputOne.textContent = 'Spain';
  inputTwo.textContent = 'Georgia';
  inputThree.textContent = 'Greece';
  inputFour.textContent = 'Egypt';

  // Remove Point Input & change to other card.
  inputOne.addEventListener('click', () => { imgEgypt2.style.display = "none"; wrongOption(); removePointSolution(Egypt2) }) // << img.
  inputTwo.addEventListener('click', () => { imgEgypt2.style.display = "none"; wrongOption(); removePointSolution(Egypt2) }) // << img.
  inputThree.addEventListener('click', () => { imgEgypt2.style.display = "none"; wrongOption(); removePointSolution(Egypt2) }) // << img.

  // Increase Star-Point condition.
  let livePlusOne = 0
  inputFour.addEventListener('click', async () => { // <<<<<<<<<<<<<<<<<<<<<<<<<
    correctOption() // Audio
    removeInputs() // Remove the inputs.
    removeCardFromArray(Egypt2) // <<<<<<<<<<<<<<<<<<<<<<<<<

    if (arrayCardFunction.length === 0) {
      console.log("Waiting some seconds...");
      await delay(cardAwaitTimer); // Waiting some seconds (2000 milliseconds)
    }

    // if (livePlusOne === 0) {
    livePlusOne += 1
    startPoint.textContent++
    imgEgypt2.style.display = "none" // <<<<<<<<<<<<<<<<<<<<<<<<<
    // }

    winCondition = true;
    // console.log('Win Condition is TRUE! => remove this card from the array')
  })
} // Egypt2()




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
