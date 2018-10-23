var lose = false ;

window.onload = function(){
  myFunction()
};

 function myFunction() {
  var x = document.querySelectorAll("#maze div.boundary");
  var end = document.getElementById("end");
  var start = document.getElementById("start");

  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", colour);
  }
  start.onclick = function() {

      var x = document.querySelectorAll("#maze div.boundary");
      for (var i = 0; i < x.length; i++) {
    
      x[i].classList.remove("youlose");
    }
    lose= false;
  
  }
  end.addEventListener("mouseover", end1);
  
}

function end1(){
  if (lose){
    //alert("you lose");
    document.getElementById("status").textContent = "YOU LOSE";
  } else {
    //alert("you win");
    document.getElementById("status").textContent = "YOU WIN";
  
  }
	
}

 function colour() {
  lose = true;
  
  var x = document.querySelectorAll("#maze div.boundary");
  for (var i = 0; i < x.length; i++) {
    
    x[i].classList.add("youlose");
  }
  end1();
} 

