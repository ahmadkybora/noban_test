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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/productService */ \"(app-pages-browser)/./src/services/productService.ts\");\n/* harmony import */ var _services_cartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/cartService */ \"(app-pages-browser)/./src/services/cartService.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [cart, setCart] = useState();\n    const [carts, setCarts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchProducts = async ()=>{\n        const { products } = await (0,_services_productService__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        setProducts(products);\n    };\n    const fetchCarts = async ()=>{\n        const carts = await (0,_services_cartService__WEBPACK_IMPORTED_MODULE_3__.getCart)();\n        setCarts(carts);\n        localStorage.setItem(\"user\", JSON.stringify(carts.cart));\n    // console.log(cart);\n    // if(cart !== null) {\n    //   // console.log(cart[0].ip);\n    //   localStorage.setItem(\"user\", JSON.stringify(cart));\n    //   // console.log(localStorage.getItem);\n    //   setCarts(cart);\n    // }\n    // <>\n    //   <p>{cart.qty}</p>\n    //   <p>{cart.Product.name}</p>\n    // </>\n    // setCart(product);\n    // console.log(total);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProducts();\n        fetchCarts();\n    }, []);\n    const handleClick = (product)=>{\n        (0,_services_cartService__WEBPACK_IMPORTED_MODULE_3__.addToCart)(product);\n    };\n    const handlePay = (cart)=>{};\n    console.log(carts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        carts && carts.cart.map((cart, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col\",\n                                    children: [\n                                        \"qty: \",\n                                        cart.qty,\n                                        \" \",\n                                        \" \",\n                                        \"name: \",\n                                        cart.Product.name,\n                                        \" \",\n                                        \" \",\n                                        \"price: \",\n                                        cart.price,\n                                        \" \",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"total: \",\n                                carts && carts.total\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            onClick: ()=>handlePay(carts),\n                            className: \"btn btn-primary\",\n                            children: \"Pay\"\n                        }, void 0, false, {\n                            fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row d-flex justify-content-center\",\n                children: products && products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card m-3\",\n                        style: {\n                            width: \"18rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"...\",\n                                className: \"card-img-top\",\n                                alt: \"...\"\n                            }, void 0, false, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"discount: \",\n                                            product.discount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"card-title\",\n                                        children: product.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            backgroundColor: product.qty === 0 ? \"red\" : \"green\"\n                                        },\n                                        children: [\n                                            \"qty: \",\n                                            product.qty === 0 ? \"not found\" : product.qty\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"card-text\",\n                                        children: [\n                                            \"price: \",\n                                            product.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this),\n                                    product.qty === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        onClick: ()=>handleClick(product),\n                                        className: \"btn btn-primary\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ahmadkybora/App/test/noban_test/client/src/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"FrR2XQGSqSctDANP+b2Gp1P8YII=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnBCO0dBOUV3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnZXRQcm9kdWN0cyBmcm9tIFwiQC9zZXJ2aWNlcy9wcm9kdWN0U2VydmljZVwiO1xuaW1wb3J0IHsgYWRkVG9DYXJ0LCBnZXRDYXJ0IH0gZnJvbSBcIkAvc2VydmljZXMvY2FydFNlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZSgpO1xuICAvLyBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2FydHMsIHNldENhcnRzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBnZXRQcm9kdWN0cygpO1xuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaENhcnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNhcnRzID0gYXdhaXQgZ2V0Q2FydCgpO1xuXG4gICAgc2V0Q2FydHMoY2FydHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShjYXJ0cy5jYXJ0KSk7XG4gICAgLy8gY29uc29sZS5sb2coY2FydCk7XG4gICAgLy8gaWYoY2FydCAhPT0gbnVsbCkge1xuICAgIC8vICAgLy8gY29uc29sZS5sb2coY2FydFswXS5pcCk7XG4gICAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICAgIC8vICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0pO1xuICAgIC8vICAgc2V0Q2FydHMoY2FydCk7XG4gICAgLy8gfVxuICAgICAgICAgICAgICAvLyA8PlxuICAgICAgICAgIC8vICAgPHA+e2NhcnQucXR5fTwvcD5cbiAgICAgICAgICAvLyAgIDxwPntjYXJ0LlByb2R1Y3QubmFtZX08L3A+XG4gICAgICAgICAgLy8gPC8+XG4gICAgICAgICAgICAgIC8vIHNldENhcnQocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3RhbCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICBmZXRjaENhcnRzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChwcm9kdWN0OiBhbnkpID0+IHtcblxuICAgIGFkZFRvQ2FydChwcm9kdWN0KTtcbiAgfVxuICBjb25zdCBoYW5kbGVQYXkgPSAoY2FydDogYW55KSA9PiB7fVxuXG4gIGNvbnNvbGUubG9nKGNhcnRzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtjYXJ0cyAmJiBjYXJ0cy5jYXJ0Lm1hcCgoY2FydDogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICBxdHk6IHtjYXJ0LnF0eX0ge1wiIFwifVxuICAgICAgICAgICAgICAgICAgbmFtZToge2NhcnQuUHJvZHVjdC5uYW1lfSB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICBwcmljZToge2NhcnQucHJpY2V9IHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPHA+dG90YWw6IHtjYXJ0cyAmJiBjYXJ0cy50b3RhbH08L3A+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIm9uQ2xpY2s9eygpID0+IGhhbmRsZVBheShjYXJ0cyl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlBheTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIHsgcHJvZHVjdHMgJiYgcHJvZHVjdHMubWFwKChwcm9kdWN0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcmQgbS0zXCIgc3R5bGU9e3t3aWR0aDogXCIxOHJlbVwifX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLlwiIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiPjwvaW1nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPHA+ZGlzY291bnQ6IHtwcm9kdWN0LmRpc2NvdW50fTwvcD5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogcHJvZHVjdC5xdHkgPT09IDAgPyBcInJlZFwiIDogXCJncmVlblwiIH19PnF0eToge3Byb2R1Y3QucXR5ID09PSAwID8gXCJub3QgZm91bmRcIiA6IHByb2R1Y3QucXR5fTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+cHJpY2U6IHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgICAge3Byb2R1Y3QucXR5ID09PSAwID9cbiAgICAgICAgICAgICAgICBcIlwiIDpcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wib25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socHJvZHVjdCl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkFkZCB0byBDYXJ0PC9hPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UHJvZHVjdHMiLCJhZGRUb0NhcnQiLCJnZXRDYXJ0IiwiSG9tZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXJ0cyIsInNldENhcnRzIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoQ2FydHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcnQiLCJoYW5kbGVDbGljayIsInByb2R1Y3QiLCJoYW5kbGVQYXkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJxdHkiLCJQcm9kdWN0IiwibmFtZSIsInByaWNlIiwicCIsInRvdGFsIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwic3R5bGUiLCJ3aWR0aCIsImltZyIsInNyYyIsImFsdCIsImRpc2NvdW50IiwiaDUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});