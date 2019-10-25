let placarVaca = 0;
let placarEmoji = 0;

function mostraPlacar(){
  textSize(32);
  
  fill("BLACK");
  text(placarVaca, 190, 28);
  
  fill("YELLOW");
  text(placarEmoji, 450, 28);
  
  if(yVaca < 15){
    placarVaca += 1;
    ponto.play();
    yVaca = 368;
  }
  
  if(yEmoji < 15){
    placarEmoji += 1;
    ponto.play();
    yEmoji = 368;
  }
}