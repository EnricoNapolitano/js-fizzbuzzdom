for (let i = 1; i < 101; i++){
    const fizz = "Fizz";
    const buzz = "Buzz";
    const multipleOfThree = (i % 3) === 0;
    const multipleOfFive = (i % 5) === 0;
    if (multipleOfThree && multipleOfFive) {
        let i = fizz + buzz;;
        console.log(i);
    } else if (multipleOfFive) {
        let i = buzz;
        console.log(i);
    } else if (multipleOfThree) {
        let i = fizz;
        console.log(i);
    } else {
        console.log(i);
    }
};