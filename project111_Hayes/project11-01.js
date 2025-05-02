"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
         Author: Andrew Hayes
      Date:   5/1/25

      Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
      //3a set dateStr to value of datebox
      let dateStr=dateBox.value;
      //3b fetch url
      fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date"=dateStr)
      .then(response.json)

}



