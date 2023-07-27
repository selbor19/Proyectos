const botonNumeros = document.getElementsByName('number');
const botonOpera = document.getElementsByName('opera');
const botonIgual = document.getElementsByName('igual')[0];
const botonDelete = document.getElementsByName('delete')[0];
var result = document.getElementById('result');

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        //agregarNumero();
        alert(boton.innerText);
    })
})