var button1 = document.getElementById("button1");

function onClick(event) {
	button1.innerText = "I'm Right";
}

button1.addEventListener("click", onClick);



var button2 = document.getElementById("button2");

function onClick2(event) {
	button2.innerText = "No I'm Right";
}


button2.addEventListener("click", onClick2);
