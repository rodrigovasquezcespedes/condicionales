const imagen=document.querySelector("#imagen");
let contador= 1;

const marcar=()=>{
if(contador == 1){
    contador--;
    imagen.style.border="2px solid red";

}else{
    contador++;
    imagen.style.border="";
}};

imagen.addEventListener('click',marcar);