$(document).ready(function(){
  // liste deroulante
  $("#send").on("click",function(e){
    e.preventDefault();
    var selectedValue=$("#episodes").val();
    console.log("Vous avez sélectionné l'épisode numéro: " + selectedValue);
    getEpisodeData(selectedValue);
  });



});
  //apel aux donnees
function getEpisodeData(selectedValue){
  var films     = "http://swapi.co/api/films/";
  var episode   = films + selectedValue;

  $.getJSON(episode).then(function(response){
    $("#title").html(response.title);
    $("#noPlanetes").html(response.planets.length);
    $("#noVaisseaux").html(response.starships.length);
    $("#description").html(response.opening_crawl);
    console.log(response);
  });

}
