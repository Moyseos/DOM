<<<<<<< HEAD
/* var desireName = "Nick";
=======
var desireName = "Nick";
>>>>>>> 186a94303ddccc19200dcd05355d09a30b760e1b

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
<<<<<<< HEAD
}); */


var form = document.getElementById("myForm");
form.addEventListener("submit",function(event) {
	event.preventDefault();

	var input = document.getElementById("text");
	var username = document.getElementById("uname").value;
	var password = document.getElementById("psw").value;
	var re = /[0-9]+/;

	if (password === "1234567" && username.match(re)) {
		input.innerHTML = "Please stay on my page";
	}
	else {
		alert("Invalid Password or Username or Both");
	}
=======
>>>>>>> 186a94303ddccc19200dcd05355d09a30b760e1b
});
