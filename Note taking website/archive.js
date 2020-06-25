var archiveDiv = document.getElementById("archiveDIV");
if(localStorage["archiveArray"]) {
	 var arr = [];
	 var c = [];
	 arr = JSON.parse(localStorage["archiveArray"]);
	 c = JSON.parse(localStorage["archiveClasses"]);
	 for(var el = 0;  el < arr.length; el++) {
			 var node = document.createElement("div");
			 node.className = c[el];
			 node.innerHTML = arr[el];
			 archiveDiv.appendChild(node);
	}
	localStorage.removeItem("archiveArray");
  localStorage.removeItem("archiveClasses");
}

window.onbeforeunload = function(){
	var array = [];
	var classes = [];
	for(var i = 0; i < archiveDiv.children.length; i++){
		if(archiveDiv.children[i].innerHTML !== "") {
			array.push(String(archiveDiv.children[i].innerHTML));
			classes.push(String(archiveDiv.children[i].className));
		}
	}
	localStorage["archiveArray"] = JSON.stringify(array);
	localStorage["archiveClasses"] = JSON.stringify(classes);
}
