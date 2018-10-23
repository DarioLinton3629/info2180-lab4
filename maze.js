window.onload = function(){
  myFunction()
};
 function myFunction() {
  var x = document.querySelectorAll("#maze div.boundary");
  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", colour);
  }
}
 function colour() {
  var x = document.querySelectorAll("#maze div.boundary");
  for (var i = 0; i < x.length; i++) {
    
    x[i].classList.add("youlose");
  }
} 