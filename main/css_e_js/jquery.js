$(document).ready(function(){
    const cabeca = $('#cabeca');
    const be = $('#braco-esquerdo');    
    const bd = $('#braco-direito');
    const pe = $('#perna-esquerda');
    const pd = $('#perna-direita');
    const jogo_da_memoria = $('#container-jogo-da-memoria');
    const jogo_da_velha = $('#container-jogo-da-velha');
    const jogo_da_forca = $('#container-jogo-da-forca');
    const formulario = $('#container-formulario-jogo-da-forca');
    
    jogo_da_forca.hide();
    jogo_da_memoria.hide();
    jogo_da_velha.hide();
    formulario.hide();
    //Adicionando evento ao clicar na Imagem do jogo e mostrando o jogo selecionado...
    $('#img-jogo-da-memoria').click(function(){
        $('.container').hide();
        jogo_da_memoria.fadeIn();
        jogo_da_memoria.css('top', '50%');
    });
    $('#img-jogo-da-velha').click(function(){
        $('.container').hide();
        jogo_da_velha.fadeIn();
        jogo_da_velha.css('top', '50%');
    });$('#img-jogo-da-forca').click(function(){
        $('.container').hide();
        formulario.fadeIn();
        formulario.css('top', '50%');
    });
    //Adicionando evento para voltar ao menu principal...
    $('#voltar').click(function(){
        jogo_da_memoria.hide();
        jogo_da_velha.hide();
        formulario.hide();
        jogo_da_forca.hide();
        $('.container').fadeIn();
    });   
    $('#voltar-menu').click(function(){
        jogo_da_memoria.hide();
        jogo_da_velha.hide();
        formulario.hide();
        jogo_da_forca.hide();
        $('.container').fadeIn();
    });
    $('#voltar-menu-formulario').click(function(){
        jogo_da_memoria.hide();
        jogo_da_velha.hide();
        formulario.hide();
        jogo_da_forca.hide();
        $('.container').fadeIn();
    });
    $('#voltar-menu-forca').click(function(){
        jogo_da_memoria.hide();
        jogo_da_velha.hide();
        formulario.hide();
        jogo_da_forca.hide();
        $('.container').fadeIn();
        cabeca.hide();
        be.hide();
        bd.hide();
        pe.hide();
        pd.hide();
    });
    $('#btn-regras').click(function(){
        jogo_da_forca.hide();
        formulario.fadeIn();
        cabeca.hide();
        be.hide();
        bd.hide();
        pe.hide();
        pd.hide();
    });
    $('#btn-avancar').click(function(){
        formulario.hide();
        jogo_da_forca.fadeIn();
        jogo_da_forca.css('top', '50%');
    });     
});