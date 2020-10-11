window.onscroll = function() {
	if (window.scrollY <= 360) {
		document.getElementById("arrow-down").style.visibility = "visible";
		document.getElementById("arrow-down").style.opacity = "1";
		document.getElementById("arrow-down").style.transition = "visibility 0s linear 0s, opacity 300ms";
	}
	if (window.scrollY > 360) {
		document.getElementById("arrow-down").style.visibility = "hidden";
		document.getElementById("arrow-down").style.opacity = "0";
		document.getElementById("arrow-down").style.transition = "visibility 0s linear 300ms, opacity 300ms";
	}
}