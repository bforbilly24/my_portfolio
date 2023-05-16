"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works",{

/***/ "./pages/works/index.js":
/*!******************************!*\
  !*** ./pages/works/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _data_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/Projects */ \"./data/Projects.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Animations */ \"./components/Animations.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Works = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var element = ref.current;\n        var scrollToLeft = function() {\n            return element.style.transform = \"translateX(\".concat(-window.scrollY, \"px)\");\n        };\n        window.addEventListener(\"scroll\", scrollToLeft);\n        return function() {\n            return window.removeEventListener(\"scroll\", scrollToLeft);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        pageTitle: \" | Works\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"relative flex h-[450vh] items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.span, _objectSpread({}, _components_Animations__WEBPACK_IMPORTED_MODULE_6__.FadeAnimation, {\n                    className: \"title-page\",\n                    children: \"WORKS\"\n                }), void 0, false, {\n                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed left-1/2 top-[30%] flex md:left-1/4\",\n                    ref: ref,\n                    children: _data_Projects__WEBPACK_IMPORTED_MODULE_4__.Projects.map(function(project) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, _objectSpread({}, _components_Animations__WEBPACK_IMPORTED_MODULE_6__.ProjectCardAnimation, {\n                                className: \"mx-12 flex w-72 flex-col items-center justify-center rounded-md border-4 border-[#BFDBF7] bg-[#BFDBF7] p-[2px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/works/\".concat(project.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, _objectSpread({}, _components_Animations__WEBPACK_IMPORTED_MODULE_6__.FadeAnimation, {\n                                            className: \"relative h-44 w-full overflow-hidden rounded-md bg-[#022B3A]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/projects/\".concat(project.img, \".png\"),\n                                                layout: \"fill\",\n                                                alt: project.name,\n                                                className: \"relative transition-all duration-500 hover:scale-125\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }), void 0, false, {\n                                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"py-2 text-xl font-medium text-[#022B3A]\",\n                                        children: project.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex w-full justify-between px-3 pt-1 pb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: project.demo,\n                                                target: \"_blank\",\n                                                rel: \"noreferrer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"rounded-md border-2 border-[#022B3A] px-3 py-2 font-semibold text-[#022B3A] transition-all duration-500 hover:bg-[#022B3A] hover:text-[#BFDBF7]\",\n                                                    children: \"View Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: project.sourceCode,\n                                                target: \"_blank\",\n                                                rel: \"noreferrer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"rounded-md border-2 border-[#022B3A] px-1 py-2 font-semibold text-[#022B3A] transition-all duration-500 hover:bg-[#022B3A] hover:text-[#BFDBF7]\",\n                                                    children: \"Source Code\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, _this1)\n                                ]\n                            }), void 0, true, {\n                                fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, _this1)\n                        }, project.id, false, {\n                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed top-0 -right-1 h-screen w-1/12 bg-[#022B3A]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed top-0 -left-1 hidden h-4/4 w-1/12 bg-[#022B3A] md:block\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed bottom-40 flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-[#BFDBF7]\",\n                            children: \"Scroll\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-[#E1E5F2]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-[#BFDBF7]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\works\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Works, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n_c = Works;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\nvar _c;\n$RefreshReg$(_c, \"Works\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixTQUFTLEVBQUMsbURBQW1EOzs7Ozt5QkFBRzs4QkFDckUsOERBQUNFLEtBQUc7b0JBQUNGLFNBQVMsRUFBQywrREFBK0Q7Ozs7O3lCQUFHOzhCQUVqRiw4REFBQ0UsS0FBRztvQkFBQ0YsU0FBUyxFQUFDLDRDQUE0Qzs7c0NBQ3pELDhEQUFDQyxNQUFJOzRCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCO3NDQUFDLFFBQU07Ozs7O2lDQUFPO3NDQUM5Qyw4REFBQ0UsS0FBRzs0QkFBQ0YsU0FBUyxFQUFDLGlGQUFpRjs7Ozs7aUNBQUc7c0NBQ25HLDhEQUFDRSxLQUFHOzRCQUFDRixTQUFTLEVBQUMsaUZBQWlGOzs7OztpQ0FBRzs7Ozs7O3lCQUMvRjs7Ozs7O2lCQUNFOzs7OzthQUNGLENBQ1Y7Q0FDSDtHQXBES2IsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBc0RYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3MvaW5kZXguanM/ZWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSAnQC9kYXRhL1Byb2plY3RzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb2plY3RDYXJkQW5pbWF0aW9uLCBGYWRlQW5pbWF0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGlvbnMnO1xyXG5cclxuY29uc3QgV29ya3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHJlZi5jdXJyZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9MZWZ0ID0gKCkgPT4gKGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstd2luZG93LnNjcm9sbFl9cHgpYCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvTGVmdCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvTGVmdCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dHMgcGFnZVRpdGxlPVwiIHwgV29ya3NcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLVs0NTB2aF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPG1vdGlvbi5zcGFuIHsuLi5GYWRlQW5pbWF0aW9ufSBjbGFzc05hbWU9XCJ0aXRsZS1wYWdlXCI+XHJcbiAgICAgICAgICBXT1JLU1xyXG4gICAgICAgIDwvbW90aW9uLnNwYW4+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgbGVmdC0xLzIgdG9wLVszMCVdIGZsZXggbWQ6bGVmdC0xLzRcIiByZWY9e3JlZn0+XHJcbiAgICAgICAgICB7UHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfT5cclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiB7Li4uUHJvamVjdENhcmRBbmltYXRpb259IGNsYXNzTmFtZT1cIm14LTEyIGZsZXggdy03MiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXItNCBib3JkZXItWyNCRkRCRjddIGJnLVsjQkZEQkY3XSBwLVsycHhdXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3dvcmtzLyR7cHJvamVjdC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmEgey4uLkZhZGVBbmltYXRpb259IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNDQgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLVsjMDIyQjNBXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2AvaW1hZ2VzL3Byb2plY3RzLyR7cHJvamVjdC5pbWd9LnBuZ2B9IGxheW91dD1cImZpbGxcIiBhbHQ9e3Byb2plY3QubmFtZX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTEyNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmE+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LVsjMDIyQjNBXVwiPntwcm9qZWN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBweC0zIHB0LTEgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmRlbW99IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1bIzAyMkIzQV0gcHgtMyBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzAyMkIzQV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOmJnLVsjMDIyQjNBXSBob3Zlcjp0ZXh0LVsjQkZEQkY3XVwiPlZpZXcgRGVtbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnNvdXJjZUNvZGV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1bIzAyMkIzQV0gcHgtMSBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzAyMkIzQV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOmJnLVsjMDIyQjNBXSBob3Zlcjp0ZXh0LVsjQkZEQkY3XVwiPlNvdXJjZSBDb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgLXJpZ2h0LTEgaC1zY3JlZW4gdy0xLzEyIGJnLVsjMDIyQjNBXVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCAtbGVmdC0xIGhpZGRlbiBoLTQvNCB3LTEvMTIgYmctWyMwMjJCM0FdIG1kOmJsb2NrXCIgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNCRkRCRjddXCI+U2Nyb2xsPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNiBoLTQgdy00IHJvdGF0ZS00NSByb3VuZGVkIGJvcmRlci1iLTQgYm9yZGVyLXItNCBib3JkZXItWyNFMUU1RjJdXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgaC03IHctNyByb3RhdGUtNDUgcm91bmRlZCBib3JkZXItYi00IGJvcmRlci1yLTQgYm9yZGVyLVsjQkZEQkY3XVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvTGF5b3V0cz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3M7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJMYXlvdXRzIiwibW90aW9uIiwiUHJvamVjdHMiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJQcm9qZWN0Q2FyZEFuaW1hdGlvbiIsIkZhZGVBbmltYXRpb24iLCJXb3JrcyIsInJlZiIsImVsZW1lbnQiLCJjdXJyZW50Iiwic2Nyb2xsVG9MZWZ0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlVGl0bGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwic3BhbiIsImRpdiIsIm1hcCIsInByb2plY3QiLCJocmVmIiwic2x1ZyIsImEiLCJzcmMiLCJpbWciLCJsYXlvdXQiLCJhbHQiLCJuYW1lIiwiZGVtbyIsInRhcmdldCIsInJlbCIsInNvdXJjZUNvZGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/works/index.js\n");

/***/ })

});