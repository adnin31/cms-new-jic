webpackHotUpdate_N_E("pages/customers",{

/***/ "./pages/customers/index.js":
/*!**********************************!*\
  !*** ./pages/customers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Customer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/container */ \"./components/container/index.jsx\");\n\n\nvar _jsxFileName = \"/Users/Base/Documents/cms-new-jic/pages/customers/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Content = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Content;\n\nrenderTableAction = function renderTableAction() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    shape: \"circle\",\n    type: \"primary\",\n    ghost: true,\n    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"InfoOutlined\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }, _this) // onClick={() => { this.handleGoToCustomerDetail(id) }} \n\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n};\n\nfunction Customer() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(''),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  var columns = [{\n    title: 'Email',\n    key: 'id',\n    dataIndex: 'id',\n    width: 140\n  }, {\n    title: 'Name',\n    key: 'name',\n    dataIndex: 'name',\n    width: 180\n  }, {\n    title: 'Phone Number',\n    key: 'address',\n    dataIndex: 'address',\n    width: 160\n  }, {\n    title: \"Action\",\n    key: 'action',\n    dataIndex: 'action',\n    render: renderTableAction,\n    width: 107\n  }];\n  var data = [];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Customer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Content, {\n          className: \"site-layout-background\",\n          style: {\n            padding: 24,\n            margin: 0,\n            minHeight: 280\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"PageHeader\"], {\n              title: \"Customer\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Descriptions\"], {\n                size: \"small\",\n                column: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Descriptions\"].Item, {\n                  label: \"Total\",\n                  children: \" Customer\"\n                }, \"total\", false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.table,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Table\"], {\n                columns: columns,\n                dataSource: data,\n                pagination: false,\n                scroll: {\n                  x: true,\n                  y: 'calc(100vh - 260px)'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Customer, \"18RT5nPrBTPIyYXVolwVU2o0VQI=\");\n\n_c = Customer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Customer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzL2luZGV4LmpzPzZlNzYiXSwibmFtZXMiOlsiQ29udGVudCIsIkxheW91dCIsInJlbmRlclRhYmxlQWN0aW9uIiwiQ3VzdG9tZXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJjb2x1bW5zIiwidGl0bGUiLCJrZXkiLCJkYXRhSW5kZXgiLCJ3aWR0aCIsInJlbmRlciIsImRhdGEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwicGFkZGluZyIsIm1hcmdpbiIsIm1pbkhlaWdodCIsInRhYmxlIiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtJQUVRQSxPLEdBQVlDLDJDLENBQVpELE87O0FBRVJFLGlCQUFpQixHQUFHO0FBQUEsc0JBQ2xCLHFFQUFDLDJDQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLFNBQUssTUFIUDtBQUlFLFFBQUksZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSlIsQ0FLRTs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGtCO0FBQUEsQ0FBcEI7O0FBVWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEVBQUQsQ0FEUDtBQUFBLE1BQzFCQyxRQUQwQjtBQUFBLE1BQ2hCQyxXQURnQjs7QUFHakMsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsT0FBRyxFQUFFLElBRlA7QUFHRUMsYUFBUyxFQUFFLElBSGI7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FEYyxFQU9kO0FBQ0VILFNBQUssRUFBRSxNQURUO0FBRUVDLE9BQUcsRUFBRSxNQUZQO0FBR0VDLGFBQVMsRUFBRSxNQUhiO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBUGMsRUFhZDtBQUNFSCxTQUFLLEVBQUUsY0FEVDtBQUVFQyxPQUFHLEVBQUUsU0FGUDtBQUdFQyxhQUFTLEVBQUUsU0FIYjtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQWJjLEVBbUJkO0FBQ0VILFNBQUssRUFBRSxRQURUO0FBRUVDLE9BQUcsRUFBRSxRQUZQO0FBR0VDLGFBQVMsRUFBRSxRQUhiO0FBSUVFLFVBQU0sRUFBRVYsaUJBSlY7QUFLRVMsU0FBSyxFQUFFO0FBTFQsR0FuQmMsQ0FBaEI7QUEyQkEsTUFBTUUsSUFBSSxHQUFHLEVBQWI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFNLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw2QkFDRSxxRUFBQyw2REFBRDtBQUFBLCtCQUNFLHFFQUFDLE9BQUQ7QUFDRSxtQkFBUyxFQUFDLHdCQURaO0FBRUUsZUFBSyxFQUFFO0FBQ0xDLG1CQUFPLEVBQUUsRUFESjtBQUVMQyxrQkFBTSxFQUFFLENBRkg7QUFHTEMscUJBQVMsRUFBRTtBQUhOLFdBRlQ7QUFBQSxpQ0FRRSxxRUFBQywyQ0FBRDtBQUFBLG9DQUNFLHFFQUFDLCtDQUFEO0FBQ0UsbUJBQUssRUFBQyxVQURSO0FBQUEscUNBR0UscUVBQUMsaURBQUQ7QUFBYyxvQkFBSSxFQUFDLE9BQW5CO0FBQTJCLHNCQUFNLEVBQUUsQ0FBbkM7QUFBQSx1Q0FDRSxxRUFBQyxpREFBRCxDQUFjLElBQWQ7QUFBbUIsdUJBQUssRUFBQyxPQUF6QjtBQUFBO0FBQUEsbUJBQXFDLE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVFFO0FBQUssdUJBQVMsRUFBRUwsOERBQU0sQ0FBQ00sS0FBdkI7QUFBQSxxQ0FDRSxxRUFBQywwQ0FBRDtBQUNFLHVCQUFPLEVBQUViLE9BRFg7QUFFRSwwQkFBVSxFQUFFTSxJQUZkO0FBR0UsMEJBQVUsRUFBRSxLQUhkO0FBSUUsc0JBQU0sRUFBRTtBQUFFUSxtQkFBQyxFQUFFLElBQUw7QUFBV0MsbUJBQUMsRUFBRTtBQUFkO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Q0Q7O0dBdEV1Qm5CLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9wYWdlcy9jdXN0b21lcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBQYWdlSGVhZGVyLCBEZXNjcmlwdGlvbnMsIFRhYmxlLCBCdXR0b24sIFRhZywgbWVzc2FnZSwgTW9kYWwsIEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7SW5mb091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IExheW91dCwgTWVudSB9IGZyb20gJ2FudGQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuXG5jb25zdCB7IENvbnRlbnQgfSA9IExheW91dFxuXG5yZW5kZXJUYWJsZUFjdGlvbiA9ICggKT0+IChcbiAgPEJ1dHRvblxuICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgZ2hvc3RcbiAgICBpY29uPXs8SW5mb091dGxpbmVkIC8+fVxuICAgIC8vIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5oYW5kbGVHb1RvQ3VzdG9tZXJEZXRhaWwoaWQpIH19IFxuICAgIC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyKCkge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRW1haWwnLFxuICAgICAga2V5OiAnaWQnLFxuICAgICAgZGF0YUluZGV4OiAnaWQnLFxuICAgICAgd2lkdGg6IDE0MCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTmFtZScsXG4gICAgICBrZXk6ICduYW1lJyxcbiAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxuICAgICAgd2lkdGg6IDE4MCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUGhvbmUgTnVtYmVyJyxcbiAgICAgIGtleTogJ2FkZHJlc3MnLFxuICAgICAgZGF0YUluZGV4OiAnYWRkcmVzcycsXG4gICAgICB3aWR0aDogMTYwLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQWN0aW9uXCIsXG4gICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgZGF0YUluZGV4OiAnYWN0aW9uJyxcbiAgICAgIHJlbmRlcjogcmVuZGVyVGFibGVBY3Rpb24sXG4gICAgICB3aWR0aDogMTA3LFxuICAgIH0sXG4gIF1cbiAgY29uc3QgZGF0YSA9IFtdXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DdXN0b21lcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDI4MCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPFBhZ2VIZWFkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkN1c3RvbWVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMgc2l6ZT1cInNtYWxsXCIgY29sdW1uPXs0fT5cbiAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIlRvdGFsXCIga2V5PVwidG90YWxcIj4gQ3VzdG9tZXI8L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zPlxuICAgICAgICAgICAgICA8L1BhZ2VIZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHNjcm9sbD17eyB4OiB0cnVlLCB5OiAnY2FsYygxMDB2aCAtIDI2MHB4KScgfX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/customers/index.js\n");

/***/ })

})