//** PIGEON - PLANNER **//
// =========================================================//
// GLOBAL VARIABLES: 

// DISPLAY CURRENT TIME/DATE: 
var displayDateEl = document.querySelector("#currentDay");
displayDateEl.textContent = moment().format("ddd MMMM Mo YYYY");

// FIND CURRENT TIME/DATE: 
var timeNow = moment();
var currentHour = timeNow.hour();
//console.log(currentHour);

// CHECK TIME, SPLIT ID TO SHOW HOUR ONLY
var checkHour = function() {
    $(".time-block").each(function() {
// console.log(this);
var id = $(this).attr("id");
var splitId = id.split("hour"); 
// console.log(splitId[1])
var elementHour = parseInt(splitId[1]);
    //console.log(id, splitId, elementHour)
    if (elementHour < currentHour) {
        $(this).addClass("past")
    } 
    else if (elementHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present")
    }
    else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    }
    });
};

// =========================================================//
// FUNCTIONS: //

$(".saveBtn").on("click", function() {
    var activity = $(this).siblings(".description").val()
    //console.log(activity)
    var hour = $(this).parent().attr("id").split("hour")[1]; 
    //console.log(hour)
    localStorage.setItem(hour, activity)
});

checkHour();

$("#hour9 .description").val(localStorage.getItem(9));

// =========================================================//