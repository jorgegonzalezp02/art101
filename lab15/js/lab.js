/**
  *Author: Jorge Gonzalez and Micah Mahelona
  *Date Created: 11/21/2022
**/

var endpoint = "https://api.chucknorris.io/jokes/random";

function getAPIData() {
  $.ajax({
      url: endpoint,
      //data: {
      //id: 123,
      type: "GET",
      dataType: "json",
    })

  .done(function(data) {
    console.log("Success:", JSON.stringify(data));
    $("#output").text(JSON.stringify(data));
  })

  .fail(function(request, error) {
    console.log(request, error);
  });
}

$("#activate").click(getAPIData);
