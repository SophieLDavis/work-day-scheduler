//2. Each timeblock need to have the time, textarea, and save button -->
//$('.container').append()
//equivalent to event.target.getAttribute("data-hour")
//console.log($( "div" ).data("hour").attr());
//console.log(jQuery.data(document.body, 'hour'))
var time = parseInt($('.data-hour'))
var amPm = moment().format('A');
timeAmPm= time + amPm
$('.timeblock').append('<div class="hour"></div>').text(timeAmPm);// error 


// div2 user text input area/ form input - event listener 
$('.timeblock').append('<textarea ></textarea>').on('submit', function(event){
    //style text area to be longer?
    //preventDefault;
});

//$('.timeblock')
//div 3 save button
$('.timeblock').append('<button class="saveBtn"></button>');
//add icon ? <i class="fa-solid fa-floppy-disk"></i>


// Show the current date at the top
$('#currentDay').text(moment().format('HH MMMM Y HH:mm'));

// Colour code each block based on the current time
// Create variables to target each time block

//Create variable for moment().format('H') (0 - 23) e.g. thisHour
var thisHour= moment().format('H');
var timeblocks = $('.timeblock');
//what does .each do?   iterates over the element and returns it when this is used. 

timeblocks.each(function() {
//selects 'data-hour' as whatever is set to hour
var hour = $(this).attr('data-hour');
//`hour` and `thisHour` should be an integer:
hour = parseInt(hour, 10)
thisHour = parseInt(thisHour, 10)

//set colours for time
var past= $('.past')
var present=$('.present')
var future= $('.future')

if (hour < thisHour) {
$(this).css('background-color', past)
} else if (hour == thisHour) {
$(this).css('background-color', present)
} else {
$(this).css('background-color', future)
}
})


// 3. Save input to local storage
//      create variable (an array) called inputs that will store all of the input data
//      Add event listener to all save button
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically
//
//      Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];
// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is
//          var parsedLocalStorageInput = parse localStorageInput
//          populate the inputs with the value from parsedLocalStorageInput
//          inputs.forEach(function(input) {
//              input => {
//                time: 9,
//                input: 'Meeting',
//              }
//              $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input)
//          })
//      if theres no data in local storage, do nothing

// Extra, add hover effect on the save button

