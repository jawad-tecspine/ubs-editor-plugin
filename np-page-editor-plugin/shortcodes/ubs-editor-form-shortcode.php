<?php

function ubs_editor_form_shortcode($atts)
{
    $atts = shortcode_atts(
        array(
            'page' => 'ai_writer', // Default to 'AI Writer' if no attribute is provided
        ),
        $atts,
        'ubs-editor-form-shortcode'
    );
    ob_start();
    if ($atts['page'] === 'AI Writer') {
        $aiwriter_style_version = filemtime(plugin_dir_path(__FILE__) . '../assets/css/ubs-page-aiwriter.css');
        $aiwriter_script_version = filemtime(plugin_dir_path(__FILE__) . '../assets/js/ubs-page-aiwriter.js');

        wp_enqueue_style('ubs-editor-aiwriter', plugin_dir_url(__FILE__) . '../assets/css/ubs-page-aiwriter.css', array(), $aiwriter_style_version);
        wp_enqueue_script('ubs-editor-aiwriter', plugin_dir_url(__FILE__) . '../assets/js/ubs-page-aiwriter.js', array('jquery'), $aiwriter_script_version, true);
?>
        <form action="#">
            <input type="text" name="kw" class="search-btn-main-input" placeholder="Write about...">
            <button type="submit" class="search-btn-main np-btn" disabled>Start Writing Now <img src="<?php echo get_template_directory_uri() . '/images/ai-rewriter-new/btn-arrow.png' ?>" alt=""></button>
        </form>
    <?php } elseif ($atts['page'] === 'SEO') {
        $seo_style_version = filemtime(plugin_dir_path(__FILE__) . '../assets/css/ubs-page-seo.css');
        $seo_script_version = filemtime(plugin_dir_path(__FILE__) . '../assets/js/ubs-page-seo.js');

        wp_enqueue_style('ubs-editor-seo', plugin_dir_url(__FILE__) . '../assets/css/ubs-page-seo.css', array(), $seo_style_version);
        wp_enqueue_script('ubs-editor-seo', plugin_dir_url(__FILE__) . '../assets/js/ubs-page-seo.js', array('jquery'), $seo_script_version, true);
    ?>
        <form action="#">
            <div class="input-select">
                <input type="text" name="kw" class="search-btn-main-input" placeholder="Enter keyword">
                <select name="" id="">
                    <option value="blog">Blog</option>
                    <option value="homepage">Homepage</option>
                    <option value="product_page">Product</option>
                </select>
            </div>
            <button type="submit" class="search-btn-main np-btn" disabled>Start Writing Now <img src="<?php echo plugins_url('../assets/img/btn-arrow.png', __FILE__) ?>" alt=""></button>
        </form>
    <?php } elseif ($atts['page'] === 'Social') {
        $seo_style_version = filemtime(plugin_dir_path(__FILE__) . '../assets/css/ubs-page-seo.css');
        $aiw_social_script_version = filemtime(plugin_dir_path(__FILE__) . '../assets/js/ubs-page-aiw-social.js');

        wp_enqueue_style('ubs-editor-seo', plugin_dir_url(__FILE__) . '../assets/css/ubs-page-seo.css', array(), $seo_style_version);
        wp_enqueue_script('ubs-editor-aiw-social', plugin_dir_url(__FILE__) . '../assets/js/ubs-page-aiw-social.js', array('jquery'), $aiw_social_script_version, true);
    ?>
        <form action="#">
            <div class="input-select">
                <input type="text" name="kw" class="search-btn-main-input" placeholder="Enter Topic">
                <select name="" id="">
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                    <option value="tweets">Tweets</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="quora">Quora</option>
                </select>
            </div>
            <button type="submit" class="search-btn-main np-btn" disabled>Generate Posts <img src="<?php echo plugins_url('../assets/img/btn-arrow.png', __FILE__) ?>" alt=""></button>
        </form>
<?php }
    return ob_get_clean();
}

add_shortcode('ubs-editor-form-shortcode', 'ubs_editor_form_shortcode');
