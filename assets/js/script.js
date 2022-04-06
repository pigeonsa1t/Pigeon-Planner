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

// ON CLICK, SAVE BUTTON WILL STORE THE TASK AND HOUR IT SHOULD BE COMPLETED IN LOCAL STORAGE
$(".saveBtn").on("click", function() {
    var activity = $(this).siblings(".description").val()
    //console.log(activity)
    var hour = $(this).parent().attr("id").split("hour")[1]; 
    //console.log(hour)
    localStorage.setItem(hour, activity)
});

// CHECK FOR TIME: 
checkHour();

// INSTEAD OF UPDATING VARIABLES ACCROSS THE PROJECT, AND AFTER WORKING W TUTOR...
// I WILL JUST WRITE A SHORT FUNCTION HERE FOR EACH HOUR: 

// LOCAL STORAGE FOR EACH ROW:
$("#hour8 .description").val(localStorage.getItem(8));
$("#hour9 .description").val(localStorage.getItem(9));
$("#hour10 .description").val(localStorage.getItem(10));
$("#hour11 .description").val(localStorage.getItem(11));
$("#hour12 .description").val(localStorage.getItem(12));
$("#hour13 .description").val(localStorage.getItem(13));
$("#hour14 .description").val(localStorage.getItem(14));
$("#hour15 .description").val(localStorage.getItem(15));
$("#hour16 .description").val(localStorage.getItem(16));
$("#hour17 .description").val(localStorage.getItem(17));

// =========================================================//