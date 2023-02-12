
function getComputerChoice()
{
    //This function generates a random number and uses it to determine the computer choice
    let decider = ((Math.random())*100).toFixed(0);
    console.log(decider);
    if(decider%3==0){
        console.log("scissors");
        return "scissors";
    }
    else if(decider%2==0){
        console.log("paper");
        return "paper";
    }
    else{
        console.log("rock");
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
            continue;  
        }
        else{
            warningMessage = "Wrong choice";
            alert(warningMessage);
            checker=0;
        } 
    }
    
    console.log(choice);
    return choice;
}

function playRound()
{
    let draw = "draw";
    let computerWin = "Computer wins";
    let userWin = "User wins";

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
        console.log(draw);
        return draw;
    }
}

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();

computerChoice = String(computerChoice);
userChoice = String(userChoice);
playRound();




