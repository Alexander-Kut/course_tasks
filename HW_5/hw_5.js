//Task#1

// function minFunc (a, b) {
//     return Math.min(a, b);
// }
// console.log(minFunc(8, 4));

// //Task#2

// function isEven(number) {
//     if (number % 2 === 0) {
//         return console.log('Is even');
//     } else {
//         return console.log('Is odd');
//     }
// }
// isEven(56);
// isEven(3);
// isEven(77)

// function isEven(number)  {
//     return number % 2 === 0
// }
// console.log(isEven(7));
// console.log(isEven(24));

//Task#3

// function squareNumber(myNumber) {
//     console.log(Math.pow(myNumber, 2));
// }
// squareNumber(6);

// let squaredNumber = anotherNumber => {
//     let result = anotherNumber ** 2
//     return result;
// }
// console.log(squaredNumber(8));

//Task#4

function hiFunction() {
    let userAge = Number(prompt('How old are you?'));

if (userAge >= 13) {
    return console.log('Welcome!');
} else if (userAge >= 0 || userAge <=12) {
    return console.log('Hello, friend!');
} else if (userAge < 0 || userAge == '') {
    return console.log('Wrong value');
} else {
    // return console.log('Enter your age, please');
}
}
hiFunction();
