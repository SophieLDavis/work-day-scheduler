// Show the current date at the top
$('#currentDay').text(moment().format('dddd DD MMMM Y HH:mm'));

//add icon 
//$('.saveBtn').append('<i class="fa fa-lock"></i>');

// Colour code each block based on the current time
// Create variables to target each time block
//Create variable for moment().format('H') (0 - 23) e.g. thisHour
var thisHour= moment().hours();
var timeblocks = $('.timeblock');
//var hour = $(this).attr('data-hour');
timeblocks.each(function() {
//selects 'data-hour' as whatever is set to hour

//`hour` and `thisHour` should be an integer:
//console.log("hour", hour)
// hour = parseInt(hour, 10)
// console.log("hour", hour)
thisHour = parseInt(thisHour, 10)
console.log("thisHour", thisHour)

var description= $('.description')

description.each(function() {
    var hour = $(this).parent().attr('data-hour');
    console.log(hour)
    if (hour < thisHour) {
        $(this).addClass('past')
        console.log('past')
         } else if (hour === thisHour) {
        console.log('present')
        $(this).removeClass('past').addClass('present')
        } else {
        console.log('future')
        $(this).removeClass('past').removeClass('present').addClass('future')
        }
         })
        
})

// 3. Save input to local storage

//create variable (an array) called inputs that will store all of the input data

var inputs=[];
//Add event listener to all save button
$('.saveBtn').on('click', function(event){
event.preventDefault;
console.log($('textarea').val()) // only 9am works 
//Push the input value to inputs array with the format of { time: xx, input: xxx }
//inputs.push({time: xx, input: xx})
var inputVal= $('textarea').val()
inputs.push({"time:" :  hour, "input:" : inputVal})  

//Show feedback message to the user (optional)
//The feedback need to be dissappeared automatically
$('.jumbotron').append('<p class="alert">Your information has been saved.</p>')
//$('.alert').text('')

//Save inputs variable to local storage + stringify the inputs array
(localStorage.setItem('inputs', JSON.stringify(inputs)))
})


//Get the hour value  $('.data-hour')

//Push to the inputs array if the hour entry not exist yet in the array
//Replace the existing entry if the hour entry exist in the array
//look up check object in array check if hour = this .datahour

//if (hour doesnt exist in inputs array){
// inputs.push(input and hour)
//} else if (hour does exist){
//inputs.replace(input and hour)
//}

// if (hour!== inputs) {
//     inputs.push({"time:" :  thisHour, "input:" : inputVal})
// } else if (hour== inputs) {
// replaceWith()
// }

//Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];

// 4. Load input from local storage when page load/refresh if there's any data in local storage

var savedInputs= localStorage.getItem('inputs')
var parsedInputs= JSON.parse(savedInputs)


//check if savedInput/parsedInputs exist, if it does then.. how to check if it exists? if .length =<1

// populate the inputs with the value from parsedInputs

// inputs.forEach(function(input) {

//  $('.timeblock [data-hour=" ' + inputs.time + '"] textarea').val(inputs.input)
// // // data-hour= 'input.time'
// // // $('textarea').val(parsedInputs)
// })
// if theres no data in local storage, do nothing 