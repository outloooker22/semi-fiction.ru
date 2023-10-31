//alert("Привет, Мир!");
// const canvas = document.getElementById("game")

console.log("Что ты тут делаешь?)")

function callOut(){
    alert("The program is calling out");
    console.log("the program is calling out in console");
}

function randomNumber(max){
    return Math.floor(Math.random()*max)
}

let score = 0
let goal = randomNumber(500);

function checkNumber(number){
    switch (number){
        case number !=goal:
            score+=1
            alert("Неправильно")
            tip(number, goal);
            break
        case number==goal:
            endgame(score)
            score=0
            alert("правильно")
            break
    }
}

function endgame(score) {
    alert("Вы победили! Счёт: ", score, "(меньше - лучше)")
}

function tip(number, goal){
    alert("Неправильно")
}