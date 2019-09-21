const alfabeto = document.getElementById('alfabeto-l');
const cabeca = document.getElementById('cabeca');
const be = document.getElementById('braco-esquerdo');
const bd = document.getElementById('braco-direito');
const pe = document.getElementById('perna-esquerda');
const pd = document.getElementById('perna-direita');
var id_letra;
alfabeto.addEventListener('click', function(r){id_letra = r.target.id;});