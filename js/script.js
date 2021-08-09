function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function myFunction1(n) {
  var y = document.getElementsByClassName("panel");
  // console.log(y);
  switch(n){
  	case 1:
  		// console.log(1);

  		if (y[0].style.display == "none") {
  			y[0].style.display = "block";
	  		y[1].style.display = "none";
	  		y[2].style.display = "none";
	  		y[3].style.display = "none";
  		}
  		else {
  			y[0].style.display = "none";
  		}  		
  		break;
  	case 2:
  		// console.log(2);
  		
  		if (y[1].style.display == "none") {
  			y[1].style.display = "block";
	  		y[0].style.display = "none";
	  		y[2].style.display = "none";
	  		y[3].style.display = "none";
  		}
  		else {
  			y[1].style.display = "none";
  		}  		
  		break;
  	case 3:
  		// console.log(3);
  		
  		if (y[2].style.display == "none") {
  			y[2].style.display = "block";
	  		y[0].style.display = "none";
	  		y[1].style.display = "none";
	  		y[3].style.display = "none";
  		}
  		else {
  			y[2].style.display = "none";
  		}  		
  		break;
  	case 4:
  		// console.log(4);
  		
  		if (y[3].style.display == "none") {
  			y[3].style.display = "block";
	  		y[0].style.display = "none";
	  		y[2].style.display = "none";
	  		y[1].style.display = "none";
  		}
  		else {
  			y[3].style.display = "none";
  		}  		
  		break;
  }
}