//card de imagens dentro da art-area do header
function card1() {
  // Selecionar o elemento do slider e as imagens
  const card1 = document.querySelector(".card1");
  const imagens = card1.querySelectorAll("img");
  // Criar uma variável para armazenar o índice da imagem atual
  let indice = 1;
  // Executar a função a cada 3 segundos
  setInterval(function() {
    // Remover a classe ativo da imagem atual
    imagens[indice - 1].classList.remove("ativo");
    // Esconder a imagem atual
    imagens[indice - 1].style.opacity = "0";
    // Colocar a imagem atual abaixo das outras
    imagens[indice - 1].style.zIndex = "1";
    // Incrementar o índice
    indice++;
    // Verificar se o índice chegou ao final do slider
    if (indice > imagens.length) {
      // Reiniciar o índice
      indice = 1;
    }
    // Adicionar a classe ativo na imagem atual
    imagens[indice - 1].classList.add("ativo");
    // Mostrar a imagem atual
    imagens[indice - 1].style.opacity = "1";
    // Colocar a imagem atual acima das outras
    imagens[indice - 1].style.zIndex = "2";
  }, 3500);
}

// Chamar a função
card1();

function navBarToggle(){
  const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu"),
       blur = document.querySelector(".blur");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     blur.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
}

navBarToggle();

function texto (){
  var texto = document.getElementById ("#area-de-texto");

// add an event listener for input event
texto.addEventListener ("input", function () {
  // reset the height to the minimum
  textarea.style.height = "auto";
  
  // get the computed style of the textarea
  var style = window.getComputedStyle (texto);
  
  // calculate the height needed to fit the content
  var height = parseInt (style.getPropertyValue ("border-top-width")) +
               parseInt (style.getPropertyValue ("border-bottom-width")) +
               textarea.scrollHeight;
  
  // set the height of the textarea
  textarea.style.height = height + "px";
});
}

texto();