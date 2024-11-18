//Task#1

function minFunc (a, b) {
    return Math.min(a, b);
}
console.log(minFunc(8, 4));


//Task#2

function isEven(number) {
    if (number % 2 === 0) {
        return 'Is even';
        
    } else {
        return 'Is odd';
        
    }
}
console.log(isEven(56));
console.log(isEven(3));
console.log(isEven(77))



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
    console.log('Welcome!');
} else if (userAge >= 0 && userAge <=12) {
    console.log('Hello, friend!');
} else if (userAge < 0) {    
    console.log('Wrong value');               
} else {
    console.log('Enter your age, please');   
}
}
hiFunction();


//Task#5

function correctNumbers(n1, n2) {

    let num1 = Number(n1);
    let num2 = Number(n2);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';

    } else {
        return num1 * num2;
    }
}
console.log(correctNumbers(5, 'o'));

//Task#6

function userFunction() {
    let userEnter = Number(prompt('Enter any number'));

    if (isNaN(userEnter)) {
        return 'Переданный параметр не является числом';

    } else {
        
        return `${userEnter}  в кубе равняется: ${Math.pow(userEnter, 3)}`;
        
    }
    
}

console.log(userFunction());


//Task#7

function getArea() {
    let circleArea = (Math.pow(this.radius, 2) * Math.PI) /2;

    return `Площадь ${this.label} круга составляет ${Math.ceil(circleArea)}`;
    
}

function getPerimeter() {
    let circlePerimeter = 2 * Math.PI * this.radius;
    return `Периметр ${this.label} круга составляет ${Math.floor(circlePerimeter)}`;
    
}

const circle1 = {
    label: '1',
    radius: 4,
    getArea: getArea,
    getPerimeter: getPerimeter
}


const circle2 = {
    label: '2',
    radius: 7,
    getArea: getArea,
    getPerimeter: getPerimeter
}


    
    console.log(circle1.getArea());
    console.log(circle1.getPerimeter());
    console.log(circle2.getArea());
    console.log(circle2.getPerimeter());