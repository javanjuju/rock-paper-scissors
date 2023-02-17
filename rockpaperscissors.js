const draw = "draw";
const computerWin = "Computer wins";
const userWin = "User wins";

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');
const userWins = document.querySelector('#userWins');
const compWins = document.querySelector('#compWins');
const roundDrawn = document.querySelector('#draws');
const compInput = document.querySelector('#compInput');
const userInput = document.querySelector('#userInput');
const totalGames = document.querySelector('#gamesPlayed');
const gameWon = document.querySelector('#gameWinner');
const result = document.querySelector('#result');

let roundsPlayed = 0;
let roundByComp = 0;
let roundByUser = 0;
let ties = 0;
let gamesPlayed = 0;
let gameByComp = 0;
let gameByUser = 0;
let computerChoice;
let userChoice;

function getComputerChoice()
{
    const decider = ((Math.random())*100).toFixed(0);
    if(decider%3==0){
        return "scissors";
    }
    else if(decider%2==0){
        return "paper";
    }
    else{
        return "rock";
    }
}

function playRound(getComputerChoice,getUserChoice)
{
    const computerChoice = getComputerChoice;
    const userChoice = getUserChoice;

    const roundInformation = () =>{
        console.log(" ");
        console.log("New Round");
        console.log("Computer:",computerChoice);
        console.log("User:", userChoice);
        console.log('Rounds played:'+roundsPlayed);
        console.log("Games played:"+gamesPlayed);
    }

    if((computerChoice== "paper") && (userChoice== "rock")){
        roundInformation();
        console.log("Paper beats Rock, ",computerWin);
        return computerWin;
    }
    else if((userChoice == "paper") && (computerChoice == "rock")){
        roundInformation();
        console.log("Paper beats Rock, ",userWin);
        return userWin;
    }
    else if((computerChoice == "scissors") && (userChoice == "rock")){
        roundInformation();
        console.log("Rock beats Scissors, ",userWin );
        return userWin;
    }
    else if((computerChoice == "rock") && (userChoice == "scissors")){
        roundInformation();
        console.log("Rock beats Scissors, ",computerWin);
        return computerWin;
    }else if((computerChoice == "scissors") && (userChoice == "paper")){
        roundInformation();
        console.log("Scissors beats Paper, ",computerWin);
        return computerWin;
    }
    else if((computerChoice == "paper") && (userChoice == "scissors")){
        roundInformation();
        console.log("Scissors beats Paper, ",userWin);
        return userWin;
    }
    else{
        roundInformation();
        console.log(draw);
        return draw;
    }
}

function roundWinner(){
    let winner = playRound(computerChoice= getComputerChoice(),userChoice); 
    if(winner == computerWin){
        roundByComp++;
    }
    else if(winner == userWin){
        roundByUser++;
    }
    else{
        ties++;
    }
    let gameWinner = function(){
        if((roundsPlayed%5)==0){
            gamesPlayed++;
            if(roundByComp>roundByUser){
                gameByComp++;
                roundByUser =0;
                roundByComp = 0;
                ties = 0;
                return computerWin;
            }
            else if(roundByUser>roundByComp){
                gameByUser++;
                roundByUser =0;
                roundByComp = 0;
                ties = 0;
                return userWin;
            }
            else if(roundByUser==roundByComp){
                roundByUser =0;
                roundByComp = 0;
                ties = 0;
                return draw;
            }
        }
    }();

    userWins.textContent = 'Rounds won by User: '+roundByUser;
    compWins.textContent = 'Rounds won by Comp: '+roundByComp;
    roundDrawn.textContent = 'Rounds drawn: '+ties;
    compInput.textContent = 'Computer: '+computerChoice;
    userInput.textContent = 'User: '+userChoice;
    totalGames.textContent = 'Games played: '+gamesPlayed;

    if(winner == computerWin){
        result.textContent = 'Computer Wins!!';
    }
    else if(winner == userWin){
        result.textContent = 'User wins!!'
    }
    else{
        result.textContent = 'Draw..';
    }

    if(gameWinner != undefined){
        gameWon.textContent = 'Game winner: '+gameWinner;
    }
    else{
        gameByComp.textContent = 'Current game in progress';
    }
}

rockButton.addEventListener('click', ()=>{
    userChoice = 'rock';
    roundsPlayed++;
    roundWinner();
    return userChoice = 'rock'   
}
);
paperButton.addEventListener('click', ()=>{
    userChoice = 'paper';
    roundsPlayed++;
    roundWinner();
    return userChoice = 'paper'}
);
scissorsButton.addEventListener('click', ()=>{
    userChoice = 'scissors';
    roundsPlayed++;
    roundWinner();
    return userChoice = 'scissors'}
);
resetButton.addEventListener('click',()=>{
    window.location.reload()});
