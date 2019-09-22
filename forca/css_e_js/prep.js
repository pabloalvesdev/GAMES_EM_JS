const form = document.getElementById('formulario');
const alfabeto_n = document.getElementById('alfabeto-l');
const field_palavra_passe = document.getElementById('field-palavra');
const field_dica = document.getElementById('field-dica');
const btn_tt = document.getElementById('btn-pedacos-teste');
const textos = document.getElementById('esp-let');
var palavra_passe, dica, tamanho_palavra, palavra_passe_m;
var novo_paragrafo, nova_div;
var ids_paragrafos = [];
var vet_elements_letra = []; 
var novo_espaco = [];
var s_vet = [];
form.addEventListener('submit', function(e){palavra_passe = field_palavra_passe.value; dica = field_dica.value; e.preventDefault(); palavra_passe_m = palavra_passe.toUpperCase();});
function setarEspacosEmBranco(){
    for (var tam = 0; tam < palavra_passe_m.length; tam++){
        nova_div = document.createElement('div');
        nova_div.className = "espaco-letrinha";
        novo_paragrafo = document.createElement('p');
        novo_paragrafo.innerHTML = palavra_passe_m[tam];
        novo_paragrafo.id = tam + 30;
        var id_paragrafo = novo_paragrafo.getAttribute('id');
        ids_paragrafos.push(id_paragrafo);
        novo_paragrafo.className = "letrinha";
        nova_div.appendChild(novo_paragrafo);
        textos.appendChild(nova_div);
    }
}

function mudarTextoDica(){
    document.getElementById('dica').innerHTML = dica;
}

function apagarAlf(){
    s_vet = alfabeto_n.querySelectorAll('.letra');
    for(var kf = 0; kf < s_vet.length; kf++){
        s_vet[kf].style.display = 'flex';
    }
}

function apagarP(){
    var s = textos.querySelectorAll('.espaco-letrinha');
    for(var kf = 0; kf < s.length; kf++){
        textos.removeChild(s[kf]);
    }
    field_palavra_passe.value = '';
    field_dica.value = '';
}

form.addEventListener('submit', setarEspacosEmBranco);
form.addEventListener('submit', mudarTextoDica);    
document.getElementById('btn-regras').addEventListener('click', apagarP);
document.getElementById('btn-regras').addEventListener('click', apagarAlf);
document.getElementById('voltar-menu-forca').addEventListener('click', apagarP);
document.getElementById('voltar-menu-forca').addEventListener('click', apagarAlf);
document.getElementById('voltar-menu-formulario').addEventListener('click', function(){field_palavra_passe.value = ''; field_dica.value = '';});
document.getElementById('voltar-menu-forca').addEventListener('click', function(){field_palavra_passe.value = ''; field_dica.value = '';});