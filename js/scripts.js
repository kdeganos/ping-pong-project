//business logic

var pingPong = function (count) {
  var resultArray = [];

  for (var index = 1; index <= count; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      resultArray.push("pingpong");
    }
    else if (index % 3 === 0) {
      resultArray.push("ping");
    }
    else if (index % 5 === 0 ) {
      resultArray.push("pong");
    }
    else {
        resultArray.push(index);
    }
  }
  return resultArray;
}

function showResult(value) {
  $(".ppList").append("<li>" + value + "</li>");
}

//user interface logic
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    $(".ppList").empty();
    var count = parseInt($("#number").val());
    var resultArray = pingPong(count);
    resultArray.forEach(showResult);
  });
});
