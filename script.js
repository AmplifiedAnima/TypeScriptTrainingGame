const batons= document.querySelectorAll('.baton');

const wordsForTheGame= ['red','blue','yellow','orange','green','black'];

let randomWord= Math.floor(Math.random() * wordsForTheGame.length);


var score = 0;


let clickEvent = () =>{
    for( let i = 0; i<wordsForTheGame.length; i++){
        if(wordsForTheGame[i]===randomWord){
            score++;
        }
    }
console.log(wordsForTheGame[randomWord],score)
}
Array.prototype.forEach.call(batons, (item) => {
    item.addEventListener('click', clickEvent);
});