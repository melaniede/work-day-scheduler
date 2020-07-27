$( document ).ready(function() {

    const currentTime = moment();
    console.log(currentTime);

    // Display current date at top of the calendar
    $("#currentDay").text(currentTime.format("dddd, LL"));

    // Get time starting at 9am to display business hours
    let hour = moment(currentTime).hour(9); 
    console.log(hour);

    function createSchedule (){

        for (let i = 0; i < 9; i++) {
            // Bootstrap row
            const row = $("<div>").addClass("row"); 
            
            //Add row container
            $(".container").append(row);

            // Display hour block
            row.append($("<div>").addClass("col-2 bg-primary").text(hour.format("h A")));
            
            // Display input block
            row.append($("<textarea>").addClass("col-8 bg-secondary"));
            
            // Display save button 
            row.append($("<button>").addClass("col-2 btn bg-info far fa-save"));

            // Add an hour to hour block
            hour.add(1, "hour");


            

        }
    }
    createSchedule();

});