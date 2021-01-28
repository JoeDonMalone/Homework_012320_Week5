$(document).ready(function() {

    // 
    var currentDate = $("#currentDay")
    // Getting the current hour
    // moment().format('HH')
    currentDate.text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().format('HH');
    
    // nineHourViewTime = moment().subtract(9, 'hours').toDate()
    var now = moment().toDate()
    console.log(now)
    // var fourHoursBack = moment().subtract(4, 'hours').toDate()
    // var fourHoursForward = moment().add(4, 'hours').toDate()
//  value to compare remove string from time object
    var am_pm = moment().format('a');
    var currentHour = moment().format('HH');

    // set Local Storage
    //Create the content layout for the page 
    //Create the script necessary to dynamically add more rows, via jQuery 3 past, 1 current, 3 future

    var taskList = JSON.parse(localStorage.getItem('taskList'));        
    if (!taskList) {
        var taskList = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
        localStorage.setItem('taskList', JSON.stringify(taskList));
    } 

    $( ".hour" ).each(function( index ) {
        $(this).attr("id","hour-"+(index+9));
        $( this ).addClass('data-row-id-'+ index)
    });


    $( ".task" ).each(function( index ) {
        $(this).text(taskList[index])
        $(this).attr("id","hour-id-"+(index+9));
        $( this ).addClass('data-row-id-'+ index);
        if($( this ).attr('id')==('hour-id-'+currentHour)){
            $( this ).addClass('present')
        } else if((index+9)>currentHour){
            $( this ).addClass('future')
        } else {
            $( this ).addClass('past')
        } 
    })
    
    $('.task').click(function() {
        var triggerText = [];
        $( this ).keypress(function() {
            triggerText.push($( this ).text());
        });
        triggerText.join(" ");
        console.log()
    })


    $( ".saveBtn" ).each(function( index ) {
        $(this).attr("id","hour-id-"+(index+9));
        $(this).addClass('data-row-id-'+ index)
    });


    $('.saveBtn').click(function() {
        var localTask = JSON.parse(localStorage.getItem('taskList'));
        var rowID = $(this).prev().attr('id').split('-');
        var hour = rowID[2];
        var userInput = $(this).prev().text();
        localTask[(hour-9)] = userInput;
        localStorage.setItem('taskList', JSON.stringify(localTask));
        finalData = JSON.parse(localStorage.getItem('taskList'));
    });


});