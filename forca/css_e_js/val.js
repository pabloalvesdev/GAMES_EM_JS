$(document).ready(function(){
    const m = document.getElementById('formulario');
    const jogo_da_memoria = $('#container-jogo-da-memoria');
    const jogo_da_velha = $('#container-jogo-da-velha');
    const jogo_da_forca = $('#container-jogo-da-forca');
    const menu_principal_win = $('#voltar-menu-forca-win');
    const cabeca = $('#cabeca');
    const be = $('#braco-esquerdo');    
    const bd = $('#braco-direito');
    const pe = $('#perna-esquerda');
    const pd = $('#perna-direita');
    const alf = $('#alfabeto-l');
    const modal_win = $('#modal-win');
    const modal_lose = $('#modal-lose');
    const cobrir = $('.cobrir');
    var numero_de_erros = [];
    var numero_de_acertos = []; 
    var procurar, palavra_passe, dica;
    m.addEventListener('submit', function(e){palavra_passe = field_palavra_passe.value; dica = field_dica.value; e.preventDefault();});
    m.addEventListener('submit', function(){
        for(var y = 30; y < ids_paragrafos.length + 30; y++){
            $('#'+y).hide();
        }
    });
    modal_lose.hide();
    modal_win.hide();
    cabeca.hide();
    be.hide();
    bd.hide();
    pe.hide();
    pd.hide();
//MODELO A SEGUIR PARA OS OUTROS BOTOES....
    menu_principal_win.click(function(){
        jogo_da_memoria.hide();
        jogo_da_velha.hide();
        jogo_da_forca.hide();
        cabeca.hide();
        be.hide();
        bd.hide();
        pe.hide();
        pd.hide();
        $('.container').fadeIn();
        cobrir.css('position', 'absolute');
        cobrir.css('top', '-50%');
        cobrir.css('left', '-70%');
        cobrir.css('z-index', '-45');
        cobrir.hide();
        modal_win.hide();
        apagarAlf();
        apagarP();
        numero_de_acertos = numero_de_acertos.slice(0,0);
        numero_de_erros = numero_de_erros.slice(0,0);
        field_dica.value = '';
        field_palavra_passe.value = '';
    });
    //seta as partes do boneco caso o cara tenha errado a letra...
    function erro(){
        if (numero_de_erros.length == 1) {
            cabeca.fadeIn();
        } else if (numero_de_erros.length == 2) {
            bd.fadeIn();
        } else if (numero_de_erros.length == 3) {
            be.fadeIn();
        } else if (numero_de_erros.length == 4) {
            pd.fadeIn();
        } else if (numero_de_erros.length == 5) {
            pe.fadeIn();
        }
    }
    //chamando o modal quando o jogador vence...
    function venceu(){
        modal_win.css('z-index', '500000000');  
        modal_win.css('left', '50%');     
        modal_win.fadeIn(); 
        cobrir.css('z-index', '2');
        cobrir.css('width', '100vw');
        cobrir.css('height', '100vh');
        cobrir.css('position', 'fixed');
        cobrir.css('top', '0px');
        cobrir.css('left', '0px');
        cobrir.fadeIn();
    }
    //chamando o modal quando o jogador perde...
    function perdeu(){
        modal_lose.css('z-index', '5000000'); 
        modal_lose.css('left', '50%');      
        modal_lose.fadeIn();
        cobrir.css('z-index', '2');
        cobrir.css('width', '100vw');
        cobrir.css('height', '100vh');
        cobrir.css('position', 'fixed');
        cobrir.css('top', '0px');
        cobrir.css('left', '0px');
    }
    //seta a letra caso o cara tenha acertado 
    function setLetra(){
        var fc = 30 + procurar;
        $('#'+ fc).fadeIn();
    }
    //invalidando letra que foi selecionada...
    alf.click(function(){
        var letra_selecionada = $('#' + id_letra);
        letra_selecionada.hide();
    });
    //verificando se o cara acertou ou errou a letra
    alf.click(function(){
        procurar = palavra_passe_m.lastIndexOf(id_letra);
        procurar_2 = palavra_passe_m.match(/id_letra/g);
        if(procurar == -1) {
            numero_de_erros.push(1);
            erro();
        } else {
            numero_de_acertos.push(1);
            setLetra();
            
        }
    });
    alf.click(function(){
        if (numero_de_erros.length  == 5) {
            setTimeout(function(){
                perdeu();
            }, 500);
        } else if (numero_de_acertos.length == palavra_passe.length) {
            setTimeout(function(){
                venceu();
            }, 500);
        }
    });
});