const input1 = document.querySelector('#numero1').value;
const input2 = document.querySelector('#numero2').value;
const input3 = document.querySelector('#numero3').value;
const texto = document.querySelector('#texto');
const boton = document.querySelector('#boton');

const calculo = input1 + input2 + input3;

const sumar = () => {

        if (calculo <= 10) {
            texto.innerHTML = 'Los ' + calculo + ' tickets solicitados fueron autorizados';
alert(calculo)
        } else {
            texto.innerHTML = 'Los ' + calculo + ' tickets solicitados son mayores a los autorizado';
        }

};

boton.addEventListener('click', sumar);