const daysWrap = document.getElementById("days-wrap");
const spritz = "Spritz";
const buzz = "Buzz";

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
        daysNumber += `<li class="box">DAY<br>${i}</li>`;
    }
};

daysNumber += `</ul>`;

daysWrap.innerHTML = daysNumber;
console.log(daysWrap);