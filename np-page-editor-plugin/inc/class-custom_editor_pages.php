<?php

class CEP_User_Edit_Limit
{
    /**
     * Store the ID of the user we want to control, and the
     * posts we will let the user edit.
     */

    private $user_id = 0;
    private $allowed = array();

    public function __construct($user_id, $allowed)
    {
        // Save the ID of the user we want to limit.
        $this->user_id = $user_id;

        // Expand the list of allowed pages to include sub pages
        $all_pages = get_pages();

        foreach ($allowed as $page) {
            $this->allowed[] = $page;
            $sub_pages = get_page_children($page, $all_pages);
            foreach ($sub_pages as $sub_page) {
                $this->allowed[] = $sub_page->ID;
            }
        }

        add_action('admin_menu', array($this, 'ubs_remove_menu_pages'), 9999);
        add_action('publish_page', array($this, 'add_ubs_page_ids'), 10);
        add_action('save_post', array($this, 'add_ubs_page_ids'), 10);
    }

    public function add_ubs_page_ids($page_id)
    {
        $saved_page_ids = get_option('custom_editor_page_ids', '', true);
        $page_ids = explode(',', $saved_page_ids);
        if (!in_array($page_id, $page_ids)) {
            array_push($page_ids, $page_id);
        }
        $updated_page_ids = implode(',', $page_ids);
        update_option('custom_editor_page_ids', $updated_page_ids);
    }

    public function ubs_remove_menu_pages()
    {
        $user = wp_get_current_user();
        $roles = (array) $user->roles;
        if (in_array('ubs_role_1', $roles)) {
            remove_menu_page('edit.php?post_type=np_call');
            remove_menu_page('edit.php?post_type=np_seo_unlocked');
            remove_menu_page('edit.php?post_type=np_ecommerce_un');
            remove_menu_page('edit.php?post_type=np_content_un');
            remove_menu_page('edit.php?post_type=np_instagram_un');
            remove_menu_page('edit.php?post_type=np_yt_unlocked');
            remove_menu_page('edit.php?post_type=np_li_unlocked');
            remove_menu_page('edit.php?post_type=np_ls_unlocked');
            remove_menu_page('edit.php?post_type=np_fb_unlocked');
            remove_menu_page('edit.php?post_type=np_em_unlocked');
            remove_menu_page('edit.php?post_type=np_cro_unlocked');
            remove_menu_page('edit.php?post_type=np_gh_unlocked');
            remove_menu_page('edit.php?post_type=np_video');
            remove_menu_page('wpcf7');
            remove_menu_page('cnrt_settings_page');
        }
    }
}
