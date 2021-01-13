var randomNumber1 = Math.floor(Math.random() * 6)+1;    // 1 - 6 random number

var randomDiceNumber = "dice"+randomNumber1+".png";     //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceNumber;   //images/dice1.png - images.dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// player 2
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDiceNumber2 = "dice"+randomNumber2+".png";     //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceNumber2;   //images/dice1.png - images.dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2)  {
    document.querySelector("h1").innerHTML = "Player 1 wins";


}   else if 
    (randomNumber1 < randomNumber2)  {
    document.querySelector("h1").innerHTML = "Player 2 wins";

}   else { 
    document.querySelector("h1").innerHTML = "Its a Draw";

    }

