/**
 * Created by Jamie on 3/17/2017.
 */

    function add(inputAdd, inputAdd2) {
        parseInt(inputAdd) + parseInt(inputAdd2);
}
    function subtract(inputSub, inputSub2){
        parseInt(inputSub) - parseInt(inputSub2);
}
    function multiply(inputMult, inputMult2) {
        parseInt(inputMult) * parseInt(inputMult2);
}
    function divide(inputDiv, inputDiv2){
        parseInt(inputDiv) / parseInt(inputDiv2);
}
$(document).ready(function(){

    $('#addButton').on('click', function(){
        var addOne = $('#results').html('#inputOne').val();
        var addTwo = $('#results').html('#inputTwo').val();
        add(addOne),(addTwo);
    });

    $('#subtractButton').on('click', function() {
        var subOne = $('#inputOne').val();
        var subTwo = $('#inputTwo').val();
        subtract(subOne, subTwo);
    });

    $('#multiplyButton').on('click', function () {
        var multOne = $('#inputOne').val();
        var multTwo = $('#inputTwo').val();
        multiply(multOne, multTwo);
    });

    $('#divideButton').on('click', function () {
        var divOne = $('#inputOne').val();
        var divTwo = $('#inputTwo').val();
        divide(divOne, divTwo);
    });

});
