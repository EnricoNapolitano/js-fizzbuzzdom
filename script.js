//* Elements from DOM
const daysWrap = document.getElementById("days-wrap");
const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const answerElement = document.getElementById("answer");
let isCorrect = false;



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
    if (inputElement.value.toLowerCase().includes("non sei") || inputElement.value.toLowerCase().includes("non 6") || inputElement.value.toLowerCase().includes("non ha bevuto sei") || inputElement.value.toLowerCase().includes("non ha bevuto 6") || inputElement.value.toLowerCase().includes("16") || inputElement.value.toLowerCase().includes("26") || inputElement.value.toLowerCase().includes("36") || inputElement.value.toLowerCase().includes("46") || inputElement.value.toLowerCase().includes("56") || inputElement.value.toLowerCase().includes("60") || inputElement.value.toLowerCase().includes("66") || inputElement.value.toLowerCase().includes("76") || inputElement.value.toLowerCase().includes("86") || inputElement.value.toLowerCase().includes("96") || inputElement.value.toLowerCase().includes("06")) {
        inputElement.value = '';
        answerElement.innerHTML = uncorrect;
        isCorrect = false;
    } else if (inputElement.value.toLowerCase().includes("sei") || inputElement.value.includes("6")) {
        inputElement.value = '';
        answerElement.innerHTML = correct;
        isCorrect = true;
    } else {
        inputElement.value = '';
        answerElement.innerHTML = uncorrect;
        isCorrect = false;
    }

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

