


// function chkShow(){
//   if (document.getElementById('msg').innerHTML == " You Can buy now"; ){
//     showTab(1);
//   }
//   else{
//     document.getElementById('msg').innerHTML = " You Can't buy 5 or more than";  
//   }
// }
var slideIndex2 = 1;
// showTab(slideIndex2);

function showTab(n) {
  // document.getElementsByClassName("bg-payment")[0].style.display = "block";
  document.getElementsByClassName("bg-payment")[0].style.display = "flex";
  var slides = document.getElementsByClassName("tabs");
  var btn = document.getElementsByClassName("btn-pay");
  switch(n){
    case(1):
      console.log("1");
      slides[0].style.display = "block";
      slides[1].style.display = "none";
      btn[0].className = btn[0].className.replace(" active3", "");
      btn[1].className = btn[1].className.replace(" active3", "");
      btn[0].className += " active3";
      break;
    case(2):
      console.log("2");
      slides[1].style.display = "block";
      slides[0].style.display = "none";
      btn[0].className = btn[0].className.replace(" active3", "");
      btn[1].className = btn[1].className.replace(" active3", "");
      btn[1].className += " active3";
      break;
  }
    var x = document.getElementById("textT").innerHTML;
    document.getElementById('text1').innerHTML = "LKR "+x;
}

function close1() {
  document.getElementsByClassName("bg-payment")[0].style.display = "none";
}


var y = document.getElementById('textS').innerHTML;
var z = document.getElementById('textD').innerHTML;

function showAlert() {
    var x = document.getElementById("qty").value;
    if (x<5){
      document.getElementById('msg').innerHTML = " You Can buy now"; 
    }
    else{
      document.getElementById('msg').innerHTML = " You Can't buy 5 or more than";   
    }
  
}