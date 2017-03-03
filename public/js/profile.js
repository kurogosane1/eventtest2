/* global moment */
// $(document).ready(function(){

// $("#when_at").datepicker({ dateFormat: 'mm/dd/yyyy', minDate:0})
// When user clicks add-btn
$("#user-submit").on("click", function(event) {
  event.preventDefault();
  
//   $("#myModal").modal("toggle");
  
  
  
  
  // var test = moment($('#when_at').val(),"MM-DD-YYYY").toString();
  // console.log(test);

  // Make a event object
  var newUser = {
    userName: $('#user_name').val().trim(),
    First_name: $("#first_name").val().trim(),
    Last_name: $("#last_name").val().trim(),
    Skills: $('#skill_sets').val(),
    Language: $("#languages").val(),
    Experience: $("#experience").val(),
    Bio: $("#Bio").val()
  };

  console.log(newUser);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new/users", newUser)
    // On success, run the following code
    .done(function() {
      
      
      var row = $("<div>");
      row.addClass("events-created");

      row.append("<p>" + newUser.userName + "</p>");
      row.append("<p>" + newUser.Experience + "</p>");
      row.append("<p>At " + (newUser.Bio) + "</p>");

      $("#user-info").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#description").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/users", function(data) {

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
      row.addClass("user-created");

      row.append("<p>" + data[i].userName + "</p>");
      row.append("<p>" + data[i].Experience+ "</p>");
    //   var testDate = '01-01-2015 ' + data[i].time;
    //   //var testDate = new Date(a);
    //   row.append("<p> On " + moment(data[i].when_at).format("LL")+ " "+ "at " + moment(testDate).format('h A') + "</p>");

      $("#user-info").prepend(row);

    }

  }

});
