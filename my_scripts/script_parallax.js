$(document).ready(function(){
// All 'a' HTML tag with href=#, with 'on' method with 'click' event
    //.on is a listener
$("a[href*='#']").on('click', function (event) {
//preventDefault serves for cancel event created by fuction by event click
         event.preventDefault();
         //I create one variable for easy understand
         //get_id is a variable with attribute href
         var get_id=$(this).attr('href');
         //animate all html and body
         $("html, body").animate({
             //offset retorna a posição do href em relação ao documento
         scrollTop: $(get_id).offset().top
         }, 1000, 'linear');
     });
});