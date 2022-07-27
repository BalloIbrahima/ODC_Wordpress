<div class="h-column h-column-container d-flex h-col-lg-12 h-col-md-12 h-col-12  masonry-item style-73-outer style-local-16-m4-outer">
  <div data-colibri-id="16-m4" class="d-flex h-flex-basis h-column__inner h-px-lg-2 h-px-md-2 h-px-2 v-inner-lg-2 v-inner-md-2 v-inner-2 style-73 style-local-16-m4 position-relative">
    <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
      <div data-colibri-id="16-m5" class="colibri-post-thumbnail <?php althea_wp_post_thumbnail_classes(); ?> style-74 style-local-16-m5 h-overflow-hidden position-relative h-element">
        <div class="h-global-transition-all colibri-post-thumbnail-shortcode style-dynamic-16-m5-height">
          <?php althea_wp_post_thumbnail(array (
            'link' => false,
          )); ?>
        </div>
        <div class="colibri-post-thumbnail-content align-items-lg-center align-items-md-center align-items-center flex-basis-100">
          <div class="w-100 h-y-container"></div>
        </div>
      </div>
      <?php althea_wp_layout_wrapper(array (
        'name' => 'categories_container',
        'slug' => 'categories-container-1',
      )); ?><?php if ( \ColibriWP\Theme\Core\Hooks::prefixed_apply_filters( 'show_post_meta', true ) ): ?>
      <div data-colibri-id="16-m9" class="h-blog-meta style-115 style-local-16-m9 position-relative h-element">
        <div name="2" class="metadata-item">
          <a href="<?php althea_wp_post_meta_date_url(); ?>">
            <span class="h-svg-icon">
              <!--Icon by Icons8 Line Awesome (https://icons8.com/line-awesome)-->
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="calendar" viewBox="0 0 512 545.5">
                <path d="M144 96h32v16h160V96h32v16h64v352H80V112h64V96zm-32 48v32h288v-32h-32v16h-32v-16H176v16h-32v-16h-32zm0 64v224h288V208H112zm96 32h32v32h-32v-32zm64 0h32v32h-32v-32zm64 0h32v32h-32v-32zm-192 64h32v32h-32v-32zm64 0h32v32h-32v-32zm64 0h32v32h-32v-32zm64 0h32v32h-32v-32zm-192 64h32v32h-32v-32zm64 0h32v32h-32v-32zm64 0h32v32h-32v-32z"></path>
              </svg>
            </span>
            <?php althea_wp_the_date('M j'); ?>
          </a>
          <span class="meta-separator">
            <?php esc_html_e('/','althea-wp'); ?>
          </span>
        </div>
        <div name="1" class="metadata-item">
          <a href="<?php echo esc_url(get_author_posts_url( get_the_author_meta( 'ID' ) )); ?>">
            <span class="h-svg-icon">
              <!--Icon by Icons8 Line Awesome (https://icons8.com/line-awesome)-->
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="user" viewBox="0 0 512 545.5">
                <path d="M240 112c61.666 0 112 50.334 112 112 0 38.54-19.698 72.834-49.5 93 57.074 24.477 97.5 81.1 97.5 147h-32c0-70.89-57.11-128-128-128s-128 57.11-128 128H80c0-65.9 40.426-122.522 97.5-147-29.802-20.166-49.5-54.46-49.5-93 0-61.666 50.334-112 112-112zm0 32c-44.372 0-80 35.628-80 80s35.628 80 80 80 80-35.628 80-80-35.628-80-80-80z"></path>
              </svg>
            </span>
            <?php echo esc_html(get_the_author_meta( 'display_name', get_the_author_meta( 'ID' ) )); ?>
          </a>
          <span class="meta-separator">
            <?php esc_html_e('/','althea-wp'); ?>
          </span>
        </div>
        <div name="4" class="metadata-item">
          <a href="<?php comments_link(); ?>">
            <span class="h-svg-icon">
              <!--Icon by Icons8 Line Awesome (https://icons8.com/line-awesome)-->
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="comments" viewBox="0 0 512 545.5">
                <path d="M32 112h320v256H197.5L122 428.5l-26 21V368H32V112zm32 32v192h64v46.5l54-43 4.5-3.5H320V144H64zm320 32h96v256h-64v81.5L314.5 432h-149l40-32h120l58.5 46.5V400h64V208h-64v-32z"></path>
              </svg>
            </span>
            <?php echo esc_html(get_comments_number()); ?>
          </a>
        </div>
      </div>
      <?php endif; ?>
      <div data-colibri-id="16-m10" class="h-row-container gutters-row-lg-0 gutters-row-md-0 gutters-row-0 gutters-row-v-lg-0 gutters-row-v-md-0 gutters-row-v-0 style-75 style-local-16-m10 position-relative">
        <div class="h-row justify-content-lg-center justify-content-md-center justify-content-center align-items-lg-stretch align-items-md-stretch align-items-stretch gutters-col-lg-0 gutters-col-md-0 gutters-col-0 gutters-col-v-lg-0 gutters-col-v-md-0 gutters-col-v-0">
          <div class="h-column h-column-container d-flex h-col-lg-auto h-col-md-auto h-col-auto style-76-outer style-local-16-m11-outer">
            <div data-colibri-id="16-m11" class="d-flex h-flex-basis h-column__inner h-px-lg-0 h-px-md-0 h-px-0 v-inner-lg-0 v-inner-md-0 v-inner-0 style-76 style-local-16-m11 position-relative">
              <div class="w-100 h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                <div data-colibri-id="16-m12" class="style-78 style-local-16-m12 position-relative h-element">
                  <div class="colibri-post-content h-global-transition-all">
                    <?php the_content(); ?>
                  </div>
                </div>
                <?php althea_wp_layout_wrapper(array (
                  'name' => 'tags_container',
                  'slug' => 'tags-container-1',
                )); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php althea_wp_layout_wrapper(array (
        'name' => 'navigation_container',
        'slug' => 'navigation-container-1',
      )); ?>
    </div>
  </div>
</div>
