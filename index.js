let randomNumOne = Math.floor(Math.random()*6) + 1;

let randomNumTwo = Math.floor(Math.random()*6) + 1;

function playRound() {

    let imgOne = document.getElementById("diceImgOne");

    let imgTwo = document.getElementById("diceImgTwo");

    imgOne.src = "./images/" + randomNumOne + ".png";

    imgTwo.src = "./images/" + randomNumTwo + ".png";

    winner();

};

function winner(){
    let heading = document.querySelector("h3");
    
    if (randomNumOne > randomNumTwo){

        heading.innerHTML = "Player 1 Wins!!!"

    }else if (randomNumOne < randomNumTwo){

        heading.innerHTML = "Player 2 Wins!!!";
    }else{
        heading.innerHTML = "Its a draw!";
    }
}
