<?php

class CEP_Pages_Activator
{
    public static function activate()
    {
        $editor_role = 'ubs_role_1';

        add_role(
            $editor_role,
            'UBS Editor',
            array(
                'read'                => true,
                'edit_pages'          => true,
                'edit_others_pages'   => true,
                'edit_published_pages' => true,
                'publish_pages'       => true,
            )
        );

        self::assignRoleToUsersWithPreviousRole($editor_role);
    }

    private static function assignRoleToUsersWithPreviousRole($editor_role)
    {
        $users_with_editor_role = get_users(array('meta_key' => 'cep_previous_role', 'meta_value' => $editor_role));

        // Reassign the 'UBS Editor' role upon plugin activation 
        foreach ($users_with_editor_role as $user) {
            $u = new WP_User($user->ID);
            $u->set_role($editor_role);
        }
    }
}
