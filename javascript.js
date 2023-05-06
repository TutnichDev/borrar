const title = document.querySelector('title')
title.innerText = 'Modif Dom desde JS'

const firstElement = document.getElementById('starter');

let h1_1 = document.createElement('h1');
h1_1.innerText = 'Bienvenidos a esta prueba'
firstElement.appendChild(h1_1)

let inputA = document.createElement('input');
let inputB = document.createElement('input');
inputA.setAttribute('placeHolder','ingrese número 1')
inputB.setAttribute('placeHolder','ingrese número 2')
firstElement.appendChild(inputA)
firstElement.appendChild(inputB)

let butonELement = document.createElement('button')
butonELement.innerText = 'presione para sumar'
butonELement.setAttribute('onclick', 'Boton()')
firstElement.appendChild(butonELement)
console.log(butonELement)


function Boton() {
    let resultadoElement = document.createElement('h1');
    resultadoElement.innerText = Number(inputA.value) + Number(inputB.value)
    firstElement.appendChild(resultadoElement)
}

