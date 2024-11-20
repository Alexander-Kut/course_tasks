
//Task#3
const clientOS = 1;
const clientDeviceYear = 2015;
let enteredOS = prompt("Введите 1 если у Вас Android, 0 если у Вас iOS");
let enteredClientDeviceYear = prompt("Введите год выпуска вашего телефона");



if (enteredOS == clientOS && enteredClientDeviceYear < clientDeviceYear) {
    console.log("Установите облегченную версию приложения для Android по ссылке")
} else if (enteredOS == 0 && enteredClientDeviceYear < clientDeviceYear) {
    console.log("Установите облегченную версию приложения для iOS по ссылке")
} else if (enteredOS == clientOS && enteredClientDeviceYear >= clientDeviceYear) {
    console.log('Скачайте приложение для Android по ссылке')
} else if (enteredOS == 0 && enteredClientDeviceYear >= clientDeviceYear) {
    console.log("Скачайте приложение для iOS по ссылке")
} else {
    console.log("No apps, sorry")
}