$(document).ready(function() {

    // 
    var currentDate = $("#currentDay")
    // Getting the current hour
    // moment().format('HH')
    // var currentDate = document.querySelector("#currentDay")
    currentDate.text(moment().format("dddd, MMMM Do YYYY"))
    // currentDate.textContent = moment().format("dddd, MMMM Do YYYY")
    // console.log(currentDate)
    // = 
    // nineHourViewTime = moment().subtract(9, 'hours').toDate()
    var now = moment().toDate()
    var fourHoursBack = moment().subtract(4, 'hours').toDate()
    var fourHoursForward = moment().add(4, 'hours').toDate()
    console.log(fourHoursBack);
    console.log(now);
    console.log(fourHoursForward);

    // set Local Storage
    //Create the content layout for the page - Complete
    //Create the script necessary to dynamically add more rows, via jQuery 3 past, 1 current, 3 future

    function hourCheck(hour){
        var currentHour = moment().format('HH');
        // console.log('Index Hour: ', hour);
        // if (hour == currentHour ){
        //     $( this ).addClass('present')
        // }
        //     console.log('Current hour: red');
        // } else if(hour>currentHour) {
        //     console.log('Future hour: green');
        // } else if(hour<currentHour) {
        //     console.log('Past hours: gray');
        // }

        // console.log('div row index: ', index)
        // hourCheck(index)
        // console.log( index + ": " + $( this ).text() );
        // //compare each hour of day to see which rows are <, =, < current hour
        // (All hours less than current hour=Gray)
        // (hour equal to current hour = red)
        // (All hours greater than current hour=Green)
    }

    for(var i = 0;i<24;i++){
        var currentHour = moment().format('HH')
        // console.log(currentHour)
        // hourCheck(i)
    }

    $( ".time-hr" ).each(function( index ) {
        $( this ).addClass('data-row-id-'+ index);
        if($(this).attr('class') == 'col-1 time-hr data-row-id-3') {
            // $( this ).text(currentHour+"PM");
            $( this ).addClass('present')
        };
      });

    $( ".task" ).each(function( index ) {
        $( this ).text("Task " + index);
        $( this ).addClass('data-row-id-'+ index);
        if($(this).attr('class') == 'col-10 task data-row-id-3') {
            $( this ).addClass('present')}
        })

    // hourArr.forEach(hourCheck())
    // console.log(hourArr)
    // assign colors based off of time (if hour-of-day >past: Gray, if(HOD)==present: red else==future: green, )
    // It does not need to be a dynamic calendar whos rows scroll by as the clock ticks. Simply when the page opens, it needs to:
    //  1) Compare the current time, 
    //  2) Determine color of the row based off of time of day
    //  3) set the values of the middle rows, according to their {hourOfDayTask":Description}

//     function timeSplit() { 
//         var countDown = 4;
//         var countup = 4;
//         for (var i=0; i<4;i++){
//             countDown -= 1;
//             console.log(countDown);
//             countup += 1
//             console.log(countup);
//         }
//     }
// timeSplit();


});