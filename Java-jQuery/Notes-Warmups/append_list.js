/**
 * Created by Jamie on 3/21/2017.
 */

$(document).ready(function(){
    $('#inputButton').on("click", function(){
        $('#emptyList').append("<li>" + $("#inputText").val() + "</li>");
    });
});
