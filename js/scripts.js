//business logic

var pingPong = function (count) {
  var resultArray = [];

  for (var index = 1, index <= count, index++) {
    if () {

    }
    elseif () {

    }
    elseif () {

    }
    else () {
      
    }
  }

}


//user interface logic
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var count = parseInt($("#number").val());
    var resultArray = pingPong(count);

    $("#result").text(resultArray);
  });
});
