/**
 * Created by Jamie on 3/13/2017.
 */

    function add(inputAdd, inputAdd2) {
        console.log(parseInt(inputAdd) + parseInt(inputAdd2));
}
    function subtract(inputSub, inputSub2){
        console.log(parseInt(inputSub) - parseInt(inputSub2));
}
    function multiply(inputMult, inputMult2) {
        console.log(parseInt(inputMult) * parseInt(inputMult2));
}
    function divide(inputDiv, inputDiv2){
        console.log(parseInt(inputDiv) / parseInt(inputDiv2));
}
$(document).ready(function(){

    $('#addButton').on('click', function(){
        var addOne = $('#inputOne').val();
        var addTwo = $('#inputTwo').val();
        add(addOne, addTwo);
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

