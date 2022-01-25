var randomdice1=Math.floor(Math.random()*6)+1;

var randomimg = "Images/dice"+randomdice1+".png";

document.querySelector(".plr1").setAttribute("src",randomimg);



var randomdice2=Math.floor(Math.random()*6)+1;

var randomimg2 = "Images/dice"+randomdice2+".png";

document.querySelector(".plr2").setAttribute("src",randomimg2);



if (randomdice1>randomdice2) {

    document.querySelector("h1").innerHTML="Player 1 Wins!";
   
    
} else if(randomdice1==randomdice2) {
    document.querySelector("h1").innerHTML="It is a Tie.";
    
}else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}

