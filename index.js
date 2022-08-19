var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);


var randomnumber2=Math.floor(Math.random()*6)+1;

var randomImage2="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1>randomnumber2){
  document.querySelector("h1").innerHTML= "PLAYER1 wins";
}
else if(randomNumber1<randomnumber2){
  document.querySelector("h1").innerHTML= "player2 wins";
}
else{
  document.querySelector("h1").innerHTML= "draw!";
}
