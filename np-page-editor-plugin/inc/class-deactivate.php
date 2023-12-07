<?php

class CEP_Pages_Deactivator
{
    public static function deactivate()
    {
        $editor_role = 'ubs_role_1';
        $users_with_ubs_role = get_users(['role' => $editor_role]);

        foreach ($users_with_ubs_role as $user) {
            $user_id = $user->ID;
            $current_role = reset($user->roles);

            update_user_meta($user_id, 'cep_previous_role', $current_role);

            if (in_array($editor_role, $user->roles)) {
                $u = new WP_User($user_id);
                $u->set_role('editor');
            }
        }
        wp_roles()->remove_role($editor_role);
    }
}
