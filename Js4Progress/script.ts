
// shuffling colors so they don't repeat

function shuffleArray (arr: string[]): string[] {
    for (let i = arr.length - 1; i > 0; i--) {
      let j =  Math.floor(Math.random() * Math.floor(arr.length - 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

let wordsForTheGame: string[] = ['red','blue','yellow','orange','green','black','aqua','gray','purple'];
let randomIndex: number = Math.floor(Math.random() * Math.floor(wordsForTheGame.length - 1))
// query elements

let shuffledArray: string[] = shuffleArray(wordsForTheGame);
let wordToClick: string = shuffledArray[0];

const scoreCard: HTMLElement | null= document.getElementById('result')
const message4Player: HTMLElement| null = document.getElementById('Message4player')
const word2ClickDisplay: HTMLElement| null = document.getElementById('word2Click');

message4Player!.innerText = 'Play the game!';
word2ClickDisplay!.innerText = wordToClick;

const batons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.baton');
const shuffleButton: HTMLElement | null = document.getElementById('shuffleButton');
const restartButton: HTMLElement | null = document.getElementById('restartButton');


let score: number = 0;
let games_won: number = 0;
let games_lost: number = 0;
let timeLeft: number = 20;

const timerHtml: HTMLElement | null = document.getElementById('timer');
const wins: HTMLElement | null = document.getElementById('wins');
const losses: HTMLElement | null= document.getElementById('losses');

let timerId: number = setInterval(countdown, 1000);

function restartTheGame(): void {
    score = 0;
    scoreCard!.innerText = '0';
    clearInterval(timerId)
    timeLeft = 20;
    timerId = setInterval(countdown,1000);
    message4Player!.innerText = '';
    shuffleColors();
};
type btn = {[key: string]: number};

[...batons].forEach((btn, idx) => {
    btn.style.backgroundColor = shuffledArray[idx];
    console.log(btn)
});

function countdown(): void {
    timerHtml!.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;

    if (timeLeft === -1 && score < 10) {
        timerHtml!.innerHTML = 'Time passed';
        message4Player!.innerText = 'You lost!';
        message4Player!.innerText = 'Restart the counter and start again!'
        message4Player!.style.backgroundColor = '';
        games_lost++;
        clearInterval(timerId);
    } 
    if (timeLeft === -1 && score >= 10 || score >= 10) {
        timerHtml!.innerHTML = 'Time passed';
        message4Player!.innerText = 'You Won!';
        message4Player!.innerText = 'Restart the counter and start again!';
        message4Player!.style.backgroundColor = '';
        games_won++;
        clearInterval(timerId);
    }   
    wins!.innerText = `${games_won}`;
    losses!.innerText = `${games_lost}`;
};

batons.forEach((btn): void => {
    
    btn.addEventListener('click', (clickEvent) => {
    if (timeLeft > -1 && score < 10 ) {

        if (btn.style.backgroundColor === word2ClickDisplay!.innerText) {
            score++;
            scoreCard!.innerText = `${score}`;
            message4Player!.innerText = `${(word2ClickDisplay!.innerText)}- u scored!`;
            console.log(score);
            shuffleColors();
        } else {
            message4Player!.innerText = `u missed cunt! check word to click!`;
        }
    }
    });
 });

function shuffleColors(): void {

    Object.keys(batons).forEach((btn:any) => {
        batons[btn].style.backgroundColor = shuffledArray[btn]
    });

    word2ClickDisplay!.innerText = shuffleArray(wordsForTheGame)[randomIndex];
};

shuffleButton?.addEventListener('click', (clickEvent) => {
    shuffleColors()
});

restartButton?.addEventListener('click', (clickEvent) => {
    restartTheGame();
});
 