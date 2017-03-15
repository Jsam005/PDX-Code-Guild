/**
 * Created by Jamie on 3/14/2017.
 */

$(document).ready(function(){
    /*
     when roundBButton is clicked
        change background color of square to grey
        change into a circle
        change paragraph text to say "I'm a circle"
      */

    /*
    SYNTAX FOR ANIMATE FUNCTION
        .animate({
        }[,speed][,easing][,complete]);

        speed -> indicates the duration in milliseconds, can also take keywords "slow" and "fast"
        easing -> 2 possible values: swing - (default) moves slower beginning/end, faster in the middle
                                     linear - moves in a constant speed
        complete -> a function() to call once the animation is complete

     */

    /*
    $('#roundButton').on('click', function(){
        $('#square').css({
            backgroundColor: 'grey',
            borderRadius: '50%'
        });

        $('insideText').html("I'm a circle")
    });*/

    /*
    $('#roundButton').on('click', function(){
        $('#square').animate({
            borderRadius: '50%'
        },500, function(){
            $(this).css('background-color', 'red');
        });
    });*/

    $('#roundButton').on('click', function(){
    changeBackgroundColor('gold', 'square');
    });
});

function changeBackgroundColor(color, id){
    $('#' + id).css('background-color', color);

}
