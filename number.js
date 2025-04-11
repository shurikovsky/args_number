const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');


function equalityNumber(num) {
  rl.question('', (answerNumber) => {
    console.log("мы в коллбеке");
    if (answerNumber === num) {
        console.log(`отгадано число ${num}`)
    } else if (answerNumber < num) {
        console.log("Больше");
        equalityNumber(num); 
    } else {
        console.log("Меньше");
        equalityNumber(num); 
    }
  })
  rl.close();
}
  
const numberRandom = Math.floor(Math.random() * 101);
console.log("загадано число в диапазоне от 0 до 100");
const rl = readline.createInterface({ input, output });
equalityNumber(numberRandom);