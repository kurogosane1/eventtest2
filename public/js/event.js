/* global moment */
$(document).ready(function(){

// $("#when_at").datepicker({ dateFormat: 'mm/dd/yyyy', minDate:0})
// When user clicks add-btn
$("#event-submit").on("click", function(event) {
  event.preventDefault();
  
  $("#myModal").modal("toggle");
  
  
  
  
  // var test = moment($('#when_at').val(),"MM-DD-YYYY").toString();
  // console.log(test);

  // Make a event object
  var newEvent = {
    event_Name: $('#event-name').val().trim(),
    creator: $("#author").val().trim(),
    description: $("#description").val(),
    when_at: $('#when_at').val(),
    street_number: $("#street_at").val().trim(),
    street: $("#streetName_at").val().trim(),
    city: $("#city_at").val().trim(),
    state: $("#state_at").val().trim(),
    attendee: parseInt($("#who-attends").val()),
    time: $("#time_at").val()
  };

  console.log(newEvent);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new/events", newEvent)
    // On success, run the following code
    .done(function() {
      
      
      var row = $("<div>");
      row.addClass("events-created");

      row.append("<p>" + newEvent.event_Name + "</p>");
      row.append("<p>" + newEvent.description + "</p>");
      var timeAt = '01-01-2015 ' + newEvent.time;
      var whenAt = newEvent.when_at;
      console.log(whenAt);
      row.append("<p>On " + moment(whenAt).format("LL")+ " "+ "at " + moment(timeAt).format('h A') + "</p>");

      $("#events-post").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#description").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  // .done(function(data) {
  //   alert( "$.get succeeded" );
  // })
  // .fail(function(data) {
  //   alert( "$.get failed!" );
  // });
console.log(data);

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("events-created");

      row.append("<p>" + data[i].event_Name + "</p>");
      row.append("<p>" + data[i].description+ "</p>");
      var testDate = '01-01-2015 ' + data[i].time;
      //var testDate = new Date(a);
      row.append("<p> On " + moment(data[i].when_at).format("LL")+ " "+ "at " + moment(testDate).format('h A') + "</p>");

      $("#events-post").prepend(row);

    }

  }

});
});
