module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/customers/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/container/index.jsx":
/*!****************************************!*\
  !*** ./components/container/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Container.module.css */ \"./styles/Container.module.css\");\n/* harmony import */ var _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/menu.js */ \"./pages/menu.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/Base/Documents/cms-new-jic/components/container/index.jsx\";\n\n\n\n\n\nconst {\n  Header,\n  Sider\n} = antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"];\n\nconst Container = props => {\n  const {\n    id,\n    children,\n    className\n  } = props;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: id,\n    className: `${_styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container} ${className || ''}`,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {\n        className: \"header\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n          children: \"PROTO CMS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n        className: _styles_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sider,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Sider, {\n          width: 200,\n          className: \"site-layout-background\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"], {\n            mode: \"inline\",\n            defaultSelectedKeys: ['1'],\n            defaultOpenKeys: ['sub1'],\n            style: {\n              height: '100%',\n              borderRight: 0\n            },\n            children: _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(menu => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Menu\"].Item, {\n              icon: menu.icon,\n              title: menu.title,\n              onClick: () => router.push(menu.route),\n              children: menu.title\n            }, menu.title, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 19\n            }, undefined))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n          style: {\n            padding: '0 24px 24px'\n          },\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5qc3g/YmVkOCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaWRlciIsIkxheW91dCIsIkNvbnRhaW5lciIsInByb3BzIiwiaWQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlcyIsImNvbnRhaW5lciIsInRpdGxlIiwic2lkZXIiLCJoZWlnaHQiLCJib3JkZXJSaWdodCIsImRhc2hib2FyZE1lbnVzIiwibWFwIiwibWVudSIsImljb24iLCJwdXNoIiwicm91dGUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBLFFBQUY7QUFBVUM7QUFBVixJQUFvQkMsMkNBQTFCOztBQUVBLE1BQU1DLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQzNCLFFBQU07QUFBRUMsTUFBRjtBQUFNQyxZQUFOO0FBQWdCQztBQUFoQixNQUE4QkgsS0FBcEM7QUFDQSxRQUFNSSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0U7QUFBSyxNQUFFLEVBQUVKLEVBQVQ7QUFBYSxhQUFTLEVBQUcsR0FBRUssbUVBQU0sQ0FBQ0MsU0FBVSxJQUFHSixTQUFTLElBQUksRUFBRyxFQUEvRDtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQUEsOEJBQ0UscUVBQUMsTUFBRDtBQUFRLGlCQUFTLEVBQUMsUUFBbEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFFRyxtRUFBTSxDQUFDRSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSxxRUFBQywyQ0FBRDtBQUFRLGlCQUFTLEVBQUVGLG1FQUFNLENBQUNHLEtBQTFCO0FBQUEsZ0NBQ0UscUVBQUMsS0FBRDtBQUFPLGVBQUssRUFBRSxHQUFkO0FBQW1CLG1CQUFTLEVBQUMsd0JBQTdCO0FBQUEsaUNBQ0UscUVBQUMseUNBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSwrQkFBbUIsRUFBRSxDQUFDLEdBQUQsQ0FGdkI7QUFHRSwyQkFBZSxFQUFFLENBQUMsTUFBRCxDQUhuQjtBQUlFLGlCQUFLLEVBQUU7QUFBRUMsb0JBQU0sRUFBRSxNQUFWO0FBQWtCQyx5QkFBVyxFQUFFO0FBQS9CLGFBSlQ7QUFBQSxzQkFPSUMsc0RBQWMsQ0FBQ0MsR0FBZixDQUFtQkMsSUFBSSxpQkFDckIscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQTRCLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFBdkM7QUFBNkMsbUJBQUssRUFBRUQsSUFBSSxDQUFDTixLQUF6RDtBQUFnRSxxQkFBTyxFQUFFLE1BQU1KLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZRixJQUFJLENBQUNHLEtBQWpCLENBQS9FO0FBQUEsd0JBQXlHSCxJQUFJLENBQUNOO0FBQTlHLGVBQWdCTSxJQUFJLENBQUNOLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWVFLHFFQUFDLDJDQUFEO0FBQVEsZUFBSyxFQUFFO0FBQUVVLG1CQUFPLEVBQUU7QUFBWCxXQUFmO0FBQUEsb0JBQ0doQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZCRCxDQWpDRDs7QUFtQ2VILHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29udGFpbmVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgZGFzaGJvYXJkTWVudXMgZnJvbSAnLi4vLi4vcGFnZXMvbWVudS5qcydcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBCcmVhZGNydW1iIH0gZnJvbSAnYW50ZCdcblxuY29uc3QgeyBIZWFkZXIsIFNpZGVyIH0gPSBMYXlvdXRcblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSA9IHByb3BzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2NsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlBST1RPIENNUzwvaDE+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVyfT5cbiAgICAgICAgICA8U2lkZXIgd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfVxuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZE1lbnVzLm1hcChtZW51ID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXttZW51LnRpdGxlfSBpY29uPXttZW51Lmljb259IHRpdGxlPXttZW51LnRpdGxlfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChtZW51LnJvdXRlKX0+e21lbnUudGl0bGV9PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvU2lkZXI+XG4gICAgICAgICAgPExheW91dCBzdHlsZT17eyBwYWRkaW5nOiAnMCAyNHB4IDI0cHgnIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/container/index.jsx\n");

/***/ }),

/***/ "./pages/customers/index.js":
/*!**********************************!*\
  !*** ./pages/customers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Customer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/container */ \"./components/container/index.jsx\");\n\nvar _jsxFileName = \"/Users/Base/Documents/cms-new-jic/pages/customers/index.js\";\n\n\n\n\n\n\n\nconst {\n  Content\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"];\n\nfunction renderTableAction() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    shape: \"circle\",\n    type: \"primary\",\n    ghost: true,\n    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"InfoOutlined\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }, this) // onClick={() => { this.handleGoToCustomerDetail(id) }} \n\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, this);\n}\n\nfunction Customer() {\n  const {\n    0: selected,\n    1: setSelected\n  } = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])('');\n  const columns = [{\n    title: 'Email',\n    key: 'email',\n    dataIndex: 'email',\n    width: 140\n  }, {\n    title: 'Name',\n    key: 'name',\n    dataIndex: 'name',\n    width: 180\n  }, {\n    title: 'Phone Number',\n    key: 'phoneNumber',\n    dataIndex: 'phoneNumber',\n    width: 160\n  }, {\n    title: \"Action\",\n    key: 'action',\n    dataIndex: 'action',\n    render: renderTableAction,\n    width: 50\n  }];\n  const data = [{\n    id: 1,\n    name: \"Pablo\",\n    email: \"pablo@mail.com\",\n    phoneNumber: \"0812345678\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Customer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Content, {\n          className: \"site-layout-background\",\n          style: {\n            padding: 24,\n            margin: 0,\n            minHeight: 280\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"PageHeader\"], {\n              title: \"Customer\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Descriptions\"], {\n                size: \"small\",\n                column: 4,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Descriptions\"].Item, {\n                  label: \"Total\",\n                  children: [data.length, \" Customer\"]\n                }, \"total\", true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.table,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Table\"], {\n                columns: columns,\n                dataSource: data,\n                pagination: false,\n                scroll: {\n                  x: true,\n                  y: 'calc(100vh - 260px)'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jdXN0b21lcnMvaW5kZXguanM/NmU3NiJdLCJuYW1lcyI6WyJDb250ZW50IiwiTGF5b3V0IiwicmVuZGVyVGFibGVBY3Rpb24iLCJDdXN0b21lciIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsImNvbHVtbnMiLCJ0aXRsZSIsImtleSIsImRhdGFJbmRleCIsIndpZHRoIiwicmVuZGVyIiwiZGF0YSIsImlkIiwibmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwicGFkZGluZyIsIm1hcmdpbiIsIm1pbkhlaWdodCIsImxlbmd0aCIsInRhYmxlIiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBY0MsMkNBQXBCOztBQUVBLFNBQVNDLGlCQUFULEdBQTZCO0FBQzNCLHNCQUNBLHFFQUFDLDJDQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxRQUFJLEVBQUMsU0FGUDtBQUdFLFNBQUssTUFIUDtBQUlFLFFBQUksZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSlIsQ0FLRTs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFTRDs7QUFHYyxTQUFTQyxRQUFULEdBQW9CO0FBQ2pDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUEsUUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsT0FBRyxFQUFFLE9BRlA7QUFHRUMsYUFBUyxFQUFFLE9BSGI7QUFJRUMsU0FBSyxFQUFFO0FBSlQsR0FEYyxFQU9kO0FBQ0VILFNBQUssRUFBRSxNQURUO0FBRUVDLE9BQUcsRUFBRSxNQUZQO0FBR0VDLGFBQVMsRUFBRSxNQUhiO0FBSUVDLFNBQUssRUFBRTtBQUpULEdBUGMsRUFhZDtBQUNFSCxTQUFLLEVBQUUsY0FEVDtBQUVFQyxPQUFHLEVBQUUsYUFGUDtBQUdFQyxhQUFTLEVBQUUsYUFIYjtBQUlFQyxTQUFLLEVBQUU7QUFKVCxHQWJjLEVBbUJkO0FBQ0VILFNBQUssRUFBRSxRQURUO0FBRUVDLE9BQUcsRUFBRSxRQUZQO0FBR0VDLGFBQVMsRUFBRSxRQUhiO0FBSUVFLFVBQU0sRUFBRVYsaUJBSlY7QUFLRVMsU0FBSyxFQUFFO0FBTFQsR0FuQmMsQ0FBaEI7QUEyQkEsUUFBTUUsSUFBSSxHQUFHLENBQUM7QUFDWkMsTUFBRSxFQUFDLENBRFM7QUFFWkMsUUFBSSxFQUFFLE9BRk07QUFHWkMsU0FBSyxFQUFFLGdCQUhLO0FBSVpDLGVBQVcsRUFBRTtBQUpELEdBQUQsQ0FBYjtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLDZCQUNFLHFFQUFDLDZEQUFEO0FBQUEsK0JBQ0UscUVBQUMsT0FBRDtBQUNFLG1CQUFTLEVBQUMsd0JBRFo7QUFFRSxlQUFLLEVBQUU7QUFDTEMsbUJBQU8sRUFBRSxFQURKO0FBRUxDLGtCQUFNLEVBQUUsQ0FGSDtBQUdMQyxxQkFBUyxFQUFFO0FBSE4sV0FGVDtBQUFBLGlDQVFFLHFFQUFDLDJDQUFEO0FBQUEsb0NBQ0UscUVBQUMsK0NBQUQ7QUFDRSxtQkFBSyxFQUFDLFVBRFI7QUFBQSxxQ0FHRSxxRUFBQyxpREFBRDtBQUFjLG9CQUFJLEVBQUMsT0FBbkI7QUFBMkIsc0JBQU0sRUFBRSxDQUFuQztBQUFBLHVDQUNFLHFFQUFDLGlEQUFELENBQWMsSUFBZDtBQUFtQix1QkFBSyxFQUFDLE9BQXpCO0FBQUEsNkJBQThDVixJQUFJLENBQUNXLE1BQW5EO0FBQUEsbUJBQXFDLE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVFFO0FBQUssdUJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sS0FBdkI7QUFBQSxxQ0FDRSxxRUFBQywwQ0FBRDtBQUNFLHVCQUFPLEVBQUVsQixPQURYO0FBRUUsMEJBQVUsRUFBRU0sSUFGZDtBQUdFLDBCQUFVLEVBQUUsS0FIZDtBQUlFLHNCQUFNLEVBQUU7QUFBRWEsbUJBQUMsRUFBRSxJQUFMO0FBQVdDLG1CQUFDLEVBQUU7QUFBZDtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEIiwiZmlsZSI6Ii4vcGFnZXMvY3VzdG9tZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgUGFnZUhlYWRlciwgRGVzY3JpcHRpb25zLCBUYWJsZSwgQnV0dG9uLCBUYWcsIG1lc3NhZ2UsIE1vZGFsLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnXG5pbXBvcnQge0luZm9PdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXRcblxuZnVuY3Rpb24gcmVuZGVyVGFibGVBY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gIDxCdXR0b25cbiAgICBzaGFwZT1cImNpcmNsZVwiXG4gICAgdHlwZT1cInByaW1hcnlcIlxuICAgIGdob3N0XG4gICAgaWNvbj17PEluZm9PdXRsaW5lZCAvPn1cbiAgICAvLyBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuaGFuZGxlR29Ub0N1c3RvbWVyRGV0YWlsKGlkKSB9fSBcbiAgICAvPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXIoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdFbWFpbCcsXG4gICAgICBrZXk6ICdlbWFpbCcsXG4gICAgICBkYXRhSW5kZXg6ICdlbWFpbCcsXG4gICAgICB3aWR0aDogMTQwLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdOYW1lJyxcbiAgICAgIGtleTogJ25hbWUnLFxuICAgICAgZGF0YUluZGV4OiAnbmFtZScsXG4gICAgICB3aWR0aDogMTgwLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdQaG9uZSBOdW1iZXInLFxuICAgICAga2V5OiAncGhvbmVOdW1iZXInLFxuICAgICAgZGF0YUluZGV4OiAncGhvbmVOdW1iZXInLFxuICAgICAgd2lkdGg6IDE2MCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFjdGlvblwiLFxuICAgICAga2V5OiAnYWN0aW9uJyxcbiAgICAgIGRhdGFJbmRleDogJ2FjdGlvbicsXG4gICAgICByZW5kZXI6IHJlbmRlclRhYmxlQWN0aW9uLFxuICAgICAgd2lkdGg6IDUwLFxuICAgIH0sXG4gIF1cbiAgY29uc3QgZGF0YSA9IFt7XG4gICAgaWQ6MSxcbiAgICBuYW1lOiBcIlBhYmxvXCIsXG4gICAgZW1haWw6IFwicGFibG9AbWFpbC5jb21cIixcbiAgICBwaG9uZU51bWJlcjogXCIwODEyMzQ1Njc4XCJcbiAgfV1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN1c3RvbWVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxuICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogMjgwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICA8UGFnZUhlYWRlclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ3VzdG9tZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucyBzaXplPVwic21hbGxcIiBjb2x1bW49ezR9PlxuICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiVG90YWxcIiBrZXk9XCJ0b3RhbFwiPntkYXRhLmxlbmd0aH0gQ3VzdG9tZXI8L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zPlxuICAgICAgICAgICAgICA8L1BhZ2VIZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHNjcm9sbD17eyB4OiB0cnVlLCB5OiAnY2FsYygxMDB2aCAtIDI2MHB4KScgfX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/customers/index.js\n");

/***/ }),

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Base/Documents/cms-new-jic/pages/menu.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"PieChartOutlined\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 11\n  }, undefined),\n  title: 'Dashboard',\n  route: \"/\"\n}, {\n  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"TeamOutlined\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 11\n  }, undefined),\n  title: 'Customers',\n  route: \"/customers\"\n}, {\n  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"LaptopOutlined\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 11\n  }, undefined),\n  title: 'Roadmap',\n  route: \"/roadmap\"\n}, {\n  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"BookOutlined\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 11\n  }, undefined),\n  title: 'Class',\n  route: \"/class\"\n}, {\n  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"StarOutlined\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 11\n  }, undefined),\n  title: 'Roles',\n  route: \"/roles\"\n}, {\n  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"UserOutlined\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 11\n  }, undefined),\n  title: 'Users',\n  route: \"/users\"\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW51LmpzPzJlZDMiXSwibmFtZXMiOlsiaWNvbiIsInRpdGxlIiwicm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQVNlLGdFQUNiO0FBQ0VBLE1BQUksZUFBRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFFRUMsT0FBSyxFQUFDLFdBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEYSxFQU1iO0FBQ0VGLE1BQUksZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFFRUMsT0FBSyxFQUFDLFdBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FOYSxFQVdiO0FBQ0VGLE1BQUksZUFBRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFFRUMsT0FBSyxFQUFDLFNBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FYYSxFQWdCYjtBQUNFRixNQUFJLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBRUVDLE9BQUssRUFBQyxPQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBaEJhLEVBcUJiO0FBQ0VGLE1BQUksZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFFRUMsT0FBSyxFQUFDLE9BRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FyQmEsRUEwQmI7QUFDRUYsTUFBSSxlQUFFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUjtBQUVFQyxPQUFLLEVBQUMsT0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQTFCYSxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBpZUNoYXJ0T3V0bGluZWQsXG4gIEJvb2tPdXRsaW5lZCxcbiAgTGFwdG9wT3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZCxcbiAgVGVhbU91dGxpbmVkLFxuICBTdGFyT3V0bGluZWRcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBpY29uOiA8UGllQ2hhcnRPdXRsaW5lZCAvPixcbiAgICB0aXRsZTonRGFzaGJvYXJkJyxcbiAgICByb3V0ZTogXCIvXCJcbiAgfSxcbiAge1xuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXG4gICAgdGl0bGU6J0N1c3RvbWVycycsXG4gICAgcm91dGU6IFwiL2N1c3RvbWVyc1wiXG4gIH0sXG4gIHtcbiAgICBpY29uOiA8TGFwdG9wT3V0bGluZWQgLz4sXG4gICAgdGl0bGU6J1JvYWRtYXAnLFxuICAgIHJvdXRlOiBcIi9yb2FkbWFwXCJcbiAgfSxcbiAge1xuICAgIGljb246IDxCb29rT3V0bGluZWQgLz4sXG4gICAgdGl0bGU6J0NsYXNzJyxcbiAgICByb3V0ZTogXCIvY2xhc3NcIlxuICB9LFxuICB7XG4gICAgaWNvbjogPFN0YXJPdXRsaW5lZCAvPixcbiAgICB0aXRsZTonUm9sZXMnLFxuICAgIHJvdXRlOiBcIi9yb2xlc1wiXG4gIH0sXG4gIHtcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxuICAgIHRpdGxlOidVc2VycycsXG4gICAgcm91dGU6IFwiL3VzZXJzXCJcbiAgfSxcbl0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/menu.js\n");

/***/ }),

/***/ "./styles/Container.module.css":
/*!*************************************!*\
  !*** ./styles/Container.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"components-layout-demo-top-side-2\": \"components-layout-demo-top-side-2___2uhGs\",\n\t\"logo\": \"logo___3N7kL\",\n\t\"ant-row-rtl\": \"ant-row-rtl___vx73q\",\n\t\"site-layout-background\": \"site-layout-background___1xMDj\",\n\t\"title\": \"title___1JfvC\",\n\t\"main\": \"main___JVyq6\",\n\t\"sider\": \"sider___33smK\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvQ29udGFpbmVyLm1vZHVsZS5jc3M/Yjk2ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvQ29udGFpbmVyLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21wb25lbnRzLWxheW91dC1kZW1vLXRvcC1zaWRlLTJcIjogXCJjb21wb25lbnRzLWxheW91dC1kZW1vLXRvcC1zaWRlLTJfX18ydWhHc1wiLFxuXHRcImxvZ29cIjogXCJsb2dvX19fM043a0xcIixcblx0XCJhbnQtcm93LXJ0bFwiOiBcImFudC1yb3ctcnRsX19fdng3M3FcIixcblx0XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCI6IFwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZF9fXzF4TURqXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9fXzFKZnZDXCIsXG5cdFwibWFpblwiOiBcIm1haW5fX19KVnlxNlwiLFxuXHRcInNpZGVyXCI6IFwic2lkZXJfX18zM3NtS1wiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Container.module.css\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"components-layout-demo-top-side-2\": \"components-layout-demo-top-side-2___3-qer\",\n\t\"logo\": \"logo___1c5NA\",\n\t\"ant-row-rtl\": \"ant-row-rtl___2Nu_x\",\n\t\"site-layout-background\": \"site-layout-background___1GiJW\",\n\t\"title\": \"title___2Atov\",\n\t\"main\": \"main___3VT-L\",\n\t\"sider\": \"sider___3qiAk\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzUzZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbXBvbmVudHMtbGF5b3V0LWRlbW8tdG9wLXNpZGUtMlwiOiBcImNvbXBvbmVudHMtbGF5b3V0LWRlbW8tdG9wLXNpZGUtMl9fXzMtcWVyXCIsXG5cdFwibG9nb1wiOiBcImxvZ29fX18xYzVOQVwiLFxuXHRcImFudC1yb3ctcnRsXCI6IFwiYW50LXJvdy1ydGxfX18yTnVfeFwiLFxuXHRcInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIjogXCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kX19fMUdpSldcIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlX19fMkF0b3ZcIixcblx0XCJtYWluXCI6IFwibWFpbl9fXzNWVC1MXCIsXG5cdFwic2lkZXJcIjogXCJzaWRlcl9fXzNxaUFrXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });