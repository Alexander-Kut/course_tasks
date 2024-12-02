function rockScissorsPaperGame() {
    
    const randomItems = ["камень", "ножницы", "бумага"];

    let playerAnswer; 

    const getRandomItem = () => Math.floor(Math.random() * randomItems.length);

    const computerChoice = randomItems[getRandomItem()];

   

    switch (computerChoice) {
        case 'камень':
            computerChoice === 'камень';
            break;
        case 'ножницы':
            computerChoice === 'ножницы';
            break; 
        default: computerChoice === 'бумага';
            break;
    }

    const regexp = /^[а-яА-Я]*$/;

   
    do {
        playerAnswer = prompt("Введите \"камень\", \"ножницы\" или \"бумага\"");
            if (regexp.test(playerAnswer)) {
                if (playerAnswer.toLowerCase() === computerChoice) {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert("Ничья!");
                } else if (playerAnswer.toLowerCase() !== computerChoice) {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert("Компьютер победил");
            
                } else {
                    alert(`Выбор компьютера: ${computerChoice}`);
                }


            } else {
                alert("Не верно введено слово") 
            }
        

    } while (!regexp.test(playerAnswer));
}    