$(document).ready(function() {
    /* Carrusel */
    var carousel = document.querySelector('.carousel');
var prevButton = carousel.querySelector('.carousel-prev');
var nextButton = carousel.querySelector('.carousel-next');
var images = carousel.querySelectorAll('img');
var imageIndex = 0;

setInterval(function() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  carousel.querySelector('ul').style.transform = 'translateX(-' + (imageIndex * 33.333) + '%)';
}, 5000);

prevButton.addEventListener('click', function(e) {
  e.preventDefault();
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }
  carousel.querySelector('ul').style.transform = 'translateX(-' + (imageIndex * 33.333) + '%)';
});

nextButton.addEventListener('click', function(e) {
  e.preventDefault();
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  carousel.querySelector('ul').style.transform = 'translateX(-' + (imageIndex * 33.333) + '%)';
});
``
//  Mostrar y ocultar el back del navbar 

var nav = document.querySelector('nav');
var section = document.querySelector('#carousel'); // la sección que deseas ocultar
var seccion2 = document.querySelector("#texto");

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= section.offsetTop || window.pageYOffset >= texto.offsetTop) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});

});