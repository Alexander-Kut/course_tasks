//Task#1

function minFunc (a, b) {
    return Math.min(a, b);
}
console.log(minFunc(8, 4));


//Task#2

function isEven(number) {
    if (number % 2 === 0) {
        return console.log('Is even');
    } else {
        return console.log('Is odd');
    }
}
isEven(56);
isEven(3);
isEven(77)

function isEven(number)  {
    return number % 2 === 0
}
console.log(isEven(7));
console.log(isEven(24));


//Task#3

let squareNumber = myNumber => console.log(Math.pow(myNumber, 2));
squareNumber(9);

let squaredNumber = anotherNumber => {
    let result = anotherNumber ** 2
    return result;
}
console.log(squaredNumber(8));


//Task#4

function hiFunction() {
    let userAge = Number(prompt('How old are you?'));

if (userAge >= 13) {
    return console.log('Welcome!');
} else if (userAge >= 0 || userAge <=12) {
    return console.log('Hello, friend!');
} else if (userAge < 0 || userAge == '') {    //Эта часть 
    return console.log('Wrong value');               //не работает
} else {
    return console.log('Enter your age, please');   // Ошибок в условии не нашел 
}
}
hiFunction();


//Task#5

function correctNumbers(n1, n2) {

    let num1 = Number(n1);
    let num2 = Number(n2);

    if (isNaN(num1) === true || isNaN(num2) === true) {
        return console.log('Одно или оба значения не являются числом');
    } else {
        let result = num1 * num2;
        return console.log(result);
    }
}
correctNumbers(5, 'o');


//Task#6

function userFunction() {
    let userEnter = Number(prompt('Enter any number'));

    if (isNaN(userEnter) === true) {
        return console.log('Переданный параметр не является числом');
    } else {
        return console.log(`${userEnter}  в кубе равняется: ${Math.pow(userEnter, 3)}`);
    }
    
}
userFunction();


//Task#7

function getArea() {
    let circleArea = (Math.pow(this.radius, 2) * Math.PI) /2;
    return console.log(`Площадь ${this.label} составляет ${Math.ceil(circleArea)}`);
}

function getPerimeter() {
    let circlePerimeter = 2 * Math.PI * this.radius;
    return console.log(`Периметр ${this.label} составляет ${Math.floor(circlePerimeter)}`);
}

const circle1 = {
    label: 'первый круг',
    radius: 11,
    getArea: getArea,
    getPerimeter: getPerimeter
}


const circle2 = {
    label: 'второй круг',
    radius: 17,
    getArea: getArea,
    getPerimeter: getPerimeter
}

circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();