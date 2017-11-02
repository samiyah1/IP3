
// $("button").click(function(){
// $(".rules-hiden").toggle();
//   });
// });
function myName(input) {
var myName = $("#username").val()
if (myName = "") {
  alert("Helloooo "+ username + "Let's play together!");
}else{
  alert("kindly add a username");
 }
}
//pingpong//
function countUp(input) {
    var total = [];
    for (var first = 1; first <= input; first++) {
        //test
        //console.log(first)
        if (first % 3 === 0) {
            total.push("PING");
        } else if (first % 5 === 0) {
            total.push("PONG");
        } else if (first % 15 === 0) {
            total.push("PINGPONG");
        } else {
            total.push(first);
        }
    };
    return total;
};
//A function to clear the input field after successful submission of a number.
function clearForm(form) {
    $(':input').not(':button, :submit').val('');
};

// Front End Logic
$(document).ready(function () {
    $("form#piform").submit(function (event) {
        event.preventDefault();
        //Clear previously displayed output
        $("ul").empty();
        //Store the user input into a variable
        var inputtedNumber = parseInt($("#ping").val());
        //Call the function countUp to work on the new variable inputtedNumber inside a new variable
        var countedNumbers = countUp(inputtedNumber);
        //Print out the processed numbers in list form.
        for (var first = 0; first <= countedNumbers.length - 1; first++) {
            $("ul#pi").append("<li>" + countedNumbers[first] + "</li>");
        };
        //Clear the previously filled input by calling the function clearForm to empty out the input field
        clearForm("input");
    });
});
