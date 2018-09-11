count = 30;

var win = Math.floor(Math.random() * count) + 1;

console.log(win);

function numbers() {
  for(var i = 1; i <= count; i++) {
    $(".numbers").append("<div class='number'><a href='#' class='number"+i+"' onclick='choice(" + i + ")'>" + i + "</a></div>");
    if(i == count / 2) {
      $(".numbers").append("<br />");
    }
  }
}

function choice(i) {
  if(i == win) {
    $(".number" + i).css("color","#0f1");
    if(win == 13) {
      $(".result").append("<p>RIGHT! my number is the lucky " + win + "!</p>");
    } else {
      $(".result").append("<p>RIGHT! my number is " + win + "!</p>");
    }
    $(".result").append("<button onClick='restart()'>play again</button>");
  } else {
    $(".number" + i).css("color","#ff0000");
    if(i < win) {
      for (var j = 1; j <= i; j++) {
        $(".number" + j).css("color","#ff0000");
      }
      $(".result").append("<p>my number is higher than " + i + "!</p>");
    } else if (i > win) {
      for (var k = count; k >= i; k--) {
        $(".number" + k).css("color","#ff0000");
      }
      $(".result").append("<p>my number is lower than " + i + "!</p>");
    }
  }
}

function restart() {
  location.reload();
}