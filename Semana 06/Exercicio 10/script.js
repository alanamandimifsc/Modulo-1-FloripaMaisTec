document.getElementById("formPerfil").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturando os dados do formulário
    var formData = new FormData(this);
    
    // Criando o perfil do usuário
    var perfilHTML = `
        <section class="profile">
            <div class="profile-picture">
                <img src="assets/${formData.get('foto').name}" alt="Foto de Perfil">
            </div>
            <div class="profile-info">
                <h2>${formData.get('nome')}</h2>
                <p>Apelido: ${formData.get('apelido')}</p>
                <p>Descrição: ${formData.get('descricao')}</p>
                <p>Idade: ${formData.get('idade')}</p>
            </div>
        </section>
    `;

    // Inserindo o perfil na página
    document.querySelector("main").innerHTML = perfilHTML;

    // Enviando a foto para ser carregada
    var fotoFile = formData.get('foto');
    var fotoReader = new FileReader();
    fotoReader.readAsDataURL(fotoFile);
    fotoReader.onload = function() {
        document.querySelector(".profile-picture img").src = this.result;
    };
});
