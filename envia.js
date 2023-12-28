// Criar um objeto com os dados a serem enviados
let dados = {
    nome: "João",
    email: "vanderson588silva@gmail.com",
    texto: "Eu sou um pouco louco do juizo."
  };
  
  // Converter o objeto em uma string JSON
  let dadosJSON = JSON.stringify(dados);
  
  // Usar a Fetch API para enviar os dados para a API
  fetch("https://exemplo.com/api", {
    method: "POST", // Especificar o método HTTP
    headers: {
      "Content-Type": "application/json" // Especificar o tipo de conteúdo
    },
    body: dadosJSON // Enviar o corpo da solicitação com os dados em JSON
  })
  .then(res => res.json()) // Converter a resposta em JSON
  .then(json => console.log(json)) // Exibir o JSON no console
  .catch(err => console.log(err)); // Capturar e exibir erros
  
  

  // Selecionar o formulário pelo seu id
let form = document.getElementById("contact-form");

// Adicionar um evento de submit ao formulário
form.addEventListener("submit", function (event) {
  // Prevenir o comportamento padrão do formulário
  event.preventDefault();

  // Criar um objeto FormData com os dados do formulário
  let formData = new FormData(form);

  // Usar a Fetch API para enviar os dados para o endpoint
  fetch("https://exemplo.com/api/contact", {
    method: "POST", // Especificar o método HTTP
    body: formData // Enviar o corpo da requisição com os dados do formulário
  })
  .then(res => res.json()) // Converter a resposta em JSON
  .then(json => console.log(json)) // Exibir o JSON no console
  .catch(err => console.log(err)); // Capturar e exibir erros
});
