const randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber);
const userNumber = Number(prompt('Введите любое число от 1 до 100'));
let userAgree;

function guessNumber () {

    if (userNumber > randomNumber) {
        return console.log(`Ваше число больше чем загадано.`),
           userAgree = confirm('Хотите сыграть еще?');
    // } else if (userAgree === true) {
    //     return console.log(Number(prompt('Введите любое число от 1 до 100')));
    
     } else if (userNumber < randomNumber) {
        return console.log(`Ваше число меньше чем загадано.`),
            confirm('Хотите сыграть еще?');
    } else {
        return alert(`Вы угадали`);
    }
}
guessNumber();    




// let userAgree = () =>  {return (confirm('Хотите сыграть еще?')) === true ?
//                console.log(Number(prompt("Enter any number"))) : "Bye!"
//}
