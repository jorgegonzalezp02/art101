/*
  *Author: Jorge Gonzalez
  *Date: 10/31/2022
*/

/* Asssigns the output to a variable */
var outputEl = document.getElementById("output");

/*Assigns a paragraph to a variable */
var new1El = document.createElement("p");
var new2El = document.createElement("p");

/*Writes a sentence in the paragraph in the variable*/
new1El.innerHTML = "This is a sentence";
new2El.innerHTML = "This is another sentence";

/* Appends elements to the output */
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

/* Changes font and size */
new1El.style.fontFamily = "Helvetica";
new2El.style.fontSize = "40px";
