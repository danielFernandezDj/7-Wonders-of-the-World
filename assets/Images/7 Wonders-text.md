The Seven Wonders of the Ancient World are:

<!-- The Great Pyramid of Giza (Egypt) -->
<!-- The Hanging Gardens of Babylon (Iraq) -->
<!-- The Statue of Zeus at Olympia (Greece) -->
<!-- The Temple of Artemis at Ephesus (Turkey) -->
<!-- The Mausoleum at Halicarnassus (Turkey) -->
The Colossus of Rhodes (Greece)
The Lighthouse of Alexandria (Egypt)

........................................

The New Seven Wonders of the World are:

The Great Wall of China (China)
Petra (Jordan)
Christ the Redeemer (Brazil)
Machu Picchu (Peru)
Chichen Itza (Mexico)
The Roman Colosseum (Italy)
The Taj Mahal (India)



  console.log('Is in Egypt');
    [inputTwo, inputThree, inputFour].forEach(function (input) {
      input.addEventListener('click', function (event) {
        console.log(`you lose on Star point`);
      // Delete this card from the array.
      let index = arrayCardFunction.indexOf(Egypt);
      if (index !== -1) {
        arrayCardFunction.splice(index, 1);
        console.log(`Array Function has = ${arrayCardFunction.length} functions inside!`)
        let selectRandomFunction = arrayCardFunction[Math.floor(Math.random() * arrayCardFunction.length)]
        selectRandomFunction()
      }
      // Delete Image:
      imgEgypt.style.display = "none"

      if (livePoints.textContent > 0) {
        livePoints.textContent--;
      } else {
        livePoints.textContent = 0;
        winCondition = false;
      }
      console.log(livePoints.textContent);
    });
  });