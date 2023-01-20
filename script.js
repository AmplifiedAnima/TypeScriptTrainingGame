

// shuffling colors so they don't repeat

function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j =  Math.floor(Math.random() * Math.floor(arr.length - 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

let wordsForTheGame= ['red','blue','yellow','orange','green','black','aqua','gray','purple'];
let randomIndex= Math.floor(Math.random() * Math.floor(wordsForTheGame.length - 1))
// query elements

const shuffledArray = shuffleArray(wordsForTheGame);
let wordToClick = shuffleArray(wordsForTheGame)[randomIndex];

var scoreCard =document.getElementById('result')
var message4Player= document.getElementById('Message4player')
let word2ClickDisplay=document.getElementById('word2Click')

message4Player.innerText= 'Play the game!'
word2ClickDisplay.innerText= wordToClick

const batons= document.querySelectorAll('.baton');
var shuffleButton = document.getElementById('batonik10');
var restartButton = document.getElementById('batonik11');

var score = 0;
let games_won = 0;
let games_lost= 0;
var timeLeft = 2;

const timerHtml = document.getElementById('timer');
var wins= document.getElementById('wins');
var losses= document.getElementById('losses');




function countdown() {
    timerHtml.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
   
    if (timeLeft==-1 && score<10){
        timerHtml.innerHTML= 'Time passed'
        message4Player.innerText='You lost!'
        clearTimeout(timerId);
        message4Player.innerText='Restart the counter and start again!'
        games_lost++;
    } 
    if (timeLeft==-1 && score>=10){
        timerHtml.innerHTML= 'Time passed'
        message4Player.innerText='You Won!'
        message4Player.innerText='Restart the counter and start again!'
        clearTimeout(timerId);
        games_won++;
    }   
    if(score >= 10){
        scoreCard.innerText='You won the game!';
        message4Player.innerText='Restart the counter and start again!'
        message4Player.style.backgroundColor ='';
        timerHtml.innerHTML= '';
        clearTimeout(timerId);
        games_won++;
    }
    wins.innerText= games_won;
    losses.innerText= games_lost;
}

var timerId = setInterval(countdown, 1000);




function restartTheGame(){
    timeLeft=20;
    clearTimeout(timerId);
    timerId = setInterval(countdown, 1000);
    score=0;
    scoreCard.innerText=0;
    message4Player.innerText='';
    shuffleColors();
}
batons.forEach(btn => {
    
    btn.addEventListener('click', clickEvent => {
    if(timeLeft!==-1){
        if(btn.style.backgroundColor===  word2ClickDisplay.innerText){
            score++;
            scoreCard.innerText= score;
            message4Player.innerText=`${(word2ClickDisplay.innerText)}- u scored!`;
            console.log(score);
            shuffleColors();
        }else{
            message4Player.innerText= `u missed cunt! check word to click!`;
        }
    }
        
    });
});


Object.keys(batons).forEach(btn => {
    batons[btn].style.backgroundColor = shuffledArray[btn]
});

function shuffleColors(){

    Object.keys(batons).forEach(btn => {
        batons[btn].style.backgroundColor = shuffledArray[btn]
    });

    word2ClickDisplay.innerText =shuffleArray(wordsForTheGame)[randomIndex];
};

shuffleButton.addEventListener('click',clickEvent=>{
    shuffleColors()
})

restartButton.addEventListener('click',clickEvent=> {
    restartTheGame();
})




 