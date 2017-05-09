var heading = document.getElementById("heading");


function mouseEnter() {
	alert("Hey I Told You Not To Hover Over Me!");
}

heading.addEventListener("mouseenter", mouseEnter);

function mouseEnter(mouseenter) {
	alert("Hey I Said Dont Hover Over Me!");
}

heading.addEventListener("mouseenter", alert);
