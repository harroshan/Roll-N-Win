let scene = document.getElementById('scene') 
let cube = document.getElementById('cube')
let rollme = document.getElementById('rollme')
let body = document.getElementById('body')
let scores,roundScore,activePlayer,gamePlay
let values = []
let random
let value
let arr=['rotate3d(1,0,0,360deg','rotate3d(0,1,0,270deg)','rotate3d(1,0,0,-270deg)','rotate3d(1,0,0,270deg)',
            'rotate3d(0,1,0,-270deg)','rotate3d(1,1,0,180deg)']
            
function init() {
    scores = [0, 0]
    roundScore = 0
    activePlayer = 0
    gamePlay=true

    document.getElementById('score-0').textContent = 0
    document.getElementById('current-0').textContent = 0
    document.getElementById('score-1').textContent = 0
    document.getElementById('current-1').textContent = 0
    document.getElementById('name-0').textContent='Player 1'
    document.getElementById('name-1').textContent='Player 2'
    document.getElementById('name-0').style.color='black'
    document.getElementById('name-1').style.color='black'
    document.querySelector('.player-0-panel').classList.add('me')
    document.querySelector('.player-1-panel').classList.remove('me')
};

init()
retrieveScore()
displayScore()

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
            
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
            
    document.querySelector('.player-0-panel').classList.toggle('me');
    document.querySelector('.player-1-panel').classList.toggle('me');
}

function diceRoll(){
    if(gamePlay) {
        while(random === value){
            random = Math.floor(Math.random() * 6)
        }
        value = random
        cube.style.transform = arr[random]
        console.log(value)
        if ((value+1) !== 1) {
            roundScore += (value+1);
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer()
        }
}}

body.addEventListener('keypress',function(event){
    if(event.keyCode ===13 || event.keyCode ===37 || event.keyCode ===38 || event.keyCode ===39 || event.keyCode ===40){
        diceRoll()
    }
})

rollme.onclick = function(){
    diceRoll()
}

function score(){
    if(gamePlay){
        scores[activePlayer]+=roundScore;
        values = [{
            player1:scores[0],
            player2:scores[1]
        }]
        updateScore()
        saveScore()
        displayScore()
        nextPlayer()
    }
}

function displayScore(){
    document.getElementById('score-0').textContent=scores[0]
    document.getElementById('score-1').textContent=scores[1]
    if(scores[0]>=100){
        document.getElementById('name-0').textContent='Winner!'
        document.getElementById('name-0').style.color='red'
        gamePlay=false
    }
    else if(scores[1]>=100){
        document.getElementById('name-1').textContent='Winner!'
        document.getElementById('name-1').style.color='red'
        gamePlay=false
    }
}

function retrieveScore(){
    if(localStorage['values']){
        values = JSON.parse(localStorage['values'])
        scores[0] = values[0]['player1']
        scores[1] = values[0]['player2']
    }
}
function saveScore(){
    localStorage['values'] = JSON.stringify(values)
}
function updateScore(){
    if(activePlayer === 0){
        console.log(scores[0])
    }
    else if(activePlayer === 1){
        console.log(scores[1])
    }
}

document.querySelector('.btn-hold').addEventListener('click',score);
document.querySelector('.btn-new').addEventListener('click',init);
