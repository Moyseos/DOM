var desireName = "Nick";

var form = document.getElementById("info");

var input = document.getElementById("name");

var button = document.getElementById("mybutton");



form.addEventListener("submit", function(event) {
	if (desireName === input.value) {
		alert("Awesome!");
	}
	else {
		alert("Incorect");
	}
});
