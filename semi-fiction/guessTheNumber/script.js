console.log(`Что ты тут делаешь?)`)

function callOut(){
    alert(`The program is calling out`);
    console.log(`the program is calling out in console`);
}

function randomNumber(max){
    return Math.floor(Math.random()*max)
}

let score = 0
let goal = randomNumber(501);

result = document.getElementById(`result`)

function checkNumber(number){
    if (number == goal) {
        alert(`Вы выиграли!`)
        result.textContent=score+`!`
    }
    if (number != goal){
        score+=1
        result.textContent=score
        tip(number, goal)
    }
}

let tipSpeech = [`Ой, видимо твоя интуиция на отдыхе, попробуй ещё раз!`,`Не переживай, это только цифры, а ты можешь всё!`,`Возможно, это было слишком сложно для тебя, но не сдавайся!`,`Неправильно, но ты уже ближе к правильному ответу, продолжай!`,`Твой мозг только разминается, давай ещё разок!`,`Невероятно близко, но не совсем правильно, держи кулаки и попробуй ещё раз!`,`Никто не рождается экспертом, продолжай тренироваться!`,`Тебе нужно больше удачи, но ты можешь это сделать!`,`Попробуй подумать по-другому, может быть, это поможет тебе найти правильный ответ.`,`Никогда не сдавайся, потому что именно ты можешь это сделать!`]


function tip(number, goal){
    let message= (tipSpeech[randomNumber(tipSpeech.length)])
    if (number>goal) {
        message += `
Выбранное тобой число больше нужного`
    }   else    {
        message += `
Выбранное тобой число меньше нужного`
    }
    alert(message)
}