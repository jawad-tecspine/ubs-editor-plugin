<?php /* Template Name: UBS Editor Page */ ?>

<?php get_header();
the_post();
?>

<div class="top-section-form">
    <div class="np-container">
        <div class="top-section-form-content">
            <div class="np-form">
                <?php the_content() ?>
            </div>
        </div>
    </div>
</div>

<div class="hero-section">
    <div class="np-container d-grid">
        <div class="banner-content">
            <?php the_field('ubs_banner_content') ?>
            <div class="np-form">
                <?php the_content() ?>
            </div>
            <img class="bottom-img" src="<?php echo plugins_url('../assets/img/hero-bottom.png', __FILE__) ?>" alt="">
        </div>
        <div class="banner-image">
            <img src="<?php the_field('ubs_banner_image') ?>" alt="">
        </div>
    </div>
</div>

<div class="alert-section">
    <div class="np-container">
        <div class="alert-div">
            <div class="img">
                <img src="<?php echo plugins_url('../assets/img/cartoon.png', __FILE__) ?>" alt="">
            </div>
            <?php the_field('ubs_cta_text') ?>
            <a href="<?php the_field('ubs_cta_button_link') ?>"><span><?php the_field('ubs_cta_button_text') ?></span> <img src="<?php echo plugins_url('../assets/img/btn-arrow-blue.png', __FILE__) ?>" alt=""></a>
        </div>
    </div>
</div>

<div class="profits-section">
    <div class="np-container">
        <div class="profits-content">
            <div class="profits-heading-section">
                <?php the_field('ubs_middle_section_content') ?>
            </div>
            <div class="profits-image-section">
                <img src="<?php the_field('ubs_middle_section_image') ?>" alt="">
            </div>
            <div class="profits-features-section">
                <?php
                if (have_rows('ai_rewriter_profit_repeater')) {
                    while (have_rows('ai_rewriter_profit_repeater')) {
                        the_row();
                ?>
                        <div class="profits-feature-box">
                            <div class="profits-feature-logo">
                                <img src="<?php the_sub_field('ai_rewriter_profit_repeater_image') ?>" alt="">
                            </div>
                            <div class="profits-feature-content">
                                <h4><?php the_sub_field('ai_rewriter_profit_repeater_heading') ?></h4>
                                <p><?php the_sub_field('ai_rewriter_profit_repeater_text') ?></p>
                            </div>
                        </div>
                <?php
                    }
                }
                ?>
            </div>
        </div>
    </div>
</div>

<div class="quick-steps-section">
    <div class="np-container">
        <div class="quick-steps-content">
            <div class="profits-heading-section">
                <?php the_field('ubs_steps_section_content') ?>
            </div>
            <div class="quick-steps-method">
                <?php
                if (have_rows('ai_rewriter_steps_repeater')) {
                    while (have_rows('ai_rewriter_steps_repeater')) {
                        the_row();
                ?>
                        <div class="quick-single-step">
                            <div class="quick-single-step-content">
                                <span class="steps-count"><?php the_sub_field('ai_rewriter_steps_repeater_number') ?></span>
                                <p class="subtitle"><?php the_sub_field('ai_rewriter_steps_repeater_sub_heading') ?></p>
                                <h2><?php the_sub_field('ai_rewriter_steps_repeater_heading') ?></h2>
                                <p><?php the_sub_field('ai_rewriter_steps_repeater_text') ?></p>
                            </div>
                            <div class="quick-single-step-image">
                                <img src="<?php the_sub_field('ai_rewriter_steps_repeater_image') ?>" alt="">
                            </div>
                        </div>
                <?php
                    }
                }
                ?>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>