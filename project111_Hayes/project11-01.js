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
      console.log(dateStr);
      //3b fetch url
      fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+dateStr)
      //3c add then method to get to parse json string
      .then(response=>response.json())
      //3d run showPicture method with json object
      .then(json=>showPicture(json))
      //add catch method to display promise
      .catch(error=>console.log(error));
}

//4 create function to show picture
function showPicture(json) {
      //4a see if json type is video
      if (json.media_type==="video") {
            //change html of image box
            imageBox.innerHTML="<iframe src ='"+json.url+"'></iframe><h1>"+json.title+"</h1><p>"+json.explanation+"</p>";
      }
      //see if type is image
      else if(json.media_type==="image"){
            //change html
            imageBox.innerHTML="<img src ='"+json.url+"'/><h1>"+json.title+"</h1><p>"+json.explanation+"</p>";
      }
      else {
            //show image is not available
            imageBox.innerHTML="Image not Available";
      }
}





