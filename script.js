
var score = 0;
game_completed=false;

function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

let wordsForTheGame= ['red','blue','yellow','orange','green','black','aqua','gray','purple'];


const batons= document.querySelectorAll('.baton');
var scoreCard =document.getElementById('result')
var message4Player= document.getElementById('Message4player')
message4Player.innerText= 'Play the game!'
let wordToClick = shuffleArray(wordsForTheGame)[0];
let word2ClickDisplay=document.getElementById('word2Click')
word2ClickDisplay.innerText= wordToClick
batons.forEach(btn => {
    btn.style.backgroundColor = shuffleArray(wordsForTheGame)[0];
});

function shuffleColors(){

    word2ClickDisplay.innerText =shuffleArray(wordsForTheGame)[0];
        batons.forEach(btn => {
            btn.style.backgroundColor = shuffleArray(wordsForTheGame)[0];
        })
    };
batons.forEach(btn => {
    
    btn.addEventListener('click', clickEvent => {
        
        if(btn.style.backgroundColor===  word2ClickDisplay.innerText){
            score++;
            scoreCard.innerText= score;
            message4Player.innerText=`${word2ClickDisplay.innerText}- u scored!`
            console.log(score);
            shuffleColors();
        }else{
            message4Player.innerText= `u missed cunt! check word to click!`;
            shuffleColors();
        }
        if(score >= 10){
            scoreCard.innerText='Won the game!';
            game_completed=true;}
       
    });
    
 });
