$(document).ready(function(){
	$("form[name='date_request']").on("submit", function(event){
		event.preventDefault();
		var data = $(this).serialize();
		console.log(data);
		var request = $.ajax({
			url: $(this).attr("action"),
			method: $(this).attr("method"),
			data: data,
			dataType: "json"
		});
		console.log(request);
		request.done(function(objectsArray){
			console.log(objectsArray);
			if (objectsArray.length > 0) {
				visualizeMeteors(objectsArray);
			}
			else {
				alert("There were no meteors on that day.")
			}
		});
		request.fail(function(errorThrown){
			alert("I'm sorry, but the request for data failed due to: " + errorThrown);
		});
	});

});