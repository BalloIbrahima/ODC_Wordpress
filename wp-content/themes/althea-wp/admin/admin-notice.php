<?php

use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Core\Utils;
use ColibriWP\Theme\Defaults;
use ColibriWP\Theme\Translations;

$althea_wp_front_page_designs = array();
$althea_wp_slug        = "colibri-wp-page-info";

foreach ( Defaults::get( 'front_page_designs', array() ) as $design ) {
    if ( Utils::pathGet( $design, 'display', true ) ) {
        if ( Utils::pathGet( $design, 'meta.slug' ) === 'modern' ) {
            $althea_wp_front_page_design = $design;
            break;
        }

    }
}

$colibri_get_started = array(
    'plugin_installed_and_active' => Translations::escHtml( 'plugin_installed_and_active' ),
    'activate'                    => Translations::escHtml( 'activate' ),
    'activating'                  => __( 'Activating', 'althea-wp' ),
    'install_recommended'         => isset( $_GET['install_recommended'] ) ? $_GET['install_recommended'] : ''
);

wp_localize_script( $althea_wp_slug, 'colibri_get_started', $colibri_get_started );

?>
<style>
    .althea-wp-admin-big-notice--container .action-buttons,
    .althea-wp-admin-big-notice--container .content-holder {
        display: flex;
        align-items: center;
    }


    .althea-wp-admin-big-notice--container .front-page-preview {
        max-width: 362px;
        margin-right: 40px;
    }

    .althea-wp-admin-big-notice--container .front-page-preview img {
        max-width: 100%;
        border: 1px solid #ccd0d4;
    }

</style>
<div class="althea-wp-admin-big-notice--container">
    <div class="content-holder">

        <div class="front-page-preview">
            <?php $althea_wp_front_page_design_image = get_stylesheet_directory_uri() . "/screenshot.jpg"; ?>
            <img class="selected"
                 data-index="<?php echo esc_attr( $althea_wp_front_page_design['index'] ); ?>"
                 src="<?php echo esc_url( $althea_wp_front_page_design_image ); ?>"/>
        </div>
        <div class="messages-area">
            <div class="title-holder">
                <h1><?php esc_html_e( 'Would you like to install the pre-designed Althea WP homepage?',
                        'althea-wp' ) ?></h1>
            </div>
            <div class="action-buttons">
                <button class="button button-primary button-hero start-with-predefined-design-button">
                    <?php esc_html_e( 'Install the Althea WP homepage', 'althea-wp' ); ?>
                </button>
                <span class="or-separator">&ensp;<?php \ColibriWP\Theme\Translations::escHtmlE( 'or' ); ?>&ensp;</span>
                <button class="button-link althea-wp-maybe-later dismiss">
                    <?php esc_html_e( 'Maybe Later', 'althea-wp' ); ?>
                </button>
            </div>
            <div class="content-footer ">
                <div>
                    <div class="plugin-notice">
                        <span class="spinner"></span>
                        <span class="message"></span>
                    </div>
                </div>
                <div>
                    <p class="description large-text">
                        <?php esc_html_e( 'This action will also install the Colibri Page Builder plugin.',
                            'althea-wp' ); ?>
                    </p>
                </div>
            </div>
        </div>

    </div>
    <?php
    $althea_wp_builder_slug = Hooks::prefixed_apply_filters( 'plugin_slug', 'colibri-page-builder' );

    wp_localize_script( $althea_wp_slug , 'althea_wp_builder_status', array(
        "status"         => althea_wp_theme()->getPluginsManager()->getPluginState( $althea_wp_builder_slug ),
        "install_url"    => althea_wp_theme()->getPluginsManager()->getInstallLink( $althea_wp_builder_slug ),
        "activate_url"   => althea_wp_theme()->getPluginsManager()->getActivationLink( $althea_wp_builder_slug ),
        "slug"           => $althea_wp_builder_slug,
        "view_demos_url" => add_query_arg(
            array(
                    'page'        => 'althea-wp-page-info',
                'current_tab' => 'demo-import'
            ),
            admin_url( 'themes.php' )
        ),
        "messages"       => array(
            "installing" => \ColibriWP\Theme\Translations::get( 'installing',
                'Colibri Page Builder' ),
            "activating" => \ColibriWP\Theme\Translations::get( 'activating',
                'Colibri Page Builder' )
        ),
    ) );
    ?>
</div>
