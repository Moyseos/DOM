var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var par = document.getElementById("par");

function onClick() {
	par.innerHTML = "I'm Right!";
}



function onClick2() {
	par.innerText = "No I'm Right!";
}

btn1.addEventListener("click", onClick);
btn2.addEventListener("click", onClick2);

var button1 = document.getElementById("button1");

function onClick(event) {
	par.innerText = "I'm Right";
}

button1.addEventListener("click", onClick);



var button2 = document.getElementById("button2");

function onClick2(event) {
	par.innerText = "No I'm Right";
}


button2.addEventListener("click", onClick2);
