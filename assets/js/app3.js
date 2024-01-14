const texto = document.querySelector('#texto');
const boton = document.querySelector('#boton');

const validar=()=>{

const numero1 =document.querySelector('#numero1').value;
const numero2 =document.querySelector('#numero2').value;
const numero3 =document.querySelector('#numero3').value;

let concatenado= numero1+numero2+numero3;


if (concatenado == 911){
texto.innerHTML = 'Password 1 correcto';
}
else if(concatenado == 714) {
    texto.innerHTML = 'Password 2 correcto';
}else{
    texto.innerHTML = 'Password Incorrecto';
}};

boton.addEventListener('click',validar);