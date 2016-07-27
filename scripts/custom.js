
// Navigation animation toggle
$(document).on("click", ".navigation-toggle", function() {
    $( ".nav-effect" ).toggleClass( "animate" );
});


// If slide navigation / pagination is visible add class to change feature positioning
$(document).ready(function(){
    if ( $(".template-feature nav").hasClass("responsiveslideshow__slide-navigation") || $(".template-feature nav").hasClass("responsiveslideshow__slide-pagination") ) {
        $(".template-feature").addClass("has-slide-navigation");
    }
});


// If slide navigation and pagination are visible hide the pagination
$(document).ready(function(){
    if ( $(".template-feature nav").hasClass("responsiveslideshow__slide-pagination") && $(".template-feature nav").hasClass("responsiveslideshow__slide-navigation") ) {
        $(".template-feature").addClass("hide-slide-pagination");
    }
});


// Initializer for Twitter widget slideshow effect
$(document).ready(function(){
    BaseKit.Util.waitsFor(function () {
        return $('.twitter__tweet-item').length > 0 ? true : false;
    }, function () {
        $('.bk-twitter').unslider({
            delay: false,             //  Stops slider auto sliding through tweets
            complete: function() {},  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,               //  Display dot navigation
            fluid: true              //  Support responsive design. May break non-responsive designs
        });
    }, function () {
    }, 5000);
});



// Published Mode Detection
var publishedmode = true;


if($("body.edit").length > 0) {
    publishedmode = false;
}


// If in publish mode re-un twitter script every 10 seconds
if(publishedmode==false) {
    window.setInterval(function(){

        $(document).ready(function(){
            BaseKit.Util.waitsFor(function () {
                return $('.twitter__tweet-item').length > 0 ? true : false;
            }, function () {
                $('.bk-twitter').unslider({
                    delay: false,             //  Stops slider auto sliding through tweets
                    complete: function() {},  //  A function that gets called after every slide animation
                    keys: true,               //  Enable keyboard (left, right) arrow shortcuts
                    dots: true,               //  Display dot navigation
                    fluid: true              //  Support responsive design. May break non-responsive designs
                });
            }, function () {
            }, 10000);
        });
    }, 5000);
}
