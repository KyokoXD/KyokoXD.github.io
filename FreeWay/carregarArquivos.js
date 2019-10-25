//Variáveis para as imagens
let imgEstrada;

let imgVaca;
let imgCarro = [];

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgEmoji = loadImage('imagens/emoji.png');
  
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');

  //Sons
  ponto = loadSound('sons/pontos.wav');
  atropelou = loadSound('sons/colidiu.mp3');
  trilha = loadSound('sons/trilha.mp3');
}
                  
//Variáveis de movimento
let yVaca = 368;
let yEmoji = 368;

let xVaca = 150;
let xEmoji = 450;

//Vetores
//              direita / esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 325];
let velocidadeCarro = [3, 5, 7, 3, 5, 7]; 
