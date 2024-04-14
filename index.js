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


// let timeVar = document.getElementById("time-var");
// let timeProgress = document.getElementById('time-var-progress')

// function countdown() {
//     let initialWidth = parseFloat(window.getComputedStyle(timeVar).width); 
//     let i = initialWidth;
//     let decrementAmount = initialWidth / 10; // You can adjust this value as needed

//     let interval = setInterval(function() {
//         timeProgress.style.width = i + "px"; // Set the width of timeProgress
//         console.log(i);
//         i -= decrementAmount;
//         if (i < 0) {
//             clearInterval(interval);
//             console.log("Blast off!");
//         }
//     }, 50); // Adjust the delay here (in milliseconds)
// }

// countdown();

