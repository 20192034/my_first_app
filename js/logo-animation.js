Function navToMenu ()
{
	console.log("triggered");
}
gsap.to("#logo",{duration: 2, y: -50}, opacity: 1, onCompelete: navToMenu);