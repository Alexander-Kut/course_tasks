//Task#1

let num = prompt('Введите любое число', '17');
console.log(typeof num);

if (isNaN(Number(num))) {
    console.log("Not a number");
} else {
    console.log('Number');
}


console.log(num % 2);
if (num % 2 != 0) {
    alert("Число нечетное");
} else  {
    alert("Число четное");
}

//Task#2

const clientOS = 1;

let enteredOS = prompt("Введите 1 если у Вас Android, 0 если у Вас iOS");

if (enteredOS == clientOS) {
    console.log("Скачайте приложение для Android по ссылке")
} else if (enteredOS == 0) {
    console.log("Скачайте приложение для iOS по ссылке")
} else {
    console.log("No apps, sorry")
}






