var heading = document.getElementById("heading");

window.addEventListener("keydown", function(event) {
	heading.innerHTML = event.key;
	console.log(event.key);
});
