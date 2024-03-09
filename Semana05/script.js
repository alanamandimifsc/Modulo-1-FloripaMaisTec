let consultar = document.querySelector('#btn-consulta');
let comprar = document.querySelector('#btn-comprar');


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


consultar.addEventListener('click', (event) => {
    event.preventDefault();
    let codigo = document.querySelector('#codigo');
    let material = materias.find((materia) => materia.codigo === codigo.value);
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