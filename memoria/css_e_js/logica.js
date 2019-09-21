const a = document.getElementById('cont-pai');
var vet = [], caminho1, caminho2, imagem1, imagem2;
a.addEventListener('click', function(e){element_id = e.target.id;});
function armazenar(){
    vet[vet.length] = element_id;
}
a.addEventListener('click', armazenar);
function verificar(){
    imagem1 = document.getElementById(vet[vet.length - 2]);
    imagem2 = document.getElementById(vet[vet.length - 1]);
    caminho1 = imagem1.getAttribute('src');
    caminho2 = imagem2.getAttribute('src');

    if (caminho1 == caminho2) {
        imagem1.src = caminho1;
        imagem2.src = caminho2;
    } else {
        imagem1.src = './memoria/imagens/capa.png';
        imagem2.src = './memoria/imagens/capa.png';
    }
    vet = vet.slice(0,0);
}
function chamada(){
    setTimeout(function(){
    if(vet.length >= 2){verificar();}}, 1000);}
a.addEventListener('click', chamada);