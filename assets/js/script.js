//** PIGEON - PLANNER **//
// =========================================================//
// IMPORTS: //
        // git@github.com:pigeonsa1t/Pigeon-Planner.git
        // https://momentjs.com/

// import React from "./react";

// import Calendar from "./calendar";
 
// =========================================================//
// GLOBAL VARIABLES: //

// *** PREVIOUS: *** //


// =========================================================//
// *** FUTURE: *** //


// =========================================================//
// *** CURRENT: *** //

// DISPLAY CURRENT TIME/DATE: //
var displayDateEl = document.querySelector("#display-date");
displayDateEl.textContent = moment().format("ddd MMMM Mo YYYY");

// current time:
var timeNow = moment();
var currentHour = timeNow.hour();
console.log(currentHour);

// check the time variable / split id string
var checkHour = function() {
    $(".row").each(function() {
        
    var id = $(this).attr("id");
    var splitId = id.split("-");
    var elementHour = parseInt(splitId[1]);

        if (elementHour < currentHour) {
            console.log("previous hour");
        } 
        else if (elementHour === currentHour) {
            console.log("current hour");
        } 
        else (elementHour > currentHour) {
            console.log("next hour");
        }
    });
};

// =========================================================//
// FUNCTIONS: //
    // *these will go in the order that they flow down the page.
  
// =========================================================//
// LOCAL STORAGE: //

// =========================================================//