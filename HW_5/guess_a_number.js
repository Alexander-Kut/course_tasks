

function guessNumber() {

    const randomNumber = Math.floor(Math.random()*100 + 1);
    //console.log(randomNumber);
    let userNumber = Number(prompt('Введите любое число от 1 до 100'));
    let userAgree;
  

    if (userNumber > randomNumber) {
        return console.log(`Ваше число больше чем загадано. Попробуйте ещё`),
            userAgree = confirm('Хотите сыграть еще?');
            // function userConfirm() {
            //     if (userAgree === true) {
            //       return  userNumber;
            //     } else {
            //        return console.log("Спасибо за игру");
            //     }
            // }    
    } else if (userNumber < randomNumber) {
        return console.log(`Ваше число меньше чем загадано. Попробуйте ещё`),
            userAgree = confirm('Хотите сыграть еще?');
    } else {
        return console.log(`Вы угадали. Спасибо за игру!`);
    }
}

guessNumber();    




// let userAgree = () =>  {return (confirm('Хотите сыграть еще?')) === true ?
//                console.log(Number(prompt("Enter any number"))) : "Bye!"
//}
