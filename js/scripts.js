$(document).ready(function(){
$("button").click(function(){
// $(".rules-hiden").toggle();
  });
});

    var username = $("#username").val();
    if (username!="") {
      alert("Helloooo "+ username + ", Let's play together!");
    }else{
      alert("kindly add a username");
    }


var ping = $("#ping").val();
var y = ping / 3;
document.getElementById("ping").innerHTML = y;
//
// if (ping = *3) {
//   alert("wow you got it correct\ncame and get your reward");
// }else {
//   alert("oops!try it again");
// }

function myMultiple3() {
  var ping = $("#ping").val();
  console.log(ping);
}

function myMultiple5() {
  var pong = $("#pong").val();
  console.log(pong);
}
function myMultiple15() {
  var pingpong = $("#pingpong").val();
  console.log(pingpong);
}
