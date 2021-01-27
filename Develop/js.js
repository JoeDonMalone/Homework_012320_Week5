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
    //Create the content layout for the page - Complete
    //Create the script necessary to dynamically add more rows, via jQuery 3 past, 1 current, 3 future

    var taskData = {
       task_id:'',
        hour: '', 
        task: ''
    }
    

    $( ".hour" ).each(function( index ) {
        $(this).attr("id","hour-id-"+(index+9));
        $( this ).addClass('data-row-id-'+ index)
    });


    $( ".task" ).each(function( index ) {
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
    var triggerText = 0
    $('.task').click(function() {
        $( this ).keypress(function() {
            triggerText++;
            console.log($(this).val());
        });
        
        console.log($(this).text())
    })

    $( ".saveBtn" ).each(function( index ) {
        $(this).attr("id","hour-id-"+(index+9));
        $( this ).addClass('data-row-id-'+ index)
    });

    $('.saveBtn').click(function() {
     console.log($( this ).attr('id'));
     localStorage.setItem('Task Data', JSON.stringify(taskData))
    });

    


});