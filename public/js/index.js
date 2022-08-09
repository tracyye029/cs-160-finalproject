let slideIndex = 1;
showSlides(slideIndex);
console.log("hello");

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-show");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  /*document.getElementsByClassName("banner-show")[n].style.display = "block";*/
  slides[n-1].style.display = "block";
  dots[n-1].className += " active";
}
