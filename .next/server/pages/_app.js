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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/antd.less":
/*!**************************!*\
  !*** ./assets/antd.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Fzc2V0cy9hbnRkLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/antd.less\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_antd_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/antd.less */ \"./assets/antd.less\");\n/* harmony import */ var _assets_antd_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_antd_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/index */ \"./store/index.js\");\n\nvar _jsxFileName = \"/Users/Base/Documents/cms-new-jic/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_index__WEBPACK_IMPORTED_MODULE_5__[\"wrapper\"].withRedux(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFBTyxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjQyxtSEFBTyxDQUFDQyxTQUFSLENBQWtCSixLQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnLi4vYXNzZXRzL2FudGQubGVzcydcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4XCJcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _roleReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roleReducer */ \"./store/roleReducer/index.js\");\n/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userReducer */ \"./store/userReducer/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  UserReducer: _userReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  RoleReducer: _roleReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\nlet composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\n\nif (false) {}\n\nconst store = () => Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer,\n/* preloadedState, */\ncomposeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"createWrapper\"])(store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcz85MTAxIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJVc2VyUmVkdWNlciIsIlJvbGVSZWR1Y2VyIiwiY29tcG9zZUVuaGFuY2VycyIsImNvbXBvc2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyw2REFBZSxDQUFDO0FBQzlCQyxtRUFEOEI7QUFFOUJDLG1FQUFXQTtBQUZtQixDQUFELENBQS9CO0FBSUEsSUFBSUMsZ0JBQWdCLEdBQUdDLDZDQUF2Qjs7QUFDQSxXQUFtQyxFQUVsQzs7QUFDRCxNQUFNQyxLQUFLLEdBQUcsTUFBTUMseURBQVcsQ0FBQ1AsT0FBRDtBQUFVO0FBQXNCSSxnQkFBZ0IsQ0FBQ0ksNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FBaEQsQ0FBL0I7O0FBRU8sTUFBTUMsT0FBTyxHQUFHQyx3RUFBYSxDQUFDTCxLQUFELENBQTdCIiwiZmlsZSI6Ii4vc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUsY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IFJvbGVSZWR1Y2VyIGZyb20gJy4vcm9sZVJlZHVjZXInXG5pbXBvcnQgVXNlclJlZHVjZXIgZnJvbSAnLi91c2VyUmVkdWNlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBVc2VyUmVkdWNlcixcbiAgUm9sZVJlZHVjZXJcbn0pXG5sZXQgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2U7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcbn1cbmNvbnN0IHN0b3JlID0gKCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgLyogcHJlbG9hZGVkU3RhdGUsICovIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihzdG9yZSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/roleReducer/index.js":
/*!************************************!*\
  !*** ./store/roleReducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RoleReducer; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  roles: [],\n  loading: true,\n  totalRoles: 0\n};\nfunction RoleReducer(state = initialState, action) {\n  switch (action.type) {\n    case \"ADD_ROLES\":\n      const newRoles = action.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        products: newRoles,\n        totalRoles: newRoles.length\n      });\n\n    case \"SET_LOADING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: action.payload\n      });\n\n    default:\n      return state;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yb2xlUmVkdWNlci9pbmRleC5qcz80MmYxIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInJvbGVzIiwibG9hZGluZyIsInRvdGFsUm9sZXMiLCJSb2xlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5ld1JvbGVzIiwicGF5bG9hZCIsInByb2R1Y3RzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsT0FBSyxFQUFFLEVBRFU7QUFFakJDLFNBQU8sRUFBRSxJQUZRO0FBR2pCQyxZQUFVLEVBQUM7QUFITSxDQUFyQjtBQU9pQixTQUFTQyxXQUFULENBQXFCQyxLQUFLLEdBQUdMLFlBQTdCLEVBQTJDTSxNQUEzQyxFQUFtRDtBQUNoRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFdBQUw7QUFDRSxZQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csT0FBeEI7QUFDQSw2Q0FBWUosS0FBWjtBQUFtQkssZ0JBQVEsRUFBRUYsUUFBN0I7QUFBdUNMLGtCQUFVLEVBQUVLLFFBQVEsQ0FBQ0c7QUFBNUQ7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsNkNBQVdOLEtBQVg7QUFBa0JILGVBQU8sRUFBRUksTUFBTSxDQUFDRztBQUFsQzs7QUFDRjtBQUNFLGFBQU9KLEtBQVA7QUFQSjtBQVNEIiwiZmlsZSI6Ii4vc3RvcmUvcm9sZVJlZHVjZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgcm9sZXM6IFtdLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgdG90YWxSb2xlczowXG4gIH1cbiAgXG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb2xlUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIkFERF9ST0xFU1wiOlxuICAgICAgICBjb25zdCBuZXdSb2xlcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogbmV3Um9sZXMsIHRvdGFsUm9sZXM6IG5ld1JvbGVzLmxlbmd0aH1cbiAgICAgIGNhc2UgXCJTRVRfTE9BRElOR1wiOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/roleReducer/index.js\n");

/***/ }),

/***/ "./store/userReducer/index.js":
/*!************************************!*\
  !*** ./store/userReducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserReducer; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  user: {},\n  loading: true\n};\nfunction UserReducer(state = initialState, action) {\n  switch (action.type) {\n    case \"SET_USER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n\n    case \"SET_LOADING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: action.payload\n      });\n\n    case \"USER_LOGOUT\":\n      return initialState;\n\n    default:\n      return state;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS91c2VyUmVkdWNlci9pbmRleC5qcz81OWNhIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJsb2FkaW5nIiwiVXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFLEVBRFc7QUFFakJDLFNBQU8sRUFBRTtBQUZRLENBQXJCO0FBTWlCLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQUssR0FBR0osWUFBN0IsRUFBMkNLLE1BQTNDLEVBQW1EO0FBQ2hFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFLDZDQUFXRixLQUFYO0FBQWtCSCxZQUFJLEVBQUVJLE1BQU0sQ0FBQ0U7QUFBL0I7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsNkNBQVdILEtBQVg7QUFBa0JGLGVBQU8sRUFBRUcsTUFBTSxDQUFDRTtBQUFsQzs7QUFDRixTQUFLLGFBQUw7QUFDRSxhQUFPUCxZQUFQOztBQUNGO0FBQ0UsYUFBT0ksS0FBUDtBQVJKO0FBVUQiLCJmaWxlIjoiLi9zdG9yZS91c2VyUmVkdWNlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB1c2VyOiB7fSxcbiAgICBsb2FkaW5nOiB0cnVlXG4gIH1cbiAgXG4gIFxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcIlNFVF9VU0VSXCI6XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkfVxuICAgICAgY2FzZSBcIlNFVF9MT0FESU5HXCI6XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkfVxuICAgICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6XG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/userReducer/index.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"logincontainer\": \"logincontainer___2pUBP\",\n\t\"logo\": \"logo___2IJZR\",\n\t\"tableActionButton\": \"tableActionButton___OmiHP\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLmNzcz8xNmNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luY29udGFpbmVyXCI6IFwibG9naW5jb250YWluZXJfX18ycFVCUFwiLFxuXHRcImxvZ29cIjogXCJsb2dvX19fMklKWlJcIixcblx0XCJ0YWJsZUFjdGlvbkJ1dHRvblwiOiBcInRhYmxlQWN0aW9uQnV0dG9uX19fT21pSFBcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/styles.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });