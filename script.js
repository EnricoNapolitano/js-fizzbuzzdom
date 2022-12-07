const containerElement = document.getElementById("container");
let numbers = '';

for (let i = 1; i < 101; i++){
    const fizz = "Fizz";
    const buzz = "Buzz";
    const multipleOfThree = (i % 3) === 0;
    const multipleOfFive = (i % 5) === 0;
    if (multipleOfThree && multipleOfFive) {
        let i = fizz + buzz;
        numbers += i
    } else if (multipleOfFive) {
        let i = buzz;
        numbers += i
    } else if (multipleOfThree) {
        let i = fizz;
        numbers += i
    } else {
        numbers += i
    }
};

containerElement.innerText = numbers
console.log(numbers);