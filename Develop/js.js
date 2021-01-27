$(document).ready(function() {

    // 
    var currentDate = $("#currentDay")
    // Getting the current hour
    // moment().format('HH')
    currentDate.text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().format('HH');
    
    // nineHourViewTime = moment().subtract(9, 'hours').toDate()
    var now = moment().toDate()
    var fourHoursBack = moment().subtract(4, 'hours').toDate()
    var fourHoursForward = moment().add(4, 'hours').toDate()
//  value to compare remove string from time object
    var am_pm = moment().format('a');
    var currentHour = moment().format('HH');
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

    for(var i = currentHour;i<9;i++){
        hourCheck(i)
    }

    $( ".hour" ).each(function( index ) {
        $(this).attr("id","hour-"+(index+9));
        $( this ).addClass('data-row-id-'+ index)
        console.log($( this ).attr('id'));
    });
    var fakeHour = 22;
    $( ".task" ).each(function( index ) {
        $(this).attr("id","hour-id-"+(index+9));
        $( this ).text("Task " + index);
        $( this ).addClass('data-row-id-'+ index);
        if($( this ).attr('id')==('hour-id-'+currentHour)){
            $( this ).addClass('present')
        } else if((index+9)>currentHour){
            $( this ).addClass('future')
        } else {
            $( this ).addClass('past')
        }
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