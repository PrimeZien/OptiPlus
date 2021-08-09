var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var slideIndex1 = 1;
showSlides(slideIndex1);

function showDiscription(n) {
  var slides = document.getElementsByClassName("mySlides1");
  var btn = document.getElementsByClassName("desh");
  switch(n){
    case(1):
      console.log("1");
      slides[0].style.display = "block";
      slides[1].style.display = "none";
      slides[2].style.display = "none";
      btn[0].className = btn[0].className.replace(" active1", "");
      btn[1].className = btn[1].className.replace(" active1", "");
      btn[2].className = btn[2].className.replace(" active1", "");
      btn[0].className += " active1";
      break;
    case(2):
      console.log("2");
      slides[1].style.display = "block";
      slides[0].style.display = "none";
      slides[2].style.display = "none";
      btn[0].className = btn[0].className.replace(" active1", "");
      btn[1].className = btn[1].className.replace(" active1", "");
      btn[2].className = btn[2].className.replace(" active1", "");
      btn[1].className += " active1";
      break;
    case(3):
      console.log("3");
      slides[2].style.display = "block";
      slides[1].style.display = "none";
      slides[0].style.display = "none";

      btn[0].className = btn[0].className.replace(" active1", "");
      btn[1].className = btn[1].className.replace(" active1", "");
      btn[2].className = btn[2].className.replace(" active1", "");
      btn[2].className += " active1";
      break;
  }
}

var y = document.getElementById('textS').innerHTML;
var z = document.getElementById('textD').innerHTML;

function myFunction2() {
  var x = document.getElementById("qty").value;
  if (x<5){
    document.getElementById('textS').innerHTML = (x*y)+".00";
    document.getElementById('textD').innerHTML = 0+".00";
    document.getElementById('textT').innerHTML = (x*y)+".00";    
    console.log(x);
    console.log(y);
  }
  else{
    var st = (x*y);
    document.getElementById('textS').innerHTML = (x*y)+".00";
    var dis = st*(5/100);
    document.getElementById('textD').innerHTML = (dis)+".00";
    document.getElementById('textT').innerHTML = (st-dis)+".00";
    console.log(x);
    console.log(y);
  }
  
}

