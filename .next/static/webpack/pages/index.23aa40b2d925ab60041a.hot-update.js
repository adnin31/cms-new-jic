webpackHotUpdate_N_E("pages/index",{

/***/ "./components/container/index.jsx":
/*!****************************************!*\
  !*** ./components/container/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Container.module.css */ \"./styles/Container.module.css\");\n/* harmony import */ var _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/menu.js */ \"./pages/menu.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/Base/Documents/cms-new-jic/components/container/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"].Header,\n    Sider = antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"].Sider;\n\nvar Container = function Container(props) {\n  _s();\n\n  var id = props.id,\n      children = props.children,\n      className = props.className;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: id,\n    className: \"\".concat(_styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container, \" \").concat(className || ''),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {\n        className: \"header\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n          children: \"PROTO CMS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n        className: _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sider,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Sider, {\n          width: 200,\n          className: \"site-layout-background\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"], {\n            mode: \"inline\",\n            defaultSelectedKeys: ['1'],\n            defaultOpenKeys: ['sub1'],\n            style: {\n              height: '100%',\n              borderRight: 0\n            },\n            children: _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (menu) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n                icon: menu.icon,\n                title: menu.title,\n                onClick: function onClick() {\n                  return router.push(menu.routes);\n                },\n                children: menu.title\n              }, menu.title, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n          style: {\n            padding: '0 24px 24px'\n          },\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Container, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\nvar _c;\n\n$RefreshReg$(_c, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanN4P2JlZDgiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiU2lkZXIiLCJDb250YWluZXIiLCJwcm9wcyIsImlkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsInNpZGVyIiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJkYXNoYm9hcmRNZW51cyIsIm1hcCIsIm1lbnUiLCJpY29uIiwicHVzaCIsInJvdXRlcyIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQWtCQywyQyxDQUFsQkQsTTtJQUFRRSxLLEdBQVVELDJDLENBQVZDLEs7O0FBRWhCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ25CQyxFQURtQixHQUNTRCxLQURULENBQ25CQyxFQURtQjtBQUFBLE1BQ2ZDLFFBRGUsR0FDU0YsS0FEVCxDQUNmRSxRQURlO0FBQUEsTUFDTEMsU0FESyxHQUNTSCxLQURULENBQ0xHLFNBREs7QUFFM0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUssTUFBRSxFQUFFSixFQUFUO0FBQWEsYUFBUyxZQUFLSyxtRUFBTSxDQUFDQyxTQUFaLGNBQXlCSixTQUFTLElBQUksRUFBdEMsQ0FBdEI7QUFBQSwyQkFDRSxxRUFBQywyQ0FBRDtBQUFBLDhCQUNFLHFFQUFDLE1BQUQ7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksbUJBQVMsRUFBRUcsbUVBQU0sQ0FBQ0UsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRSxxRUFBQywyQ0FBRDtBQUFRLGlCQUFTLEVBQUVGLG1FQUFNLENBQUNHLEtBQTFCO0FBQUEsZ0NBQ0UscUVBQUMsS0FBRDtBQUFPLGVBQUssRUFBRSxHQUFkO0FBQW1CLG1CQUFTLEVBQUMsd0JBQTdCO0FBQUEsaUNBQ0UscUVBQUMseUNBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSwrQkFBbUIsRUFBRSxDQUFDLEdBQUQsQ0FGdkI7QUFHRSwyQkFBZSxFQUFFLENBQUMsTUFBRCxDQUhuQjtBQUlFLGlCQUFLLEVBQUU7QUFBRUMsb0JBQU0sRUFBRSxNQUFWO0FBQWtCQyx5QkFBVyxFQUFFO0FBQS9CLGFBSlQ7QUFBQSxzQkFPSUMsc0RBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFBQyxJQUFJO0FBQUEsa0NBQ3JCLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUE0QixvQkFBSSxFQUFFQSxJQUFJLENBQUNDLElBQXZDO0FBQTZDLHFCQUFLLEVBQUVELElBQUksQ0FBQ04sS0FBekQ7QUFBZ0UsdUJBQU8sRUFBRTtBQUFBLHlCQUFNSixNQUFNLENBQUNZLElBQVAsQ0FBWUYsSUFBSSxDQUFDRyxNQUFqQixDQUFOO0FBQUEsaUJBQXpFO0FBQUEsMEJBQTBHSCxJQUFJLENBQUNOO0FBQS9HLGlCQUFnQk0sSUFBSSxDQUFDTixLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURxQjtBQUFBLGFBQXZCO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFlRSxxRUFBQywyQ0FBRDtBQUFRLGVBQUssRUFBRTtBQUFFVSxtQkFBTyxFQUFFO0FBQVgsV0FBZjtBQUFBLG9CQUNHaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQWpDRDs7R0FBTUgsUztVQUVXTSxxRDs7O0tBRlhOLFM7QUFtQ1NBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29udGFpbmVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgZGFzaGJvYXJkTWVudXMgZnJvbSAnLi4vLi4vcGFnZXMvbWVudS5qcydcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBCcmVhZGNydW1iIH0gZnJvbSAnYW50ZCdcblxuY29uc3QgeyBIZWFkZXIsIFNpZGVyIH0gPSBMYXlvdXRcblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSA9IHByb3BzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2NsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlBST1RPIENNUzwvaDE+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVyfT5cbiAgICAgICAgICA8U2lkZXIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfVxuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZE1lbnVzLm1hcChtZW51ID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXttZW51LnRpdGxlfSBpY29uPXttZW51Lmljb259IHRpdGxlPXttZW51LnRpdGxlfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChtZW51LnJvdXRlcyl9PnttZW51LnRpdGxlfTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L1NpZGVyPlxuICAgICAgICAgIDxMYXlvdXQgc3R5bGU9e3sgcGFkZGluZzogJzAgMjRweCAyNHB4JyB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L0xheW91dD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/container/index.jsx\n");

/***/ })

})