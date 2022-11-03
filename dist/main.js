/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n}\\n\\n:root {\\n    font-size: 16px;\\n    font-family: 'Roboto Slab', serif;\\n    --left-side-color: #e6e6e6;\\n}\\n\\nbody,\\nh1,\\nh2,\\np {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    height: 100vh;\\n    display: flex;\\n}\\n\\nbutton {\\n    padding: 8px 16px;\\n    border: 0;\\n    border-radius: 4px;\\n    border: 1px solid #583ed5;\\n    background-color: #583ed5;\\n    color: white;\\n    text-transform: uppercase;\\n    font-weight: bold;\\n}\\n\\nbutton:hover {\\n    background-color: white;\\n    color: black;\\n}\\n\\nbutton:active {\\n    transform: scale(0.9);\\n}\\n\\nbutton.back-btn,\\n.game-over-btn:last-child {\\n    border: 1px solid hsl(0, 64%, 54%);\\n    background-color: hsl(0, 64%, 54%);\\n}\\n\\nbutton.back-btn:hover,\\n.game-over-btn:last-child:hover {\\n    background-color: white;\\n    color: black;\\n}\\n\\nbutton.back-btn:active {\\n    transform: scale(0.9);\\n}\\n\\n/* left-side */\\n\\n.left-side {\\n    max-width: 30%;\\n    height: 100%;\\n    background-color: var(--left-side-color);\\n    padding: 16px;\\n}\\n\\n.left-side header {\\n    text-align: center;\\n}\\n\\n.left-side article {\\n    text-align: justify;\\n}\\n\\n/* Main Body */\\n\\n.main-body {\\n    display: flex;\\n    flex: 1;\\n    padding-top: 16px;\\n    justify-content: center;\\n}\\n\\n/* Game Method */\\n\\n.game-method {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.game-method .title {\\n    text-transform: uppercase;\\n    margin-bottom: 16px;\\n}\\n\\n.method-button {\\n    display: flex;\\n    column-gap: 16px;\\n}\\n\\n/* Chosse Name */\\n\\n.name-input-cont input {\\n    border-radius: 4px;\\n    border: 1px solid #583ed5;\\n    padding: 4px 16px 4px 4px;\\n}\\n\\n.name-input-cont {\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 6px;\\n}\\n\\n.insert-name {\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 16px;\\n}\\n\\n/* Board Game */\\n\\n.board-game {\\n    display: flex;\\n    width: calc(80px * 3);\\n    height: calc(80px * 3);\\n    flex-wrap: wrap;\\n}\\n\\n.board-cell {\\n    border: 1px solid grey;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 1.8rem;\\n    font-weight: bold;\\n}\\n\\n.hint {\\n    color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.board-cell:hover {\\n    background-color: rgb(197, 197, 197);\\n}\\n\\n.board-cell:nth-child(1) {\\n    border-top-left-radius: 10px;\\n}\\n\\n.board-cell:nth-child(3) {\\n    border-top-right-radius: 10px;\\n}\\n\\n.board-cell:nth-child(7) {\\n    border-bottom-left-radius: 10px;\\n}\\n\\n.board-cell:nth-child(9) {\\n    border-bottom-right-radius: 10px;\\n}\\n\\n/* Score */\\n\\n.score-board-cont {\\n    padding: 8px 0 18px 0;\\n    border: 3px solid #48485e;\\n    margin-bottom: 16px;\\n    border-radius: 10px;\\n}\\n\\n.ronde {\\n    text-align: center;\\n    margin-bottom: 16px;\\n}\\n\\n.score-cont {\\n    display: flex;\\n    justify-content: space-around;\\n    text-align: center;\\n}\\n\\n.score-name {\\n    margin-bottom: 16px;\\n    font-weight: bold;\\n    text-transform: uppercase;\\n}\\n\\n#who-is-win {\\n    text-align: center;\\n    margin-top: 8px;\\n}\\n\\n.game-over-btn {\\n    display: block;\\n    width: 100%;\\n    margin-top: 16px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tic-tac-toe-ts/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Player = function (name, symbol) {\n    var cellOccupied = [];\n    var score = 0;\n    var appendScore = function () {\n        score = score + 1;\n    };\n    var resetCellOccupied = function () {\n        cellOccupied.length = 0;\n    };\n    var addingCellOccupied = function (index) {\n        if (!cellOccupied.includes(index)) {\n            cellOccupied.push(index);\n        }\n    };\n    return { name: name, symbol: symbol, cellOccupied: cellOccupied, score: score, appendScore: appendScore, addingCellOccupied: addingCellOccupied, resetCellOccupied: resetCellOccupied };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/Player.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_LeftSide_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/LeftSide.view */ \"./src/view/LeftSide.view.ts\");\n/* harmony import */ var _view_MainBody_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/MainBody.view */ \"./src/view/MainBody.view.ts\");\n/* harmony import */ var _view_StartGame_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/StartGame.view */ \"./src/view/StartGame.view.ts\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _logic_Game_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/Game.logic */ \"./src/logic/Game.logic.ts\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\nvar body = document.body;\nbody.appendChild((0,_view_LeftSide_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nbody.appendChild((0,_view_MainBody_view__WEBPACK_IMPORTED_MODULE_1__.MainBody)());\nfunction setGameMethod() {\n    (0,_view_MainBody_view__WEBPACK_IMPORTED_MODULE_1__.replaceBody)((0,_view_StartGame_view__WEBPACK_IMPORTED_MODULE_2__.chosseGameMethod)(function (method) { return chosePlayerNameEll(method); }));\n}\nfunction chosePlayerNameEll(method) {\n    (0,_view_MainBody_view__WEBPACK_IMPORTED_MODULE_1__.replaceBody)((0,_view_StartGame_view__WEBPACK_IMPORTED_MODULE_2__.chossePlayerName)(method, function (p1, p2, botLevel) {\n        var player1 = (0,_Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(p1, \"O\");\n        var player2 = (0,_Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(p2, \"X\");\n        playingTheGame(player1, player2, botLevel);\n    }, function () { return setGameMethod(); }));\n}\nfunction playingTheGame(player1, player2, botLevel) {\n    (0,_logic_Game_logic__WEBPACK_IMPORTED_MODULE_4__.initGame)({\n        player1: player1,\n        player2: player2,\n        botLevel: botLevel\n    });\n    (0,_view_MainBody_view__WEBPACK_IMPORTED_MODULE_1__.replaceBody)((0,_logic_Game_logic__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function () { return setGameMethod(); }));\n}\nsetGameMethod();\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/index.ts?");

/***/ }),

/***/ "./src/logic/Game.logic.ts":
/*!*********************************!*\
  !*** ./src/logic/Game.logic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BuildGame),\n/* harmony export */   \"initGame\": () => (/* binding */ initGame)\n/* harmony export */ });\n/* harmony import */ var _view_Board_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/Board.view */ \"./src/view/Board.view.ts\");\n/* harmony import */ var _view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/Scoreboard.view */ \"./src/view/Scoreboard.view.ts\");\n\n\nvar player = [];\nvar occupiedCell = [];\nvar currPlayerIndex = 0;\nvar againstBot = false;\nvar bot = null;\nvar gameReady = false;\nvar gameOver = false;\nvar div = document.createElement(\"div\");\nvar nextRoundBtn = document.createElement(\"button\");\nnextRoundBtn.textContent = \"Ronde Selanjutnya\";\nnextRoundBtn.classList.add(\"game-over-btn\");\nnextRoundBtn.addEventListener(\"click\", function () { return resetGame(); });\nvar backToHomeBtn = document.createElement(\"button\");\nbackToHomeBtn.textContent = \"Kembali ke Menu Utama\";\nbackToHomeBtn.classList.add(\"game-over-btn\");\nfunction initGame(_a) {\n    var player1 = _a.player1, player2 = _a.player2, botLevel = _a.botLevel;\n    console.log(player);\n    player[0] = player1;\n    player[1] = player2;\n    if (botLevel != null) {\n        againstBot = true;\n        bot = botLevel;\n    }\n    gameReady = true;\n}\nfunction BuildGame(backToHome) {\n    if (!gameReady) {\n        throw \"Need call initGame()\";\n    }\n    var scoreBoard = (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        player1: player[0],\n        player2: player[1]\n    });\n    var board = (0,_view_Board_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (index) {\n        return handleGame(index);\n    });\n    backToHomeBtn.addEventListener(\"click\", function () {\n        exitGame();\n        backToHome();\n    });\n    div.replaceChildren(scoreBoard, board);\n    return div;\n}\nfunction getUnOccupiedCell() {\n    var unOccCell = [];\n    for (var i = 0; i < 9; i++) {\n        if (!occupiedCell.includes(i)) {\n            unOccCell.push(i);\n        }\n    }\n    return unOccCell;\n}\nfunction isBoardFull() {\n    return occupiedCell.length >= 9;\n}\nfunction switchPlayer() {\n    currPlayerIndex = currPlayerIndex === 1 ? 0 : 1;\n    (0,_view_Board_view__WEBPACK_IMPORTED_MODULE_0__.setPlayerSymbol)(player[currPlayerIndex].symbol);\n}\nfunction handleGame(cellIndex) {\n    occupiedCell.push(cellIndex);\n    var tempPlayer = player[currPlayerIndex];\n    tempPlayer.addingCellOccupied(cellIndex);\n    var playerWinIndex = isPlayerWin(tempPlayer);\n    if (playerWinIndex.length !== 0) {\n        gameOver = true;\n        tempPlayer.score++;\n        _view_Board_view__WEBPACK_IMPORTED_MODULE_0__.highlightCell.apply(void 0, playerWinIndex);\n        (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__.changeScore)(tempPlayer.score, currPlayerIndex);\n        (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__.setWhoisWin)(tempPlayer);\n    }\n    else if (isBoardFull()) {\n        gameOver = true;\n        (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__.appendRonde)();\n        (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__.setDraw)();\n    }\n    if (gameOver) {\n        showGameOverButton();\n        (0,_view_Board_view__WEBPACK_IMPORTED_MODULE_0__.setBoardState)(false);\n    }\n    else if (againstBot && currPlayerIndex === 0) {\n        console.log(\"Easy Bot think...\");\n        switchPlayer();\n        easyBotThink();\n    }\n    else {\n        switchPlayer();\n    }\n}\nfunction easyBotThink() {\n    var onOccupiedCell = getUnOccupiedCell();\n    console.log(onOccupiedCell);\n    var randomCell = randomSuggestion(onOccupiedCell);\n    (0,_view_Board_view__WEBPACK_IMPORTED_MODULE_0__.appendSymbol)(randomCell);\n    handleGame(randomCell);\n}\nfunction randomSuggestion(unOccupiedCell) {\n    var random = Math.floor(Math.random() * unOccupiedCell.length);\n    return unOccupiedCell[random];\n}\nfunction showGameOverButton() {\n    div.appendChild(nextRoundBtn);\n    div.appendChild(backToHomeBtn);\n}\nfunction resetGame() {\n    (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__.appendRonde)();\n    gameOver = false;\n    (0,_view_Board_view__WEBPACK_IMPORTED_MODULE_0__.setBoardState)(true);\n    (0,_view_Board_view__WEBPACK_IMPORTED_MODULE_0__.resetBoard)();\n    (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__.resetWhoIsWin)();\n    player[0].resetCellOccupied();\n    player[1].resetCellOccupied();\n    occupiedCell.length = 0;\n    currPlayerIndex = 0;\n    (0,_view_Board_view__WEBPACK_IMPORTED_MODULE_0__.setPlayerSymbol)(player[currPlayerIndex].symbol);\n    div.removeChild(nextRoundBtn);\n    div.removeChild(backToHomeBtn);\n}\nfunction exitGame() {\n    gameOver = false;\n    (0,_view_Scoreboard_view__WEBPACK_IMPORTED_MODULE_1__.exitScore)();\n    player.length = 0;\n}\nfunction isPlayerWin(player) {\n    var co = player.cellOccupied;\n    if ((co.includes(0) && co.includes(1) && co.includes(2))) {\n        return [0, 1, 2];\n    }\n    else if ((co.includes(3) && co.includes(4) && co.includes(5))) {\n        return [3, 4, 5];\n    }\n    else if ((co.includes(6) && co.includes(7) && co.includes(8))) {\n        return [6, 7, 8];\n    }\n    else if ((co.includes(0) && co.includes(4) && co.includes(8))) {\n        return [0, 4, 8];\n    }\n    else if ((co.includes(2) && co.includes(4) && co.includes(6))) {\n        return [2, 4, 6];\n    }\n    else if ((co.includes(1) && co.includes(4) && co.includes(7))) {\n        return [1, 4, 7];\n    }\n    else if ((co.includes(0) && co.includes(3) && co.includes(6))) {\n        return [0, 3, 6];\n    }\n    else if ((co.includes(2) && co.includes(5) && co.includes(8))) {\n        return [2, 5, 8];\n    }\n    else {\n        return [];\n    }\n}\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/logic/Game.logic.ts?");

/***/ }),

/***/ "./src/view/Board.view.ts":
/*!********************************!*\
  !*** ./src/view/Board.view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendSymbol\": () => (/* binding */ appendSymbol),\n/* harmony export */   \"default\": () => (/* binding */ Board),\n/* harmony export */   \"highlightCell\": () => (/* binding */ highlightCell),\n/* harmony export */   \"resetBoard\": () => (/* binding */ resetBoard),\n/* harmony export */   \"setBoardState\": () => (/* binding */ setBoardState),\n/* harmony export */   \"setPlayerSymbol\": () => (/* binding */ setPlayerSymbol)\n/* harmony export */ });\nvar disableClick = false;\nvar currPlayerSymbol = \"O\";\nvar cellElls = [];\nvar boardGame = document.createElement(\"div\");\nboardGame.classList.add(\"board-game\");\nfunction BoardCell(args) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"board-cell\");\n    div.style.height = args.size;\n    div.style.width = args.size;\n    div.id = \"cell-\".concat(args.callIndex);\n    div.addEventListener(\"click\", function () {\n        if (!disableClick && !div.classList.contains(\"occupied\")) {\n            div.classList.remove(\"hint\");\n            div.textContent = currPlayerSymbol;\n            div.classList.add(\"occupied\");\n            args.onCellClick(args.callIndex);\n        }\n    });\n    div.addEventListener(\"mouseover\", function () {\n        if (!disableClick && !div.classList.contains(\"occupied\")) {\n            div.classList.add(\"hint\");\n            div.textContent = currPlayerSymbol;\n        }\n    });\n    div.addEventListener(\"mouseout\", function () {\n        if (!disableClick && !div.classList.contains(\"occupied\")) {\n            div.classList.remove(\"hint\");\n            div.textContent = \"\";\n        }\n    });\n    return div;\n}\n/**\n * Buat baru boardnya\n */\nfunction recreate() {\n    setBoardState(true);\n    cellElls.length = 0;\n}\n// Export Value\n/**\n * Ketika state false maka board tidak dapat di klik / di disable\n * @param state true untuk enable dan false untuk disable.\n */\nfunction setBoardState(state) {\n    disableClick = !state;\n}\n/**\n * Reset semua board untuk lanjut bermain lagi.\n */\nfunction resetBoard() {\n    cellElls.forEach(function (el) {\n        el.textContent = \"\";\n        el.style.backgroundColor = \"\";\n        el.style.color = \"\";\n        el.classList.remove(\"occupied\");\n    });\n}\nfunction highlightCell() {\n    var index = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        index[_i] = arguments[_i];\n    }\n    index.forEach(function (i) {\n        console.log(i);\n        var cell = cellElls[i];\n        if (cell != null) {\n            cell.style.backgroundColor = \"#B3FFAE\";\n        }\n    });\n}\nfunction setPlayerSymbol(playerSymbol) {\n    currPlayerSymbol = playerSymbol;\n}\nfunction appendSymbol(cellIndex) {\n    var cell = cellElls[cellIndex];\n    cell.classList.remove(\"hint\");\n    cell.textContent = currPlayerSymbol;\n    cell.classList.add(\"occupied\");\n}\n/**\n * Membuat board baru untuk bermain game.\n * @returns boardGame Element\n */\nfunction Board(onCellClick) {\n    // Reset semua sebelum buat baru.\n    recreate();\n    for (var i = 0; i < 9; i++) {\n        cellElls.push(BoardCell({\n            size: \"80px\",\n            callIndex: i,\n            onCellClick: onCellClick\n        }));\n    }\n    boardGame.replaceChildren.apply(boardGame, cellElls);\n    return boardGame;\n}\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/view/Board.view.ts?");

/***/ }),

/***/ "./src/view/Desc.view.ts":
/*!*******************************!*\
  !*** ./src/view/Desc.view.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DescriptionEll\": () => (/* binding */ DescriptionEll),\n/* harmony export */   \"TitleDescEll\": () => (/* binding */ TitleDescEll),\n/* harmony export */   \"ValueDescEll\": () => (/* binding */ ValueDescEll)\n/* harmony export */ });\nvar TitleDescEll = function (title, className) {\n    var h2Ell = document.createElement(\"h2\");\n    h2Ell.textContent = title;\n    if (className !== undefined) {\n        h2Ell.classList.add(className);\n    }\n    else {\n        h2Ell.classList.add(\"title-desc\");\n    }\n    return h2Ell;\n};\nvar ValueDescEll = function (content, className) {\n    var pEll = document.createElement(\"p\");\n    pEll.textContent = content;\n    if (className !== undefined) {\n        pEll.classList.add(className);\n    }\n    else {\n        pEll.classList.add(\"value-desc\");\n    }\n    return pEll;\n};\nfunction DescriptionEll(title, value) {\n    var div = document.createElement(\"article\");\n    div.appendChild(title);\n    div.appendChild(value);\n    return div;\n}\n\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/view/Desc.view.ts?");

/***/ }),

/***/ "./src/view/Header.view.ts":
/*!*********************************!*\
  !*** ./src/view/Header.view.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HeaderEll)\n/* harmony export */ });\nfunction HeaderEll(name, desc) {\n    var h1Ell = document.createElement(\"h1\");\n    h1Ell.textContent = name;\n    h1Ell.classList.add(\"title\");\n    var descEll = document.createElement(\"p\");\n    descEll.textContent = desc;\n    descEll.classList.add(\"title-desc\");\n    var header = document.createElement(\"header\");\n    header.appendChild(h1Ell);\n    header.appendChild(descEll);\n    return header;\n}\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/view/Header.view.ts?");

/***/ }),

/***/ "./src/view/LeftSide.view.ts":
/*!***********************************!*\
  !*** ./src/view/LeftSide.view.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LeftSide)\n/* harmony export */ });\n/* harmony import */ var _Header_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.view */ \"./src/view/Header.view.ts\");\n/* harmony import */ var _Desc_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Desc.view */ \"./src/view/Desc.view.ts\");\n\n\nvar leftSideEll = document.createElement(\"div\");\nleftSideEll.classList.add(\"left-side\");\nfunction LeftSide() {\n    var header = (0,_Header_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Tic Tac Toe\", \"Permainan Masa Kini\");\n    var about = (0,_Desc_view__WEBPACK_IMPORTED_MODULE_1__.DescriptionEll)((0,_Desc_view__WEBPACK_IMPORTED_MODULE_1__.TitleDescEll)(\"Tentang\"), (0,_Desc_view__WEBPACK_IMPORTED_MODULE_1__.ValueDescEll)(\"Tic Tac Toe adalah permain papan dengan 2 pemain biasanya menggunakan simbol X dan O.\"\n        + \"Kondisi menang tic tac toe adalah ketika 1 pemain berhasil menjejerkan 3 simbolnya secara tegak, lurus atau silang\"));\n    var howToPlay = (0,_Desc_view__WEBPACK_IMPORTED_MODULE_1__.DescriptionEll)((0,_Desc_view__WEBPACK_IMPORTED_MODULE_1__.TitleDescEll)(\"Cara bermain\"), (0,_Desc_view__WEBPACK_IMPORTED_MODULE_1__.ValueDescEll)(\"Klik disalah satu kotak dan jejerkan simbol hingga berjejer 3\"));\n    leftSideEll.appendChild(header);\n    leftSideEll.appendChild(about);\n    leftSideEll.appendChild(howToPlay);\n    return leftSideEll;\n}\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/view/LeftSide.view.ts?");

/***/ }),

/***/ "./src/view/MainBody.view.ts":
/*!***********************************!*\
  !*** ./src/view/MainBody.view.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainBody\": () => (/* binding */ MainBody),\n/* harmony export */   \"replaceBody\": () => (/* binding */ replaceBody)\n/* harmony export */ });\nvar mainBody = document.createElement(\"main\");\nmainBody.classList.add(\"main-body\");\nvar MainBody = function () { return mainBody; };\nvar replaceBody = function (content) {\n    mainBody.replaceChildren(content);\n};\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/view/MainBody.view.ts?");

/***/ }),

/***/ "./src/view/Scoreboard.view.ts":
/*!*************************************!*\
  !*** ./src/view/Scoreboard.view.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendRonde\": () => (/* binding */ appendRonde),\n/* harmony export */   \"changeScore\": () => (/* binding */ changeScore),\n/* harmony export */   \"default\": () => (/* binding */ ScoreBoard),\n/* harmony export */   \"exitScore\": () => (/* binding */ exitScore),\n/* harmony export */   \"resetWhoIsWin\": () => (/* binding */ resetWhoIsWin),\n/* harmony export */   \"setDraw\": () => (/* binding */ setDraw),\n/* harmony export */   \"setWhoisWin\": () => (/* binding */ setWhoisWin)\n/* harmony export */ });\nvar container = document.createElement(\"div\");\ncontainer.classList.add(\"score-board-cont\");\nvar scoreContainer = document.createElement(\"div\");\nscoreContainer.classList.add(\"score-cont\");\nvar rondeEll = document.createElement(\"h2\");\nrondeEll.classList.add(\"ronde\");\nrondeEll.id = \"ronde\";\nvar whoIsWinEll = document.createElement(\"p\");\nwhoIsWinEll.id = \"who-is-win\";\nvar ronde = 1;\nfunction buildScore(player, playerNum) {\n    var nameEll = document.createElement(\"p\");\n    nameEll.classList.add(\"score-name\");\n    nameEll.textContent = player.name;\n    var scoreEll = document.createElement(\"p\");\n    scoreEll.classList.add(\"score-value\");\n    scoreEll.textContent = \"0\";\n    scoreEll.id = \"score-\".concat(playerNum);\n    var div = document.createElement(\"div\");\n    div.appendChild(nameEll);\n    div.appendChild(scoreEll);\n    return div;\n}\nfunction changeScore(score, playerNum) {\n    var scoreEll = document.querySelector(\"#score-\".concat(playerNum));\n    if (scoreEll == null) {\n        throw \"Player No \".concat(playerNum, \" tidak ditemukan\");\n    }\n    scoreEll.textContent = \"\".concat(score);\n}\nfunction appendRonde() {\n    ronde++;\n    rondeEll.textContent = \"RONDE \".concat(ronde);\n}\nfunction setWhoisWin(player) {\n    whoIsWinEll.textContent = \"\".concat(player.name, \" Menang\");\n    container.appendChild(whoIsWinEll);\n}\nfunction setDraw() {\n    whoIsWinEll.textContent = \"Yah draw...\";\n    container.appendChild(whoIsWinEll);\n}\nfunction resetWhoIsWin() {\n    whoIsWinEll.remove();\n}\nfunction exitScore() {\n    ronde = 1;\n    whoIsWinEll.remove();\n}\nfunction ScoreBoard(args) {\n    rondeEll.textContent = \"RONDE \".concat(ronde.toString());\n    container.appendChild(rondeEll);\n    container.appendChild(scoreContainer);\n    var scoreP1 = buildScore(args.player1, 0);\n    var scoreP2 = buildScore(args.player2, 1);\n    scoreContainer.replaceChildren(scoreP1, scoreP2);\n    return container;\n}\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/view/Scoreboard.view.ts?");

/***/ }),

/***/ "./src/view/StartGame.view.ts":
/*!************************************!*\
  !*** ./src/view/StartGame.view.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chosseGameMethod\": () => (/* binding */ chosseGameMethod),\n/* harmony export */   \"chossePlayerName\": () => (/* binding */ chossePlayerName)\n/* harmony export */ });\nfunction createButton(content, id, onClick) {\n    var button = document.createElement(\"button\");\n    button.id = id;\n    button.textContent = content;\n    button.type = \"button\";\n    button.addEventListener(\"click\", function () { return onClick(); });\n    return button;\n}\nfunction createNameInput(label, id, onChange) {\n    var containerEll = document.createElement(\"div\");\n    containerEll.classList.add(\"name-input-cont\");\n    var labelEll = document.createElement(\"label\");\n    labelEll.textContent = label;\n    labelEll.htmlFor = id;\n    containerEll.appendChild(labelEll);\n    var input = document.createElement(\"input\");\n    input.id = id;\n    input.name = id;\n    input.type = \"text\";\n    input.placeholder = \"Masukan nama\";\n    input.addEventListener(\"change\", function (e) {\n        var target = e.target;\n        onChange(target.value);\n    });\n    containerEll.appendChild(input);\n    return containerEll;\n}\nfunction chosseGameMethod(callBack) {\n    var title = document.createElement(\"h2\");\n    title.textContent = \"Pilih mode permainan\";\n    title.classList.add(\"title\");\n    var playerVsPlayer = createButton(\"Player vs Player\", \"pvp\", function () { return callBack(\"PLAYER\"); });\n    var playerVsBot = createButton(\"Player vs Bot\", \"com\", function () { return callBack(\"BOT\"); });\n    var div = document.createElement(\"div\");\n    div.classList.add(\"game-method\");\n    div.appendChild(title);\n    var buttonGroup = document.createElement(\"div\");\n    buttonGroup.classList.add(\"method-button\");\n    div.appendChild(buttonGroup);\n    buttonGroup.appendChild(playerVsPlayer);\n    buttonGroup.appendChild(playerVsBot);\n    return div;\n}\nfunction chossePlayerName(method, callBack, onBack) {\n    var player1Name = \"Player 1\";\n    var player2Name = \"Player 2\";\n    var level = null;\n    var container = document.createElement(\"div\");\n    container.classList.add(\"insert-name\");\n    var title = document.createElement(\"h2\");\n    title.textContent = \"Masukan nama pemain...\";\n    container.appendChild(title);\n    var player1 = createNameInput(\"Player 1\", \"player-1\", function (c) { return player1Name = c; });\n    var player2 = createNameInput(\"Player 2\", \"player-2\", function (c) { return player2Name = c; });\n    container.appendChild(player1);\n    if (method === \"PLAYER\") {\n        container.appendChild(player2);\n    }\n    else {\n        level = \"EASY\";\n        player2Name = \"Bot Goblok\";\n    }\n    var nextButton = createButton(\"Lanjut\", \"lanjut\", function () { return callBack(player1Name, player2Name, level); });\n    var backButton = createButton(\"Kembali\", \"kembali\", function () { return onBack(); });\n    backButton.classList.add(\"back-btn\");\n    container.appendChild(nextButton);\n    container.appendChild(backButton);\n    return container;\n}\n\n\n//# sourceURL=webpack://tic-tac-toe-ts/./src/view/StartGame.view.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;