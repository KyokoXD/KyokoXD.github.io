function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){ // +/- 8s
    if(placarVaca < 5 && placarEmoji < 5){
      jogar();
      console.log("Vaca: " +  placarVaca + " Emoji: " + placarEmoji);
    }else
      verificaVencedor();
  }else{    
    telaInicial();
  }
}

function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora(); //Tela Final
  else
    emojiVencedor(); // Tela Final
}


function vacaVencedora(){
  background("GRAY");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Chartreuse");
  textSize(48);
  text("Vaca Venceu", 200, 90);
  image(imgVaca, 200, 100, 200, 200);  
}

function emojiVencedor(){
  background("YELLOW");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("DarkOrange");
  textSize(48);
  text("Emoji Venceu", 200, 90);
  image(imgEmoji, 200, 100, 200, 200);  
}

function telaInicial(){
  background("PURPLE");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Chocolate");
  textSize(48);
  text("Jogo da Av. 1º de Maio", 300, 190);
  textSize(24);
  text("Desenvolvido por Kyoko(Marlon)", 300, 230);  
}

function jogar(){
  background(imgEstrada);
  mostraCarros();
  mostraVaca();
  movimentaCarros();
  movimentaVaca();  
  atropelamento();
  mostraPlacar();
}
