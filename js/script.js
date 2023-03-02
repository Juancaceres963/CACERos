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

// Seccion de Productos 

var frutilla = document.querySelector(".varios-productos a:first-child");
var durazno = document.querySelector(".varios-productos a:nth-child(2)");
var piña = document.querySelector(".varios-productos a:last-child");

$(frutilla).show();
$(frutilla).addClass("boton-act").css({"border-radius": "15px 0 0 0"});
$(piña).css({"border-radius": "0 15px 0 0"});

$(".varios-productos a").on("click", function () {

  var enlace = $(this).attr("href");
  $(".productos .info-producto").hide();
  $(".varios-productos a").removeClass("boton-act");
  $(this).addClass("boton-act");
  $(enlace).fadeIn(1000);

  return false;
});

const generalFrut = document.getElementById("frut-general");
const navGeneralFrut = document.querySelector(".nav-info-especifica a:first-child");

const generalDuraz = document.getElementById("duraz-general");
const navGeneralDuraz = document.querySelector(".nav-info-especifica.duraz a:first-child");

const generalPiña = document.getElementById("piña-general");
const navGeneralPiña = document.querySelector(".nav-info-especifica.piña a:first-child");

$(".info-especifica").hide();

$(navGeneralFrut).addClass("letra-verde");
$(navGeneralDuraz).addClass("letra-verde");
$(navGeneralPiña).addClass("letra-verde");

$(generalFrut).show();
$(generalDuraz).show();
$(generalPiña).show();

$(".nav-info-especifica a").on("click", function(){
  var enlace = $(this).attr("href");
  $(".info-especifica").hide();
  $(".nav-info-especifica a").removeClass("letra-verde");
  $(this).addClass("letra-verde");
  $(enlace).fadeIn(1000);
})

// Controlando estilos del nav de productos cuando es mas pequeña la pantalla

$(document).ready(function() {
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $(".varios-productos a:first-child").css({"border-radius": "15px 15px 0 0"});
    } else {
      $(".varios-productos a:first-child").css({"border-radius": "15px 0 0 0"});
    }
    if ($(window).width() < 768) {
      $(".varios-productos a:last-child").css({"border-radius": "0 0 0 0"});
    } else {
      $(".varios-productos a:last-child").css({"border-radius": " 0 15px 0 0"});
    }
  });
});

});