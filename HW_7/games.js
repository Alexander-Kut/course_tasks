// function turnOverText() {
    
//     let userInsert;
//     do {
//         userInsert = prompt("Введите ваше слово!");
//         if (userInsert === '') {
//             alert("Вы ничего не ввели!");

//         } else if (!isNaN(userInsert)) {
//             alert("Вы ввели не слово введите, пожалуйста, слово");

//         } else {
//             alert(userInsert.toUpperCase().split('').reverse().join(''));
//         }


//     } while (userInsert === '' || !isNaN(userInsert));

// }


function turnOverText() {
    let regexp = /^[a-zA-Zа-яА-Я]*$/;
    let userEnter;

    do {
        userEnter = prompt("Введите ваше слово!");
        if (regexp.test(userEnter)) {
            alert(userEnter.split('').reverse().join(''));
        } else {
            alert("Вы ввели не слово введите, пожалуйста, слово");
        }
    } while (regexp.test(userEnter) === false);

}



function simpleQuizGame() {
    
    let userAnswer;
    let startMessage;
    let pointCounter = 0;
    let sum;
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", " 2. Семь", " 3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", " 2. Пять", " 3. Шесть"],
            correctAnswer: 2
        }
    ];

   do {
    startMessage = confirm("Хотите поиграть в простую викторину?");
    if (startMessage === true) {
            for (let i = 0; i < quiz.length; i++) {
                userAnswer = Number(prompt(`Ответьте на вопрос: ${quiz[i].question}, \nварианты ответа: \n${quiz[i].options} \n(введите номер ответа)`));
             if (userAnswer === quiz[i].correctAnswer) {
                alert("Right");
                pointCounter++;
                sum = pointCounter;
                alert(`Вы получили ${pointCounter} балл(а)`);
                
             } else {
                alert("Wrong answer!");
             }
            }
            alert(`Вы набрали всего: ${sum} балл(а). Поздравляем!`);
    } else {
        alert("Goodbye!");
        break;
    }
   } while (true);
    
}
