"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(default)/page",{

/***/ "(app-pages-browser)/./components/Bookfeatures.tsx":
/*!*************************************!*\
  !*** ./components/Bookfeatures.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bookfeatures; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _hero_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero.css */ \"(app-pages-browser)/./components/hero.css\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/scrollbar */ \"(app-pages-browser)/./node_modules/swiper/modules/scrollbar.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Bookfeatures() {\n    _s();\n    const [books] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            title: \"Book 1\",\n            price: \"$10\",\n            rating: 4,\n            image: \"/images/home-book-1.png\"\n        },\n        {\n            title: \"Book 2\",\n            price: \"$15\",\n            rating: 5,\n            image: \"/images/home-book-2.png\"\n        },\n        {\n            title: \"Book 1\",\n            price: \"$10\",\n            rating: 4,\n            image: \"/images/home-book-1.png\"\n        },\n        {\n            title: \"Book 2\",\n            price: \"$15\",\n            rating: 5,\n            image: \"/images/home-book-2.png\"\n        },\n        {\n            title: \"Book 2\",\n            price: \"$15\",\n            rating: 5,\n            image: \"/images/home-book-2.png\"\n        },\n        {\n            title: \"Book 2\",\n            price: \"$15\",\n            rating: 5,\n            image: \"/images/home-book-2.png\"\n        },\n        {\n            title: \"Book 2\",\n            price: \"$15\",\n            rating: 5,\n            image: \"/images/home-book-2.png\"\n        }\n    ]);\n    const [slidesPerView, setSlidesPerView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateSlidesPerView = ()=>{\n            if (window.innerWidth < 768) {\n                setSlidesPerView(1);\n            } else if (window.innerWidth < 1024) {\n                setSlidesPerView(2);\n            } else {\n                setSlidesPerView(4);\n            }\n        };\n        window.addEventListener(\"resize\", updateSlidesPerView);\n        updateSlidesPerView();\n        return ()=>{\n            window.removeEventListener(\"resize\", updateSlidesPerView);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-6xl mx-auto px-4 sm:px-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12 md:py-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-3xl mx-auto text-center pb-12 md:pb-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"h2 mb-4\",\n                            children: \"Featured Books \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                        modules: [\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Navigation,\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Pagination,\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Scrollbar,\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.A11y\n                        ],\n                        spaceBetween: 30,\n                        slidesPerView: slidesPerView,\n                        navigation: {\n                            nextEl: \".swiper-button-next\",\n                            prevEl: \".swiper-button-prev\"\n                        },\n                        className: \"mySwiper\",\n                        scrollbar: {\n                            draggable: true\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"swiper-button-prev\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"swiper-button-prev-icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"swiper-button-next\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"swiper-button-next-icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white rounded shadow-xl p-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                src: book.image,\n                                                alt: book.title,\n                                                width: 200,\n                                                height: 250,\n                                                className: \"w-full h-auto mb-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-lg font-semibold mb-2\",\n                                                children: book.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600 mb-2\",\n                                                children: book.price\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex text-yellow-400\",\n                                                children: Array.from({\n                                                    length: book.rating\n                                                }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faStar\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Roshni Sahoo\\\\Downloads\\\\tailwind-landing-page-template-main\\\\tailwind-landing-page-template-main\\\\components\\\\Bookfeatures.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Bookfeatures, \"Q2w5ds0B9IxOu0T9HTsge2dwKIg=\");\n_c = Bookfeatures;\nvar _c;\n$RefreshReg$(_c, \"Bookfeatures\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm9va2ZlYXR1cmVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ087QUFDL0I7QUFDdUM7QUFDTTtBQUNsQztBQUNYO0FBQ3FEO0FBQ3JEO0FBQ1c7QUFDQTtBQUNEO0FBRWYsU0FBU1c7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUN2QjtZQUFFYSxPQUFPO1lBQVVDLE9BQU87WUFBT0MsUUFBUTtZQUFHQyxPQUFPO1FBQTBCO1FBQzdFO1lBQUVILE9BQU87WUFBVUMsT0FBTztZQUFPQyxRQUFRO1lBQUdDLE9BQU87UUFBMEI7UUFDN0U7WUFBRUgsT0FBTztZQUFVQyxPQUFPO1lBQU9DLFFBQVE7WUFBR0MsT0FBTztRQUEwQjtRQUM3RTtZQUFFSCxPQUFPO1lBQVVDLE9BQU87WUFBT0MsUUFBUTtZQUFHQyxPQUFPO1FBQTBCO1FBQzdFO1lBQUVILE9BQU87WUFBVUMsT0FBTztZQUFPQyxRQUFRO1lBQUdDLE9BQU87UUFBMEI7UUFDN0U7WUFBRUgsT0FBTztZQUFVQyxPQUFPO1lBQU9DLFFBQVE7WUFBR0MsT0FBTztRQUEwQjtRQUM3RTtZQUFFSCxPQUFPO1lBQVVDLE9BQU87WUFBT0MsUUFBUTtZQUFHQyxPQUFPO1FBQTBCO0tBRzlFO0lBRUQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRW5EQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixzQkFBc0I7WUFDMUIsSUFBSUMsT0FBT0MsVUFBVSxHQUFHLEtBQUs7Z0JBQzNCSCxpQkFBaUI7WUFDbkIsT0FBTyxJQUFJRSxPQUFPQyxVQUFVLEdBQUcsTUFBTTtnQkFDbkNILGlCQUFpQjtZQUNuQixPQUFPO2dCQUNMQSxpQkFBaUI7WUFDbkI7UUFDRjtRQUVBRSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQ0E7UUFFQSxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNLO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBRWIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBR0YsV0FBVTtzQ0FBVTs7Ozs7Ozs7Ozs7a0NBSTFCLDhEQUFDdkIsZ0RBQU1BO3dCQUNQMEIsU0FBUzs0QkFBQ3JCLHNEQUFVQTs0QkFBRUMsc0RBQVVBOzRCQUFFQyxxREFBU0E7NEJBQUVDLGdEQUFJQTt5QkFBQzt3QkFDaERtQixjQUFjO3dCQUNkWixlQUFlQTt3QkFDZmEsWUFBWTs0QkFDVkMsUUFBUTs0QkFDUkMsUUFBUTt3QkFDVjt3QkFFQVAsV0FBVTt3QkFDVlEsV0FBVzs0QkFBRUMsV0FBVzt3QkFBSzs7MENBRzdCLDhEQUFDUjtnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ0M7b0NBQUlELFdBQVU7Ozs7Ozs7Ozs7OzBDQUVqQiw4REFBQ0M7Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNDO29DQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs0QkFJaEJiLE1BQU11QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDbEMscURBQVdBOzhDQUNWLDRFQUFDdUI7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDbkIsa0RBQUtBO2dEQUNKZ0MsS0FBS0YsS0FBS3BCLEtBQUs7Z0RBQ2Z1QixLQUFLSCxLQUFLdkIsS0FBSztnREFDZjJCLE9BQU87Z0RBQ1BDLFFBQVE7Z0RBQ1JoQixXQUFVOzs7Ozs7MERBRVosOERBQUNpQjtnREFBR2pCLFdBQVU7MERBQThCVyxLQUFLdkIsS0FBSzs7Ozs7OzBEQUN0RCw4REFBQzhCO2dEQUFFbEIsV0FBVTswREFBc0JXLEtBQUt0QixLQUFLOzs7Ozs7MERBRTdDLDhEQUFDWTtnREFBSUQsV0FBVTswREFDWm1CLE1BQU1DLElBQUksQ0FBQztvREFBRUMsUUFBUVYsS0FBS3JCLE1BQU07Z0RBQUMsR0FBRyxDQUFDZ0MsR0FBR0Msa0JBQ3ZDLDhEQUFDM0MsMkVBQWVBO3dEQUFDNEMsTUFBTTdDLHNFQUFNQTt1REFBTzRDOzs7Ozs7Ozs7Ozs7Ozs7O21DQWQxQlg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCaEM7R0E1RndCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rZmVhdHVyZXMudHN4PzZlY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCAnLi9oZXJvLmNzcyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXkgfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3Njcm9sbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tmZWF0dXJlcygpIHtcbiAgY29uc3QgW2Jvb2tzXSA9IHVzZVN0YXRlKFtcbiAgICB7IHRpdGxlOiAnQm9vayAxJywgcHJpY2U6ICckMTAnLCByYXRpbmc6IDQsIGltYWdlOiAnL2ltYWdlcy9ob21lLWJvb2stMS5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ0Jvb2sgMicsIHByaWNlOiAnJDE1JywgcmF0aW5nOiA1LCBpbWFnZTogJy9pbWFnZXMvaG9tZS1ib29rLTIucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdCb29rIDEnLCBwcmljZTogJyQxMCcsIHJhdGluZzogNCwgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUtYm9vay0xLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnQm9vayAyJywgcHJpY2U6ICckMTUnLCByYXRpbmc6IDUsIGltYWdlOiAnL2ltYWdlcy9ob21lLWJvb2stMi5wbmcnIH0sXG4gICAgeyB0aXRsZTogJ0Jvb2sgMicsIHByaWNlOiAnJDE1JywgcmF0aW5nOiA1LCBpbWFnZTogJy9pbWFnZXMvaG9tZS1ib29rLTIucG5nJyB9LFxuICAgIHsgdGl0bGU6ICdCb29rIDInLCBwcmljZTogJyQxNScsIHJhdGluZzogNSwgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUtYm9vay0yLnBuZycgfSxcbiAgICB7IHRpdGxlOiAnQm9vayAyJywgcHJpY2U6ICckMTUnLCByYXRpbmc6IDUsIGltYWdlOiAnL2ltYWdlcy9ob21lLWJvb2stMi5wbmcnIH0sXG5cbiAgICAvLyBBZGQgbW9yZSBib29rIG9iamVjdHMgYXMgbmVlZGVkXG4gIF0pO1xuXG4gIGNvbnN0IFtzbGlkZXNQZXJWaWV3LCBzZXRTbGlkZXNQZXJWaWV3XSA9IHVzZVN0YXRlKDQpO1xuICAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlU2xpZGVzUGVyVmlldyA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBzZXRTbGlkZXNQZXJWaWV3KDEpO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgc2V0U2xpZGVzUGVyVmlldygyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNsaWRlc1BlclZpZXcoNCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlU2xpZGVzUGVyVmlldyk7XG4gICAgdXBkYXRlU2xpZGVzUGVyVmlldygpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTbGlkZXNQZXJWaWV3KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTIgbWQ6cHktMjBcIj5cbiAgICAgICAgICB7LyogU2VjdGlvbiBoZWFkZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byB0ZXh0LWNlbnRlciBwYi0xMiBtZDpwYi0yMFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyIG1iLTRcIj5GZWF0dXJlZCBCb29rcyA8L2gyPlxuICAgICAgICAgICAgey8qIEFkZCBhbnkgYWRkaXRpb25hbCBkZXNjcmlwdGlvbiBoZXJlICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBDYXJvdXNlbCAqL31cbiAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeV19XG4gICAgICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17c2xpZGVzUGVyVmlld31cbiAgICAgICAgICAgIG5hdmlnYXRpb249e3tcbiAgICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXlTd2lwZXJcIlxuICAgICAgICAgICAgc2Nyb2xsYmFyPXt7IGRyYWdnYWJsZTogdHJ1ZSB9fSBcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBCdXR0b25zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLXByZXZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLXByZXYtaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dC1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEJvb2sgU2xpZGVzICovfVxuICAgICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3cteGwgcC00XCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtib29rLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Jvb2sudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG1iLTRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPntib29rLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTJcIj57Ym9vay5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICB7LyogUmVuZGVyIHN0YXIgcmF0aW5nIGhlcmUgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC15ZWxsb3ctNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBib29rLnJhdGluZyB9LCAoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBrZXk9e2l9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsImZhU3RhciIsIkZvbnRBd2Vzb21lSWNvbiIsIkltYWdlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTY3JvbGxiYXIiLCJBMTF5IiwiQm9va2ZlYXR1cmVzIiwiYm9va3MiLCJ0aXRsZSIsInByaWNlIiwicmF0aW5nIiwiaW1hZ2UiLCJzbGlkZXNQZXJWaWV3Iiwic2V0U2xpZGVzUGVyVmlldyIsInVwZGF0ZVNsaWRlc1BlclZpZXciLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJtb2R1bGVzIiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsIm1hcCIsImJvb2siLCJpbmRleCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Bookfeatures.tsx\n"));

/***/ })

});