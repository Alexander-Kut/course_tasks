

function guessNumber() {

    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    let userNumber;
    let counter = 1;

    do {
        userNumber = Number(prompt('Введите любое число от 1 до 100'));
        console.log(counter);
        counter++;

        if (userNumber > randomNumber) {
            alert(`Ваше число больше чем загадано. Попробуйте ещё`);


        } else if (userNumber < randomNumber) {
            alert(`Ваше число меньше чем загадано. Попробуйте ещё`);


        } else {
            alert(`Вы угадали. Спасибо за игру!`);
            alert(`Загаданное число: ${randomNumber}`);

        }
    } while (userNumber != randomNumber);

}  