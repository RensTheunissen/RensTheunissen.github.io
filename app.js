//Animatie van de tekst
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll('.nav-list li a');
  
  navItems.forEach(item => {
      item.addEventListener('click', function(e) {
          // Remove active class from all nav items
          navItems.forEach(link => link.parentElement.classList.remove('active'));

          // Add active class to the clicked nav item
          this.parentElement.classList.add('active');
          
          // Store the active element in sessionStorage
          sessionStorage.setItem('activeNav', this.getAttribute('href'));
      });
  });

// On page load, apply the active class to the stored active element
const activeNav = sessionStorage.getItem('activeNav');
if (activeNav) {
      document.querySelector(`a[href="${activeNav}"]`).parentElement.classList.add('active');
  }
});


//Foto slider javascript code
var slideIndex = [1, 1];  // One index per slider
var slideClass = ["mySlides1", "mySlides2"];  // Class names for different sliders
var dotClass = ["dot1", "dot2"];  // Class names for different dots

showSlides(1, 0);  // Initialize the first slider
showSlides(1, 1);  // Initialize the second slider

// Function to control current slide
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}


// Function to show the slides
function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideClass[no]);
  var dots = document.getElementsByClassName(dotClass[no]);
  
  if (n > slides.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no] - 1].style.display = "block";  
  dots[slideIndex[no] - 1].className += " active";
}