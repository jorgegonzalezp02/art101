/**
* Author: Jorge Gonzalez, Micah Mahelona
* Created: 10/17/2022
**/

//define variables
const myTransport = ["JorgesRide, MicahsRide"];

//declare object
const JorgesRide = {
  make: "Chevrolet",
  model: "Silverado",
  color: "Red",
  year: "2021",
  age: function() {
    return 2022 - age;
  }
};

const MicahsRide = {
  make: "Toyota",
  model: "Prius Prime",
  color: "Space Gray",
  year: "2020",
  age: function() {
    return 2022 - age;
  }
};

//output
document.writeln("Jorge's Main Ride: <pre>",
JSON.stringify(JorgesRide, null, '\t'), "<pre>");
document.writeln("Micah's Main Ride: <pre>",
JSON.stringify(MicahsRide, null, '\t'), "<pre>");
