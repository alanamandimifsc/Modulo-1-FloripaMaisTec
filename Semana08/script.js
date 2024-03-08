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

//remover um elemento filho
document.body.removeChild(novoElemento);


// alterar todos elementos de uma classe
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.cssText = 'background-color: yellow; color: green; padding: 10px;';
};

// adicionar uma nova classe a um elemento
elemento.setAttribute('class', 'novo-titulo');

// remover uma classe de um elemento
elemento.removeAttribute('class', 'novo-titulo');

//adicionar atributo
elemento.setAttribute('data-id', '1');

//remover atributo
elemento.removeAttribute('data-id');


