/**
  *Author: Jorge Gonzalez, Micah Mahelona
  *Date: 11/28/2022
**/
var comicObj = "https://xkcd.com/614/info.0.json"
$.ajax({
  url: comicObj,
  type: "GET",
  data: {
    //id:
    //api_key:
  },
  dataType: "json",
  success: function(data) {
    console.log(data)
    var title = data.title;
    console.log("Title: ", title);
    var imageURL = data.img;
    var alt = data.alt;
    console.log("Alt: ", alt);
    var html = `<div id="imageblock">
      <h3>${title}</h3>
      <img src="${imageURL}" title="${alt}"></br>
    </div>`
    //console.log("My new html: \n", html);
    $("#output").html(html);
    }
  })
