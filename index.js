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

let newTime = parseFloat(window.getComputedStyle(timeVar).width) 

function countdown() {
    let i = newTime;
    let interval = setInterval(function() {
        timeVar.style.width = i + "px"; // Set the width of timeVar
        console.log(i);
        i--;
        if (i < 0) {
            clearInterval(interval);
            console.log("Blast off!");
            // console.log(timeVar);
        }
    }, 50); // Adjust the delay here (in milliseconds)
}

countdown();
