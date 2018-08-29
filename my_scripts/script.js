$(document).ready(function(){
// All 'a' HTML tag with href=#, with 'on' method with 'click' event
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

/*var navigation_div = document.getElementById("navigation_buttons_panel");
var nav_buttons = navigation_div.getElementsByClassName("btn_script");
for( var initial_var = 0; initial_var < nav_buttons.length; initial_var++){
    nav_buttons[initial_var].addEventListener("click", 
    function(){
        var actual_state = document.getElementsByClassName("first_btn_script");
            actual_state[0].className = actual_state[0].className.replace("first_btn_script",  "");
            this.className += "first_btn_script";
    });
}*/
function selected(n){
var nav_buttons = document.getElementsByClassName("first_btn_script");
for(var i=0; i < nav_buttons.length; i++){
    nav_buttons[i].className = nav_buttons[i].className.replace(" active","");
}
nav_buttons.className += "active";
}