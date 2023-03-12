function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador ++) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    listaTeclas[contador].onclick = function() {
        tocaSom(idAudio);
    }
    //console.log(contador);

    tecla.onkeydown = function (evento){
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
