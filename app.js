var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var flag = "images/red-flag.png";




document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
    document.querySelector(".win").textContent = "The winner is Player 1";
    document.querySelector(".player1").setAttribute("src", flag);

}else if(randomNumber1 == randomNumber2){
    document.querySelector(".win").textContent = "This match is Draw";
}
else {
    document.querySelector(".win").textContent = "The Winner is player 2";
    document.querySelector(".player2").setAttribute("src", flag);
}
