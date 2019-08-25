// array of animals that load on page startup. User input will be pushed into this array.
var animalArray = ["ferret", "dog", "cat", "fish", "otter", "tiger"];

//function to display the buttons in the array
function displayButton() {
  $("#animalButtons").empty();
  for (var i = 0; i < animalArray.length; i++) {
    var button = $("<button class='btn mr-2'>").attr("data-animal", animalArray[i]).addClass("animalButton").text(animalArray[i]);
    $("#animalButtons").append(button);
  }
}

// On click event for when "submit" is clicked: add user input to the array(which will then be displayed using)
$("#addAnimal").on("click", function(event) {
  event.preventDefault();
  var animal = $("#animal").val().trim().toLowerCase();
  animalArray.push(animal);
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

      for (var i = 0; i < results.length; i++){
      var GIF = $("<div class='float-left mr-3'>");
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