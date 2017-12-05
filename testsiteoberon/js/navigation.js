function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
<!--topscroll-->
$(document).ready(function() {
    $(".page-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

var page = document.querySelector('.container');
page.style.opacity = 0;
$(page).animate({opacity: 1}, 400);
