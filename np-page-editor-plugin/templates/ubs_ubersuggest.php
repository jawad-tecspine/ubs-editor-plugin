<?php /* Template Name: UBS Ubersuggest */ ?>

<?php get_header(); ?>

<article id="article" role="main">

	<?php if (have_posts()) : ?>

		<?php
		while (have_posts()) :
			the_post();
		?>

			<?php the_content(); ?>

		<?php endwhile; ?>

	<?php endif; ?>

</article>

<?php get_footer(); ?>