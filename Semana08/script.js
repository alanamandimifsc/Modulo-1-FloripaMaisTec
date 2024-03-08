// selecione um elemento

var elemento = document.getElementById('title');
elemento.style.backgroundColor = 'red';

//selecione elementos por classe
var elementos = document.querySelectorAll('.item');

for (var i = 0; i < elementos.length; i++) {
    elementos[i].textContent = 'Mudando item ' + i;
}
