function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        if ($(window).width() > 1024) {
            $('#sticky2').addClass('stick');
        }
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky2').removeClass('stick');
    }
}

function sticky_remove() {
    if ($(window).width() <= 1024) {
            $('#sticky2').removeClass('stick');
            if (window_top < div_top) {
                $('#sticky').addClass('stick');
            }
        }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
    $(window).resize(sticky_remove);
});