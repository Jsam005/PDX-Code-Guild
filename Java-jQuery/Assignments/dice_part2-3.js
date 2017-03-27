/**
 * Created by Jamie on 3/25/2017.
 */

    /*var images = ['<img src="dice 1.png" width="100px" height="100px"/>', '<img src="dice 2.png" width="100px" height="100px"/>',
    '<img src="dice 3.png" width="100px" height="100px"/>','<img src="dice 4.png" width="100px" height="100px"/>',
    '<img src="dice 5.png" width="100px" height="100px"/>', '<img src="dice 6.png" width="100px" height="100px"/>'];*/

    var images = ['<img src="http://eslade87.is2.byuh.edu/cis101.2125/dice/1.png" width="100px" height="100px"/>',
    '<img src="http://eslade87.is2.byuh.edu/cis101.2125/dice/2.png" width="100px" height="100px"/>',
    '<img src="http://eslade87.is2.byuh.edu/cis101.2125/dice/3.png" width="100px" height="100px"/>',
    '<img src="http://eslade87.is2.byuh.edu/cis101.2125/dice/4.png" width="100px" height="100px"/>',
    '<img src="http://eslade87.is2.byuh.edu/cis101.2125/dice/5.png" width="100px" height="100px"/>',
    '<img src="http://eslade87.is2.byuh.edu/cis101.2125/dice/6.png" width="100px" height="100px"/>'];

    var total = 0;

$(document).ready(function(){

    $('#imageButton').on("click", function(){
    rollTheDice();
    $('#displayTotal').html('Total = ' + total);
    });
});

function rollTheDice(){
    var number = parseInt($('#inputBox').val());

    for(var x = 0; x <= number; x++){
    var random = Math.floor((Math.random() * images.length));
    total += random + 1;
    $('#diceImage').append('<div></div>' + images[random]);
    }

}