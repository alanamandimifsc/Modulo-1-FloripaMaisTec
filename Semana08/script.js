// selecione um elemento

var elemento = document.getElementById('title');
elemento.style.backgroundColor = 'red';

//selecione elementos por classe
var elementos = document.querySelectorAll('.item');

for (var i = 0; i < elementos.length; i++) {
    elementos[i].textContent = 'Mudando item ' + i;
}

// criar e adicionar um elemento

let novoElemento = document.createElement('div');
novoElemento.textContent = 'Novo elemento';
novoElemento.style.cssText = 'background-color: blue; color: white; padding: 10px;';

document.body.appendChild(novoElemento);