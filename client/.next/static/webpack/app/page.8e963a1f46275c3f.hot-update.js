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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/productService */ \"(app-pages-browser)/./src/services/productService.ts\");\n/* harmony import */ var _services_cartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/cartService */ \"(app-pages-browser)/./src/services/cartService.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [cart, setCart] = useState();\n    const [carts, setCarts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchProducts = async ()=>{\n        const { products } = await (0,_services_productService__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setProducts(products);\n    };\n    const fetchCarts = async ()=>{\n        const carts = await (0,_services_cartService__WEBPACK_IMPORTED_MODULE_3__.getCart)();\n        // console.log(total);\n        setCarts(carts);\n        localStorage.setItem(\"user\", JSON.stringify(carts.cart));\n    // console.log(cart);\n    // if(cart !== null) {\n    //   // console.log(cart[0].ip);\n    //   localStorage.setItem(\"user\", JSON.stringify(cart));\n    //   // console.log(localStorage.getItem);\n    //   setCarts(cart);\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProducts();\n        fetchCarts();\n    }, []);\n    const handleClick = (product)=>{\n        // setCart(product);\n        (0,_services_cartService__WEBPACK_IMPORTED_MODULE_3__.addToCart)(product);\n    };\n    console.log(carts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    carts && carts.cart.map((cart1, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col\",\n                                    children: [\n                                        \"qty: \",\n                                        cart1.qty,\n                                        \" \",\n                                        \" \",\n                                        \"name: \",\n                                        cart1.Product.name,\n                                        \" \",\n                                        \" \",\n                                        \"price: \",\n                                        cart1.price,\n                                        \" \",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)),\n                    \"total: \",\n                    cart.tola\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row d-flex justify-content-center\",\n                children: products && products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card m-3\",\n                        style: {\n                            width: \"18rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"...\",\n                                className: \"card-img-top\",\n                                alt: \"...\"\n                            }, void 0, false, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"discount: \",\n                                            product.discount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"card-title\",\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            backgroundColor: product.qty === 0 ? \"red\" : \"green\"\n                                        },\n                                        children: [\n                                            \"qty: \",\n                                            product.qty === 0 ? \"not found\" : product.qty\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"card-text\",\n                                        children: [\n                                            \"price: \",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    product.qty === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        onClick: ()=>handleClick(product),\n                                        className: \"btn btn-primary\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"FrR2XQGSqSctDANP+b2Gp1P8YII=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDQztBQUNRO0FBRTdDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBO0lBQ3hDLHNDQUFzQztJQUN0QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBO0lBRWxDLE1BQU1TLGdCQUFnQjtRQUNwQixNQUFNLEVBQUVKLFFBQVEsRUFBRSxHQUFHLE1BQU1KLG9FQUFXQTtRQUN0Q0ssWUFBWUQ7SUFDZDtJQUVBLE1BQU1LLGFBQWE7UUFDakIsTUFBTUgsUUFBUSxNQUFNSiw4REFBT0E7UUFDM0Isc0JBQXNCO1FBQ3RCSyxTQUFTRDtRQUNUSSxhQUFhQyxPQUFPLENBQUMsUUFBUUMsS0FBS0MsU0FBUyxDQUFDUCxNQUFNUSxJQUFJO0lBQ3RELHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLHdEQUF3RDtJQUN4RCwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLElBQUk7SUFDTjtJQUVBaEIsZ0RBQVNBLENBQUM7UUFDUlU7UUFDQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTSxjQUFjLENBQUNDO1FBQ25CLG9CQUFvQjtRQUNwQmYsZ0VBQVNBLENBQUNlO0lBQ1o7SUFDQUMsUUFBUUMsR0FBRyxDQUFDWjtJQUNaLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaZCxTQUFTQSxNQUFNUSxJQUFJLENBQUNPLEdBQUcsQ0FBQyxDQUFDUCxPQUFXUSxzQkFDbkMsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3dDQUFNO3dDQUNiTixNQUFLUyxHQUFHO3dDQUFDO3dDQUFFO3dDQUFJO3dDQUNkVCxNQUFLVSxPQUFPLENBQUNDLElBQUk7d0NBQUM7d0NBQUU7d0NBQUk7d0NBQ3ZCWCxNQUFLWSxLQUFLO3dDQUFDO3dDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFRMUI7b0JBQ0taLEtBQUthLElBQUk7Ozs7Ozs7MEJBRW5CLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDWGhCLFlBQVlBLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0wsU0FBY00sc0JBQ3hDLDhEQUFDSDt3QkFBZ0JDLFdBQVU7d0JBQVdRLE9BQU87NEJBQUNDLE9BQU87d0JBQU87OzBDQUMxRCw4REFBQ0M7Z0NBQUlDLEtBQUk7Z0NBQU1YLFdBQVU7Z0NBQWVZLEtBQUk7Ozs7OzswQ0FDNUMsOERBQUNiO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2E7OzRDQUFFOzRDQUFXakIsUUFBUWtCLFFBQVE7Ozs7Ozs7a0RBQzlCLDhEQUFDQzt3Q0FBR2YsV0FBVTtrREFBY0osUUFBUVMsSUFBSTs7Ozs7O2tEQUN4Qyw4REFBQ1E7d0NBQUVMLE9BQU87NENBQUVRLGlCQUFpQnBCLFFBQVFPLEdBQUcsS0FBSyxJQUFJLFFBQVE7d0NBQVE7OzRDQUFHOzRDQUFNUCxRQUFRTyxHQUFHLEtBQUssSUFBSSxjQUFjUCxRQUFRTyxHQUFHOzs7Ozs7O2tEQUN2SCw4REFBQ1U7d0NBQUViLFdBQVU7OzRDQUFZOzRDQUFRSixRQUFRVSxLQUFLOzs7Ozs7O29DQUM3Q1YsUUFBUU8sR0FBRyxLQUFLLElBQ2YsbUJBQ0EsOERBQUNjO3dDQUFFQyxNQUFLO3dDQUFHQyxTQUFTLElBQU14QixZQUFZQzt3Q0FBVUksV0FBVTtrREFBa0I7Ozs7Ozs7Ozs7Ozs7dUJBVHhFRTs7Ozs7Ozs7Ozs7Ozs7OztBQWlCcEI7R0F6RXdCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldFByb2R1Y3RzIGZyb20gXCJAL3NlcnZpY2VzL3Byb2R1Y3RTZXJ2aWNlXCI7XG5pbXBvcnQgeyBhZGRUb0NhcnQsIGdldENhcnQgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jYXJ0U2VydmljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKCk7XG4gIC8vIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjYXJ0cywgc2V0Q2FydHNdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGdldFByb2R1Y3RzKCk7XG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoQ2FydHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FydHMgPSBhd2FpdCBnZXRDYXJ0KCk7XG4gICAgLy8gY29uc29sZS5sb2codG90YWwpO1xuICAgIHNldENhcnRzKGNhcnRzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoY2FydHMuY2FydCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhcnQpO1xuICAgIC8vIGlmKGNhcnQgIT09IG51bGwpIHtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKGNhcnRbMF0uaXApO1xuICAgIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKTtcbiAgICAvLyAgIHNldENhcnRzKGNhcnQpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQcm9kdWN0cygpO1xuICAgIGZldGNoQ2FydHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHByb2R1Y3Q6IGFueSkgPT4ge1xuICAgIC8vIHNldENhcnQocHJvZHVjdCk7XG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QpO1xuICB9XG4gIGNvbnNvbGUubG9nKGNhcnRzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7Y2FydHMgJiYgY2FydHMuY2FydC5tYXAoKGNhcnQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIHF0eToge2NhcnQucXR5fSB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgbmFtZToge2NhcnQuUHJvZHVjdC5uYW1lfSB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgcHJpY2U6IHtjYXJ0LnByaWNlfSB7XCIgXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgLy8gPD5cbiAgICAgICAgICAvLyAgIDxwPntjYXJ0LnF0eX08L3A+XG4gICAgICAgICAgLy8gICA8cD57Y2FydC5Qcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICAgIC8vIDwvPlxuICAgICAgICApKX1cbiAgICAgICAgdG90YWw6IHtjYXJ0LnRvbGF9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIHsgcHJvZHVjdHMgJiYgcHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmQgbS0zXCIgc3R5bGU9e3t3aWR0aDogXCIxOHJlbVwifX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLlwiIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiPjwvaW1nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPHA+ZGlzY291bnQ6IHtwcm9kdWN0LmRpc2NvdW50fTwvcD5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogcHJvZHVjdC5xdHkgPT09IDAgPyBcInJlZFwiIDogXCJncmVlblwiIH19PnF0eToge3Byb2R1Y3QucXR5ID09PSAwID8gXCJub3QgZm91bmRcIiA6IHByb2R1Y3QucXR5fTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+cHJpY2U6IHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgICAge3Byb2R1Y3QucXR5ID09PSAwID9cbiAgICAgICAgICAgICAgICBcIlwiIDpcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wib25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socHJvZHVjdCl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkFkZCB0byBDYXJ0PC9hPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UHJvZHVjdHMiLCJhZGRUb0NhcnQiLCJnZXRDYXJ0IiwiSG9tZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXJ0cyIsInNldENhcnRzIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoQ2FydHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcnQiLCJoYW5kbGVDbGljayIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJxdHkiLCJQcm9kdWN0IiwibmFtZSIsInByaWNlIiwidG9sYSIsInN0eWxlIiwid2lkdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiZGlzY291bnQiLCJoNSIsImJhY2tncm91bmRDb2xvciIsImEiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});