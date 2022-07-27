<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'odc_wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'k~At%HB5D$kW#vYBn@`go?f(1s$l%:6Z]9OVJ/+9|@%fOe-fbwb[+k%][d_~7KUl' );
define( 'SECURE_AUTH_KEY',  'n9E}84CE9;lT&!aMV`84&Xmq.!k;3~`BB&Y}zWZ:mHgTg/_Vsn|*fB?s==+(lM||' );
define( 'LOGGED_IN_KEY',    'Jep/k/YI#U)E@5u(%dFFbX3+[HydBBsAjFM&Xib/L[iUCdKS-#6%3{3U7.3>qXKy' );
define( 'NONCE_KEY',        'mxn4qB4fm]IE6R&[P%HI7;h5KPV;)*O52S:E)1AAsZX<Y{0gz(~G9o=Y X}$~QtV' );
define( 'AUTH_SALT',        'PFfvu7$E*C}=j6s-ax/V,YIv{|a.2M$X N[99}z9GqX/+cJ$BL%wyJW$1;^yj(Rs' );
define( 'SECURE_AUTH_SALT', '$8f}UYzU&a)-MPs;prae)CTT&uaMeDGp$tP#V)!S@]n7>S)VF-p_+sPjT6R3(MJ&' );
define( 'LOGGED_IN_SALT',   'PN;@D&:>4voBi&X7eh+K(_iRSfXL`+;moe#2}-oMa8~U)[YZ-_8uM64|f)Ey:gQ2' );
define( 'NONCE_SALT',       '*<VVcOBnbn290H6cG{4e(pf<Z&0A)R glCE!$AEK</hbx3)ZMv]R(;ZfX~x[TPT<' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
