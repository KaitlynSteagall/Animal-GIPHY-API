// array of animals that load on page startup. User input will be pushed into this array.
var animalArray = ["Ferret", "Dog", "Cat", "Fish", "Otter", "Tiger"];

//function to display the buttons in the array
function displayButton() {
  $("#animalButtons").empty();
  for (var i = 0; i < animalArray.length; i++) {
    var button = $("<button>").attr("data-name", animalArray[i]).addClass("animalButton").text(animalArray[i]);
    $("#animalButtons").append(button);
  }
}

// On click event for when "submit" is clicked: add user input to the array(which will then be displayed using)
$("#addAnimal").on("click", function(event) {
  event.preventDefault();
  var animal = $("#animal").val().trim();
  animalArray.push(animal);
  displayButton();
});

// function displayAnimalGIF() {

//   var animal = $(this).attr("data-animal");
//   var queryURL = "https://api.giphy.com/v1/gifs/trending?q=" + animal + "api_key=nM33hY6owuDXKqa1jMH0g8lR05UiqbVL&limit=10";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//       $("#animalGIF").text(response);
//     });
// };


// $(document).on("click", ".animalButton", displayAnimalGIF);

displayButton();