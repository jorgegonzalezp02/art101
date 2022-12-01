/**
* Author: Jorge Gonzalez, Micah Mahelona
* Created: 10/19/2022
**/

function NameSorter() {
  var userName = window.prompt("Hello! Can you tell me your name so I can organize it?");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeln("What's up? I just finished organizing your name: ",
  NameSorter(), "<br>");
