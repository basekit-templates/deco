
// Makes the whole ecom product tiles clickable
$(document).ready(function() {

    $('.product-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });


    metaKeyPressed = false;

    $(window).keydown(function(e) {
        if (e.ctrlKey || e.metaKey) {
            metaKeyPressed = true;
        }
    });


    $('.product-item').click(function() {

        var href = $(this).find("a").attr("href");
        if(href) {

            if (metaKeyPressed == true) {
                 window.open(href, '_blank');
            } else {
                window.location = href;
            }
        }

    });

});

// Navigation animation toggle
$(document).on("click", ".navigation-toggle", function() {
    $( ".nav-effect" ).toggleClass( "animate" );
});


// Published Mode Detection
var publishedmode = true;


if($("body.edit").length > 0) {
    publishedmode = false;
}


$(document).ready(function() {
    if($("#page-zones__template-widgets__extendednavigation-navigation").hasClass("bk-tpl-hidden")) {
        $(".nav-icon").addClass("hide-icon");
    }
    else if($(".extendednavigation").length > 0) {
        $(".nav-icon").removeClass("hide-icon");
    }
    else {
        $(".nav-icon").addClass("hide-icon");
    }
});
