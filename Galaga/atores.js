

function mostraPlayer(){
  image(imgPlayer, xPlayer, yPlayer, 38, 38);
}

function movimentaPlayer(){
  //movimenta Vaca
  if(keyIsDown(UP_ARROW)){//W susbstituindo UP_ARROW
    //yVaca = yVaca - 3;
    if(yPlayer > 5)
      yPlayer -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){//S substituindo DOWN_ARROW
    if(yPlayer < 366)
      yPlayer += 5;
  }  
   if(keyIsDown(LEFT_ARROW)){//A susbstituindo UP_ARROW
    //yVaca = yVaca - 3;
    if(xPlayer > 5)
      xPlayer -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){//D substituindo DOWN_ARROW
    if(xPlayer < 560)
      xPlayer += 5;
  }
}

function mostraBoss(){
  image(imgBoss, xBoss, yBoss, 100, 100);
}

function mostraCoracao1(){
  image(imgCoracao1, xCoracao1, yCoracao1, 25, 25);
}


function mostraCaveira(){
  image(imgCaveira, xCaveira, yCaveira, 35, 35);
}

function mostraPedras(){
  
  for(let i=0; i < imgPedras.length; i++) 
    image(imgPedras[i], xPedras[i], yPedras[i], 60, 30);
  
}
