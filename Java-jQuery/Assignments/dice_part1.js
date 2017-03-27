/**
 * Created by Jamie on 3/23/2017.
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

$(document).ready(function(){

    $('#imageButton').on("click", function(){
    randomImage();
    });
});

function randomImage(){
   var random = images[Math.floor((Math.random() * 6))];
   $('#diceImage').html('<div></div>' + random);
}
