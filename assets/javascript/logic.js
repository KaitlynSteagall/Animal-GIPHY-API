// array of animals that load on page startup. User input will be pushed into this array.
var topics = ["ferret", "puppy", "kitten", "fish", "otter", "tiger"];

//function to display the buttons in the array
function displayButton() {
  //
  $("#animalButtons").empty();
  //loop through the array
  for (var i = 0; i < topics.length; i++) {
    //create a var for a button that creates a button, attr, class, and text on the button for the animal on that iteration in the loop
    var button = $("<button class='btn mr-2 mb-2'>").attr("data-animal", topics[i]).addClass("animalButton").text(topics[i]);
    //append the button to the document in the animalButtons id
    $("#animalButtons").append(button);
  }
}

// On click event for when "submit" is clicked: add user input to the array(which will then be displayed using)
$("#addAnimal").on("click", function (event) {
  //
  event.preventDefault();
  //var called animal that will take the val, trim the val, and lower case the val of the textbox under id animal in the HTML file
  var animal = $("#animal").val().trim().toLowerCase();
  //push vaule from text box into the array
  topics.push(animal);
  //refer to function that creates a button so new button will show with what the user entered
  displayButton();
});

//function to display GIFs from GIPHY API
function displayAnimalGIF() {

  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=nM33hY6owuDXKqa1jMH0g8lR05UiqbVL&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var GIF = $("<div class='float-left mr-5'>");
      var pTag = $("<p>").text("Rating: " + results[i].rating)
      var animalImg = $("<img class='mb-5'>").attr("src", results[i].images.fixed_height.url);

      GIF.append(pTag);
      GIF.append(animalImg);
      $("#animalGIF").prepend(GIF);
    }
  });
};


$(document).on("click", ".animalButton", displayAnimalGIF);

displayButton();