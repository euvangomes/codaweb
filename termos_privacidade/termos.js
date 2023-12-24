const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu"),
       blur = document.querySelector("#blur");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     blur.addEventListener("click", () => {
      navBar.classList.remove("open");
     });
