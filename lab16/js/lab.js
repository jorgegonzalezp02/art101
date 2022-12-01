/**
  *Author: Jorge Gonzalez
  *Date: 11/28/2022
**/
var comicObj = "https://xkcd.com/614/info.0.json"
$.ajax({
  url: comicObj,
  type: "GET",
  data: {
    //asondvoan
  },
  dataType: "json",
  success: function(data) {
    console.log(data)
    var title = data.title;
    console.log("Title: ", title);
    var image = data.img;
    var alt = data.alt;
    console.log("Alt: ", alt);
    var html = `<div id="imageblock">
    <h2>${title}</h2>
    <img src="${image}" title="${alt}"><br>`
  },
  failure: function(jgXHR, textStatus, errorThrown) {
    console.log("Error: ", textStatus, errorThrown);
  }
})
