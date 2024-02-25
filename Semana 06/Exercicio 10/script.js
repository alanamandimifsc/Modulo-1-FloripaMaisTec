// Função para validar o nome do usuário
function validarNome() {
    var nomeUsuario = document.getElementById("nomeUsuario").textContent;

    // Verifica se o nome está vazio
    if (nomeUsuario.trim() === "") {
        // Exibe a mensagem de erro
        document.getElementById("nomeErro").style.display = "block";
        return false;
    } else {
        // Esconde a mensagem de erro se o nome estiver preenchido
        document.getElementById("nomeErro").style.display = "none";
        return true;
    }
}

// Chamada para validar o nome quando o formulário for enviado
document.getElementById("formPerfil").addEventListener("submit", function (event) {
    // Evita o envio do formulário se o nome não estiver preenchido
    if (!validarNome()) {
        event.preventDefault();
    }
});
