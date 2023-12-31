/**FUNÇÃO DA MENU LATERAL DA PÁGINA**/
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

/*CARDS DE IMAGENS DENTRO DO HEADER*/
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
/*FIM*/


/*AUMENTO DO TAMANHO DO TEXTAREA DENTRO DO FOOTER*/
function texto(){
  const texto = document.querySelector("textarea");
  texto.addEventListener("keyup", e => {
    texto.style.height = "103px";
    let height = e.target.scrollHeight;
    texto.style.height = `${height}px`
  });
}

texto();
/*FIM*/