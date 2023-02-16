//commented code was used during testing and debugging mostly console.log();
let draw = "draw";
let computerWin = "Computer wins";
let userWin = "User wins";
//The above values are global because they are used by more than one function ie 
//playRound() and game()
function getComputerChoice()
{
    //commented code was used during testing and debugging
    //This function generates a random number and uses it to determine the computer choice
    let decider = ((Math.random())*100).toFixed(0);
    // console.log(decider);
    if(decider%3==0){
        // console.log("scissors");
        return "scissors";
    }
    else if(decider%2==0){
        // console.log("paper");
        return "paper";
    }
    else{
        // console.log("rock");
        return "rock";
    }
}
function getUserChoice(){
    let message = "Input choice in the prompt";
    alert(message);
    let choice;
    let checker = 0;
    for(checker=0; checker<1;checker++){
        //Loop is used for checking if user input the correct option
        choice = String(prompt("Enter your choice"));
        choice = choice.toLowerCase();
        if(choice =="paper"||choice== "rock"||choice=="scissors"){
            checker = 1;
            continue;  
        }
        else{
            warningMessage = "Wrong choice";
            alert(warningMessage);
            checker=-1;
        } 
    }
    
    // console.log(choice);
    return choice;
}

function playRound()
// This function gets user input using the getUserChoice function
// and gets random computer input and compares them 
//Rock paper scissors is a game where rock beats scissors, paper beats rock and scissors beats paper
//All this is displayed in the console ie results and input 
//This is just a blue print as I will later try to make a GUI for the game where one can see 
//the results in time instead of opening the console after playing 5 rounds
{
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();

    computerChoice = String(computerChoice);
    userChoice = String(userChoice); 


    if((computerChoice== "paper") && (userChoice== "rock")){
        console.log("Computer:",computerChoice);
        console.log("User:", userChoice);
        console.log("Paper beats Rock, ",computerWin);
        return computerWin;
    }
    else if((userChoice == "paper") && (computerChoice == "rock")){
        console.log("Computer:",computerChoice);
        console.log("User:", userChoice);
        console.log("Paper beats Rock, ",userWin);
        return userWin;
    }
    else if((computerChoice == "scissors") && (userChoice == "rock")){
        console.log("Computer:",computerChoice);
        console.log("User:", userChoice);
        console.log("Rock beats Scissors, ",userWin );
        return userWin;
    }
    else if((computerChoice == "rock") && (userChoice == "scissors")){
        console.log("Computer:",computerChoice);
        console.log("User:", userChoice);
        console.log("Rock beats Scissors, ",computerWin);
        return computerWin;
    }else if((computerChoice == "scissors") && (userChoice == "paper")){
        console.log("Computer:",computerChoice);
        console.log("User:", userChoice);
        console.log("Scissors beats Paper, ",computerWin);
        return computerWin;
    }
    else if((computerChoice == "paper") && (userChoice == "scissors")){
        console.log("Computer:",computerChoice);
        console.log("User", userChoice);
        console.log("Scissors beats Paper, ",userWin);
        return userWin;
    }
    else{
        console.log("Computer:",computerChoice);
        console.log("User", userChoice);
        console.log(draw);
        return draw;
    }
}

function game()
{
    let roundsByComp=0;
    let roundsByUser = 0;
    let noWinner = 0;
    let winner;
    let message = "New round"
    alert(message);
    counter = 0;
    for(counter=0; counter<=4; counter++){
        winner = playRound();
        console.log(" ");
        console.log(message);
        if(winner == String(computerWin)){
            roundsByComp++;
        }
        else if(winner === String(userWin)){
            roundsByUser++;
        }
        else{
            noWinner++;
        }
    }
    let displayWinner = function(){
        //function used to display number of wins and draws
        console.log("Computer wins = ",roundsByComp);
        console.log("User wins = ",roundsByUser);
        console.log("Draws = ",noWinner);
        console.log(" ");
    }();
    // the if statements below determine the overall winner of the game
        if(roundsByComp>roundsByUser){
            return computerWin;
        }
        else if(roundsByUser>roundsByComp){
            return userWin;
        }
        else{
            return draw;
        }
    
}
let overallWinner = game();
console.log(" ");
console.log("Overall winner is ",overallWinner);
alert(overallWinner);

let finalMessage = function(){
    console.log("Thanks for playing");
}();

