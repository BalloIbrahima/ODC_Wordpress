<?php

/**
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 */

if ( ! defined( 'ALTHEA_WP_THEME_REQUIRED_PHP_VERSION' ) ) {
	define( 'ALTHEA_WP_THEME_REQUIRED_PHP_VERSION', '5.6.0' );
}

add_action( 'after_switch_theme', 'althea_wp_check_php_version' );

function althea_wp_check_php_version() {
	// Compare versions.
	if ( version_compare( phpversion(), ALTHEA_WP_THEME_REQUIRED_PHP_VERSION, '<' ) ) :
		// Theme not activated info message.
		add_action( 'admin_notices', 'althea_wp_php_version_notice' );

		// Switch back to previous theme.
		switch_theme( get_option( 'theme_switched' ) );

		return false;
	endif;
}

function althea_wp_php_version_notice() {
	?>
    <div class="notice notice-alt notice-error notice-large">
        <h4><?php esc_html_e( 'Althea WP theme activation failed!', 'althea-wp' ); ?></h4>
        <p>
			<?php printf( esc_html__( 'You need to update your PHP version to use the %s.', 'althea-wp' ),
				' <strong>Althea WP</strong>' ); ?>
            <br/>
			<?php printf( esc_html__( 'Current php version is: %1$s and the mininum required version is %2$s',
				'althea-wp' ),
				"<strong>" . esc_html(phpversion()) . "</strong>",
				"<strong>" . esc_html(ALTHEA_WP_THEME_REQUIRED_PHP_VERSION) . "</strong>" );
			?>

        </p>
    </div>
	<?php
}

if ( version_compare( phpversion(), ALTHEA_WP_THEME_REQUIRED_PHP_VERSION, '>=' ) ) {
	require_once get_template_directory() . "/inc/functions.php";
} else {
	add_action( 'admin_notices', 'althea_wp_php_version_notice' );
}
