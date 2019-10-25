//Criação de funções para organização 
//do código

function mostraVaca(){
  image(imgVaca, xVaca, yVaca, 28, 28);
  image(imgEmoji, xEmoji, yEmoji, 28, 28);
}

function movimentaVaca(){
  //movimenta Vaca
  if(keyIsDown(87)){//W susbstituindo UP_ARROW
    //yVaca = yVaca - 3;
    if(yVaca > 5)
      yVaca -= 5;
  }
  if(keyIsDown(83)){//S substituindo DOWN_ARROW
    if(yVaca < 366)
      yVaca += 5;
  }  
  //movimenta Emoji
  if(keyIsDown(UP_ARROW)){//W susbstituindo UP_ARROW
    //yVaca = yVaca - 3;
    if(yEmoji > 5)
      yEmoji -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){//S substituindo DOWN_ARROW
    if(yEmoji < 366)
      yEmoji += 5;
     }
  
  
}