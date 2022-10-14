/**
 * @Script js for (custom accordion)
 *
 * @project     - custom accordion
 * @author      - kawsar bin siraj
 * @created_by  - kawsar bin siraj
 * @created_at  - 01-04-2021
 * @modified_by -
 */

$(document).ready(function () {
    // custom accordion
    $(function () {
        if ($('.accordion-list').length) {
            $('.accordion-list').on('click', '.accordion-title', function (e) {
                e.preventDefault();
                // remove siblings activities
                $(this).closest('.accordion-list-item').siblings().removeClass('open').find('.accordion-desc').slideUp();
                $(this).closest('.accordion-list-item').siblings().find('.fas').addClass('fa-angle-down').removeClass('fa-angle-up');

                // add slideToggle into this
                $(this).closest('.accordion-list-item').toggleClass('open').find('.accordion-desc').slideToggle();
                $(this).find('.fas').toggleClass('fa-angle-down fa-angle-up');
            });
        }
    });

});
