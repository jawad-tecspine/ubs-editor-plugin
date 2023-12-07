jQuery(document).ready(function ($) {
    // Show search bar after scrolling
    $(window).scroll(function () {
        const npFormBottom = $(".hero-section .np-form").offset().top + $(".hero-section .np-form").outerHeight();
        const scrollTop = $(window).scrollTop();
        if (scrollTop > npFormBottom) {
            $(".top-section-form").fadeIn();
        } else {
            $(".top-section-form").fadeOut();
        }
    });


    // Disable/Enable submit button
    function toggleSubmitButton($inputField, $submitButton) {
        var inputValue = $inputField.val().trim();
        $submitButton.prop('disabled', inputValue === '');
    }

    var $inputField = $('.hero-section .search-btn-main-input');
    var $submitButton = $('.hero-section .search-btn-main');

    var $inputFieldTop = $('.top-section-form .search-btn-main-input');
    var $submitButtonTop = $('.top-section-form .search-btn-main');

    $inputField.on('keyup', function () {
        toggleSubmitButton($(this), $submitButton);
    });

    $inputFieldTop.on('keyup', function () {
        toggleSubmitButton($(this), $submitButtonTop);
    });
});