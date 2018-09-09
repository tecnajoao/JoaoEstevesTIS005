var experience = document.getElementById("experience_script");
experience.addEventListener("onload", experiences_script );
function experiences_script(){
    var slideIndex = 0 ;
    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides_experience");
    var circles_selected = document.getElementsByClassName("circles_select");
    if (n > slides.length)
    {slideIndex = 1}    
    if (n < 1)
    {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < circles_selected.length; i++) {
        circles_selected[i].className = circles_selected[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    circles_selected[slideIndex-1].className += " active";
  }
}

