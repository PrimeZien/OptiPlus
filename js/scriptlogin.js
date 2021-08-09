var pwInput = document.getElementById('pw');
// console.log(pwInput);
var cnpwInput = document.getElementById('cnpw');
// console.log(cnpwInput);


function chk() {
  var pwInput = document.getElementById('pw').value;
  //console.log(pwInput);
  var cnpwInput = document.getElementById('cnpw').value;
  //console.log(cnpwInput);

var textBox = document.getElementsByClassName('details');
console.log(textBox[0]);
var x;

  if(textBox[0].value !=="" && textBox[2].value !=="" && textBox[3].value !==""&& textBox[4].value !==""&& textBox[5].value !==""){
    if(pwInput !== cnpwInput){
       alert("Password didn't match try again!");
    }
    else{
      alert("Welcome to OPTIPLUS online store!");
    }
  }

}