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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/productService */ \"(app-pages-browser)/./src/services/productService.ts\");\n/* harmony import */ var _services_cartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/cartService */ \"(app-pages-browser)/./src/services/cartService.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [cart, setCart] = useState();\n    const [carts, setCarts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchProducts = async ()=>{\n        const { products } = await (0,_services_productService__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setProducts(products);\n    };\n    const fetchCarts = async ()=>{\n        const carts = await (0,_services_cartService__WEBPACK_IMPORTED_MODULE_3__.getCart)();\n        // console.log(total);\n        setCarts(carts);\n        localStorage.setItem(\"user\", JSON.stringify(carts.cart));\n    // console.log(cart);\n    // if(cart !== null) {\n    //   // console.log(cart[0].ip);\n    //   localStorage.setItem(\"user\", JSON.stringify(cart));\n    //   // console.log(localStorage.getItem);\n    //   setCarts(cart);\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProducts();\n        fetchCarts();\n    }, []);\n    const handleClick = (product)=>{\n        // setCart(product);\n        (0,_services_cartService__WEBPACK_IMPORTED_MODULE_3__.addToCart)(product);\n    };\n    console.log(carts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    carts && carts.cart.map((cart, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col\",\n                                    children: [\n                                        \"qty: \",\n                                        cart.qty,\n                                        \" \",\n                                        \" \",\n                                        \"name: \",\n                                        cart.Product.name,\n                                        \" \",\n                                        \" \",\n                                        \"price: \",\n                                        cart.price,\n                                        \" \",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)),\n                    \"total: \",\n                    carts && carts.total\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row d-flex justify-content-center\",\n                children: products && products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card m-3\",\n                        style: {\n                            width: \"18rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"...\",\n                                className: \"card-img-top\",\n                                alt: \"...\"\n                            }, void 0, false, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"discount: \",\n                                            product.discount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"card-title\",\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            backgroundColor: product.qty === 0 ? \"red\" : \"green\"\n                                        },\n                                        children: [\n                                            \"qty: \",\n                                            product.qty === 0 ? \"not found\" : product.qty\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"card-text\",\n                                        children: [\n                                            \"price: \",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    product.qty === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        onClick: ()=>handleClick(product),\n                                        className: \"btn btn-primary\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"FrR2XQGSqSctDANP+b2Gp1P8YII=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDQztBQUNRO0FBRTdDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBO0lBQ3hDLHNDQUFzQztJQUN0QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBO0lBRWxDLE1BQU1TLGdCQUFnQjtRQUNwQixNQUFNLEVBQUVKLFFBQVEsRUFBRSxHQUFHLE1BQU1KLG9FQUFXQTtRQUN0Q0ssWUFBWUQ7SUFDZDtJQUVBLE1BQU1LLGFBQWE7UUFDakIsTUFBTUgsUUFBUSxNQUFNSiw4REFBT0E7UUFDM0Isc0JBQXNCO1FBQ3RCSyxTQUFTRDtRQUNUSSxhQUFhQyxPQUFPLENBQUMsUUFBUUMsS0FBS0MsU0FBUyxDQUFDUCxNQUFNUSxJQUFJO0lBQ3RELHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLHdEQUF3RDtJQUN4RCwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLElBQUk7SUFDTjtJQUVBaEIsZ0RBQVNBLENBQUM7UUFDUlU7UUFDQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTSxjQUFjLENBQUNDO1FBQ25CLG9CQUFvQjtRQUNwQmYsZ0VBQVNBLENBQUNlO0lBQ1o7SUFDQUMsUUFBUUMsR0FBRyxDQUFDWjtJQUNaLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaZCxTQUFTQSxNQUFNUSxJQUFJLENBQUNPLEdBQUcsQ0FBQyxDQUFDUCxNQUFXUSxzQkFDbkMsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3dDQUFNO3dDQUNiTixLQUFLUyxHQUFHO3dDQUFDO3dDQUFFO3dDQUFJO3dDQUNkVCxLQUFLVSxPQUFPLENBQUNDLElBQUk7d0NBQUM7d0NBQUU7d0NBQUk7d0NBQ3ZCWCxLQUFLWSxLQUFLO3dDQUFDO3dDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFLMUI7b0JBQ0twQixTQUFTQSxNQUFNcUIsS0FBSzs7Ozs7OzswQkFFOUIsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNYaEIsWUFBWUEsU0FBU2lCLEdBQUcsQ0FBQyxDQUFDTCxTQUFjTSxzQkFDeEMsOERBQUNIO3dCQUFnQkMsV0FBVTt3QkFBV1EsT0FBTzs0QkFBQ0MsT0FBTzt3QkFBTzs7MENBQzFELDhEQUFDQztnQ0FBSUMsS0FBSTtnQ0FBTVgsV0FBVTtnQ0FBZVksS0FBSTs7Ozs7OzBDQUM1Qyw4REFBQ2I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDYTs7NENBQUU7NENBQVdqQixRQUFRa0IsUUFBUTs7Ozs7OztrREFDOUIsOERBQUNDO3dDQUFHZixXQUFVO2tEQUFjSixRQUFRUyxJQUFJOzs7Ozs7a0RBQ3hDLDhEQUFDUTt3Q0FBRUwsT0FBTzs0Q0FBRVEsaUJBQWlCcEIsUUFBUU8sR0FBRyxLQUFLLElBQUksUUFBUTt3Q0FBUTs7NENBQUc7NENBQU1QLFFBQVFPLEdBQUcsS0FBSyxJQUFJLGNBQWNQLFFBQVFPLEdBQUc7Ozs7Ozs7a0RBQ3ZILDhEQUFDVTt3Q0FBRWIsV0FBVTs7NENBQVk7NENBQVFKLFFBQVFVLEtBQUs7Ozs7Ozs7b0NBQzdDVixRQUFRTyxHQUFHLEtBQUssSUFDZixtQkFDQSw4REFBQ2M7d0NBQUVDLE1BQUs7d0NBQUdDLFNBQVMsSUFBTXhCLFlBQVlDO3dDQUFVSSxXQUFVO2tEQUFrQjs7Ozs7Ozs7Ozs7Ozt1QkFUeEVFOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJwQjtHQXRFd0JuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0UHJvZHVjdHMgZnJvbSBcIkAvc2VydmljZXMvcHJvZHVjdFNlcnZpY2VcIjtcbmltcG9ydCB7IGFkZFRvQ2FydCwgZ2V0Q2FydCB9IGZyb20gXCJAL3NlcnZpY2VzL2NhcnRTZXJ2aWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoKTtcbiAgLy8gY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NhcnRzLCBzZXRDYXJ0c10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgZ2V0UHJvZHVjdHMoKTtcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cyk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hDYXJ0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYXJ0cyA9IGF3YWl0IGdldENhcnQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0b3RhbCk7XG4gICAgc2V0Q2FydHMoY2FydHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShjYXJ0cy5jYXJ0KSk7XG4gICAgLy8gY29uc29sZS5sb2coY2FydCk7XG4gICAgLy8gaWYoY2FydCAhPT0gbnVsbCkge1xuICAgIC8vICAgLy8gY29uc29sZS5sb2coY2FydFswXS5pcCk7XG4gICAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICAgIC8vICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0pO1xuICAgIC8vICAgc2V0Q2FydHMoY2FydCk7XG4gICAgLy8gfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgZmV0Y2hDYXJ0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAocHJvZHVjdDogYW55KSA9PiB7XG4gICAgLy8gc2V0Q2FydChwcm9kdWN0KTtcbiAgICBhZGRUb0NhcnQocHJvZHVjdCk7XG4gIH1cbiAgY29uc29sZS5sb2coY2FydHMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtjYXJ0cyAmJiBjYXJ0cy5jYXJ0Lm1hcCgoY2FydDogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgcXR5OiB7Y2FydC5xdHl9IHtcIiBcIn1cbiAgICAgICAgICAgICAgICBuYW1lOiB7Y2FydC5Qcm9kdWN0Lm5hbWV9IHtcIiBcIn1cbiAgICAgICAgICAgICAgICBwcmljZToge2NhcnQucHJpY2V9IHtcIiBcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApKX1cbiAgICAgICAgdG90YWw6IHtjYXJ0cyAmJiBjYXJ0cy50b3RhbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgeyBwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZCBtLTNcIiBzdHlsZT17e3dpZHRoOiBcIjE4cmVtXCJ9fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4uXCIgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCI+PC9pbWc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8cD5kaXNjb3VudDoge3Byb2R1Y3QuZGlzY291bnR9PC9wPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwcm9kdWN0Lm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBwcm9kdWN0LnF0eSA9PT0gMCA/IFwicmVkXCIgOiBcImdyZWVuXCIgfX0+cXR5OiB7cHJvZHVjdC5xdHkgPT09IDAgPyBcIm5vdCBmb3VuZFwiIDogcHJvZHVjdC5xdHl9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5wcmljZToge3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5xdHkgPT09IDAgP1xuICAgICAgICAgICAgICAgIFwiXCIgOlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCJvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwcm9kdWN0KX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWRkIHRvIENhcnQ8L2E+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRQcm9kdWN0cyIsImFkZFRvQ2FydCIsImdldENhcnQiLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNhcnRzIiwic2V0Q2FydHMiLCJmZXRjaFByb2R1Y3RzIiwiZmV0Y2hDYXJ0cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY2FydCIsImhhbmRsZUNsaWNrIiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInF0eSIsIlByb2R1Y3QiLCJuYW1lIiwicHJpY2UiLCJ0b3RhbCIsInN0eWxlIiwid2lkdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiZGlzY291bnQiLCJoNSIsImJhY2tncm91bmRDb2xvciIsImEiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});