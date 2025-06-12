// document.addEventListener("DOMContentLoaded", () => {

// CODICE YT: https://youtu.be/BhSBOqFNy5M?si=gjEvusfqiFzEN60D
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');

  console.log(active);
  header.addEventListener('click', e => {
    // Prevent toggling if a link inside is clicked
    if (e.target.closest('a')) return;

    accordion.classList.toggle('active');
  });
});
// });

// CODICE W3SCHOOLS: https://www.w3schools.com/howto/howto_js_accordion.asp
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var accordion_body = this.nextElementSibling;
//     if (accordion_body.style.maxHeight) {
//       accordion_body.style.maxHeight = null;
//     } else {
//       accordion_body.style.maxHeight = accordion_body.scrollHeight + "px";
//     } 
//   });
// }