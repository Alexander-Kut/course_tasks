//Task#1

let i = 0;
while (i<2) {
   i++;
   console.log('Hello!');
}


//Task#2

for (let i = 1; i <=5; i++) {
    console.log(i);
}


//Task#3

for (let num = 7; num <= 22; num++) {
    console.log(num);
}


//Task#4

const obj = {"Коля":'200$', 
            "Вася":'300$',
            "Петя":'400$'};
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`)
}


// Task#5

let n = 1000;
let num = 1;

do {
    n /=2;
    console.log(n);
    console.log(num);
    num++;
} while (n >= 50);

//Task#6

const firstFriday = 1;
const monthDays = 31;
for (let index = 1; index < monthDays; index += 7) {
    console.log("Сегодня пятница " + index +"-ое число. Нужно подготовить отчет.");
    
}