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

/***/ "(app-pages-browser)/./src/components/Searchbar.tsx":
/*!**************************************!*\
  !*** ./src/components/Searchbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.2_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.2_@babel+core@7.22.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst isValidAmazonProductURL = (url)=>{\n    try {\n        const parsedURL = new URL(url);\n        const hostname = parsedURL.hostname;\n        if (hostname.includes(\"amazon.com\") || hostname.includes(\"amazon.\") || hostname.endsWith(\"amazon\")) {\n            return true;\n        }\n    } catch (error) {\n        return false;\n    }\n    return false;\n};\nfunction Searchbar() {\n    _s();\n    const [searchPrompt, setSearchPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"mt-12 flex flex-wrap gap-4\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"searchbar-input\",\n                placeholder: \"Enter product link\",\n                type: \"text\",\n                value: searchPrompt,\n                onChange: (e)=>setSearchPrompt(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hercules\\\\Dev\\\\e-commerce-nextjs\\\\src\\\\components\\\\Searchbar.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"searchbar-btn\",\n                type: \"submit\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hercules\\\\Dev\\\\e-commerce-nextjs\\\\src\\\\components\\\\Searchbar.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hercules\\\\Dev\\\\e-commerce-nextjs\\\\src\\\\components\\\\Searchbar.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Searchbar, \"/pUQeyl8FsuI6O0ywFnvYDSw9jM=\");\n_c = Searchbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Searchbar);\nvar _c;\n$RefreshReg$(_c, \"Searchbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaGJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWdDO0FBRWhDLE1BQU1DLDBCQUEwQixDQUFDQztJQUMvQixJQUFJO1FBQ0YsTUFBTUMsWUFBWSxJQUFJQyxJQUFJRjtRQUMxQixNQUFNRyxXQUFXRixVQUFVRSxRQUFRO1FBRW5DLElBQ0VBLFNBQVNDLFFBQVEsQ0FBQyxpQkFDbEJELFNBQVNDLFFBQVEsQ0FBQyxjQUNsQkQsU0FBU0UsUUFBUSxDQUFDLFdBQ2xCO1lBQ0EsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTztJQUNUO0lBRUEsT0FBTztBQUNUO0FBRUEsU0FBU0M7O0lBQ1AsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUM7SUFFakQsTUFBTVksZUFBZSxDQUFDQztRQUNwQkEsTUFBTUMsY0FBYztJQUN0QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVO1FBQTZCQyxVQUFVTDs7MEJBQ3JELDhEQUFDTTtnQkFDQ0YsV0FBVTtnQkFDVkcsYUFBWTtnQkFDWkMsTUFBSztnQkFDTEMsT0FBT1g7Z0JBQ1BZLFVBQVUsQ0FBQ0MsSUFBTVosZ0JBQWdCWSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFakQsOERBQUNJO2dCQUFPVCxXQUFVO2dCQUFnQkksTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBS3REO0dBckJTWDtLQUFBQTtBQXVCVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hiYXIudHN4P2M5MjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgaXNWYWxpZEFtYXpvblByb2R1Y3RVUkwgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFyc2VkVVJMID0gbmV3IFVSTCh1cmwpXHJcbiAgICBjb25zdCBob3N0bmFtZSA9IHBhcnNlZFVSTC5ob3N0bmFtZVxyXG5cclxuICAgIGlmIChcclxuICAgICAgaG9zdG5hbWUuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSB8fFxyXG4gICAgICBob3N0bmFtZS5pbmNsdWRlcygnYW1hem9uLicpIHx8XHJcbiAgICAgIGhvc3RuYW1lLmVuZHNXaXRoKCdhbWF6b24nKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaGJhcigpIHtcclxuICBjb25zdCBbc2VhcmNoUHJvbXB0LCBzZXRTZWFyY2hQcm9tcHRdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC0xMiBmbGV4IGZsZXgtd3JhcCBnYXAtNFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hiYXItaW5wdXRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvZHVjdCBsaW5rXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3NlYXJjaFByb21wdH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFByb21wdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoYmFyLWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICBTZWFyY2hcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXJcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaXNWYWxpZEFtYXpvblByb2R1Y3RVUkwiLCJ1cmwiLCJwYXJzZWRVUkwiLCJVUkwiLCJob3N0bmFtZSIsImluY2x1ZGVzIiwiZW5kc1dpdGgiLCJlcnJvciIsIlNlYXJjaGJhciIsInNlYXJjaFByb21wdCIsInNldFNlYXJjaFByb21wdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Searchbar.tsx\n"));

/***/ })

});