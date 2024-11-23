function simpleArithmetic() {
    


        const firstNum = () => Math.floor(Math.random() * 10 + 1);
        const secondNum = () => Math.floor(Math.random() * 10 + 1);
        
        const getOperators = ["+", "-", "*", "/"];
        const getRandomOperator = () => Math.floor(Math.random() * 4)
        const getOperator = getOperators[getRandomOperator()];

        let result = null;

        if (getOperator === getOperators[0]) {
            result = firstNum() + secondNum();
        } else if (getOperator === getOperators[1]) {
            result = firstNum() - secondNum();
        } else if (getOperator === getOperators[2]) {
            result = firstNum() * secondNum();
        } else {
            result = firstNum() / secondNum();
        }

        userQuestion = `Введите ответ на пример: ${firstNum()} ${getOperator} ${secondNum()}?`;
        userAnswer = Number(prompt(userQuestion))
        console.log(result);
       

        if (result === userAnswer) {
            alert("Right answer!")
        } else {
            alert("Wrong!");
        }
   
}simpleArithmetic() 



//     do {
//         result = firstNum() - secondNum();
//         alert(result);
        
//         i++;
//           if (userAnswer === result) {
//             alert("Верно");
//         } else {
//             alert("Не верно. Попробуйте еще!");
//         }
//     } while (userAnswer !== result); 
    