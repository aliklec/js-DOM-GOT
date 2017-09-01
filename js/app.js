/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work 

*/


var kingdoms = [{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark"},{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister"},{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign"},{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen"},{ crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign"},{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign"}];




for (var i = 0; i < kingdoms.length; i++){
/*	console.log(kingdoms[i].crest);
	console.log(kingdoms[i].house);
	console.log(kingdoms[i].region);
	console.log(kingdoms[i].lord);
	console.log(kingdoms[i].allegiance);*/

	var boba = document.createElement("div");
	boba.className = "parent";
	main.appendChild(boba);

	var crestBox = document.createElement("IMG");
	crestBox.className = "GOTcrest";
	crestBox.src = kingdoms[i].crest;
	crestBox.id = "imagesAreHard";
	boba.appendChild(crestBox);

	var textBox = document.createElement("div");
	textBox.className = "text";
	boba.appendChild(textBox);

	

	var houseBox = document.createElement("div");
	houseBox.className = "GOThouse";
	houseBox.innerHTML = "House: " + kingdoms[i].house;
	textBox.appendChild(houseBox);

	var regionBox = document.createElement("div");
	regionBox.className = "GOTregion";
	regionBox.innerHTML = "Region: " + kingdoms[i].region;
	textBox.appendChild(regionBox);
	var addbreak = document.createElement("BR");
	boba.appendChild(addbreak);
	var lordBox = document.createElement("div");
	lordBox.className = "GOTlord";
	lordBox.innerHTML = "Lord: " + kingdoms[i].lord;
	textBox.appendChild(lordBox);

/*	var addbreak = document.createElement("BR");
	boba.appendChild(addbreak);*/

	var allegianceBox = document.createElement("div");
	allegianceBox.className = "GOTallegiance";
	allegianceBox.innerHTML = "Allegiance: " + kingdoms[i].allegiance;
	textBox.appendChild(allegianceBox);


	main.appendChild(boba);

}

var dynamic = document.getElementsByClassName("parent");
for(var i = 0; i<dynamic.length; i++){
	dynamic[i].addEventListener("click", showGot);

}

function showGot(){
var showGot = this.querySelectorAll(".text")[0];
if(showGot.style.display==="none"){
	showGot.style.display ="block";
}else{
	showGot.style.display = "none";
}

}

/*
	var crestBox = document.createElement("IMG");
	crestBox.className = "GOTcrest";
	crestBox.src = kingdoms[i].crest;
	main.appendChild(crestBox);*/


/*var imgBox = document.getElementsByTagName("img");
console.log(imgBox);
imgBox[8].src = "../assets/ali.jpg";*/
