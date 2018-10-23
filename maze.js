var lose = false ;

window.onload = function(){
  myFunction()
};

 function myFunction() {
  var x = document.querySelectorAll("#maze div.boundary");
  var end = document.getElementById("end");

  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", colour);
  }
  
  end.addEventListener("mouseover", end1);
  
}

function end1(){
  if (lose){
    alert("you lose")
  } else {
    alert("you win");
  }
	
}

 function colour() {
  lose = true;
  var x = document.querySelectorAll("#maze div.boundary");
  for (var i = 0; i < x.length; i++) {
    
    x[i].classList.add("youlose");
  }
} 

