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

/***/ "(app-pages-browser)/./src/services/cartService.ts":
/*!*************************************!*\
  !*** ./src/services/cartService.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; },\n/* harmony export */   getCart: function() { return /* binding */ getCart; },\n/* harmony export */   pay: function() { return /* binding */ pay; }\n/* harmony export */ });\nasync function getCart() {\n    const response = await fetch(\"http://localhost:8000/get-cart\");\n    if (response.ok) {\n        return await response.json();\n    }\n}\nasync function addToCart(product) {\n    const response = await fetch(\"http://localhost:8000/add-to-cart\", {\n        body: JSON.stringify(product),\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (response.ok) {\n        return response;\n    }\n}\nasync function pay(cart) {\n    const response = await fetch(\"http://localhost:8000/pay\", {\n        body: JSON.stringify(cart),\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (response.ok) {\n        return response;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9jYXJ0U2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxlQUFlQTtJQUNsQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsSUFBR0QsU0FBU0UsRUFBRSxFQUFFO1FBQ1osT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQzlCO0FBQ0o7QUFFTyxlQUFlQyxVQUFVQyxPQUFZO0lBQ3hDLE1BQU1MLFdBQVcsTUFBTUMsTUFBTSxxQ0FDekI7UUFDSUssTUFBTUMsS0FBS0MsU0FBUyxDQUFDSDtRQUNyQkksUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1FBQ3BCO0lBQ0o7SUFDSixJQUFHVixTQUFTRSxFQUFFLEVBQUU7UUFDWixPQUFPRjtJQUNYO0FBQ0o7QUFFTyxlQUFlVyxJQUFJQyxJQUFTO0lBQy9CLE1BQU1aLFdBQVcsTUFBTUMsTUFBTSw2QkFDekI7UUFDSUssTUFBTUMsS0FBS0MsU0FBUyxDQUFDSTtRQUNyQkgsUUFBUTtRQUNSQyxTQUFTO1lBQ0wsZ0JBQWdCO1FBQ3BCO0lBQ0o7SUFDSixJQUFHVixTQUFTRSxFQUFFLEVBQUU7UUFDWixPQUFPRjtJQUNYO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2NhcnRTZXJ2aWNlLnRzP2E5YzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnQoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZXQtY2FydFwiKTtcbiAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUb0NhcnQocHJvZHVjdDogYW55KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZGQtdG8tY2FydFwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBheShjYXJ0OiBhbnkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3BheVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0KSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRDYXJ0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXkiLCJjYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/cartService.ts\n"));

/***/ })

});