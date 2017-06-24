var form = document.getElementById("myForm");
var heading = document.getElementById("heading");

form.addEventListener("submit", function(event) {
	event.preventDefault();


	var username = document.getElementById("uname").value;
	var password = document.getElementById("psw").value;
	var re = /[0-9]+/;


	if (password === "12345678" && username.match(re)) {
		alert("Welcome to my page");

		heading.innerHTML = "Welcome " + username;
	}
	else {
		alert("Invalid Password or Username or Both");
	}
});
