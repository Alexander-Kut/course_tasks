

function guessNumber() {
    
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    let userNumber;
    let counter;
    
    
    while (userNumber != randomNumber) {
        userNumber = Number(prompt('Введите любое число от 1 до 100'));
        counter++;

        if (userNumber > randomNumber) {
           console.log(`Ваше число больше чем загадано. Попробуйте ещё`);
            

        } else if (userNumber < randomNumber) {
           console.log(`Ваше число меньше чем загадано. Попробуйте ещё`);
            
           
        } else {
            console.log( `Вы угадали. Спасибо за игру!`);
            
        }
          
    }
}

guessNumber();    

