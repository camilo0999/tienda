'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const productList = document.querySelector('.product-list');
  let scrollAmount = 0;

  function scrollProducts() {
      const maxScrollLeft = productList.scrollWidth - productList.clientWidth;

      if (scrollAmount >= maxScrollLeft) {
          scrollAmount = 0;
      } else {
          scrollAmount += 2; // Ajusta la velocidad de desplazamiento
      }

      productList.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  }

  setInterval(scrollProducts, 50); // Ajusta el intervalo de tiempo
});