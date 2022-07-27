<?php


use ColibriWP\Theme\Core\Hooks;
use ColibriWP\Theme\Translations;
use ColibriWP\Theme\View;

$althea_wp_tabs            = View::getData( 'tabs', array() );
$althea_wp_current_tab     = View::getData( 'current_tab', null );
$althea_wp_url             = View::getData( 'page_url', null );
$althea_wp_welcome_message = View::getData( 'welcome_message', null );
$althea_wp_tab_partial     = View::getData( "tabs.{$althea_wp_current_tab}.tab_partial", null );
Hooks::prefixed_do_action( "before_info_page_tab_{$althea_wp_current_tab}" );
$althea_wp_slug        = "colibri-wp-page-info";
$colibri_get_started = array(
    'plugin_installed_and_active' => Translations::escHtml( 'plugin_installed_and_active' ),
    'activate'                    => Translations::escHtml( 'activate' ),
    'activating'                  => __( 'Activating', 'althea-wp' ),
    'install_recommended'         => isset( $_GET['install_recommended'] ) ? $_GET['install_recommended'] : ''
);

wp_localize_script( $althea_wp_slug, 'colibri_get_started', $colibri_get_started );
?>
<div class="althea-wp-admin-page wrap about-wrap full-width-layout mesmerize-page">

    <div class="althea-wp-admin-page--hero">
        <div class="althea-wp-admin-page--hero-intro althea-wp-admin-page-spacing ">
            <div class="althea-wp-admin-page--hero-logo">
                <img src="<?php echo esc_url( althea_wp_theme()->getAssetsManager()->getBaseURL() . "/images/althea-wp-logo.png" ) ?>"
                     alt="logo"/>
            </div>
            <div class="althea-wp-admin-page--hero-text ">
                <?php if ( $althea_wp_welcome_message ): ?>
                    <h1><?php echo esc_html( $althea_wp_welcome_message ); ?></h1>
                <?php endif; ?>
            </div>
        </div>
        <?php if ( count( $althea_wp_tabs ) ): ?>
            <nav class="nav-tab-wrapper wp-clearfix">
                <?php foreach ( $althea_wp_tabs as $althea_wp_tab_id => $althea_wp_tab ) : ?>
                    <a class="nav-tab <?php echo ( $althea_wp_current_tab === $althea_wp_tab_id ) ? 'nav-tab-active' : '' ?>"
                       href="<?php echo esc_url( add_query_arg( array( 'current_tab' => $althea_wp_tab_id ),
                           $althea_wp_url ) ); ?>">
                        <?php echo esc_html( $althea_wp_tab['title'] ); ?>
                    </a>
                <?php endforeach; ?>
            </nav>
        <?php endif; ?>
    </div>
    <?php if ( $althea_wp_tab_partial ): ?>
        <div class="althea-wp-admin-page--body althea-wp-admin-page-spacing">
            <div class="althea-wp-admin-page--content">
                <div class="althea-wp-admin-page--tab">
                    <div class="althea-wp-admin-page--tab-<?php echo esc_attr( $althea_wp_current_tab ); ?>">
                        <?php View::make( $althea_wp_tab_partial,
                            Hooks::prefixed_apply_filters( "info_page_data_tab_{$althea_wp_current_tab}",
                                array() ) ); ?>
                    </div>
                </div>

            </div>
            <div class="althea-wp-admin-page--sidebar">
                <?php View::make( 'admin/sidebar' ) ?>
            </div>
        </div>
    <?php endif; ?>
</div>


