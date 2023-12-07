<style>
    form.page-ids-holder {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
        margin-top: 25px;
    }
</style>

<?php

if (isset($_POST['save_page_ids'])) {
    $page_ids = str_replace(' ', '', $_POST['page_ids']);

    update_option('custom_editor_page_ids', $page_ids);
}

$saved_page_ids = get_option('custom_editor_page_ids', '', true);

?>

<h1>UBS Team Pages</h1>
<p>Please specify the page ID's(valid numbers) by comma separated values.</p>

<form method="POST" class="page-ids-holder">
    <textarea name="page_ids" rows="4" class="regular-text code" placeholder="2,5,8,13"><?= $saved_page_ids ?></textarea>
    <input name="save_page_ids" class="button button-primary" type="submit" value="Save">
</form>