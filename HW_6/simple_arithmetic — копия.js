function simpleArithmetic() {
    

        const randomNum = () => Math.floor(Math.random() * 10 + 1);
        const firstNum = randomNum();
        const secondNum = randomNum();
        
        const getOperators = ["+", "-", "*", "/"];
        const getRandomOperator = () => Math.floor(Math.random() * 4);
        const getOperator = getOperators[getRandomOperator()];

        let result = null;

        if (getOperator === getOperators[0]) {
            result = firstNum + secondNum;
        } else if (getOperator === getOperators[1]) {
            result = firstNum - secondNum;
        } else if (getOperator === getOperators[2]) {
            result = Math.floor(firstNum * secondNum);
        } else {
            result = Math.floor(firstNum / secondNum);
        }

        // switch (getOperator) {
        //     case '+':
        //         result = firstNum() + secondNum();
        //         break;
        //     case '-':
        //         result = firstNum() - secondNum();
        //         break;
        //     case '*':
        //         result = firstNum() * secondNum();
        //         break;
        //     case '/':
        //         result = firstNum() / secondNum();
        //         break;
        // }


        userQuestion = `Введите ответ на пример: ${firstNum} ${getOperator} ${secondNum}?`;
        userAnswer = Number(prompt(userQuestion));
       

        if (result === userAnswer) {
            alert("Right answer!")
        } else {
            alert("Wrong!");
        }
   
}//simpleArithmetic() 
