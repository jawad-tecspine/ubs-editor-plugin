<?php

/**
 * @link              neilpatel.com
 * @since             1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:     UBS Page Editor
 * Plugin URI:      neilpatel.com
 * Description:     Speicify the page ID's for 'UBS Team' users.
 * Version:         1.1
 * Author:          Neil Patel
 * Author URI:      neilpatel.com
 * License:         GPL 2.0
 * License URI:     http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:     custom-editor-pages
 */


// Enqueueing styles and scripts
function enqueue_plugin_styles_scripts()
{
    if (is_page_template('ubs_editor_standard_template.php')) {
        // Enqueue styles
        $common_style_version = filemtime(plugin_dir_path(__FILE__) . 'assets/css/ubs-editor-common.css');
        wp_enqueue_style('ubs-editor-common', plugin_dir_url(__FILE__) . 'assets/css/ubs-editor-common.css', array(), $common_style_version);

        // Enqueue scripts
        $common_script_version = filemtime(plugin_dir_path(__FILE__) . 'assets/js/ubs-editor-common.js');
        wp_enqueue_script('ubs-editor-common', plugin_dir_url(__FILE__) . 'assets/js/ubs-editor-common.js', array('jquery'), $common_script_version, true);
    } elseif (is_page_template('ubs_ubersuggest.php')) {
        // Enqueue styles
        $ubersuggest_form_style_version = filemtime(plugin_dir_path(__FILE__) . 'assets/css/ubs-ubersuggest-form.css');
        $ubersuggest_style_version = filemtime(plugin_dir_path(__FILE__) . 'assets/css/ubs-ubersuggest.css');
        wp_enqueue_style('ubs-ubersuggest-form', plugin_dir_url(__FILE__) . 'assets/css/ubs-ubersuggest-form.css', array(), $ubersuggest_form_style_version);
        wp_enqueue_style('ubs-ubersuggest', plugin_dir_url(__FILE__) . 'assets/css/ubs-ubersuggest.css', array(), $ubersuggest_style_version);

        // Enqueue scripts
        $ubersuggest_form_script_version = filemtime(plugin_dir_path(__FILE__) . 'assets/js/select2/select2-country-en.js');
        $ubersuggest_script_version = filemtime(plugin_dir_path(__FILE__) . 'assets/js/ubs-ubersuggest.js');
        wp_enqueue_script('ubs-ubersuggest-form', plugin_dir_url(__FILE__) . 'assets/js/select2/select2-country-en.js', array(), $ubersuggest_form_script_version, true);
        wp_enqueue_script('ubs-ubersuggest', plugin_dir_url(__FILE__) . 'assets/js/ubs-ubersuggest.js', array(), $ubersuggest_script_version, true);
    } elseif (is_page_template('ubs_wtc.php')) {
        // Enqueue styles
        $ubersuggest_form_style_version = filemtime(plugin_dir_path(__FILE__) . 'assets/css/ubs-ubersuggest-form.css');
        $wtc_style_version = filemtime(plugin_dir_path(__FILE__) . 'assets/css/ubs-wtc.css');
        wp_enqueue_style('ubs-ubersuggest-form', plugin_dir_url(__FILE__) . 'assets/css/ubs-ubersuggest-form.css', array(), $ubersuggest_form_style_version);
        wp_enqueue_style('ubs-wtc', plugin_dir_url(__FILE__) . 'assets/css/ubs-wtc.css', array(), $wtc_style_version);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_plugin_styles_scripts', 99);
add_action('admin_enqueue_scripts', 'enqueue_plugin_styles_scripts', 99);

include_once plugin_dir_path(__FILE__) . 'shortcodes/ubs-editor-form-shortcode.php';

//identify which page is being edited and restrict it accordingly
ob_clean();
ob_start();
function cep_restrict_edit_pages()
{
    global $my_admin_page;
    $ubs_editor  = false;
    $screen = get_current_screen();

    $current_user_id = get_current_user_id();
    $user_meta = get_userdata($current_user_id);
    $user_roles = $user_meta->roles;
    if (in_array('ubs_role_1', $user_roles)) {
        $ubs_editor = true;
    }

    if (($ubs_editor == true) && $screen->id == 'page') {
        global $post;
        $id = $post->ID;

        $saved_page_ids = get_option('custom_editor_page_ids', '', true);
        $page_ids = explode(',', $saved_page_ids);  //Allowed page IDs

        if (!in_array($id, $page_ids) && ($screen->action != 'add')) {
            wp_redirect(admin_url('/edit.php?post_type=page'), 301);
            exit;
        }
    }
}
add_action('admin_notices', 'cep_restrict_edit_pages');


function cep_activate_CE_pages()
{
    require_once plugin_dir_path(__FILE__) . 'inc/class-activate.php';
    CEP_Pages_Activator::activate();
}
register_activation_hook(__FILE__, 'cep_activate_CE_pages');


// this code runs during plugin deactivation
function cep_deactivate_CE_pages()
{
    require_once plugin_dir_path(__FILE__) . 'inc/class-deactivate.php';
    CEP_Pages_Deactivator::deactivate();
}
register_deactivation_hook(__FILE__, 'cep_deactivate_CE_pages');


// Adding Menu Page 
add_action('admin_menu', 'cep_setup_plugin_menu');

function cep_setup_plugin_menu()
{
    add_options_page(
        'UBS Team Pages',
        'UBS Pages',
        'manage_options',
        'cep_custom_editor_pages',
        'cep_custom_editor_pages'
    );
}


//Design/functionality of admin menu page for this plugin
function cep_custom_editor_pages()
{
    require_once plugin_dir_path(__FILE__) . 'inc/page-custom_editor.php';
}


//Class for restricting the user with custom role to only edit defined pages.
require plugin_dir_path(__FILE__) . 'inc/class-custom_editor_pages.php';


//Function for showing only allowed pages to be visible in admin pages table
function cep_show_only_allowed_pages($query)
{
    global $pagenow, $post_type;

    if (is_admin()) {
        if (current_user_can('ubs_role_1') && $pagenow == 'edit.php' && $post_type == 'page') {
            $saved_page_ids = get_option('custom_editor_page_ids', '', true);
            $page_ids = explode(',', $saved_page_ids);
            $query->query_vars['post__in'] = $page_ids; // Enter your page IDs here
        }
    }

    //don't forget to the query
    return $query;
}
add_filter('parse_query', 'cep_show_only_allowed_pages');


if (is_admin()) {
    add_action('init', 'cep_user_edit_limit');

    function cep_user_edit_limit()
    {
        $saved_page_ids = get_option('custom_editor_page_ids', '', true);
        $page_ids = explode(',', $saved_page_ids);

        if (count($page_ids) > 0) {
            $user = wp_get_current_user();
            $roles = (array) $user->roles;

            if (in_array('ubs_role_1', $roles)) {
                $plugin = new CEP_User_Edit_Limit($user->ID, $page_ids);
            }
        }
    };
}


// Function to save the user role when 'Update User' is clicked
add_action('profile_update', 'cep_save_latest_user_role');

function cep_save_latest_user_role($user_id)
{
    $user = get_userdata($user_id);
    $current_role = reset($user->roles);

    $previous_role = get_user_meta($user_id, 'cep_previous_role', true);

    if ($current_role !== $previous_role) {
        update_user_meta($user_id, 'cep_previous_role', $current_role);
    }
}


// Adding custom templates in the templates dropdown
add_filter('theme_page_templates', 'add_page_templates_to_dropdown');
add_filter('template_include', 'change_page_template');

function add_page_templates_to_dropdown($templates)
{
    $custom_templates = array(
        'ubs_editor_standard_template.php' => 'UBS Editor Page',
        'ubs_ubersuggest.php' => 'UBS Ubersuggest',
        'ubs_wtc.php' => 'UBS WTC',
    );
    $templates = array_merge($templates, $custom_templates);
    return $templates;
}

function change_page_template($template)
{
    global $post;
    $selected_template = get_page_template_slug($post->ID);

    $template_paths = array(
        'ubs_editor_standard_template.php' => plugin_dir_path(__FILE__) . 'templates/ubs_editor_standard_template.php',
        'ubs_ubersuggest.php' => plugin_dir_path(__FILE__) . 'templates/ubs_ubersuggest.php',
        'ubs_wtc.php' => plugin_dir_path(__FILE__) . 'templates/ubs_wtc.php',
    );

    if (isset($template_paths[$selected_template])) {
        $template = $template_paths[$selected_template];
    }

    return $template;
}
