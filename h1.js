var heading = document.getElementById("heading");

window.addEventListener("keydown", function(ev) {
	heading.innerHTML = ev.key;
});
