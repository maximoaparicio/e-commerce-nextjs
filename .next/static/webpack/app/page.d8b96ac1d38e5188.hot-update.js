"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/HeroCarousel.tsx":
/*!*****************************************!*\
  !*** ./src/components/HeroCarousel.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.2_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/.pnpm/react-responsive-carousel@3.2.23/node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/.pnpm/react-responsive-carousel@3.2.23/node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.2_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable react/jsx-sort-props */ /* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst heroImages = [\n    {\n        imgUrl: \"/assets/images/hero-1.svg\",\n        alt: \"smartwatch\"\n    },\n    {\n        imgUrl: \"/assets/images/hero-2.svg\",\n        alt: \"bag\"\n    },\n    {\n        imgUrl: \"/assets/images/hero-3.svg\",\n        alt: \"lamp\"\n    },\n    {\n        imgUrl: \"/assets/images/hero-4.svg\",\n        alt: \"air fryer\"\n    },\n    {\n        imgUrl: \"/assets/images/hero-5.svg\",\n        alt: \"chair\"\n    }\n];\nfunction HeroCarousel() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hero-carousel\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                autoPlay: true,\n                infiniteLoop: true,\n                showThumbs: false,\n                showArrows: false,\n                // interval={2000}\n                showStatus: false,\n                children: heroImages.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: image.alt,\n                        className: \"object-contain\",\n                        height: 484,\n                        src: image.imgUrl,\n                        width: 484\n                    }, image.alt, false, {\n                        fileName: \"C:\\\\Users\\\\Hercules\\\\Dev\\\\e-commerce-nextjs\\\\src\\\\components\\\\HeroCarousel.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hercules\\\\Dev\\\\e-commerce-nextjs\\\\src\\\\components\\\\HeroCarousel.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                alt: \"arrow\",\n                className: \"absolute -left-[15%] bottom-0 z-0 max-xl:hidden\",\n                height: 175,\n                src: \"assets/icons/hand-drawn-arrow.svg\",\n                width: 175\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hercules\\\\Dev\\\\e-commerce-nextjs\\\\src\\\\components\\\\HeroCarousel.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hercules\\\\Dev\\\\e-commerce-nextjs\\\\src\\\\components\\\\HeroCarousel.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = HeroCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroCarousel);\nvar _c;\n$RefreshReg$(_c, \"HeroCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm9DYXJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdUNBQXVDO0FBR3VCO0FBQ1Y7QUFDdEI7QUFFOUIsTUFBTUUsYUFBYTtJQUNqQjtRQUFFQyxRQUFRO1FBQTZCQyxLQUFLO0lBQWE7SUFDekQ7UUFBRUQsUUFBUTtRQUE2QkMsS0FBSztJQUFNO0lBQ2xEO1FBQUVELFFBQVE7UUFBNkJDLEtBQUs7SUFBTztJQUNuRDtRQUFFRCxRQUFRO1FBQTZCQyxLQUFLO0lBQVk7SUFDeEQ7UUFBRUQsUUFBUTtRQUE2QkMsS0FBSztJQUFRO0NBQ3JEO0FBRUQsU0FBU0M7SUFDUCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNQLCtEQUFRQTtnQkFDUFEsUUFBUTtnQkFDUkMsWUFBWTtnQkFDWkMsWUFBWTtnQkFDWkMsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCQyxZQUFZOzBCQUVYVixXQUFXVyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2YsOERBQUNiLG1EQUFLQTt3QkFFSkcsS0FBS1UsTUFBTVYsR0FBRzt3QkFDZEcsV0FBVTt3QkFDVlEsUUFBUTt3QkFDUkMsS0FBS0YsTUFBTVgsTUFBTTt3QkFDakJjLE9BQU87dUJBTEZILE1BQU1WLEdBQUc7Ozs7Ozs7Ozs7MEJBVXBCLDhEQUFDSCxtREFBS0E7Z0JBQ0pHLEtBQUk7Z0JBQ0pHLFdBQVU7Z0JBQ1ZRLFFBQVE7Z0JBQ1JDLEtBQUk7Z0JBQ0pDLE9BQU87Ozs7Ozs7Ozs7OztBQUlmO0tBaENTWjtBQWtDVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZXJvQ2Fyb3VzZWwudHN4P2QyOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXNvcnQtcHJvcHMgKi9cclxuJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuY29uc3QgaGVyb0ltYWdlcyA9IFtcclxuICB7IGltZ1VybDogJy9hc3NldHMvaW1hZ2VzL2hlcm8tMS5zdmcnLCBhbHQ6ICdzbWFydHdhdGNoJyB9LFxyXG4gIHsgaW1nVXJsOiAnL2Fzc2V0cy9pbWFnZXMvaGVyby0yLnN2ZycsIGFsdDogJ2JhZycgfSxcclxuICB7IGltZ1VybDogJy9hc3NldHMvaW1hZ2VzL2hlcm8tMy5zdmcnLCBhbHQ6ICdsYW1wJyB9LFxyXG4gIHsgaW1nVXJsOiAnL2Fzc2V0cy9pbWFnZXMvaGVyby00LnN2ZycsIGFsdDogJ2FpciBmcnllcicgfSxcclxuICB7IGltZ1VybDogJy9hc3NldHMvaW1hZ2VzL2hlcm8tNS5zdmcnLCBhbHQ6ICdjaGFpcicgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gSGVyb0Nhcm91c2VsKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY2Fyb3VzZWxcIj5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICBpbmZpbml0ZUxvb3BcclxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAvLyBpbnRlcnZhbD17MjAwMH1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtoZXJvSW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBrZXk9e2ltYWdlLmFsdH1cclxuICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcclxuICAgICAgICAgICAgaGVpZ2h0PXs0ODR9XHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2UuaW1nVXJsfVxyXG4gICAgICAgICAgICB3aWR0aD17NDg0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIGFsdD1cImFycm93XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC1bMTUlXSBib3R0b20tMCB6LTAgbWF4LXhsOmhpZGRlblwiXHJcbiAgICAgICAgaGVpZ2h0PXsxNzV9XHJcbiAgICAgICAgc3JjPVwiYXNzZXRzL2ljb25zL2hhbmQtZHJhd24tYXJyb3cuc3ZnXCJcclxuICAgICAgICB3aWR0aD17MTc1fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ2Fyb3VzZWxcclxuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiSW1hZ2UiLCJoZXJvSW1hZ2VzIiwiaW1nVXJsIiwiYWx0IiwiSGVyb0Nhcm91c2VsIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXV0b1BsYXkiLCJpbmZpbml0ZUxvb3AiLCJzaG93VGh1bWJzIiwic2hvd0Fycm93cyIsInNob3dTdGF0dXMiLCJtYXAiLCJpbWFnZSIsImhlaWdodCIsInNyYyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/HeroCarousel.tsx\n"));

/***/ })

});