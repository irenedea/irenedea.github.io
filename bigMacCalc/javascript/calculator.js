var dictionary={"Argentina":3.07, "Australia":3.92, "Austria":3.71, "Belgium":4.05, "Brazil":4.28, "Britain":4.51, "Canada":4.54, "Chile":3.27, "China":2.74, "Colombia":2.92, "Costa Rica":4.03, "Czech Republic":2.83, "Denmark":5.08, "Egypt":2.16, "Estonia":3.23, "Euro area":4.05, "Finland":4.49, "France":4.49, "Germany":3.93, "Greece":3.34, "Hong Kong":2.48, "Hungary":3.18, "India":1.83, "Indonesia":2.29, "Ireland":4.05, "Israel":4.63, "Italy":4.38, "Japan":2.99, "Latvia":2.68, "Lithuania":2.84, "Malaysia":2.01, "Mexico":3.11, "Netherlands":3.78, "New Zealand":3.91, "Norway":5.65, "Pakistan":3.44, "Peru":3.14, "Philippines":3.61, "Poland":2.54, "Portugal":3.29, "Russia":1.88, "Saudi Arabia":3.2, "Singapore":3.44, "South Africa":2.09, "South Korea":3.76, "Spain":4, "Sri Lanka":2.61, "Sweden":5.13, "Switzerland":6.82, "Taiwan":2.55, "Thailand":3.17, "Turkey":3.87, "UAE":3.54, "Ukraine":1.55, "United States":4.79, "Uruguay":4.13, "Venezuela":0.67, "Vietnam":2.75};

function calculate(country) {
	var price=dictionary[country];
	var amount=document.getElementById("amount").value;
	console.log(amount);
	var output= 0;
	if (isNaN(amount)) {
		output="put in an actual number, ok?"
	} else {
		output=Math.floor(amount/price);
	}

	$("#input-display").html(output);
	$("#info").html("$" + dictionary[country].toString()+" per big mac in "+country);
}

