
function navPage(){
	console.log("next page called");
	// to use below you need JQuery Mobile installed
	// replace #menu with your ID
	// $.mobile.navigate( "#menu" );
	
}

gsap.to("#logo", {duration: 2, y: -50, opacity: 1, onComplete: navPage});
