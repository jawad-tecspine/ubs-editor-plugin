jQuery(document).ready(function ($) {
    // Setting URL
    $(document).on('click', '.search-btn-main', function (e) {
        e.preventDefault();
        var userKeyword = $(this).closest('form').find('.search-btn-main-input').val().trim();
        var selectedOption = $(this).closest('form').find('select').val();
        if (userKeyword == "") {
            return false;
        }
        var baseUrl = 'https://app.neilpatel.com/aiwriter/tools/seo/seo_meta_tags_';
        switch (selectedOption) {
            case 'homepage':
                baseUrl += 'homepage?kw=';
                break;
            case 'product_page':
                baseUrl += 'product_page?kw=';
                break;
            default:
                baseUrl += 'blog?kw=';
        }
        window.location.href = baseUrl + encodeURIComponent(userKeyword);
    });
});