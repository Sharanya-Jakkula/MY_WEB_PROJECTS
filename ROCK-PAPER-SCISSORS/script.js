let userScore=0;
let compScore=0;
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const GcompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    //generates in the range of 0 to 1
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];

}

const drawGame=()=>{
    //console.log("game was draw.");
    msg.innerText=("Game was draw. Play again!");
    msg.style.backgroundColor="#081b31";

}

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        //console.log("you win!");
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userscorePara.innerText=userScore;
    }else{
        compScore++;
        //console.log("you lose!");
        msg.innerText=`You lose!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compscorePara.innerText=compScore;

    }
}


const playGame=(userChoice)=>{
//console.log("User choice =",userChoice);
const compChoice=GcompChoice();
//console.log("Computer choice =",compChoice);
//check
if (userChoice===compChoice){
    //draw game
    drawGame();
}else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userwin=compChoice==="scissors"?false:true;
    }else{
       userwin=compChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked..",userChoice)
        playGame(userChoice);
    });
}


);