// tab 
$(function () {
    $("#tabs").tabs();
});

// Back to top button 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

//   Hamburger navigation 
$(document).ready(function () {
    $(".sidebarBtn").on("click", function () {
        $("#navigation").slideToggle();
        $(".sidebarBtn").toggleClass("toggle");
    });
});

// Animation 
$(document).ready(function () {
    // Function to check if the element is in the viewport
    function isElementInViewport(element, animationOffset) {
        var scrollPosition = $(window).scrollTop() + $(window).height();
        var elementOffset = element.offset().top;
        return scrollPosition > elementOffset - animationOffset;
    }

    // Function to add fade-up and fade-in-from-left-right animations on scroll
    function addAnimations() {
        var animationOffset = 100;
        $('.fade_up').each(function () {
            if (isElementInViewport($(this), animationOffset)) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
        $('.left').each(function () {
            if (isElementInViewport($(this), animationOffset)) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateX(0)');
            }
        });
        $('.right').each(function () {
            if (isElementInViewport($(this), animationOffset)) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateX(0)');
            }
        });
    }

    // Call the function when the document is ready and on scroll
    $(document).ready(function () {
        addAnimations();
        $(window).scroll(function () {
            addAnimations();
        });
    });
});
