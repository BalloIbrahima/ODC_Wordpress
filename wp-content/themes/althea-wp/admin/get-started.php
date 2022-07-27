<?php

use ColibriWP\Theme\PluginsManager;
use ColibriWP\Theme\Translations;

$althea_wp_is_builder_installed = apply_filters( 'althea_wp_page_builder/installed', false );

wp_enqueue_script( 'updates' );

function althea_wp_get_setting_link( $setting ) {
    return esc_attr( althea_wp_theme()->getCustomizer()->getSettingQuickLink( $setting ) );
}

?>

<div class="althea-wp-get-started__container althea-wp-admin-panel">
    <div class="althea-wp-get-started__section">
        <h2 class="col-title althea-wp-get-started__section-title">
            <span class="althea-wp-get-started__section-title__icon dashicons dashicons-admin-plugins"></span>
            <?php Translations::escHtmlE( 'get_started_section_1_title' ); ?>
        </h2>
        <div class="althea-wp-get-started__content">


            <?php foreach ( althea_wp_theme()->getPluginsManager()->getPluginData() as $althea_wp_recommended_plugin_slug => $althea_wp_recommended_plugin_data ): ?>
                <?php
                $althea_wp_plugin_state = althea_wp_theme()->getPluginsManager()->getPluginState( $althea_wp_recommended_plugin_slug );
                $althea_wp_notice_type  = $althea_wp_plugin_state === PluginsManager::ACTIVE_PLUGIN ? 'blue' : '';
                if ( isset( $althea_wp_recommended_plugin_data['internal'] ) && $althea_wp_recommended_plugin_data['internal'] ) {
                    continue;
                }
                ?>
                <div 
				
					class="althea-wp-notice <?php echo esc_attr( $althea_wp_notice_type ); ?> plugin-card-<?php echo $althea_wp_recommended_plugin_slug;?>">
                    <div class="althea-wp-notice__header">
                        <h3 class="althea-wp-notice__title"><?php echo esc_html( althea_wp_theme()->getPluginsManager()->getPluginData( "{$althea_wp_recommended_plugin_slug}.name" ) ); ?></h3>
                        <div class="althea-wp-notice__action">
                            <?php if ( $althea_wp_plugin_state === PluginsManager::ACTIVE_PLUGIN ): ?>
                                <p class="althea-wp-notice__action__active"><?php Translations::escHtmlE( 'plugin_installed_and_active' ); ?> </p>
                            <?php else: ?>
                                <?php if ( $althea_wp_plugin_state === PluginsManager::INSTALLED_PLUGIN ): ?>
                                    <a class="button button-large colibri-plugin activate-now" 
										data-slug="<?php echo $althea_wp_recommended_plugin_slug;?>"
                                       href="<?php echo esc_url( althea_wp_theme()->getPluginsManager()->getActivationLink( $althea_wp_recommended_plugin_slug ) ); ?>">
                                        <?php Translations::escHtmlE( 'activate' ); ?>
                                    </a>
                                <?php else: ?>
                                    <a class="button button-large colibri-plugin install-now"
									   data-slug="<?php echo $althea_wp_recommended_plugin_slug;?>"
                                       href="<?php echo esc_url( althea_wp_theme()->getPluginsManager()->getInstallLink( $althea_wp_recommended_plugin_slug ) ); ?>">
                                        <?php Translations::escHtmlE( 'install' ); ?>
                                    </a>
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                    <p class="althea-wp-notice__description"><?php echo esc_html( althea_wp_theme()->getPluginsManager()->getPluginData( "{$althea_wp_recommended_plugin_slug}.description" ) ); ?></p>


                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="althea-wp-get-started__section">
        <h2 class="althea-wp-get-started__section-title">
            <span class="althea-wp-get-started__section-title__icon dashicons dashicons-admin-appearance"></span>
            <?php Translations::escHtmlE( 'get_started_section_2_title' ); ?>
        </h2>
        <div class="althea-wp-get-started__content">
            <div class="althea-wp-customizer-option__container">
                <div class="althea-wp-customizer-option">
                    <span class="althea-wp-customizer-option__icon dashicons dashicons-format-image"></span>
                    <a class="althea-wp-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( althea_wp_get_setting_link( 'logo' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_set_logo' ); ?>
                    </a>
                </div>
                <div class="althea-wp-customizer-option">
                    <span class="althea-wp-customizer-option__icon dashicons dashicons-format-image"></span>
                    <a class="althea-wp-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( althea_wp_get_setting_link( 'hero_background' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_hero_image' ); ?>
                    </a>
                </div>
                <div class="althea-wp-customizer-option">
                    <span class="althea-wp-customizer-option__icon dashicons dashicons-menu-alt3"></span>
                    <a class="althea-wp-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( althea_wp_get_setting_link( 'navigation' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_customize_navigation' ); ?>
                    </a>
                </div>
                <div class="althea-wp-customizer-option">
                    <span class="althea-wp-customizer-option__icon dashicons dashicons-layout"></span>
                    <a class="althea-wp-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( althea_wp_get_setting_link( 'hero_layout' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_change_customize_hero' ); ?>
                    </a>
                </div>
                <div class="althea-wp-customizer-option">
                    <span class="althea-wp-customizer-option__icon dashicons dashicons-admin-appearance"></span>
                    <a class="althea-wp-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( althea_wp_get_setting_link( 'footer' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_customize_footer' ); ?>
                    </a>
                </div>
                <?php if ( $althea_wp_is_builder_installed ): ?>
                    <div class="althea-wp-customizer-option">
                        <span class="althea-wp-customizer-option__icon dashicons dashicons-art"></span>
                        <a class="althea-wp-customizer-option__label"
                           target="_blank"
                           href="<?php echo esc_url( althea_wp_get_setting_link( 'color_scheme' ) ); ?>">
                            <?php Translations::escHtmlE( 'get_started_change_color_settings' ); ?>
                        </a>
                    </div>
                    <div class="althea-wp-customizer-option">
                        <span class="althea-wp-customizer-option__icon dashicons dashicons-editor-textcolor"></span>
                        <a class="althea-wp-customizer-option__label"
                           target="_blank"
                           href="<?php echo esc_url( althea_wp_get_setting_link( 'general_typography' ) ); ?>">
                            <?php Translations::escHtmlE( 'get_started_customize_fonts' ); ?>
                        </a>
                    </div>

                <?php endif; ?>
                <div class="althea-wp-customizer-option">
                    <span class="althea-wp-customizer-option__icon dashicons dashicons-menu-alt3"></span>
                    <a class="althea-wp-customizer-option__label"
                       target="_blank"
                       href="<?php echo esc_url( althea_wp_get_setting_link( 'menu' ) ); ?>">
                        <?php Translations::escHtmlE( 'get_started_set_menu_links' ); ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<?php



wp_print_request_filesystem_credentials_modal();
wp_print_admin_notice_templates();
