// 0: Object
// fall: "Fell"
// geolocation: Object
// coordinates: Array[2]
// type: "Point"
// __proto__: Object
// id: "12286"
// mass: "135000"
// name: "Kesen"
// nametype: "Valid"
// recclass: "H4"
// reclat: "38.983330"
// reclong: "141.616670"
// year: "1850-01-01T00:00:00.000"
// __proto__: Object

var visualizeMeteors = function(meteors) {

	var canvas = d3.select("body")
								.append("svg")
								.attr("width", window.innerWidth)
								.attr("height", window.innerHeight);

	var circles = canvas.selectAll("circle")
										.data(meteors)
										.enter()
											.append("circle")
											.attr("cx", function(meteor) {
												return parseInt(meteor.reclat, 10) * 10;
											})
											.attr("cy", function(meteor) {
												return parseInt(meteor.reclong, 10) * 10;
											})
											.attr("r", function(meteor){
												return parseInt(meteor.mass, 10) / 1000;
											})
											.attr("fill", "blue");
};