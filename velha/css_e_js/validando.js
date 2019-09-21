const c = document.getElementById('ss')
var log_de_clicadas = [];
var numero;
var espaco = [];

espaco_selecionado.addEventListener('click', function(e){numero = e.target.id});
function armazenar_log_de_clicadas(){
    log_de_clicadas.push(numero);
    for(var fx = 0; fx < 9; fx++) {
    espaco[fx] = document.getElementById(fx + 13).getAttribute('src');
    }
}

function verificarJogo(){
    if (espaco[0] == espaco[1] && espaco[1] == espaco[2]) {
        if(espaco[0] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[0] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    }if (espaco[3] == espaco[4] && espaco[4] == espaco[5]) {
        if(espaco[3] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[3] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    }if (espaco[6] == espaco[7] && espaco[7] == espaco[8]) {
        if(espaco[6] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[6] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    }if (espaco[0] == espaco[3] && espaco[3] == espaco[6]) {
        if(espaco[0] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[0] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    }if (espaco[1] == espaco[4] && espaco[4] == espaco[7]) {
        if(espaco[1] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[1] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    }if (espaco[2] == espaco[5] && espaco[5] == espaco[8]) {
        if(espaco[2] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[2] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    }if (espaco[0] == espaco[4] && espaco[4] == espaco[8]) {
        if(espaco[0] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[0] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    }if (espaco[6] == espaco[4] && espaco[4] == espaco[2]) {
        if(espaco[6] === './velha/imagens/x.png') {
            alert('X Venceu');
        } else if (espaco[6] === './velha/imagens/bolinha.png') {
            alert('Bolinha Venceu');
        }
    } else if (log_de_clicadas.length == 9) {
        alert('Deu velha ninguém ganhou...');
    }
}
function val(){setTimeout(function(){if(log_de_clicadas.length >= 5){verificarJogo();}}, 100);}
espaco_selecionado.addEventListener('click', armazenar_log_de_clicadas);
espaco_selecionado.addEventListener('click', val);
botao_zerar.addEventListener('click', function(){log_de_clicadas = log_de_clicadas.slice(0,0)});