var rows=5;




var color= function(k){
  return function(){
    document.getElementById(k).style.background="magenta";
    if((k<rows*rows) && (document.getElementById(k+1).style.background="green") && (document.getElementById(k+1).style.background !="url('https://img.freepik.com/premium-vector/red-flag-icon-concept-pointer-tag-important-sign-vector-triangle-silk-stick_390775-502.jpg?w=2000')")){
      document.getElementById(k+1).style.background="white";
 document.getElementById(k-1).style.background="white";
document.getElementById(k+rows).style.background="white";
 document.getElementById(k-rows).style.background="white";
 document.getElementById(k+rows+1).style.background="white";
document.getElementById(k+rows-1).style.background="white";
document.getElementById(k-rows+1).style.background="white";
document.getElementById(k-rows-1).style.background="white";
    }
  }
}

var checkFlag=function(k){
  return function(){
    if(document.getElementById(k).style.background="green"){
      var sum=0;
      
    }
  }
}



var game=document.createElement("div");
game.id="bigBox";
game.style.width="91vh";
game.style.height="91vh";
game.style.background="red";
game.style.marginLeft="42%";
game.style.marginRight="42%";
game.style.borderRadius="2%";
game.style.padding="0.5vh";
game.style.display="flex";
game.style.flexWrap="wrap";

document.body.appendChild(game);
var mainBox=document.getElementById("bigBox");


var marginLoss=rows-1;
for(i=1; i<=rows*rows; i++){
  var smallbox=document.createElement("button");
  smallbox.id=i;
  smallbox.style.width=(90-marginLoss)/rows +"vh";
  smallbox.style.height=(90-marginLoss)/rows +"vh";
  smallbox.style.background="green";
  smallbox.style.border="1px dashed black";
  smallbox.style.borderRadius="2%";
  smallbox.style.margin="0.5vh";
  smallbox.innerHTML = i;
  smallbox.style.fontSize="10vh";
  game.appendChild(smallbox);
  smallbox.onclick=color(i);
}


function randomIntFromInterval() {
  return Math.floor(Math.random() * (rows*rows -1))+ 1;
}

for(var p=1; p<=rows; p++){
  var int=randomIntFromInterval();
  document.getElementById(int).style.backgroundImage="url('https://img.freepik.com/premium-vector/red-flag-icon-concept-pointer-tag-important-sign-vector-triangle-silk-stick_390775-502.jpg?w=2000')";
  document.getElementById(int).style.backgroundSize=(90-marginLoss)/rows +"vh";
}

