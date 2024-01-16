const texto = document.querySelector('#texto');
const boton = document.querySelector('#boton');


const sumar = () => {

    const numero1 = Number(document.querySelector('#numero1').value);
    const numero2 = Number(document.querySelector('#numero2').value);
    const numero3 = Number(document.querySelector('#numero3').value);

    let suma = numero1 + numero2 + numero3;
    if (!isNaN(suma)) {
        if (suma <= 10) {
            texto.innerHTML = 'Los ' + suma + ' tickets solicitados fueron autorizados';
        } else {
            texto.innerHTML = 'Llevas demasiados stickers';
        }
    } else {
        texto.innerHTML = 'Los caracteres ingresados no son validos';
    }

};

boton.addEventListener('click', sumar);