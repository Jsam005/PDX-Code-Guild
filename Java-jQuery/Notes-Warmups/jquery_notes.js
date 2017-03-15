/**
 * Created by Jamie on 3/13/2017.
 */

/*
if(jQuery) {
    alert("jquery is loaded");
} else{
    alert("Not loaded");
} */

function changeColor(){
    var javaColor = document.getElementById("boxOne").style.backgroundColor = 'red';
    var javaWidth = document.getElementById("boxOne").style.width = '300px';
    console.log(javaColor);
    console.log(javaWidth);
}

$('#buttonTwo').on('click', function(){
    var jQuery = $('#boxOne').css({backgroundColor: 'red', width: '300px'});
    console.log(jQuery);
});


$('#buttonThree').on('click', function(){
    var header = $('#headerOne').html(innerHTML = 'changedHeader');
    console.log(header);
});

/* input box
$(document).ready(function(){
    $('#inputButton').on('click', function(){
      var inputText = $('#inputOne').val();
      console.log(inputText);
    });
}); */

/* conditionals */
/* || = or && = and */

var backgroundColor = "blue";

if(backgroundColor === "red" || backgroundColor === "pink"){
    console.log("Color is red");
}else if(backgroundColor === "blue") {
    console.log("That's what I expected");
}else{
    console.log("Shouldn't see this");
}

/*
$(document).ready(function(){
   $('#inputButton').on('click', function() {
       var inputText = $('#inputBox').val();
       console.log(inputText);

       var age = parseInt(inputText);

       if (age > 30) {
           console.log("You can come in");
       } else if (age < 30 && age >= 21) {
           console.log("You barely made it");
       } else {
           console.log("You can't come in");
       }
   });
});
*/

function checkAge(age){
    $(document).ready(function(){
   $('#inputButton').on('click', function(){
       var inputText = $('#inputBox').val();
       console.log(inputText);

       var inputAge = parseInt(inputText);

       console.log(checkAge(inputAge));
       if(inputAge > 30){
           return "You can come in";
       } else if(inputAge < 30 && age >= 21){
           return "You barely made it";
       } else{
           return "You can't come in";
       }
   });
});
}