// Função para validar o formulário e proteger cookies
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário até a validação

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('formMessage');

    // Validação simples
    if (username === "" || email === "") {
        messageElement.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Configurando um cookie seguro
    document.cookie = `username=${username}; Secure; SameSite=Strict`;

    messageElement.textContent = "Formulário enviado com sucesso!";
    messageElement.style.color = "green";
});
