//Task#1

let k = 100;
let iterations = 0;
while (k > 0) {
    console.log(k -=7);
    iterations++;
    
}   
console.log("Количество повторений:" + iterations);


// Task#2

const months = ["January", 'February', 'March', 'April',
                 'May', 'June', 'July', 'August', 
                 'September', 'October', 'November', 'December'];

const monthsLength = months.length;

for (i = 0; i < monthsLength; i++) {
    console.log(`${i + 1} ${months[i]}`);
}


//Task#3

const myBook = {"название": "\"1984\"", "автор": "Джордж Оруэлл", "год издания": "1949",
                 "жанр": "Антиутопия"};
    for (let key in myBook) {
        console.log(`${key}: ${myBook[key]}`);
            
    }
  
    
//Task#4

const array = [];
let minNumber;
let maxNumber;

for (let index = 0; index < 10; index++) {
   array.push(Math.floor(Math.random()*20)+1);
   
}

console.log(array);
console.log(minNumber);
