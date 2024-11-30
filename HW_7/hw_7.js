//Task#1

let text = "js";
let textAltered = text.toUpperCase();
console.log(textAltered);


//Task#2
/**
 * Создать функцию, которая принимает массив строк и строку. 
 * Функция должна вернуть новый массив, содержащий только те элементы первого массива, 
 * которые начинаются со второй строки. Регистр символов не влияет на результат.
 */

const searchElement = (elements, findIt) => {
    const newArray = new Array();
    elements.forEach(element => {
        if (element.toLowerCase().startsWith(findIt.toLowerCase())) {
            newArray.push(element);
        }
    });
    return newArray;
}
console.log(searchElement(['Яблоки красные',  'ЯбЛОко Грин Делишес','Томаты', 'Яблочное пюре', 'яблоко Зеленое', 'Яблочный пирог', 'груша', 'Яблоко Голден'], 'яблоко'));


//Task#3

/**
 * Округлить число 32.58884:

До меньшего целого.
До большего целого.
До ближайшего целого.
 */

const num = 32.58884;
    console.log(`До меньшего целого ${Math.floor(num)}`);
    console.log(`До большего целого ${Math.ceil(num)}`);
    console.log(`До ближайшего целого ${Math.round(num)}`);
           
         
//Task#4

/**
 * Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 
 * и вывести их в консоль.
 */

const numbers = [52, 53, 49, 77, 21, 32];
let number = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > number) {
        number = numbers[index];
    }
    
}
console.log(`Максимальное значение равно: ${number}`);


const toFindMin = () => {
    return Math.min(52, 53, 49, 77, 21, 32);
}
console.log(`Минимальное значение равно: ${toFindMin()}`);

//Task#5

/**
 * Создать функцию, которая выводит в консоль случайное число от 1 до 10.
 */

const randomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
}
console.log(randomNumber());


//Task#6

/**
 * Написать функцию, которая принимает целое число 
 * и возвращает массив случайных чисел от 0 до этого числа. 
 * Длина массива должна быть в два раза меньше переданного числа.
 */

function randomArray(n) {
    const newArray = [];
    let randomNum; 
    const newArrayLenth = n / 2;
    for (let i = 0; i < newArrayLenth; i++) {
        randomNum = Math.floor(Math.random() * n);
        newArray.push(randomNum);
        
    }
    return newArray;
}
console.log(randomArray(6));

//Task#7

/**
 * Создать функцию, которая принимает два целых числа
 *  и возвращает случайное число в этом диапазоне.
 */

// const numFunc = (n1, n2) => {
// return Math.ceil(Math.random() * (n2-n1) + n1);
// }
// console.log(numFunc(3, 8));

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
      console.log(getRandomInt(3, 8));


//Task#8

/**
 * Вывести в консоль текущую дату.
 */

let todaysDate = new Date();
console.log(todaysDate);


//Task#9

/**
 * Создать переменную currentDate, хранящую текущую дату.
 *  Вывести дату, которая наступит через 73 дня после текущей.
 */

// let currentDate = new Date();
// let nowDate = +currentDate;
// let days73 = 73 * 24 * 60 * 60 * 1000;

// let searchDate = nowDate + days73;

// let futureDays = new Date(searchDate);
// console.log(futureDays);


let myDate = new Date();
myDate.setDate(myDate.getDate() + 73);
console.log(myDate);


//Task#10

/**
 * Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды]
 */

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
let newDate = new Date();
let fullDate = "Дата: " + newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear() + " год " + " - это " + days[newDate.getDay()];
//let fullTime = "Время: " + newDate.getHours() + ":" + newDate.getMinutes(2) + ":" + newDate.getSeconds(2);
let fullTime = "Время: " + newDate.toLocaleTimeString('ru-RU');
console.log(fullDate);
console.log(fullTime);