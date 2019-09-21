const elemento_ul = document.getElementById('cont-pai');
const botao = document.getElementById('btn');
elemento_ul.addEventListener('click', function(e){element_id = e.target.id;});
var caminhos_imgs = ['./memoria/imagens/botafogo.png', './memoria/imagens/cam.png', './memoria/imagens/cruzeiro.png', './memoria/imagens/flamengo.png', './memoria/imagens/gremio.png', './memoria/imagens/internacional.png', './memoria/imagens/botafogo.png', './memoria/imagens/cam.png', './memoria/imagens/cruzeiro.png', './memoria/imagens/flamengo.png', './memoria/imagens/gremio.png', './memoria/imagens/internacional.png'];

function embaralhar(){
    var indice_atual = caminhos_imgs.length;
    var num_temporario;
    var indice_random;

    while (0 !== indice_atual) {
 
        indice_random = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
 
        num_temporario = caminhos_imgs[indice_atual];
        caminhos_imgs[indice_atual] = caminhos_imgs[indice_random];
        caminhos_imgs[indice_random] = num_temporario;
    }
}

embaralhar();

function setarImagens(){
    embaralhar();
    for (var x = 1; x < 13; x++) {
        document.getElementById(x).src = './memoria/imagens/capa.png'; 
    }
}
function trocar(){
    elemento = document.getElementById(element_id);
    if(elemento.src.match('capa')) {
        elemento.src = caminhos_imgs[element_id - 1];
    } else {
        elemento.src = './memoria/imagens/capa.png';
    }
}

botao.addEventListener('click', setarImagens);
elemento_ul.addEventListener('click', trocar);