const daysWrap = document.getElementById("days-wrap");
const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const answerElement = document.getElementById("answer");
let daysNumber = `<ul>`;

for (let i = 1; i < 101; i++){
    const multipleOfFive = (i % 5) === 0;
    const multipleOfThree = (i % 3) === 0;
    if (multipleOfThree && multipleOfFive) {
        daysNumber += `<li class="box"><img src="spritz-buzz.png" alt="immagine di Buzz Lightyear che beve uno spritz"></li>`;
    } else if (multipleOfFive) {
        daysNumber += `<li class="box"><img src="buzz.png" alt="immagine di Buzz Lightyear"></li>`;
    } else if (multipleOfThree) {
        daysNumber += `<li class="box"><img src="spritz.png" alt="immagine di uno spritz"></li>`;
    } else {
        daysNumber += `<li class="box"><span class="day">DAY<br>${i}</span></li>`;
    }
};

daysNumber += `</ul>`;

daysWrap.innerHTML = daysNumber;

// input interaction
buttonElement.addEventListener('click', function(){
    if (inputElement.value === "sei" || inputElement.value === "6") {
        answerElement.innerHTML = `<span class="yellow">Bravo, hai indovinato! Sei Spritz! Dopo tutto non è così tanto.</span> Hai vinto ehmm... nulla. Perché dovresti vincere qualcosa? L'importante è partecipare.`;
    } else {
        answerElement.innerHTML = `<span class="red">Mi dispiace, non hai indovinato.</span> Passa il mouse sulle card e conta bene quante volte Buzz beve il drink!`;
    }
});