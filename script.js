
var score = 0;
game_completed=false;

var batonik1 = document.getElementById('batonik1')
var batonik2 = document.getElementById('batonik2')
var batonik3 = document.getElementById('batonik3')
var batonik4 = document.getElementById('batonik4')
var batonik5 = document.getElementById('batonik5')
var batonik6 = document.getElementById('batonik6')

var wordsForTheGame= ['red','blue','yellow','orange','green','black'];

const randomWord=Math.floor(Math.random() * 6);

var wordToClick = wordsForTheGame[randomWord];

var message4Player= document.getElementById('Message4player')

let word2ClickDisplay=document.getElementById('word2Click')


batonik1.style.backgroundColor=wordsForTheGame[0]
batonik2.style.backgroundColor=wordsForTheGame[1]
batonik3.style.backgroundColor=wordsForTheGame[2]
batonik4.style.backgroundColor=wordsForTheGame[3]
batonik5.style.backgroundColor=wordsForTheGame[4]
batonik6.style.backgroundColor=wordsForTheGame[5]

const batons= document.querySelectorAll('.baton');
batons.forEach(btn =>{
    btn.style.backgroundColor[randomWord]
})
var scoreCard =document.getElementById('result')

batons.forEach(btn => {
    btn.addEventListener('click', clickEvent => {
        

        if(btn.style.backgroundColor===wordToClick){
            if(score !=10){
            word2ClickDisplay.innerText= wordsForTheGame[randomWord];}
            score++;
            console.log(score);
            scoreCard.innerText= score;
            message4Player.innerText="That's the spirit!"
        }else{
            message4Player.innerText='u missed cunt!';
        }  if(score >= 10){
            scoreCard.innerText='Won the game!';
            }
            ; 
       
    })
});