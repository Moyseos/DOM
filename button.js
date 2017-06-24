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
