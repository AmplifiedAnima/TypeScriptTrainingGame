
var score = 0;
game_completed=false;

var batonik1 = document.getElementById('batonik1')
var batonik2 = document.getElementById('batonik2')
var batonik3 = document.getElementById('batonik3')
var batonik4 = document.getElementById('batonik4')
var batonik5 = document.getElementById('batonik5')
var batonik6 = document.getElementById('batonik6')


let wordsForTheGame= ['red','blue','yellow','orange','green','black'];

let wordToClick = wordsForTheGame[Math.floor(Math.random() * 6)];
let word2ClickDisplay=document.getElementById('word2Click')
word2ClickDisplay.innerText= wordToClick;

var message4Player= document.getElementById('Message4player')

batonik1.style.backgroundColor=wordsForTheGame[0]
batonik2.style.backgroundColor=wordsForTheGame[1]
batonik3.style.backgroundColor=wordsForTheGame[2]
batonik4.style.backgroundColor=wordsForTheGame[3]
batonik5.style.backgroundColor=wordsForTheGame[4]
batonik6.style.backgroundColor=wordsForTheGame[5]

const batons= document.querySelectorAll('.baton');

var scoreCard =document.getElementById('result')
function shuffleColors(){
   word2ClickDisplay.innerText =wordsForTheGame[Math.floor(Math.random() * 6)];
}
batons.forEach(btn => {
    
    btn.addEventListener('click', clickEvent => {

        if(btn.style.backgroundColor===  word2ClickDisplay.innerText){
            score++;
            scoreCard.innerText= score;
            message4Player.innerText="That's the spirit!"
            console.log(score);
            shuffleColors();
        }else{
            message4Player.innerText='u missed cunt!';
            shuffleColors();
        }
        if(score >= 10){
            scoreCard.innerText='Won the game!';}
       
    });
  
 });
