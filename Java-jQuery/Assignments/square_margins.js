/**
 * Created by Jamie on 3/22/2017.
 */

$(document).ready(function(){
    var left = false;

    /*$('#square').on("click", function(){

        if(left === false){
            $('#square').css('margin-left', '300px');
            left = true;
        }else{
            $('#square').css('margin-left', '0px');
            left = false;
        }

    });*/


        $('#buttonOne').on("click", function(){
        var margin = Math.floor((Math.random() * 750) + 1);

        if(left === false){
            $('#square').animate({left: margin}, 1500, function(){
            $('#marginPixels').html(margin + 'px');
            console.log("click", function(){
            left = true;
            });
        });

        }else{
            $('#square').animate({left: margin}, 1500, function(){
            $('#marginPixels').html(margin + 'px');
            console.log("click", function(){
            left = false;
            });
        });
    }

    });
});
