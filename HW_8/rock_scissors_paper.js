
function rockScissorsPaperGame() {
    
    const items = ['камень', 'ножницы', 'бумага'];
    const getItems = () => Math.floor(Math.random() * items.length);
    let playerEnter;
    const computerChoice = items[getItems()];

    switch (computerChoice) {
        case 'камень':
            computerChoice === 'камень';
            break;
        case 'бумага':
            computerChoice === 'бумага';
            break;
        default: computerChoice === 'ножницы'
            break;
    }
    const regexp = /^[а-яА-Я]*$/;

    do {
            playerEnter = prompt("Введите, пожалуйста, любое из слов: 'камень', 'ножницы' или 'бумага'");
        if (regexp.test(playerEnter)) {
            if (playerEnter.toLowerCase() === computerChoice.toLowerCase()) {
                    alert(`Computer chose ${computerChoice}`);
                    alert(`Player chose: ${playerEnter}`);
                    alert('Draw!');
                } else if (playerEnter.toLowerCase() === 'бумага' && computerChoice.toLowerCase() === 'ножницы') {
                    alert(`Computer chose ${computerChoice}`);
                    alert(`Player chose: ${playerEnter}`);
                    alert("Computer won!");

                } else if (playerEnter.toLowerCase() === 'камень' && computerChoice.toLowerCase() === 'бумага') {
                    alert(`Computer chose ${computerChoice}`);
                    alert(`Player chose: ${playerEnter}`);
                    alert("Computer won");
                } else if (playerEnter.toLowerCase() === 'ножницы' && computerChoice.toLowerCase() === 'камень') {
                    alert(`Computer chose ${computerChoice}`);
                    alert(`Player chose: ${playerEnter}`);
                    alert("Computer won!");
                } else {
                    alert(`Computer chose ${computerChoice}`);
                    alert(`Player chose: ${playerEnter}`);
                    alert("Player won!");
                }
        } else {
            alert("Wrong enter!");
        }
                        
    } while (!regexp.test(playerEnter));
}