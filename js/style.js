$(document).ready(function(){


// Create an array with the values "NYC" "SF" "LA" "ATX" and "SYD"
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
  var images =["images/NYC.jpg", "images/SF.jpg", "images/ATX.jpg", "images/LA.jpg", "images/SYD.jpg"]


  // Add a click event to the submit button that invokes the selectedCity function
  $('#submit-btn').on("click", selectedCity);



// Loop through each city and append an option to the select
for (var i = 0; i<cities.length; i++){
  // console.log(cities[i]);
  $('#selectdropdown').append('<option value="'+cities[i]+'">'+cities[i]+'</option>')
}



// Pull the select value from the dropdown - (use # to call it by an ID)
function selectedCity() {
  var select = $('#selectdropdown').val();
  console.log("Selected City: " + select);
  $("body").css("background-image", "url(images/"+select+".jpg)");
};




// without a submit button, but I've decided to use a submit button so the functionality is similar to my final project
// $("#selectdropdown").on("change", selectedCity);


});
