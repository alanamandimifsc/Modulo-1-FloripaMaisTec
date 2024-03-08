function concluir(event) {
    let item = event.target.parentElement;
    item.style.textDecoration = 'line-through';
}

function excluir(event) {
    let item = event.target.parentElement;
    item.remove();
}

function adicionaLista() {
    let itemTexto = document.querySelector('#input').value;
    let lista = document.querySelector('.lista');
    let novoItem = document.createElement('li');
    novoItem.textContent = itemTexto;

    let botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.addEventListener('click', concluir);

    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', excluir);

    novoItem.appendChild(botaoConcluir);
    novoItem.appendChild(botaoExcluir);

    lista.appendChild(novoItem);
}
