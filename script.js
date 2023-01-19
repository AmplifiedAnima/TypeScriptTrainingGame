
var score = 0;
game_completed=false;

function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j =  Math.floor(Math.random() * Math.floor(arr.length - 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

let wordsForTheGame= ['red','blue','yellow','orange','green','black','aqua','gray','purple'];
let randomIndex= Math.floor(Math.random() * Math.floor(wordsForTheGame.length - 1))

const batons= document.querySelectorAll('.baton');
var scoreCard =document.getElementById('result')
var message4Player= document.getElementById('Message4player')
message4Player.innerText= 'Play the game!'
let wordToClick = shuffleArray(wordsForTheGame)[1];
let word2ClickDisplay=document.getElementById('word2Click')
word2ClickDisplay.innerText= wordToClick

var shuffleButton = document.getElementById('batonik10');
var restartButton = document.getElementById('batonik11');
const shuffledArray = shuffleArray(wordsForTheGame)

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

function restartTheGame(){
    score=0;
    scoreCard.innerText=0;
    game_completed=false;
    message4Player.inne
    rText='';
    shuffleColors();
}


batons.forEach(btn => {
    
    btn.addEventListener('click', clickEvent => {
        
        if(btn.style.backgroundColor===  word2ClickDisplay.innerText){
            score++;
            scoreCard.innerText= score;
            message4Player.innerText=`${(word2ClickDisplay.innerText)}- u scored!`;
            message4Player.style.backgroundColor = word2ClickDisplay.innerText;
            console.log(score);
            shuffleColors();
        }else{
            message4Player.innerText= `u missed cunt! check word to click!`;
            message4Player.style.backgroundColor = word2ClickDisplay.innerText;
        }
        if(score >= 10){
            scoreCard.innerText='Won the game!';
            game_completed=true;}
       
    });
    
 });

 