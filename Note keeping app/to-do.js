var title = document.getElementById("noteTitle");
var content = document.getElementById("noteContent");
var div = document.getElementById("mainDIV");
var enter = document.getElementById("enter");

if(localStorage["innerHTML"]) {
	 var arr = [];
	 var c = [];
	 arr = JSON.parse(localStorage["innerHTML"]);
	 c = JSON.parse(localStorage["className"]);
	 for(var el = 0;  el < arr.length; el++) {
			 var node = document.createElement("div");
			 node.className = c[el];
			 node.innerHTML = arr[el];
			 div.appendChild(node);
	}
	localStorage.removeItem("innerHTML");
	localStorage.removeItem("className");
}

function crossOut(){
	this.classList.toggle("completed");
}

function notEmpty(){
	if(title.value.length > 0){
		if(content.value.length > 0){
			return 1;
		} else {
			alert("Please add content to the note!");
			return 0;
		}
	} else {
		alert("Please enter a title!");
		return 0;
	}
}

function listLength(){
   return length;
}

window.onbeforeunload = function(){
	var array = [];
	var classes = [];
	for(var i = 0; i < div.children.length; i++){
		if(div.children[i].innerHTML !== "") {
			array.push(String(div.children[i].innerHTML));
			classes.push(String(div.children[i].className));
		}
	}
	localStorage["innerHTML"] = JSON.stringify(array);
	localStorage["className"] = JSON.stringify(classes);
}

function createNote() {
  var node = document.createElement('div');
  var noteTitle = document.createElement('h2');
  var noteContent = document.createElement('p');
  noteTitle.innerHTML = String(title.value);
  noteContent.innerHTML = String(content.value);
	node.className = "card";
  node.appendChild(noteTitle);
  node.appendChild(noteContent);
  div.appendChild(node);
  title.value = "";
  content.value = "";
}

function ButtonClicked(){
  if(notEmpty() === 1){
    createNote();
  }
}

function deleteNote(){
  if(notes > 0){
		div.removeChild(this);
  }
}

enter.addEventListener("click", ButtonClicked);
