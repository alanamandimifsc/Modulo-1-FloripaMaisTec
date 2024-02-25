function atualizarNome() {
    let nome = prompt("Digite o seu nome");


    if (nome != null && nome != "") {
        let elementNome = document.getElementById("nomeUser");

        elementNome.textContent = nome;

    }
}