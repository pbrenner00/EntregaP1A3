// script.js

function filtrarPorCategoria(categoria) {
  // Esconder todos os itens
  var itens = document.querySelectorAll('.itens .item');
  itens.forEach(function(item) {
    item.classList.add('hidden');
  });

  // Mostrar apenas os itens da categoria selecionada
  var itensFiltrados = document.querySelectorAll('.itens .item[data-categoria="' + categoria + '"]');
  itensFiltrados.forEach(function(item) {
    item.classList.remove('hidden');
  });
}


// CADASTRO JOGO
const games = [
  {
    title: "Super Mario Odyssey",
    genre: "Ação-aventura",
    platform: "Nintendo Switch",
    release_date: "2017-10-27",
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Ação-aventura",
    platform: "Nintendo Switch",
    release_date: "2017-03-03",
  },
  {
    title: "God of War",
    genre: "Ação",
    platform: "PlayStation 4",
    release_date: "2018-04-20",
  },
];

// CADASTRO
// document.getElementById('cadastroForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//
//   let nome = document.getElementById('nome').value;
//   let email = document.getElementById('email').value;
//   let senha = document.getElementById('senha').value;
//
//   console.log('Nome:', nome);
//   console.log('Email:', email);
//   console.log('Senha:', senha);
//
//   // Aqui você pode enviar os dados para o servidor
// });


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
