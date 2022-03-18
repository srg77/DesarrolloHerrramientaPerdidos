let contador = 0;


const actualizarContador = () => {

    contador++;
    const elemContador = document.getElementById('contador');
    elemContador.innerHTML = contador;

}

