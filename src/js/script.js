// EM DESENVOLVIMENTO

function showPage(pageId) {
    // Oculta todas as seções
    document.querySelectorAll("section").forEach(function(section) {
        section.style.display = "none";
    });

    // Mostra a seção desejada
    document.getElementById(pageId).style.display = "block";
}

// function filtrarPorCategoria(categoria) {
//     // Esconder todos os itens
//     var itens = document.querySelectorAll('.itens .item');
//     itens.forEach(function (item) {
//         item.classList.add('hidden');
//     });
//
//     // Mostrar apenas os itens da categoria selecionada
//     var itensFiltrados = document.querySelectorAll('.itens .item[data-categoria="' + categoria + '"]');
//     itensFiltrados.forEach(function (item) {
//         item.classList.remove('hidden');
//     });
// }


// CADASTRO
document.addEventListener('DOMContentLoaded', function () {
    var usuarioAtual = {};

    // Verifica se o elemento com ID 'cadastroForm' existe
    var cadastroForm = document.getElementById('cadastroForm');
    if (!cadastroForm) {
        console.error('Elemento com ID "cadastroForm" não encontrado.');
        return;
    }

    // Adiciona um listener para o evento submit no formulário
    cadastroForm.addEventListener('submit', function (event) {
        event.preventDefault();
        document.addEventListener('DOMContentLoaded', function () {
            var usuarioAtual = {}; // Objeto para armazenar temporariamente os dados do usuário

            // Adiciona um listener para o evento submit no formulário
            document.getElementById('cadastroForm').addEventListener('submit', function (event) {
                event.preventDefault(); // Previne o envio padrão do formulário

                // Obtém os valores dos campos
                var usuario = document.getElementById('inputUsuario').value;
                var email = document.getElementById('inputEmail').value;
                var senha = document.getElementById('inputSenha').value;
                var confirmarSenha = document.getElementById('inputConfirmarSenha').value;

                // Validação básica
                if (usuario === '' || email === '' || senha === '' || confirmarSenha === '') {
                    alert('Por favor, preencha todos os campos.');
                    return;
                }

                if (senha !== confirmarSenha) {
                    alert('As senhas não coincidem. Por favor, tente novamente.');
                    return;
                }

                // Armazena os dados no objeto usuarioAtual
                usuarioAtual.usuario = usuario;
                usuarioAtual.email = email;
                usuarioAtual.senha = senha;

                // Exibe os dados no console para fins de demonstração
                console.log('Usuário: ' + usuarioAtual.usuario);
                console.log('Email: ' + usuarioAtual.email);
                console.log('Senha: ' + usuarioAtual.senha);

                // Limpa os campos do formulário após o envio bem-sucedido
                document.getElementById('cadastroForm').reset();

                // Redireciona para a tela de index
                window.location.href = '../index.html'; // Substitua 'index.html' pelo caminho da sua tela de index
            });
        });
    });
});


// CLASSIFICAR JOGO
const ratingInputs = document.querySelectorAll('.rating input');

ratingInputs.forEach(input => {
    input.addEventListener('click', () => {
        // Aqui você pode adicionar a lógica para processar a classificação selecionada
        const ratingValue = input.value;
        console.log('Classificação selecionada:', ratingValue);
    });
});


//default path or route
