jQuery(document).ready(function ($) {
    // Setting URL
    $(document).on('click', '.search-btn-main', function (e) {
        e.preventDefault();
        // var userKeyword = $(this).siblings('.search-btn-main-input').val().trim();
        var userKeyword = $(this).closest('form').find('.search-btn-main-input').val().trim();
        if (userKeyword == "") {
            return false;
        }
        window.location.href = 'https://app.neilpatel.com/aiwriter/?kw=' + encodeURIComponent(userKeyword);
    });
});