var randomNumber1 = Math.floor(Math.random()*6)+1;
if(randomNumber1>3){
    var randomImages1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImages1 );
    document.querySelector("h1").innerHTML = "Ashutosh wins!";
}
else{
    var randomImages1 = "images/dice" + "6" + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImages1 );
    document.querySelector("h1").innerHTML = "Ashutosh wins!";
}

var randomNumber2 = Math.floor(Math.random()*6)+1;
if(randomNumber2<=3){
    var randomImages2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

}
else{
    var randomImages2 = "images/dice" + "1" + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImages2);
}



