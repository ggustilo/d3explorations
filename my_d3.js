$(document).ready(function(){

	var raw_data = DataSet;
	var dataSet = raw_data["data"];

	console.log(dataSet);
	
	var canvas = d3.select("body")
								.append("svg")
								.attr("width", 1500)
								.attr("height", 1500);

	var circles = canvas.selectAll("circle")
										.data(dataSet)
										.enter()
											.append("circle")
											.attr("cx", function(d, i) {
												return Math.random() * 100 + Math.abs(d["v"] * 10);
											})
											.attr("cy", function(d, i) {
												return Math.random() * 100 + Math.abs(d["v"] * 10);
											})
											.attr("r", function(d){
												return Math.abs(d["v"] * 5);
											})
											.attr("fill", "red");

});