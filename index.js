
let player = {
    name: "Nirajan",
    chips: 145
} 


let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $" + player.chips

function startGame(){
    isAlive = true
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    // cardsEl.textContent = "Cards:"
    // sumEl.textContent = "Sum:"
    renderGame()
}

function getRandomCard(){
    let num = Math.floor(Math.random() * 13) + 1
    if(num > 10){
        num = 10
    }else if(num === 1){
        num = 11
    }
    return num
}

function renderGame(){
    cardsEl.textContent = "Cards:"
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += " " + cards[i]
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }else{
        messageEl.textContent = "You should start a new game..."
    }
    
}






