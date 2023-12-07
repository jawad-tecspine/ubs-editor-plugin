jQuery(document).ready(function ($) {
    // Setting URL
    $(document).on('click', '.search-btn-main', function (e) {
        e.preventDefault();
        var userKeyword = $(this).closest('form').find('.search-btn-main-input').val().trim();
        var selectedOption = $(this).closest('form').find('select').val();
        if (userKeyword == "") {
            return false;
        }
        // var baseUrl = 'https://app.neilpatel.com/aiwriter/tools/seo/seo_meta_tags_';
        var baseUrl = 'https://app.neilpatel.com/aiwriter/tools/social/';
        switch (selectedOption) {
            case 'twitter':
                baseUrl += 'twitter_threads?tp=';
                break;
            case 'tweets':
                baseUrl += 'tweets?tp=';
                break;
            case 'linkedin':
                baseUrl += 'linkedin_post?tp=';
                break;
            case 'quora':
                baseUrl += 'quora_answers?tp=';
                break;
            default:
                baseUrl += 'instagram_captions?tp=';
        }
        window.location.href = baseUrl + encodeURIComponent(userKeyword);
    });
});