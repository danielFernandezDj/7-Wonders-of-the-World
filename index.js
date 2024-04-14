// Select the card storage section. 
const cardStorage = document.getElementById('card')

// Select the Images in the storage.
const imgEgypt = document.getElementById("egypt")
cardStorage.appendChild(imgEgypt)

// Select Q&A Text.
const textH3 = document.getElementById('h3')

// Select Inputs.
const inputOne = document.getElementById('option-one')
const inputTwo = document.getElementById('option-two')
const inputThree = document.getElementById('option-three')
const inputFour = document.getElementById('option-four')

// Variables.
let winButton = false;
let timeOut = false;

//  Input! ••••••••••••••••••••••••••••••••••••
function Egypt() {
  imgEgypt.style.display = "block"

  textH3.textContent = 'From what country is "The Great Pyramid of Giza"'

  inputOne.textContent = 'Egypt';
  inputTwo.textContent = 'Vegas';
  inputThree.textContent = 'India';
  inputFour.textContent = 'Pakistan';

  [inputTwo, inputThree, inputFour].forEach(function (input) {
    input.addEventListener('click', function (event) {
      console.log("Button" + event.target.id  + "is pressed.");
    });
  });
  
  inputOne.addEventListener('click', () => {
    winButton = true; 
    console.log(`The win button was press it =  ${winButton}`)
  })
}
Egypt();


// Time var section.
let timeVar = document.getElementById("time-var");
let timeProgress = document.getElementById('time-var-progress')

function countdown() {
    let i = parseFloat(window.getComputedStyle(timeVar).width) 
    let interval = setInterval(function() {
        timeProgress.style.width = i + "px"; // Set the width of timeVar
        console.log(i);
        i--;
        if (i < 0) {
            clearInterval(interval);
            timeOut = true
            console.log("Blast off!");
        }
        if (i === 150) {
            timeProgress.style.backgroundColor = 'red'
        } 
        // Reduce the time speed wen the player get Points.
    }, 50); // Adjust the delay here (in milliseconds)
}

// countdown();


// TODO: add a video button for the card; example: a youtube video from Egypt.
// Lose conditions:
// If you select the wrong option you lose 1live; => and change to a random card.
// if the time is 0 you lose 1live; => and change to a random card.

// Win condition:
// You get one star if player select the right option;
// => then delete this card from the array - and change to a random card. 
// Player wins wen get the total of 7 stars.
// => then Pop Up your Win