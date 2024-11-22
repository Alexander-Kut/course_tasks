//Task#1
/*
Дан массив: 
[1, 5, 4, 10, 0, 3].
Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
10. После вывода значения 10 в консоль цикл должен прекратить свою работу.
*/

// const myArray = [1, 5, 4, 10, 0, 3];
// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
    
//     if (myArray[index] === 10) {
//         break;
//     }
// }

//Task#2
/*
Дан массив: [1, 5, 4, 10, 0, 3]. 
Найдите индекс значения 4 в этом массиве.
*/

// const array = new Array(1, 5, 4, 10, 0, 3);
// console.log(array);
// let numberValue = array.indexOf(4);
// console.log(`Индекс значения "четыре" в массиве: ${numberValue}`);

//Task#3
/*
Дан массив чисел: [1, 3, 5, 10, 20]. С помощью метода join
 выведите элементы массива через пробел (пустую строку ' ').
*/

// const newArray = [1, 3, 5, 10, 20];
// console.log(newArray.join(' '));

//Task#4

/**
 С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]]
*/

// let arr = [];

// for (let index = 0; index < 3; index++) {
//    let insertArr = [];
//    arr.push(insertArr);

//         for (let i = 0; i < 3; i++) {
//             insertArr.push(1);
//         }
// }

// console.log(arr);


//Task#5
/**
 * Дан массив: [1, 1, 1]. 
 * Добавьте в конец массива значения 2, 2, 2.
 */

// const anotherArray = [1, 1, 1];
// anotherArray.push(2, 2, 2);
// console.log(anotherArray);


//Task#6
/*
Дан массив: 
[9, 8, 7, 'a', 6, 5].
С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. 
Затем выведите массив.
*/

// const toSortArray = [9, 8, 7, 'a', 6, 5];
// toSortArray.sort();
// let sortedArray = toSortArray.sort((a, b) => b - a);
// let lastElement = toSortArray.pop();
// console.log(sortedArray);


//Task#7

/**
 * Дан массив: 
[9, 8, 7, 6, 5].
Попросите пользователя угадать число с помощью метода 
prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в 
alert «Угадал», в противном случае — «Не угадал».
 */

// const numberArray = [9, 8, 7, 6, 5];
// let userAnswer = Number(prompt("Введите число!"));
// if (numberArray.includes(userAnswer)) {
//     console.log("Угадал");
// } else {
//     console.log("Не угадал");
// }

//<?Variant?>
// if (userAnswer >= 5 && userAnswer <= 9) {
//     console.log("Угадал");
// } else {
//     console.log("Не угадал");
// }


//Task#8

// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'

// const text = 'abcdef';
// const splitText = text.split('');
// console.log(splitText);
// console.log(splitText.reverse().join(''));


//Task#9

/**
 * Дан массив: [[1, 2, 3],[4, 5, 6]]. 
 * Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].
 */

// const numberArr = [[1, 2, 3],[4, 5, 6]];
// const simpleArr = numberArr.flat();
// console.log(simpleArr);

//Task#10

/**
 * Создайте массив с произвольными числами (диапазон от 1 до 10).
Переберите его с помощью цикла for.
В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
 */

// const randomArray = [];
// let randomNum;
// for (let k = 0; k < 10; k++) {
//    randomNum = Math.floor(Math.random() * 10 + 1);
//    randomArray.push(randomNum);
        
// } 
// console.log(randomArray);
// for (let j = 0; j < randomArray.length - 1; j++) {
//     console.log(randomArray[j] + randomArray[j + 1]);
// }

//Task#11

/**
 * Создайте функцию, которая принимает на вход массив целых чисел,
 *  а возвращает массив квадратов этих чисел.
 */
// const squredNum = () => {
//     const newArr = new Array();

//     for (let h = 0; h < 5; h++) {
//     let newNum = Math.floor(Math.random() * 10 + 1);
//     newArr.push(newNum);      
//     } 

//     console.log(newArr);

//     return newArr.map(item => item ** 2);
// }
// console.log(squredNum());

//Task#12

/*
Создайте функцию, которая принимает на вход массив строк,
 а возвращает массив длины слов.
*/

const getTextLenth = (textArray) => textArray.map(item => item.length)

const result = getTextLenth(["Ryan", "Benjamin", "Marilyn", "Andrew", "Kate", "Anastasia"]);
console.log(result);