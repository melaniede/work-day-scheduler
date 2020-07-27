$( document ).ready(function() {

    const currentTime = moment();
    console.log(currentTime);
    
    let row = $(".row");

    function createSchedule (){

        
        for (let i = 0; i < 11; i++) {
            $(".container").append($("#rows").clone().removeAttr('id'));
            console.log(i);

            

        }
    }
    createSchedule();
   // $( window ).on("load", createSchedule());

});
