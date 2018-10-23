window.onload = function(){
	
myFunction ();
}

function myFunction() {
	var x = document.getElementById('boundary1');
	x.addEventListener("mouseover",function(){
		document.getElementById('boundary1').classList.add("youlose");
	});
	
    

}
