/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => /* binding */ about\n/* harmony export */ });\nvar about = function about() {\n  return \"thi is about page\";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/about.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => /* binding */ contact\n/* harmony export */ });\nvar contact = function contact() {\n  return \"this is a contact page\";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ \"./src/react/index.js\");\n\nvar Header = function Header() {\n  var menuItems = [{\n    link: '/',\n    name: 'Home'\n  }, {\n    link: '/about',\n    name: 'About'\n  }, {\n    link: '/contacts',\n    name: 'Contacts'\n  }];\n  var list = [];\n  menuItems.forEach(function (item) {\n    var liProps = {\n      onclick: function onclick() {\n        window.location.pathname = item.link;\n      },\n      style: \"padding: 5px 15px; border: 1px solid #ddd; margin: 5px; display: inline-block\"\n    };\n    var li = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', liProps, item.name);\n    list.push(li);\n  });\n  var menus = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', null, list);\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', null, menus);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\nvar home = function home() {\n  return \"this is home page\";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/home.js?");

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/components/about.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n/* harmony import */ var _components_login_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login/login */ \"./src/components/login/login.js\");\n\n\n\n\nvar Layout = function Layout() {\n  if (location.pathname === \"/\") {\n    return (0,_components_login_login__WEBPACK_IMPORTED_MODULE_3__.default)();\n  } else if (location.pathname === \"/about\") {\n    return (0,_about__WEBPACK_IMPORTED_MODULE_0__.about)();\n  } else if (location.pathname === \"/contacts\") {\n    return (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/components/layout.js?");

/***/ }),

/***/ "./src/components/login/login.js":
/*!***************************************!*\
  !*** ./src/components/login/login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _react_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../react/index */ \"./src/react/index.js\");\n/* harmony import */ var _src_netflix_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/netflix-bg.jpg */ \"./src/netflix-bg.jpg\");\n\n\n\nvar Login = function Login() {\n  var loginContainer = (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"login-main\"\n  }, (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n    \"class\": \"login-container\"\n  }), (0,_react_index__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", {\n    src: _src_netflix_bg_jpg__WEBPACK_IMPORTED_MODULE_1__.default\n  }));\n  return loginContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://my-webpack-project/./src/components/login/login.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _components_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/style.css */ \"./src/components/style.css\");\n\n\n\n\n\nvar App = function App() {\n  // return createElement('div', null, Header())\n  var main = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null);\n  var layout = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout)());\n  main.append((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.Header)());\n  main.append(layout);\n  return main;\n};\n\n_react__WEBPACK_IMPORTED_MODULE_0__.reactDOM.render(App(), document.getElementById('root'));\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"reactDOM\": () => /* binding */ reactDOM\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar createElement = function createElement(elementType, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  var element = document.createElement(elementType);\n  children.forEach(function (child) {\n    if (_typeof(child) === 'object') {\n      if (Array.isArray(child)) {\n        child.forEach(function (innerChild) {\n          element.appendChild(innerChild);\n        });\n      } else {\n        element.appendChild(child);\n      }\n    } else {\n      element.innerHTML = children;\n    }\n  });\n  return handleProps(element, props);\n};\n\nvar handleProps = function handleProps(element, props) {\n  if (props) {\n    Object.keys(props).forEach(function (prop) {\n      if (prop) {\n        if (/^on.*$/.test(prop)) {\n          element.addEventListener(prop.substring(2), props[prop]);\n        } else {\n          element.setAttribute(prop, props[prop]);\n        }\n      }\n    });\n  }\n\n  return element;\n};\n\nvar reactDOM = {\n  render: function render(element, rootElement) {\n    rootElement.appendChild(element);\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/react/index.js?");

/***/ }),

/***/ "./src/netflix-bg.jpg":
/*!****************************!*\
  !*** ./src/netflix-bg.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"245a27c4567b6f0660166c1c3c647573.jpg\");\n\n//# sourceURL=webpack://my-webpack-project/./src/netflix-bg.jpg?");

/***/ }),

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;