/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.dev/assets/admin/js/customize/preview/color-schemes.js":
/*!*****************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/color-schemes.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

const $ = jQuery;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  let selectedDesignStyle = GoPreviewData.selectedDesignStyle;
  /**
   * Set color
   *
   * @param {*} color
   * @param {*} cssVar
   */

  const setColor = (color, cssVar) => {
    const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(color);
    document.querySelector(':root').style.setProperty(`${cssVar}`, `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`);
  };
  /**
   * Load the color schemes for the selected design style.
   *
   * @param {*} colorScheme
   */


  const loadColorSchemes = colorScheme => {
    const designStyle = getDesignStyle(selectedDesignStyle);
    colorScheme = colorScheme.replace(`${selectedDesignStyle}-`, '');

    if ('undefined' !== typeof designStyle.color_schemes[colorScheme] && 'undefined' !== typeof wp.customize.settings.controls) {
      const colors = designStyle.color_schemes[colorScheme];
      toggleColorSchemes();
      setTimeout(function () {
        updateViewportBasis(designStyle);
      }, 200);
      Object.entries(wp.customize.settings.controls) // eslint-disable-next-line no-unused-vars
      .filter(_ref => {
        let [_control, config] = _ref;
        return config.type === 'color';
      }).forEach(_ref2 => {
        let [customizerControl, config] = _ref2;
        const customizerSetting = wp.customize(config.settings.default);
        const color = colors[config.settings.default.replace('_color', '')] || '';
        customizerSetting.set(color);
        wp.customize.control(customizerControl).container.find('.color-picker-hex').data('data-default-color', color).wpColorPicker('defaultColor', color).trigger('change');
      });
    }
  };
  /**
   * Control the visibility of the color schemes selections.
   */


  const toggleColorSchemes = () => {
    $('label[for^=color_scheme_control]').hide();
    $(`label[for^=color_scheme_control-${selectedDesignStyle}-]`).show();
  };
  /**
   * Update the viewport basis for the selected design style.
   *
   * @param {*} designStyle
   */


  const updateViewportBasis = designStyle => {
    const viewportBasis = 'undefined' !== typeof designStyle.viewport_basis ? designStyle.viewport_basis : '950';
    wp.customize.control('viewport_basis').setting(viewportBasis);
  };
  /**
   * Returns the design style array
   *
   * @param {*} designStyle
   */


  const getDesignStyle = designStyle => {
    if ('undefined' !== typeof GoPreviewData.design_styles && 'undefined' !== GoPreviewData.design_styles[designStyle]) {
      return GoPreviewData.design_styles[designStyle];
    }

    return false;
  };

  wp.customize.bind('ready', () => toggleColorSchemes());
  wp.customize('design_style', value => {
    selectedDesignStyle = value.get();
    value.bind(to => {
      selectedDesignStyle = to;
      loadColorSchemes('one');
      $(`#color_scheme_control-${selectedDesignStyle}-one`).prop('checked', true);
    });
  });
  wp.customize('color_scheme', value => {
    value.bind(colorScheme => loadColorSchemes(colorScheme));
  });
  wp.customize('background_color', value => {
    value.bind(to => setColor(to, '--go--color--background'));
  });
  wp.customize('primary_color', value => {
    value.bind(to => setColor(to, '--go--color--primary'));
  });
  wp.customize('secondary_color', value => {
    value.bind(to => setColor(to, '--go--color--secondary'));
  });
  wp.customize('tertiary_color', value => {
    value.bind(to => setColor(to, '--go--color--tertiary'));
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/design-style.js":
/*!****************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/design-style.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const $ = jQuery;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  wp.customize('design_style', value => {
    value.bind(to => {
      $('#customize-preview').addClass('is-loading');

      if ('undefined' !== typeof GoPreviewData.design_styles && 'undefined' !== GoPreviewData.design_styles[to]) {
        setTimeout(function () {
          const designStyle = GoPreviewData.design_styles[to];
          $('link[id*="design-style"]').attr('href', designStyle.url);
          setTimeout(function () {
            $('#customize-preview').removeClass('is-loading');
          }, 500);
        }, 500); // match the .02s transition time from core
      }
    });
  });
  /**
   * Set viewport basis
   *
   * @param {*} size
   */

  const setViewportBasis = size => {
    document.documentElement.style.setProperty('--go--viewport-basis', size ? size : '1000');
  };

  wp.customize('viewport_basis', value => {
    value.bind(to => setViewportBasis(to));
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/footer.js":
/*!**********************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/footer.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

const $ = jQuery;
$(document).ready(setMenuLocationDescription);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  wp.customize('footer_variation', value => {
    value.bind(to => {
      $('body').removeClass('has-footer-1 has-footer-2 has-footer-3 has-footer-4').addClass('has-' + to);
      setMenuLocationDescription();
    });
  });
  wp.customize('copyright', function (value) {
    value.bind(function (to) {
      $('.copyright').html(to);
    });
  });
  wp.customize('footer_background_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-footer--color--background', setTo); // Add class if a background color is applied.

      if (to) {
        $('body').addClass('has-footer-background');
        $('.site-footer').addClass('has-background');
      } else {
        $('body').removeClass('has-footer-background');
        $('.site-footer').removeClass('has-background');
      }
    });
  });
  wp.customize('social_icon_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-social--color--text', setTo);
    });
  });
  wp.customize('footer_text_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-footer--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-footer-navigation--color--text', setTo);
    });
  });
  wp.customize('footer_heading_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : null;
      document.querySelector(':root').style.setProperty('--go-footer-heading--color--text', setTo);
    });
  });

  for (let i = 0; i < GoPreviewData.socialIcons.length; i++) {
    wp.customize(`social_icon_${GoPreviewData.socialIcons[i]}`, value => {
      value.bind(to => {
        if (to) {
          $(`.social-icon-${GoPreviewData.socialIcons[i]}`).removeClass('display-none');
        } else {
          $(`.social-icon-${GoPreviewData.socialIcons[i]}`).addClass('display-none');
        }
      });
    });
  }
});

function setMenuLocationDescription() {
  const menuLocationsDescription = $('.customize-section-title-menu_locations-description').text();
  const menuLocationCount = ['footer-1', 'footer-2'].includes(wp.customize('footer_variation').get()) ? '2' : '4';
  $('.customize-section-title-menu_locations-description').text(menuLocationsDescription.replace(/[0-9]/g, menuLocationCount));
}

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/header.js":
/*!**********************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/header.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./.dev/assets/admin/js/customize/util.js");

const $ = jQuery;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  wp.customize('header_variation', value => {
    value.bind(to => {
      $('body').removeClass('has-header-1 has-header-2 has-header-3 has-header-4 has-header-5 has-header-6 has-header-7').addClass('has-' + to);
    });
  });
  wp.customize('header_background_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-header--color--background', setTo); // Add class if a background color is applied.

      if (to) {
        $('.header').addClass('has-background');
      } else {
        $('.header').removeClass('has-background');
      }
    });
  });
  wp.customize('header_text_color', value => {
    value.bind(to => {
      const hsl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.hexToHSL)(to);
      const setTo = to ? `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)` : undefined;
      document.querySelector(':root').style.setProperty('--go-navigation--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-site-description--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-search-button--color--text', setTo);
      document.querySelector(':root').style.setProperty('--go-site-title--color--text', setTo);
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/logo-sizing.js":
/*!***************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/logo-sizing.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  /**
   * Set Logo width.
   *
   * @param {*} width
   */
  const setLogoWidth = width => {
    document.documentElement.style.setProperty('--go-logo--max-width', width ? `${width}px` : 'none');
  };
  /**
   * Set Logo mobile width.
   *
   * @param {*} width
   */


  const setLogoMobileWidth = width => {
    document.documentElement.style.setProperty('--go-logo-mobile--max-width', width ? `${width}px` : 'none');
  };

  wp.customize('logo_width', value => {
    value.bind(to => setLogoWidth(to));
  });
  wp.customize('logo_width_mobile', value => {
    value.bind(to => setLogoMobileWidth(to));
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/preview/page-titles.js":
/*!***************************************************************!*\
  !*** ./.dev/assets/admin/js/customize/preview/page-titles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const $ = jQuery; // eslint-disable-line

/* harmony default export */ __webpack_exports__["default"] = (() => {
  wp.customize('page_titles', value => {
    const selectors = '#content > .entry-header, body.page article .entry-header, body.woocommerce .entry-header';
    value.bind(to => {
      if (to) {
        $('body').addClass('has-page-titles');
        $(selectors).removeClass('display-none');
      } else {
        $('body').removeClass('has-page-titles');
        $(selectors).addClass('display-none');
      }
    });
  });
});

/***/ }),

/***/ "./.dev/assets/admin/js/customize/util.js":
/*!************************************************!*\
  !*** ./.dev/assets/admin/js/customize/util.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToHSL": function() { return /* binding */ hexToHSL; }
/* harmony export */ });
/**
 * Functions to convert hex color to HSL
 *
 * @param {*} H
 */
function hexToHSL(H) {
  // Convert hex to RGB first
  let b = 0;
  let g = 0;
  let r = 0;

  if (4 === H.length) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (7 === H.length) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
  } // Then to HSL


  r /= 255;
  g /= 255;
  b /= 255;
  const cmax = Math.max(r, g, b);
  const cmin = Math.min(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (0 === delta) {
    h = 0;
  } else if (cmax === r) {
    h = (g - b) / delta % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (0 > h) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = 0 === delta ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed();
  l = +(l * 100).toFixed();
  return [h, s, l];
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************************************!*\
  !*** ./.dev/assets/admin/js/customize-preview.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customize_preview_color_schemes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize/preview/color-schemes */ "./.dev/assets/admin/js/customize/preview/color-schemes.js");
/* harmony import */ var _customize_preview_design_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize/preview/design-style */ "./.dev/assets/admin/js/customize/preview/design-style.js");
/* harmony import */ var _customize_preview_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customize/preview/footer */ "./.dev/assets/admin/js/customize/preview/footer.js");
/* harmony import */ var _customize_preview_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize/preview/header */ "./.dev/assets/admin/js/customize/preview/header.js");
/* harmony import */ var _customize_preview_logo_sizing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customize/preview/logo-sizing */ "./.dev/assets/admin/js/customize/preview/logo-sizing.js");
/* harmony import */ var _customize_preview_page_titles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customize/preview/page-titles */ "./.dev/assets/admin/js/customize/preview/page-titles.js");






(0,_customize_preview_design_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_customize_preview_header__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_customize_preview_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_customize_preview_color_schemes__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_customize_preview_logo_sizing__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_customize_preview_page_titles__WEBPACK_IMPORTED_MODULE_5__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYWRtaW4vY3VzdG9taXplLXByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25GQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplL3ByZXZpZXcvY29sb3Itc2NoZW1lcy5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2Rlc2lnbi1zdHlsZS5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2hlYWRlci5qcyIsIndlYnBhY2s6Ly9nby8uLy5kZXYvYXNzZXRzL2FkbWluL2pzL2N1c3RvbWl6ZS9wcmV2aWV3L2xvZ28tc2l6aW5nLmpzIiwid2VicGFjazovL2dvLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplL3ByZXZpZXcvcGFnZS10aXRsZXMuanMiLCJ3ZWJwYWNrOi8vZ28vLi8uZGV2L2Fzc2V0cy9hZG1pbi9qcy9jdXN0b21pemUvdXRpbC5qcyIsIndlYnBhY2s6Ly9nby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvLy4vLmRldi9hc3NldHMvYWRtaW4vanMvY3VzdG9taXplLXByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGV4VG9IU0wgfSBmcm9tICcuLi91dGlsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRsZXQgc2VsZWN0ZWREZXNpZ25TdHlsZSA9IEdvUHJldmlld0RhdGEuc2VsZWN0ZWREZXNpZ25TdHlsZTtcblxuXHQvKipcblx0ICogU2V0IGNvbG9yXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gY29sb3Jcblx0ICogQHBhcmFtIHsqfSBjc3NWYXJcblx0ICovXG5cdGNvbnN0IHNldENvbG9yID0gKCBjb2xvciwgY3NzVmFyICkgPT4ge1xuXHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCBjb2xvciApO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggYCR7IGNzc1ZhciB9YCwgYGhzbCgkeyBoc2xbIDAgXSB9LCAkeyBoc2xbIDEgXSB9JSwgJHsgaHNsWyAyIF0gfSUpYCApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBMb2FkIHRoZSBjb2xvciBzY2hlbWVzIGZvciB0aGUgc2VsZWN0ZWQgZGVzaWduIHN0eWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbG9yU2NoZW1lXG5cdCAqL1xuXHRjb25zdCBsb2FkQ29sb3JTY2hlbWVzID0gKCBjb2xvclNjaGVtZSApID0+IHtcblx0XHRjb25zdCBkZXNpZ25TdHlsZSA9IGdldERlc2lnblN0eWxlKCBzZWxlY3RlZERlc2lnblN0eWxlICk7XG5cdFx0Y29sb3JTY2hlbWUgPSBjb2xvclNjaGVtZS5yZXBsYWNlKCBgJHsgc2VsZWN0ZWREZXNpZ25TdHlsZSB9LWAsICcnICk7XG5cblx0XHRpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgZGVzaWduU3R5bGUuY29sb3Jfc2NoZW1lc1sgY29sb3JTY2hlbWUgXSAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHdwLmN1c3RvbWl6ZS5zZXR0aW5ncy5jb250cm9scyApIHtcblx0XHRcdGNvbnN0IGNvbG9ycyA9IGRlc2lnblN0eWxlLmNvbG9yX3NjaGVtZXNbIGNvbG9yU2NoZW1lIF07XG5cdFx0XHR0b2dnbGVDb2xvclNjaGVtZXMoKTtcblxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHVwZGF0ZVZpZXdwb3J0QmFzaXMoIGRlc2lnblN0eWxlICk7XG5cdFx0XHR9LCAyMDAgKTtcblxuXHRcdFx0T2JqZWN0LmVudHJpZXMoIHdwLmN1c3RvbWl6ZS5zZXR0aW5ncy5jb250cm9scyApXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdFx0XHQuZmlsdGVyKCAoIFsgX2NvbnRyb2wsIGNvbmZpZyBdICkgPT4gY29uZmlnLnR5cGUgPT09ICdjb2xvcicgKVxuXHRcdFx0XHQuZm9yRWFjaCggKCBbIGN1c3RvbWl6ZXJDb250cm9sLCBjb25maWcgXSApID0+IHtcblx0XHRcdFx0XHRjb25zdCBjdXN0b21pemVyU2V0dGluZyA9IHdwLmN1c3RvbWl6ZSggY29uZmlnLnNldHRpbmdzLmRlZmF1bHQgKTtcblx0XHRcdFx0XHRjb25zdCBjb2xvciA9IGNvbG9yc1sgY29uZmlnLnNldHRpbmdzLmRlZmF1bHQucmVwbGFjZSggJ19jb2xvcicsICcnICkgXSB8fCAnJztcblxuXHRcdFx0XHRcdGN1c3RvbWl6ZXJTZXR0aW5nLnNldCggY29sb3IgKTtcblxuXHRcdFx0XHRcdHdwLmN1c3RvbWl6ZS5jb250cm9sKCBjdXN0b21pemVyQ29udHJvbCApLmNvbnRhaW5lci5maW5kKCAnLmNvbG9yLXBpY2tlci1oZXgnIClcblx0XHRcdFx0XHRcdC5kYXRhKCAnZGF0YS1kZWZhdWx0LWNvbG9yJywgY29sb3IgKVxuXHRcdFx0XHRcdFx0LndwQ29sb3JQaWNrZXIoICdkZWZhdWx0Q29sb3InLCBjb2xvciApXG5cdFx0XHRcdFx0XHQudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQ29udHJvbCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgY29sb3Igc2NoZW1lcyBzZWxlY3Rpb25zLlxuXHQgKi9cblx0Y29uc3QgdG9nZ2xlQ29sb3JTY2hlbWVzID0gKCkgPT4ge1xuXHRcdCQoICdsYWJlbFtmb3JePWNvbG9yX3NjaGVtZV9jb250cm9sXScgKS5oaWRlKCk7XG5cdFx0JCggYGxhYmVsW2Zvcl49Y29sb3Jfc2NoZW1lX2NvbnRyb2wtJHsgc2VsZWN0ZWREZXNpZ25TdHlsZSB9LV1gICkuc2hvdygpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIHZpZXdwb3J0IGJhc2lzIGZvciB0aGUgc2VsZWN0ZWQgZGVzaWduIHN0eWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRlc2lnblN0eWxlXG5cdCAqL1xuXHRjb25zdCB1cGRhdGVWaWV3cG9ydEJhc2lzID0gKCBkZXNpZ25TdHlsZSApID0+IHtcblx0XHRjb25zdCB2aWV3cG9ydEJhc2lzID0gKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGRlc2lnblN0eWxlLnZpZXdwb3J0X2Jhc2lzICkgPyBkZXNpZ25TdHlsZS52aWV3cG9ydF9iYXNpcyA6ICc5NTAnO1xuXHRcdHdwLmN1c3RvbWl6ZS5jb250cm9sKCAndmlld3BvcnRfYmFzaXMnICkuc2V0dGluZyggdmlld3BvcnRCYXNpcyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBkZXNpZ24gc3R5bGUgYXJyYXlcblx0ICpcblx0ICogQHBhcmFtIHsqfSBkZXNpZ25TdHlsZVxuXHQgKi9cblx0Y29uc3QgZ2V0RGVzaWduU3R5bGUgPSAoIGRlc2lnblN0eWxlICkgPT4ge1xuXHRcdGlmIChcblx0XHRcdCd1bmRlZmluZWQnICE9PSB0eXBlb2YgR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzICYmXG5cdFx0XHQndW5kZWZpbmVkJyAhPT0gR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzWyBkZXNpZ25TdHlsZSBdXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzWyBkZXNpZ25TdHlsZSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR3cC5jdXN0b21pemUuYmluZCggJ3JlYWR5JywgKCkgPT4gdG9nZ2xlQ29sb3JTY2hlbWVzKCkgKTtcblxuXHR3cC5jdXN0b21pemUoICdkZXNpZ25fc3R5bGUnLCAoIHZhbHVlICkgPT4ge1xuXHRcdHNlbGVjdGVkRGVzaWduU3R5bGUgPSB2YWx1ZS5nZXQoKTtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0c2VsZWN0ZWREZXNpZ25TdHlsZSA9IHRvO1xuXHRcdFx0bG9hZENvbG9yU2NoZW1lcyggJ29uZScgKTtcblx0XHRcdCQoIGAjY29sb3Jfc2NoZW1lX2NvbnRyb2wtJHsgc2VsZWN0ZWREZXNpZ25TdHlsZSB9LW9uZWAgKS5wcm9wKCAnY2hlY2tlZCcsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdjb2xvcl9zY2hlbWUnLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggY29sb3JTY2hlbWUgKSA9PiBsb2FkQ29sb3JTY2hlbWVzKCBjb2xvclNjaGVtZSApICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdiYWNrZ3JvdW5kX2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0Q29sb3IoIHRvLCAnLS1nby0tY29sb3ItLWJhY2tncm91bmQnICkgKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3ByaW1hcnlfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiBzZXRDb2xvciggdG8sICctLWdvLS1jb2xvci0tcHJpbWFyeScgKSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnc2Vjb25kYXJ5X2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0Q29sb3IoIHRvLCAnLS1nby0tY29sb3ItLXNlY29uZGFyeScgKSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAndGVydGlhcnlfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiBzZXRDb2xvciggdG8sICctLWdvLS1jb2xvci0tdGVydGlhcnknICkgKTtcblx0fSApO1xufTtcbiIsImNvbnN0ICQgPSBqUXVlcnk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0d3AuY3VzdG9taXplKCAnZGVzaWduX3N0eWxlJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0JCggJyNjdXN0b21pemUtcHJldmlldycgKS5hZGRDbGFzcyggJ2lzLWxvYWRpbmcnICk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0J3VuZGVmaW5lZCcgIT09IHR5cGVvZiBHb1ByZXZpZXdEYXRhLmRlc2lnbl9zdHlsZXMgJiZcblx0XHRcdFx0J3VuZGVmaW5lZCcgIT09IEdvUHJldmlld0RhdGEuZGVzaWduX3N0eWxlc1sgdG8gXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0IGRlc2lnblN0eWxlID0gR29QcmV2aWV3RGF0YS5kZXNpZ25fc3R5bGVzWyB0byBdO1xuXHRcdFx0XHRcdCQoICdsaW5rW2lkKj1cImRlc2lnbi1zdHlsZVwiXScgKS5hdHRyKCAnaHJlZicsIGRlc2lnblN0eWxlLnVybCApO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKCAnI2N1c3RvbWl6ZS1wcmV2aWV3JyApLnJlbW92ZUNsYXNzKCAnaXMtbG9hZGluZycgKTtcblx0XHRcdFx0XHR9LCA1MDAgKTtcblx0XHRcdFx0fSwgNTAwICk7IC8vIG1hdGNoIHRoZSAuMDJzIHRyYW5zaXRpb24gdGltZSBmcm9tIGNvcmVcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcblx0LyoqXG5cdCAqIFNldCB2aWV3cG9ydCBiYXNpc1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHNpemVcblx0ICovXG5cdGNvbnN0IHNldFZpZXdwb3J0QmFzaXMgPSAoIHNpemUgKSA9PiB7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby0tdmlld3BvcnQtYmFzaXMnLCBzaXplID8gc2l6ZSA6ICcxMDAwJyApO1xuXHR9O1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3ZpZXdwb3J0X2Jhc2lzJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0Vmlld3BvcnRCYXNpcyggdG8gKSApO1xuXHR9ICk7XG59O1xuIiwiaW1wb3J0IHsgaGV4VG9IU0wgfSBmcm9tICcuLi91dGlsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuJCggZG9jdW1lbnQgKS5yZWFkeSggc2V0TWVudUxvY2F0aW9uRGVzY3JpcHRpb24gKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHR3cC5jdXN0b21pemUoICdmb290ZXJfdmFyaWF0aW9uJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0JCggJ2JvZHknIClcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnaGFzLWZvb3Rlci0xIGhhcy1mb290ZXItMiBoYXMtZm9vdGVyLTMgaGFzLWZvb3Rlci00JyApXG5cdFx0XHRcdC5hZGRDbGFzcyggJ2hhcy0nICsgdG8gKTtcblx0XHRcdHNldE1lbnVMb2NhdGlvbkRlc2NyaXB0aW9uKCk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnY29weXJpZ2h0JywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdCQoICcuY29weXJpZ2h0JyApLmh0bWwoIHRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnZm9vdGVyX2JhY2tncm91bmRfY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRjb25zdCBoc2wgPSBoZXhUb0hTTCggdG8gKTtcblx0XHRcdGNvbnN0IHNldFRvID0gdG8gPyBgaHNsKCR7IGhzbFsgMCBdIH0sICR7IGhzbFsgMSBdIH0lLCAkeyBoc2xbIDIgXSB9JSlgIDogdW5kZWZpbmVkO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1mb290ZXItLWNvbG9yLS1iYWNrZ3JvdW5kJywgc2V0VG8gKTtcblxuXHRcdFx0Ly8gQWRkIGNsYXNzIGlmIGEgYmFja2dyb3VuZCBjb2xvciBpcyBhcHBsaWVkLlxuXHRcdFx0aWYgKCB0byApIHtcblx0XHRcdFx0JCggJ2JvZHknICkuYWRkQ2xhc3MoICdoYXMtZm9vdGVyLWJhY2tncm91bmQnICk7XG5cdFx0XHRcdCQoICcuc2l0ZS1mb290ZXInICkuYWRkQ2xhc3MoICdoYXMtYmFja2dyb3VuZCcgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoICdib2R5JyApLnJlbW92ZUNsYXNzKCAnaGFzLWZvb3Rlci1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0XHQkKCAnLnNpdGUtZm9vdGVyJyApLnJlbW92ZUNsYXNzKCAnaGFzLWJhY2tncm91bmQnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0d3AuY3VzdG9taXplKCAnc29jaWFsX2ljb25fY29sb3InLCAoIHZhbHVlICkgPT4ge1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRjb25zdCBoc2wgPSBoZXhUb0hTTCggdG8gKTtcblx0XHRcdGNvbnN0IHNldFRvID0gdG8gPyBgaHNsKCR7IGhzbFsgMCBdIH0sICR7IGhzbFsgMSBdIH0lLCAkeyBoc2xbIDIgXSB9JSlgIDogdW5kZWZpbmVkO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1zb2NpYWwtLWNvbG9yLS10ZXh0Jywgc2V0VG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdmb290ZXJfdGV4dF9jb2xvcicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCB0byApO1xuXHRcdFx0Y29uc3Qgc2V0VG8gPSB0byA/IGBoc2woJHsgaHNsWyAwIF0gfSwgJHsgaHNsWyAxIF0gfSUsICR7IGhzbFsgMiBdIH0lKWAgOiB1bmRlZmluZWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLWZvb3Rlci0tY29sb3ItLXRleHQnLCBzZXRUbyApO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1mb290ZXItbmF2aWdhdGlvbi0tY29sb3ItLXRleHQnLCBzZXRUbyApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ2Zvb3Rlcl9oZWFkaW5nX2NvbG9yJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0Y29uc3QgaHNsID0gaGV4VG9IU0woIHRvICk7XG5cdFx0XHRjb25zdCBzZXRUbyA9IHRvID8gYGhzbCgkeyBoc2xbIDAgXSB9LCAkeyBoc2xbIDEgXSB9JSwgJHsgaHNsWyAyIF0gfSUpYCA6IG51bGw7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLWZvb3Rlci1oZWFkaW5nLS1jb2xvci0tdGV4dCcsIHNldFRvICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgR29QcmV2aWV3RGF0YS5zb2NpYWxJY29ucy5sZW5ndGg7IGkrKyApIHtcblxuXHRcdHdwLmN1c3RvbWl6ZSggYHNvY2lhbF9pY29uXyR7R29QcmV2aWV3RGF0YS5zb2NpYWxJY29uc1tpXX1gLCAoIHZhbHVlICkgPT4ge1xuXHRcdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdFx0aWYgKCB0byApIHtcblx0XHRcdFx0XHQkKCBgLnNvY2lhbC1pY29uLSR7R29QcmV2aWV3RGF0YS5zb2NpYWxJY29uc1tpXX1gICkucmVtb3ZlQ2xhc3MoICdkaXNwbGF5LW5vbmUnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JCggYC5zb2NpYWwtaWNvbi0ke0dvUHJldmlld0RhdGEuc29jaWFsSWNvbnNbaV19YCApLmFkZENsYXNzKCAnZGlzcGxheS1ub25lJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdH1cbn07XG5cbmZ1bmN0aW9uIHNldE1lbnVMb2NhdGlvbkRlc2NyaXB0aW9uKCkge1xuXHRjb25zdCBtZW51TG9jYXRpb25zRGVzY3JpcHRpb24gPSAkKCAnLmN1c3RvbWl6ZS1zZWN0aW9uLXRpdGxlLW1lbnVfbG9jYXRpb25zLWRlc2NyaXB0aW9uJyApLnRleHQoKTtcblx0Y29uc3QgbWVudUxvY2F0aW9uQ291bnQgPSBbICdmb290ZXItMScsICdmb290ZXItMicgXS5pbmNsdWRlcyggd3AuY3VzdG9taXplKCAnZm9vdGVyX3ZhcmlhdGlvbicgKS5nZXQoKSApID8gJzInIDogJzQnO1xuXHQkKCAnLmN1c3RvbWl6ZS1zZWN0aW9uLXRpdGxlLW1lbnVfbG9jYXRpb25zLWRlc2NyaXB0aW9uJyApLnRleHQoIG1lbnVMb2NhdGlvbnNEZXNjcmlwdGlvbi5yZXBsYWNlKCAvWzAtOV0vZywgbWVudUxvY2F0aW9uQ291bnQgKSApO1xufVxuIiwiaW1wb3J0IHsgaGV4VG9IU0wgfSBmcm9tICcuLi91dGlsJztcblxuY29uc3QgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHR3cC5jdXN0b21pemUoICdoZWFkZXJfdmFyaWF0aW9uJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4ge1xuXHRcdFx0JCggJ2JvZHknIClcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnaGFzLWhlYWRlci0xIGhhcy1oZWFkZXItMiBoYXMtaGVhZGVyLTMgaGFzLWhlYWRlci00IGhhcy1oZWFkZXItNSBoYXMtaGVhZGVyLTYgaGFzLWhlYWRlci03JyApXG5cdFx0XHRcdC5hZGRDbGFzcyggJ2hhcy0nICsgdG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdoZWFkZXJfYmFja2dyb3VuZF9jb2xvcicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCB0byApO1xuXHRcdFx0Y29uc3Qgc2V0VG8gPSB0byA/IGBoc2woJHsgaHNsWyAwIF0gfSwgJHsgaHNsWyAxIF0gfSUsICR7IGhzbFsgMiBdIH0lKWAgOiB1bmRlZmluZWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLWhlYWRlci0tY29sb3ItLWJhY2tncm91bmQnLCBzZXRUbyApO1xuXG5cdFx0XHQvLyBBZGQgY2xhc3MgaWYgYSBiYWNrZ3JvdW5kIGNvbG9yIGlzIGFwcGxpZWQuXG5cdFx0XHRpZiAoIHRvICkge1xuXHRcdFx0XHQkKCAnLmhlYWRlcicgKS5hZGRDbGFzcyggJ2hhcy1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggJy5oZWFkZXInICkucmVtb3ZlQ2xhc3MoICdoYXMtYmFja2dyb3VuZCcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdoZWFkZXJfdGV4dF9jb2xvcicsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHtcblx0XHRcdGNvbnN0IGhzbCA9IGhleFRvSFNMKCB0byApO1xuXHRcdFx0Y29uc3Qgc2V0VG8gPSB0byA/IGBoc2woJHsgaHNsWyAwIF0gfSwgJHsgaHNsWyAxIF0gfSUsICR7IGhzbFsgMiBdIH0lKWAgOiB1bmRlZmluZWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLW5hdmlnYXRpb24tLWNvbG9yLS10ZXh0Jywgc2V0VG8gKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICc6cm9vdCcgKS5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tZ28tc2l0ZS1kZXNjcmlwdGlvbi0tY29sb3ItLXRleHQnLCBzZXRUbyApO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzpyb290JyApLnN0eWxlLnNldFByb3BlcnR5KCAnLS1nby1zZWFyY2gtYnV0dG9uLS1jb2xvci0tdGV4dCcsIHNldFRvICk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnOnJvb3QnICkuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLXNpdGUtdGl0bGUtLWNvbG9yLS10ZXh0Jywgc2V0VG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdC8qKlxuXHQgKiBTZXQgTG9nbyB3aWR0aC5cblx0ICpcblx0ICogQHBhcmFtIHsqfSB3aWR0aFxuXHQgKi9cblx0Y29uc3Qgc2V0TG9nb1dpZHRoID0gKCB3aWR0aCApID0+IHtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoICctLWdvLWxvZ28tLW1heC13aWR0aCcsIHdpZHRoID8gYCR7IHdpZHRoIH1weGAgOiAnbm9uZScgKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0IExvZ28gbW9iaWxlIHdpZHRoLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHdpZHRoXG5cdCAqL1xuXHRjb25zdCBzZXRMb2dvTW9iaWxlV2lkdGggPSAoIHdpZHRoICkgPT4ge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSggJy0tZ28tbG9nby1tb2JpbGUtLW1heC13aWR0aCcsIHdpZHRoID8gYCR7IHdpZHRoIH1weGAgOiAnbm9uZScgKTtcblx0fTtcblxuXHR3cC5jdXN0b21pemUoICdsb2dvX3dpZHRoJywgKCB2YWx1ZSApID0+IHtcblx0XHR2YWx1ZS5iaW5kKCAoIHRvICkgPT4gc2V0TG9nb1dpZHRoKCB0byApICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdsb2dvX3dpZHRoX21vYmlsZScsICggdmFsdWUgKSA9PiB7XG5cdFx0dmFsdWUuYmluZCggKCB0byApID0+IHNldExvZ29Nb2JpbGVXaWR0aCggdG8gKSApO1xuXHR9ICk7XG59O1xuIiwiY29uc3QgJCA9IGpRdWVyeTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHdwLmN1c3RvbWl6ZSggJ3BhZ2VfdGl0bGVzJywgKCB2YWx1ZSApID0+IHtcblx0XHRjb25zdCBzZWxlY3RvcnMgPSAnI2NvbnRlbnQgPiAuZW50cnktaGVhZGVyLCBib2R5LnBhZ2UgYXJ0aWNsZSAuZW50cnktaGVhZGVyLCBib2R5Lndvb2NvbW1lcmNlIC5lbnRyeS1oZWFkZXInO1xuXHRcdHZhbHVlLmJpbmQoICggdG8gKSA9PiB7XG5cdFx0XHRpZiAoIHRvICkge1xuXHRcdFx0XHQkKCAnYm9keScgKS5hZGRDbGFzcyggJ2hhcy1wYWdlLXRpdGxlcycgKTtcblx0XHRcdFx0JCggc2VsZWN0b3JzICkucmVtb3ZlQ2xhc3MoICdkaXNwbGF5LW5vbmUnICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCAnYm9keScgKS5yZW1vdmVDbGFzcyggJ2hhcy1wYWdlLXRpdGxlcycgKTtcblx0XHRcdFx0JCggc2VsZWN0b3JzICkuYWRkQ2xhc3MoICdkaXNwbGF5LW5vbmUnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59O1xuIiwiLyoqXG4gKiBGdW5jdGlvbnMgdG8gY29udmVydCBoZXggY29sb3IgdG8gSFNMXG4gKlxuICogQHBhcmFtIHsqfSBIXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb0hTTCggSCApIHtcblx0Ly8gQ29udmVydCBoZXggdG8gUkdCIGZpcnN0XG5cdGxldCBiID0gMDtcblx0bGV0IGcgPSAwO1xuXHRsZXQgciA9IDA7XG5cdGlmICggNCA9PT0gSC5sZW5ndGggKSB7XG5cdFx0ciA9IGAweCR7IEhbIDEgXSB9JHsgSFsgMSBdIH1gO1xuXHRcdGcgPSBgMHgkeyBIWyAyIF0gfSR7IEhbIDIgXSB9YDtcblx0XHRiID0gYDB4JHsgSFsgMyBdIH0keyBIWyAzIF0gfWA7XG5cdH0gZWxzZSBpZiAoIDcgPT09IEgubGVuZ3RoICkge1xuXHRcdHIgPSBgMHgkeyBIWyAxIF0gfSR7IEhbIDIgXSB9YDtcblx0XHRnID0gYDB4JHsgSFsgMyBdIH0keyBIWyA0IF0gfWA7XG5cdFx0YiA9IGAweCR7IEhbIDUgXSB9JHsgSFsgNiBdIH1gO1xuXHR9XG5cblx0Ly8gVGhlbiB0byBIU0xcblx0ciAvPSAyNTU7XG5cdGcgLz0gMjU1O1xuXHRiIC89IDI1NTtcblxuXHRjb25zdCBjbWF4ID0gTWF0aC5tYXgoIHIsIGcsIGIgKTtcblx0Y29uc3QgY21pbiA9IE1hdGgubWluKCByLCBnLCBiICk7XG5cdGNvbnN0IGRlbHRhID0gY21heCAtIGNtaW47XG5cblx0bGV0IGggPSAwO1xuXHRsZXRcdHMgPSAwO1xuXHRsZXQgbCA9IDA7XG5cblx0aWYgKCAwID09PSBkZWx0YSApIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmICggY21heCA9PT0gciApIHtcblx0XHRoID0gKCAoIGcgLSBiICkgLyBkZWx0YSApICUgNjtcblx0fSBlbHNlIGlmICggY21heCA9PT0gZyApIHtcblx0XHRoID0gKCAoIGIgLSByICkgLyBkZWx0YSApICsgMjtcblx0fSBlbHNlIHtcblx0XHRoID0gKCAoIHIgLSBnICkgLyBkZWx0YSApICsgNDtcblx0fVxuXG5cdGggPSBNYXRoLnJvdW5kKCBoICogNjAgKTtcblxuXHRpZiAoIDAgPiBoICkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9ICggY21heCArIGNtaW4gKSAvIDI7XG5cdHMgPSAwID09PSBkZWx0YSA/IDAgOiBkZWx0YSAvICggMSAtIE1hdGguYWJzKCAoIDIgKiBsICkgLSAxICkgKTtcblx0cyA9ICsoIHMgKiAxMDAgKS50b0ZpeGVkKCk7XG5cdGwgPSArKCBsICogMTAwICkudG9GaXhlZCgpO1xuXG5cdHJldHVybiBbIGgsIHMsIGwgXTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDb2xvclNjaGVtZVByZXZpZXcgZnJvbSAnLi9jdXN0b21pemUvcHJldmlldy9jb2xvci1zY2hlbWVzJztcbmltcG9ydCBEZXNpZ25TdHlsZVByZXZpZXcgZnJvbSAnLi9jdXN0b21pemUvcHJldmlldy9kZXNpZ24tc3R5bGUnO1xuaW1wb3J0IEZvb3RlckNvbG9yc1ByZXZpZXcgZnJvbSAnLi9jdXN0b21pemUvcHJldmlldy9mb290ZXInO1xuaW1wb3J0IEhlYWRlckNvbG9yc1ByZXZpZXcgZnJvbSAnLi9jdXN0b21pemUvcHJldmlldy9oZWFkZXInO1xuaW1wb3J0IExvZ29TaXppbmdQcmV2aWV3IGZyb20gJy4vY3VzdG9taXplL3ByZXZpZXcvbG9nby1zaXppbmcnO1xuaW1wb3J0IFBhZ2VUaXRsZXNQcmV2aWV3IGZyb20gJy4vY3VzdG9taXplL3ByZXZpZXcvcGFnZS10aXRsZXMnO1xuXG5EZXNpZ25TdHlsZVByZXZpZXcoKTtcbkhlYWRlckNvbG9yc1ByZXZpZXcoKTtcbkZvb3RlckNvbG9yc1ByZXZpZXcoKTtcbkNvbG9yU2NoZW1lUHJldmlldygpO1xuTG9nb1NpemluZ1ByZXZpZXcoKTtcblBhZ2VUaXRsZXNQcmV2aWV3KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=