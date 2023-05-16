"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/LoadingPage */ \"./components/LoadingPage.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        x: 0,\n        y: 0\n    }), mousePosition = ref1[0], setMousePosition = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"default\"), customCursor = ref2[0], setCustomCursor = ref2[1];\n    setTimeout(function() {\n        setLoading(false);\n    }, 3800);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var mouseMove = function(e) {\n            return setMousePosition({\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        window.addEventListener(\"mousemove\", mouseMove);\n        return function() {\n            return window.removeEventListener(\"mousemove\", mouseMove);\n        };\n    }, []);\n    var cursorVariants = {\n        default: {\n            x: mousePosition.x - 22,\n            y: mousePosition.y - 22\n        },\n        inverse: {\n            x: mousePosition.x - 22,\n            y: mousePosition.y - 22,\n            mixBlendMode: \"difference\"\n        }\n    };\n    var cursorIn = function() {\n        return setCustomCursor(\"inverse\");\n    };\n    var cursorOut = function() {\n        return setCustomCursor(\"default\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\_app.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onMouseEnter: cursorIn,\n                    onMouseLeave: cursorOut,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\_app.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    className: \"pointer-events-none fixed left-0 top-0 z-50 h-11 w-11 rounded-full bg-[#BFDBF7]\",\n                    variants: cursorVariants,\n                    animate: customCursor\n                }, void 0, false, {\n                    fileName: \"C:\\\\PENS\\\\my_portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(MyApp, \"hdzlVORt1OpIV/rhI32MFUnLy/c=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1U7QUFDQTtBQUNVO0FBQ1o7QUFDSzs7QUFFNUMsU0FBU00sS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7O0lBQ25DLElBQThCSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBUjlDLE9BUWdCLEdBQWdCQSxHQUFjLEdBQTlCLEVBUmhCLFVBUTRCLEdBQUlBLEdBQWMsR0FBbEI7SUFDMUIsSUFBMENBLElBQXdCLEdBQXhCQSwrQ0FBUSxDQUFDO1FBQUVNLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0tBQUUsQ0FBQyxFQVRwRSxhQVNzQixHQUFzQlAsSUFBd0IsR0FBOUMsRUFUdEIsZ0JBU3dDLEdBQUlBLElBQXdCLEdBQTVCO0lBQ3RDLElBQXdDQSxJQUFtQixHQUFuQkEsK0NBQVEsQ0FBQyxTQUFTLENBQUMsRUFWN0QsWUFVcUIsR0FBcUJBLElBQW1CLEdBQXhDLEVBVnJCLGVBVXNDLEdBQUlBLElBQW1CLEdBQXZCO0lBRXBDWSxVQUFVLENBQUMsV0FBTTtRQUNmUCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVUTixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNYyxTQUFTLEdBQUcsU0FBQ0MsQ0FBQzttQkFBS0wsZ0JBQWdCLENBQUM7Z0JBQUVILENBQUMsRUFBRVEsQ0FBQyxDQUFDQyxPQUFPO2dCQUFFUixDQUFDLEVBQUVPLENBQUMsQ0FBQ0UsT0FBTzthQUFFLENBQUM7U0FBQTtRQUV6RUMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVMLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE9BQU87bUJBQU1JLE1BQU0sQ0FBQ0UsbUJBQW1CLENBQUMsV0FBVyxFQUFFTixTQUFTLENBQUM7U0FBQSxDQUFDO0tBQ2pFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNTyxjQUFjLEdBQUc7UUFDckJDLE9BQU8sRUFBRTtZQUFFZixDQUFDLEVBQUVFLGFBQWEsQ0FBQ0YsQ0FBQyxHQUFHLEVBQUU7WUFBRUMsQ0FBQyxFQUFFQyxhQUFhLENBQUNELENBQUMsR0FBRyxFQUFFO1NBQUU7UUFDN0RlLE9BQU8sRUFBRTtZQUFFaEIsQ0FBQyxFQUFFRSxhQUFhLENBQUNGLENBQUMsR0FBRyxFQUFFO1lBQUVDLENBQUMsRUFBRUMsYUFBYSxDQUFDRCxDQUFDLEdBQUcsRUFBRTtZQUFFZ0IsWUFBWSxFQUFFLFlBQVk7U0FBRTtLQUMxRjtJQUNELElBQU1DLFFBQVEsR0FBRztlQUFNYixlQUFlLENBQUMsU0FBUyxDQUFDO0tBQUE7SUFDakQsSUFBTWMsU0FBUyxHQUFHO2VBQU1kLGVBQWUsQ0FBQyxTQUFTLENBQUM7S0FBQTtJQUVsRCxxQkFDRTtrQkFDR1AsT0FBTyxpQkFDTiw4REFBQ1AsK0RBQVc7Ozs7Z0JBQUcsaUJBRWY7OzhCQUNFLDhEQUFDNkIsS0FBRztvQkFBQ0MsWUFBWSxFQUFFSCxRQUFRO29CQUFFSSxZQUFZLEVBQUVILFNBQVM7O3NDQUNsRCw4REFBQzlCLDBEQUFNOzs7O2dDQUFHO3NDQUNWLDhEQUFDTyxTQUFTLG9CQUFLQyxTQUFTOzs7O2dDQUFJO3NDQUM1Qiw4REFBQ1AsMERBQU07Ozs7Z0NBQUc7Ozs7Ozt3QkFDTjs4QkFFTiw4REFBQ0UscURBQVU7b0JBQUMrQixTQUFTLEVBQUMsaUZBQWlGO29CQUFDQyxRQUFRLEVBQUVWLGNBQWM7b0JBQUVXLE9BQU8sRUFBRXJCLFlBQVk7Ozs7O3dCQUFJOzt3QkFDMUo7cUJBRUosQ0FDSDtDQUNIO0dBeENRVCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUEwQ2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnQC9jb21wb25lbnRzL0xvYWRpbmdQYWdlJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgY29uc3QgW2N1c3RvbUN1cnNvciwgc2V0Q3VzdG9tQ3Vyc29yXSA9IHVzZVN0YXRlKCdkZWZhdWx0Jyk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgMzgwMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtb3VzZU1vdmUgPSAoZSkgPT4gc2V0TW91c2VQb3NpdGlvbih7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY3Vyc29yVmFyaWFudHMgPSB7XHJcbiAgICBkZWZhdWx0OiB7IHg6IG1vdXNlUG9zaXRpb24ueCAtIDIyLCB5OiBtb3VzZVBvc2l0aW9uLnkgLSAyMiB9LFxyXG4gICAgaW52ZXJzZTogeyB4OiBtb3VzZVBvc2l0aW9uLnggLSAyMiwgeTogbW91c2VQb3NpdGlvbi55IC0gMjIsIG1peEJsZW5kTW9kZTogJ2RpZmZlcmVuY2UnIH0sXHJcbiAgfTtcclxuICBjb25zdCBjdXJzb3JJbiA9ICgpID0+IHNldEN1c3RvbUN1cnNvcignaW52ZXJzZScpO1xyXG4gIGNvbnN0IGN1cnNvck91dCA9ICgpID0+IHNldEN1c3RvbUN1cnNvcignZGVmYXVsdCcpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPExvYWRpbmdQYWdlIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXtjdXJzb3JJbn0gb25Nb3VzZUxlYXZlPXtjdXJzb3JPdXR9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBmaXhlZCBsZWZ0LTAgdG9wLTAgei01MCBoLTExIHctMTEgcm91bmRlZC1mdWxsIGJnLVsjQkZEQkY3XVwiIHZhcmlhbnRzPXtjdXJzb3JWYXJpYW50c30gYW5pbWF0ZT17Y3VzdG9tQ3Vyc29yfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJMb2FkaW5nUGFnZSIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIngiLCJ5IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJjdXN0b21DdXJzb3IiLCJzZXRDdXN0b21DdXJzb3IiLCJzZXRUaW1lb3V0IiwibW91c2VNb3ZlIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJzb3JWYXJpYW50cyIsImRlZmF1bHQiLCJpbnZlcnNlIiwibWl4QmxlbmRNb2RlIiwiY3Vyc29ySW4iLCJjdXJzb3JPdXQiLCJkaXYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});