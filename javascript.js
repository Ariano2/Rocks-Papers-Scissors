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
    }
    else if ((userChoice==="rock" && computerChoice==="scissor") || (userChoice==="paper" && computerChoice==="rock") || (userChoice==="scissor" && computerChoice==="paper")){
        console.log(`User chose : ${userChoice} \n`);
        console.log(`Computer chose : ${computerChoice} \n`);
        console.log("User has won! \n");
    }
    else{
        console.log(`User chose : ${userChoice} \n`);
        console.log(`Computer chose : ${computerChoice} \n`);
        console.log("Computer has won! \n");
    }
}
let iter="y";
while (iter==="y"){
    playRound(prompt("Kindly chose between rock,paper and scissor"),getComputerChoice());
    iter=prompt("enter y to keep playing");
    console.log(iter);
}