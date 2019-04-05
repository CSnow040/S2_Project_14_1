"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Caleb Snow
   Date:   4/2/19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

window.addEventListener("load", setStyles);

//this function is usde to make all of the attributes and elements to apply all of the styles to the document
function setStyles() {
      var styleNum = randInt(5);
      var fancySheet = document.createElement("link");
      fancySheet.setAttribute("rel", "stylesheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");

      document.head.appendChild(fancySheet);
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);
      //loops through the 5 images and their stylesheets
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");
            sheetImg.addEventListener("click", function (e) {
                  document.getElementById("fancySheet").setAttribute("href", e.target.alt);
            })

            figBox.appendChild(sheetImg);
      }
      var styleThumbs = document.createElement("style");
      document.head.appendChild(styleThumbs);
      //this adds css styles into the index making the pictures go to the bottom
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
            position: absolute; \
            left: 0px; \
            bottom: 0px; \
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
            outline: 1px solid black \
            cursor: pointer; \
            opacity: 0.75; \
            }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0; \
            }", 2);
}

function randInt(size) {
      return Math.floor(size * Math.random());
}