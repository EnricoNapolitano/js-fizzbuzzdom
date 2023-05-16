//* Elements from DOM
const daysWrap = document.getElementById("days-wrap");
const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const answerElement = document.getElementById("answer");
let isCorrect = false;


//* Uncorrect answers from users
const uncorrectAnswers = ["non sei", "non 6", "non ha bevuto sei", "non ha bevuto 6", "16", "26", "36", "46", "56", "60", "66", "76", "86", "96", "06"];



//* Variables with message in it
const correct = `<span class="yellow">Bravo, hai indovinato! SEI SPRITZ! Dopo tutto non sono così tanti.</span> Hai vinto ehmm... nulla. Perché dovresti vincere qualcosa? L'importante è partecipare.`;
const uncorrect = `<span class="red">Mi dispiace, non hai indovinato.</span> Passa il mouse sulle card e conta bene quante volte Buzz beve il drink!`;



//* Variable needed to create ul and li tags
let daysNumber = `<ul>`;

for (let i = 1; i <= 100; i++) {
    const multipleOfFive = !(i % 5);
    const multipleOfThree = !(i % 3);
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



//* input interaction
buttonElement.addEventListener('click', function () {
    /*
    for design reasons I wanted to guarantee maximum expression to the user
    when filling out the form and not limit his experience choosing to a set range of numbers.
    */

    const inputValue = inputElement.value.toLowerCase();

    if (uncorrectAnswers.some(el => inputValue.includes(el))) {
        answerElement.innerHTML = uncorrect;
        console.log('1')
        isCorrect = false;
    } else if (inputValue.includes("sei") || inputValue.includes("6")) {
        answerElement.innerHTML = correct;
        console.log('2')
        isCorrect = true;
    } else {
        answerElement.innerHTML = uncorrect;
        console.log('3')
        isCorrect = false;
    }

    inputElement.value = "";

    const images = document.querySelectorAll("img");
    const lists = document.querySelectorAll("li");
    const spans = document.querySelectorAll("span");

    if (isCorrect) {
        images.forEach(element => {
            element.classList.add("d-block");
        });
        lists.forEach(element => {
            element.classList.add("bg-yellow");
        });
        spans.forEach(element => {
            element.style = "display:inline";
        });
    }

    if (!isCorrect) {
        images.forEach(element => {
            element.classList.remove("d-block");
        });
        lists.forEach(element => {
            element.classList.remove("bg-yellow");
        });
        spans.forEach(element => {
            element.style = "";
        });
    }
});

