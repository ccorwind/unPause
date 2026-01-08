function hider() {
	document.getElementById("homePage").style.display = "none";
	document.getElementById("galleryPage").style.display = "none";
	document.getElementById("aboutPage").style.display = "none";
	document.getElementById("contactPage").style.display = "none";
}
function but1() {
	hider();
	document.getElementById("homePage").style.display = "inline-flex";
}
function but2() {
	hider();
	document.getElementById("galleryPage").style.display = "inline-flex";
}
function but3() {
	hider();
	document.getElementById("aboutPage").style.display = "inline-flex";
}
function but4() {
	hider();
	document.getElementById("contactPage").style.display = "inline-flex";
}
function but5() {
	
	if (document.getElementById("colorButton").innerHTML == "LIGHT MODE"){
	document.body.style.backgroundColor = "#F2DFD7";
	document.getElementById("topBar").style.backgroundColor = "#C3BEF7";
	document.getElementById("colorButton").innerHTML = "DARK MODE";
	textColorer("black");
	butColorer("#967AA1");
	divColorer("#967AA1");
	//document.getElementById("toolsBar").style.backgroundColor = "blue";
	document.getElementById("spacerDiv").style.backgroundColor = "#C3BEF7";
	document.getElementById("selectionDiv").style.backgroundColor = "#C3BEF7";
	document.getElementById("quizDiv").style.backgroundColor = "#C3BEF7";
	
	} else {
	document.body.style.backgroundColor = "#200116";
	document.getElementById("topBar").style.backgroundColor = "black";
	document.getElementById("colorButton").innerHTML = "LIGHT MODE";
	textColorer("white");
	butColorer("#2F195F");
	divColorer("#2F195F");
	//document.getElementById("toolsBar").style.backgroundColor = "black";
	document.getElementById("spacerDiv").style.backgroundColor = "black";
	document.getElementById("selectionDiv").style.backgroundColor = "black";
	document.getElementById("quizDiv").style.backgroundColor = "black";
	}
}
function textColorer(colorOf){
	let pel = document.getElementsByTagName('p');
	let i;
	for (i = 0; i < pel.length; i++) {
    pel[i].style.color = colorOf;
	}
	let tel = document.getElementsByTagName('label');
	let e;
	for (e = 0; e < tel.length; e++) {
    tel[e].style.color = colorOf;
	}
}

function butColorer(colorOf){
	let pel = document.getElementsByClassName('buttons');
	let i;
	for (i = 0; i < pel.length; i++) {
    pel[i].style.borderColor = colorOf;
	}
}
function divColorer(colorOf){
		let pel = document.getElementsByClassName('divvs');
	let i;
	for (i = 0; i < pel.length; i++) {
    pel[i].style.borderColor = colorOf;
	}
}
function but6() {
	
}



// function getPictures(){
// var xmlhttp = new XMLHttpRequest();

// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//       var n = (this.responseText.match(/png/g) || []).length;
	  
//       for (var i = 1; i <= n; i++) {
//         var img1 = document.createElement('img');
//         img1.src = 'gallery/' + i + '.png';
//         document.getElementById("gallery0").appendChild(img1);
// 	document.console.log("fuck");
//       }
//   }
// };

// xmlhttp.open("GET", "gallery/", true);
// xmlhttp.send();
// }
