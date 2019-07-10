//Espera carregar todo o contéudo HTML
window.onload = function(){
    alert("");
    console.log("Se quiser me ver, tem que pressionar F12! Console...");
    //Concatenação de strings com o símbolo +
    console.log("a = " + a +"b = " + b);
    console.log("a + b = " + parseInt(a+b) );
};
var a = 2;
var b = 2;

let entradas = document.querySelectorAll('input');
let resposta = document.querySelector('.resposta');
let botão = document.querySelector('btnSomar');

pegaNúmero1 = function(){
    return entradas[0].value;
}

pagaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradaVazias = function(){
    if(pegaNúmero1() === '' || pegaNúmero2() === '')
        return true;
    else
        return false;
}

somar = function(){
    if(testarEntradasVazias()){
        resposta.textContent = "Erro: Preecha os dois campos numéricos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }else{
        atualizaResposta();
        resposta.classList.remove('errada');
        resposta.classList.add('correta');
    }
}

atualizaResposta = function(){
    let num1 = pegaNùmero1();
    let num2 = pegaNùmero2();
    var soma = num1 + num2;
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}
//Monitoramento do click no botão
//Quando o botão for clicao, a função somar será chamada!
botão.addEventListener('click',somar);