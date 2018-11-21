window.onload = update;
	var minListe = ["Red", "Blue", "Green"];
	var antall = minListe.length;

function update(){
	document.getElementById("dropdown-button").onclick = dropDown; 
	closeDrop();
	myList();
	dotColor()
	document.getElementById("dropdown-menu").onclick = klikkList; 
}

function dotColor(){
	var x = minListe[0];
	var w = minListe[1];
	var q = minListe[2];
	var liStyle = document.head.appendChild(document.createElement("style"));
	liStyle.innerHTML =  ".dropdown-item:first-child:before  {color:" + x+";}" + ".dropdown-item:nth-child(2):before {color:" + w + ";}" + ".dropdown-item:last-child:before {color:" + q + ";}";		
}

function dropDown(){
	var toggle = document.getElementById("dropdown-button").getAttribute("aria-expanded");
	var buttonListe = document.getElementById("dropdown-menu");
	var liste = buttonListe.getElementsByTagName("BUTTON");
		if (toggle == "false"){
			toggle = "true"
  		}
  		else{
  		}  
  	document.getElementById("dropdown-button").setAttribute("aria-expanded", toggle);
  	document.getElementById("dropdown-menu").style.display = "block";	
  	document.getElementById("dropdown-button").style.boxShadow = "0px 0px 20px #5c5c5c";	
}

function myList(){
	var listeContainer = document.getElementById("dropdown-menu");
		for(var i = 0; i < antall; i++){
			var listeDel = document.createElement("li");
			listeDel.setAttribute("class", "dropdown-item");
			listeDel.setAttribute("value", minListe[i].length);
			listeDel.setAttribute("type", "button");
			listeDel.setAttribute("id", "dropdown-item");
			listeDel.setAttribute("role", "option");
			listeDel.innerHTML = minListe[i];
			listeContainer.appendChild(listeDel);
	}
}

function closeDrop(){
	var box = document.querySelector(".dropdown-menu");
	document.addEventListener("click", function(event) {
	
	if (event.target.closest(".right")) return;
		box.style.display = "none";
	document.getElementById("dropdown-button").setAttribute("aria-expanded", "false");
	document.getElementById("dropdown-button").style.boxShadow = "0px 0px 0px";	
	});


}

function klikkList(event){
	var x = event.target;
	document.getElementById("dropdown-button").innerHTML = x.innerHTML;
	document.getElementById("dropdown-button").value = x.value;
	document.getElementById("dropdown-button").style.backgroundColor = x.innerHTML;
	document.getElementById("dropdown-button").style.color = "white";
	document.getElementById("dropdown-button").style.borderColor = x.innerHTML;
	
}



