let section_Languages = document.getElementById("Languages") ;
let span = document.querySelectorAll(".progress span");

let up = document.querySelector('.up') ;
window.onscroll = function () {
    this.scrollY >= 300 ? up.classList.add("show") : up.classList.remove("show");

    if(window.scrollY >= section_Languages.offsetTop -200 ) {
        span.forEach( (span) => {
            span.style.width = span.dataset.width ;
            // span.style.vehavior = 'smooth' ;
            span.style.transition = '1s' ;
        })
    }
};

up.onclick=function (){
    window.scrollTo({
        top:0,
        behavior:"smooth" ,
    });
}