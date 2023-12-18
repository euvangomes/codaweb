const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu"),
       transparencia = document.querySelector(".transparencia");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     transparencia.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
