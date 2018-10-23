var lose = false ;

window.onload = function(){
  let startgame=document.getElementById("start");
  startgame.addEventListener("mouseover",function(){
    myFunction();
    let maze = document.getElementById("maze");
    maze.addEventListener("mouseleave",function(){
    colour();
    end1();
    });
  })
  
};

 function myFunction() {
  var x = document.querySelectorAll("#maze div.boundary");
  var end = document.getElementById("end");
  var start = document.getElementById("start");
  var maze = document.getElementById("maze");

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
    let maze = document.getElementById("maze");
    maze.addEventListener("mouseleave",function(){
        var x = document.querySelectorAll("#maze div.boundary");
        for (var i = 0; i < x.length; i++) {
    
          x[i].classList.remove("youlose");
        }
        lose= false;
        document.getElementById("status").textContent = "YOU WIN";
  
    });
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

