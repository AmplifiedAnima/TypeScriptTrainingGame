const batons= document.querySelectorAll('.baton');

const wordsForTheGame= ['red','blue','yellow','orange','green','black'];


let randomWord=Math.floor(Math.random() * 6);

const initialText = wordsForTheGame[randomWord];
var randomIndex = Math.floor(Math.random() *6);//creates random No. from 1 - 3
var score = 0;
var wordToclick = wordsForTheGame[randomWord];

const word2click=document.getElementById('word2Click')
const resultDisplay=document.getElementById('result')
batons.forEach(batons=>batons.addEventListener('click', (e)=>{
}))
let clickEvent = (e) =>{
   getPoint(e)
        console.log(wordsForTheGame[randomWord],score)
     

}
function returnWord2click(){
return word2click.innerHtml = wordsForTheGame[randomWord];
}
    
Array.prototype.forEach.call(batons, (btn) => {
    btn.addEventListener('click', clickEvent);
    var randomIndex = Math.floor(Math.random() * wordsForTheGame.length);
    btn.innerHTML = wordsForTheGame[randomIndex];
    btn.style.backgroundColor = wordsForTheGame[randomIndex];
    
});

function changeC() { 
    return ;
};

function shuffleArray(wordsForTheGame){
    return wordsForTheGame.sort( () => Math.floor(Math.random() * Math.floor(3)) - 1) 

}

function getPoint(){
    for(let i = 0; i<wordsForTheGame.length; i++){
        if(wordsForTheGame[i]===wordToclick){
            score++;
    }}
};