// Slideshow
let slide_idx = 0;
slideShow();

// Validate
function validateEmail(){
  if(!validateEmail()){
    return
  }
}

function slideShow() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slide_idx++;
  if (slide_idx > slides.length) {
    slide_idx = 1
  }
  // animasi pada dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_idx-1].style.display = "block";  
  dots[slide_idx-1].className += " active";
  setTimeout(slideShow, 4000); //berubah tiap 4 detik
}

function validateEmail(){
  var email = document.getElementById('form').value
  let value1 = email.includes("@")
  let value2 = email.includes(".co.id")
  let value3 = email.includes(".com")
  let value4 = email.includes("gmail")
  let value5 = email.includes("yahoo")
  if(value1 != 1||(value2 !=1 && value3 != 1)||(value4 !=1 && value5 != 1)){
    alert("Invalid Email")
    return false
  }
  window.location = "hal_subs/subs.html";
}