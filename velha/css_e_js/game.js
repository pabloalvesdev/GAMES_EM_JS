const espaco_selecionado = document.getElementById('cont-tabuleiro');
const botao_zerar = document.getElementById('btn-zerar');
var clicks = [];
espaco_selecionado.addEventListener('click', function(e){numero = e.target.id});
function armazenando(){
    clicks.push(numero);
}
espaco_selecionado.addEventListener('click', armazenando);
function set(){
    var modulo = clicks.length % 2;
    var elemento_selecionado = document.getElementById(numero);
    if (modulo == 1) {
        elemento_selecionado.src = './velha/imagens/x.png';
    } else if (modulo == 0) {
        elemento_selecionado.src = './velha/imagens/bolinha.png';
    }
}
function zerarGame(){
    for (var a = 13; a < 22; a++) {
        document.getElementById(a).src = './velha/imagens/null.png';
    }
}
espaco_selecionado.addEventListener('click', set);
botao_zerar.addEventListener('click', zerarGame);