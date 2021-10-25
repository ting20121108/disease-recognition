$(function() {

    $(".progress").each(function() {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                left.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                left.css('transform', 'rotate(180deg)')
                right.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return -percentage / 100 * 360

    }

});