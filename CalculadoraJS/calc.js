const botonNumeros = document.getElementsByName('number');
const botonOpera = document.getElementsByName('opera');
const botonIgual = document.getElementsByName('igual')[0];
const botonDelete = document.getElementsByName('delete')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
        //alert(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}


function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = opeActual;
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

clear();