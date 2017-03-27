/**
 * Created by Jamie on 3/20/2017.
 */

var colors = ["#6495ED", "#DC143C", "#FF8C00", "#006400", "#9400D3", "#FFD700"];

$(document).ready(function(){
    $('#button').on("click", function(){

        var numOfBoxes = parseInt($('#inputNumber').val());

        for(var x = 0; x < numOfBoxes; x++){
            var randColors = Math.floor(Math.random() * colors.length-1);
            $('.container').append('<div class="square"></div>');
            $('.square').css('background-color', colors[randColors]);
    }
    });
});
