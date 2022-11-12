function getComputerChoice(){
    arr_Index=Math.floor((Math.random()*3));
    arr_Options=["rock","paper","scissor"];
    return arr_Options[arr_Index];
}

function playRound(userChoice,computerChoice){
    userChoice=userChoice.toLowerCase();
    if (userChoice===computerChoice){
        console.log(`User chose : ${userChoice} \n`);
        console.log(`Computer chose : ${computerChoice} \n`);
        console.log("DRAW");
        return "Draw";
    }
    else if ((userChoice==="rock" && computerChoice==="scissor") || (userChoice==="paper" && computerChoice==="rock") || (userChoice==="scissor" && computerChoice==="paper")){
        console.log(`User chose : ${userChoice} \n`);
        console.log(`Computer chose : ${computerChoice} \n`);
        console.log("User has won! \n");
        return "User";
    }
    else{
        console.log(`User chose : ${userChoice} \n`);
        console.log(`Computer chose : ${computerChoice} \n`);
        console.log("Computer has won! \n");
        return "Computer";
    }
}
final_Score=[];
let iter="y";
let roundCount=0;
while (iter==="y"){
    let roundScore=playRound(prompt("Kindly chose between rock,paper and scissor"),getComputerChoice());
    iter=prompt("enter y to keep playing");
    console.log(iter);
    final_Score[roundCount]=roundScore;
    roundCount=roundCount+1;
}
let userWinCount=0;
let computerWinCount=0;
let drawCount=0;
for (i=0;i<=((final_Score.length)-1);i=i+1){
    if (final_Score[i]==="User"){
        userWinCount=userWinCount+=1;
    }
    else if (final_Score[i]==="Computer")
    {
        computerWinCount+=1;
    }
    else{
        drawCount+=1;
    }
}
ask=prompt("Enter s to check final score");
if (ask==="s"){
    console.log(`number of draws were : ${drawCount} \n`);
    console.log(`number of user wins were : ${userWinCount} \n`);
    console.log(`number of computer wins were : ${computerWinCount} \n`);
}
else;