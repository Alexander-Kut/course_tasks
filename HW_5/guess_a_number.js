

function guessNumber() {

    const randomNumber = Math.floor(Math.random()*100 + 1);
    console.log(randomNumber);
    let userNumber;
    let tryNumber;
    
       
    while (userNumber != randomNumber) {
        userNumber = Number(prompt('Введите любое число от 1 до 100'));
        tryNumber++;
        
        if (userNumber > randomNumber) {
            const messageText = console.log(`Ваше число больше чем загадано. Попробуйте ещё`);
            return messageText;

        } else if (userNumber < randomNumber) {
            const messageText2 = console.log(`Ваше число меньше чем загадано. Попробуйте ещё`);
            return messageText2;
           
        } else {
            const congratulationText = console.log(`Вы угадали. Спасибо за игру!`);
            return congratulationText;
        }
          
    }
}

guessNumber();    

