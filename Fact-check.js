let flags = 0; //first button placed
let select = 0;

function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function Open_frame(term) {
	console.log(term);
	console.log(text1);
	let url = "https://fr.wikipedia.org/wiki/" + term;
	console.log(url);
	if (term)
	{
		if (flags === 0){
			flags = 1;
			select = 0;
		}
		else if (!text1  && select === 0){
			window.open(url);
		}
	}
}
	
function CreatButton(text) {
	if (document.getElementById("fc-button") != null){
		document.getElementById("fc-button").remove();
		flags = 0;
	}
	let button = document.createElement("button");
	button.setAttribute("id","fc-button");
	document.body.appendChild(button);
	return button;
}

function SetUpbutton(x, y, text) {
	let button = document.getElementById("fc-button");
	button.style.top =  y + "px";
	button.style.left = x + "px";
	button.style.position = "absolute";
	button.style.height = "17px"; 
	button.style.width = "17px";
	button.innerText = "?";
	button.setAttribute("value","generated button");
	button.onclick = console.log(flags)
	console.log(button.style.top);
	console.log(button.style.left);
	flags = 1;
;
}

text1 = getSelectedText();
document.addEventListener("mouseup", PopButton, true);

function PopButton(event) {
	text = getSelectedText();
	if (text != "" && flags === 0){
		button = CreatButton(text);
		let x = event.clientX;
		let y = event.clientY;
		SetUpbutton(x, y ,text);
	}
	else if (flags === 1){
		button.onclick = Open_frame(text);
		button.remove();
		flags = 0;
		select = 0;
	}
};

