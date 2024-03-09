let consultar = document.querySelector('#btn-consulta');
let comprar = document.querySelector('#btn-comprar');
let carrinhoConsulta = document.querySelector('#consulta-carrinho');
let material;

materias = [
    {
        codigo: '001',
        nome: 'Caderno',
        preco: 10.00
    },
    {
        codigo: '002',
        nome: 'Lápis',
        preco: 1.00
    },
    {
        codigo: '003',
        nome: 'Caneta',
        preco: 2.00
    },
    {
        codigo: '004',
        nome: 'Borracha',
        preco: 0.50
    },
    {
        codigo: '005',
        nome: 'Mochila',
        preco: 80.00
    }
];

carrinhoDeCompras = [];
function excluir(event, nome) {
    let item = event.target.parentElement;
    let valor = 0;
    item.remove();
    for (let material of carrinhoDeCompras) {
        if (material.nome === nome) {
            valor = material.preco;
            carrinhoDeCompras.splice(carrinhoDeCompras.indexOf(material), 1);
        }
    }
    let total = document.querySelector('#total');
    total.innerText = 'Valor total: R$' + (total.innerText.split('R$')[1] - valor).toFixed(2);

}

consultar.addEventListener('click', (event) => {
    event.preventDefault();
    let codigo = document.querySelector('#codigo');
    material = materias.find((materia) => materia.codigo === codigo.value);
    if (material) {
        let preco = document.querySelector('#preco-consulta');
        preco.innerText = 'R$' + material.preco.toFixed(2);
        let nome = document.querySelector('#nome-consulta');
        nome.innerText = material.nome;
    } else {
        alert('Material não encontrado');
    }
    codigo.value = '';


});

comprar.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(material);
    if (material) {
        // carrinho.push(material);
        let lista = document.createElement('li');

        lista.innerText = material.nome + ' - R$' + material.preco.toFixed(2);
        let carrinhoLista = document.querySelector('#carrinho');
        let buton = document.createElement('button');
        buton.innerText = 'Remover';
        buton.addEventListener('click', (event) => {
            excluir(event, material.nome);
        });

        lista.appendChild(buton);
        carrinhoLista.appendChild(lista);
        carrinhoDeCompras.push(material);
        console.log(carrinhoDeCompras);

        let total = 0;
        for (let produto of carrinhoDeCompras) {
            total += produto.preco;
        }

        let totalCarrinho = document.querySelector('#total');
        totalCarrinho.innerText = 'Valor total: R$' + total.toFixed(2);



    } else {
        alert('Material não encontrado');
    }

});

carrinhoConsulta.addEventListener('click', (event) => {
    event.preventDefault();

});


