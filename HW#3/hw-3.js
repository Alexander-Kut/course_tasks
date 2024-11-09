//Task#1
let password = 'JavaScript';
let userPassword = prompt('Введите ваш пароль');

(password === userPassword) ? alert('Пароль введен верно') : alert('Пароль введен не верно. Попробуйте ещё раз');

//Task#2
let c = Number(prompt("Enter your number"));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

//Task#3
let d = 256;
let e = 79;

console.log(d > 100 || e > 100 ? 'Верно': 'Неверно');

//Task#4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Task#5
let monthNumber = 12;
let number = Number(prompt('Введите номер месяца'));

switch (number) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break; 
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    
    default:
        console.log('Неверный месяц')
        break;
}