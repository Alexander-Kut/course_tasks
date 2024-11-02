//Task#1
let password = 'JavaScript';
let userPassword = String(prompt('Введите ваш пароль'));

(password === userPassword) ? alert('Пароль введен верно') : alert('Пароль введен не верно. Попробуйте ещё раз');

//Task#2
let c = Number(prompt("Enter your number"));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

//Task#3
let d = 25;
let e = 179;

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
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break; 
    case 5:
        console.log('Весна');
        break; 
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;  
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        console.log('Неверный месяц')
        break;
}