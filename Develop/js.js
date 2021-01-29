$(document).ready(function() {


    var currentDate = $("#currentDay")

    currentDate.text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().format('HH');

    // set Local Storage
    //Create the content layout for the page

    var taskList = JSON.parse(localStorage.getItem('taskList'));        
    if (!taskList) {
        var taskList = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
        localStorage.setItem('taskList', JSON.stringify(taskList));
    } 
    // Add class and id information for page elements using the index for future expansion
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