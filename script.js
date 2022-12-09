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
    /*
    for design reasons I wanted to guarantee maximum expression to the user
    when filling out the form and not limit his experience choosing to a set range of numbers.
    */
    if (inputElement.value.includes("sei") || inputElement.value.includes("SEI") || inputElement.value.includes("6")) {
        answerElement.innerHTML = `<span class="yellow">Bravo, hai indovinato! SEI SPRITZ! Dopo tutto non è così tanto.</span> Hai vinto ehmm... nulla. Perché dovresti vincere qualcosa? L'importante è partecipare.`;
    } else {
        answerElement.innerHTML = `<span class="red">Mi dispiace, non hai indovinato.</span> Passa il mouse sulle card e conta bene quante volte Buzz beve il drink!`;
    }
});
