const containerElement = document.getElementById("container");
const fizz = "Fizz";
const buzz = "Buzz";
let numbers = '';

for (let i = 1; i < 101; i++){
    const multipleOfFive = (i % 5) === 0;
    const multipleOfThree = (i % 3) === 0;
    if (multipleOfThree && multipleOfFive) {
        numbers += " " + fizz + buzz;
    } else if (multipleOfFive) {
        numbers += " " + buzz;
    } else if (multipleOfThree) {
        numbers += " " + fizz;
    } else {
        numbers += " " + i;
    }
};

containerElement.innerText = numbers;
console.log(numbers);