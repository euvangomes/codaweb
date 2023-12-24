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

// get the textarea element
var texto = document.getElementById ("texto");

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
  textarea.style.height = height + "10px";
});
