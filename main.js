/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toggle {\n  --width: 80px;\n  --height: calc(100px / 3);\n  position: relative;\n  display: inline-block;\n  width: var(--width);\n  height: var(--height);\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  border-radius: var(--height);\n  cursor: pointer;\n}\n\n.toggle input {\n  display: none;\n}\n\n.toggle .slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--height);\n  background-color: #ef6c00;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--height));\n  height: calc(var(--height));\n  border-radius: calc(var(--height) / 2);\n  background-color: #fff;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n  background-color: #ffa726;\n}\n\n.toggle input:checked + .slider::before {\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n  font-family: sans-serif;\n  transition: all 0.4s ease-in-out;\n  overflow: hidden;\n}\n\n.toggle .labels::after {\n  content: attr(data-f);\n  position: absolute;\n  right: 13px;\n  color: #ffffff;\n  opacity: 1;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::before {\n  content: attr(data-c);\n  position: absolute;\n  left: calc(var(--height) - var(--width) + 13px);\n  color: #ffffff;\n  opacity: 0;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked ~ .labels::after {\n  opacity: 0;\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle input:checked ~ .labels::before {\n  opacity: 1;\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nform {\n  position: relative;\n  width: 20rem;\n  background: #ffffff;\n  border-radius: 0.7rem;\n}\n\ninput,\nbutton {\n  height: 2rem;\n  font-family: \"Outfit\", sans-serif;\n  border: 0;\n  color: #2f2f2f;\n  font-size: 1rem;\n}\n\ninput[type=search] {\n  outline: 2px solid #2f2f2f;\n  width: 100%;\n  background: #ffffff;\n  padding: 0 1.6rem;\n  border-radius: 0.7rem;\n  appearance: none;\n  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);\n  transition-property: width, border-radius;\n  z-index: 1;\n  position: relative;\n}\n\ninput[type=search]:focus {\n  outline: 2px solid #ef6c00;\n}\n\nbutton {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 3rem;\n  font-weight: bold;\n  color: #2f2f2f;\n  background: #ffa726;\n  outline: 2px solid #ffa726;\n  border-radius: 0 0.7rem 0.7rem 0;\n  cursor: pointer;\n}\n\ninput:not(:placeholder-shown) {\n  border-radius: 0.7rem 0 0 0.7rem;\n  width: calc(100% - 3rem);\n}\ninput:not(:placeholder-shown) + button {\n  display: block;\n}\n\nlabel {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Outfit\", sans-serif;\n}\n\n.content_container {\n  width: 100vw;\n  height: 100vh;\n}\n\n.header {\n  background-color: rgb(241, 241, 241);\n  height: 15%;\n  padding: 5px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.logo_container {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.logo_text {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: rgb(239, 108, 0);\n}\n\nmain {\n  background: linear-gradient(to top, rgba(239, 108, 0, 0.5), rgba(38, 166, 154, 0.5));\n  background-size: cover;\n  height: 85%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nsection {\n  background-color: white;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  border-radius: 0.7rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px 40px;\n}\n\nsection h2,\nsection p {\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n\n.current_weather_container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.weather_data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.current_weather_header {\n  font-size: 1.75rem;\n}\n\n.city_name {\n  font-size: 1.5rem;\n}\n\n.condition {\n  font-size: 1.15rem;\n}\n\n.current_temp {\n  font-size: 3rem;\n}\n\n.temp_range {\n  display: flex;\n  gap: 10px;\n  font-size: 1rem;\n}\n\n.temp_container {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/_components.scss","webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["$orange: #ef6c00;\n$teal: rgb(38, 166, 154);\n$yellow: #ffa726;\n$primary-font-family: 'Outfit', sans-serif;\n$rad: 0.7rem;\n$dur: 0.3s;\n$color-dark: #2f2f2f;\n$height: 2rem;\n$btn-width: 3rem;\n$bez: cubic-bezier(0, 0, 0.43, 1.49);\n\n// Toggle Switch\n\n.toggle {\n    --width: 80px;\n    --height: calc(100px / 3);\n\n    position: relative;\n    display: inline-block;\n    width: var(--width);\n    height: var(--height);\n    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n    border-radius: var(--height);\n    cursor: pointer;\n}\n\n.toggle input {\n    display: none;\n}\n\n.toggle .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: var(--height);\n    background-color: $orange;\n    transition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(var(--height));\n    height: calc(var(--height));\n    border-radius: calc(var(--height) / 2);\n    background-color: #fff;\n    transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n    background-color: $yellow;\n}\n\n.toggle input:checked + .slider::before {\n    transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    font-size: 12px;\n    font-family: sans-serif;\n    transition: all 0.4s ease-in-out;\n    overflow: hidden;\n}\n\n.toggle .labels::after {\n    content: attr(data-f);\n    position: absolute;\n    right: 13px;\n    color: #ffffff;\n    opacity: 1;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n    transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::before {\n    content: attr(data-c);\n    position: absolute;\n    left: calc(var(--height) - var(--width) + 13px);\n    color: #ffffff;\n    opacity: 0;\n    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\n    transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked ~ .labels::after {\n    opacity: 0;\n    transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle input:checked ~ .labels::before {\n    opacity: 1;\n    transform: translateX(calc(var(--width) - var(--height)));\n}\n\n// Search Input\n\n*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\nform {\n    position: relative;\n    width: 20rem;\n    background: #ffffff;\n    border-radius: $rad;\n}\n\ninput,\nbutton {\n    height: $height;\n    font-family: $primary-font-family;\n    border: 0;\n    color: $color-dark;\n    font-size: 1rem;\n}\n\ninput[type='search'] {\n    outline: 2px solid $color-dark;\n    width: 100%;\n    background: #ffffff;\n    padding: 0 1.6rem;\n    border-radius: $rad;\n    appearance: none;\n    transition: all $dur $bez;\n    transition-property: width, border-radius;\n    z-index: 1;\n    position: relative;\n}\n\ninput[type='search']:focus {\n    outline: 2px solid $orange;\n}\n\nbutton {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: $btn-width;\n    font-weight: bold;\n    color: $color-dark;\n    background: $yellow;\n    outline: 2px solid $yellow;\n    border-radius: 0 $rad $rad 0;\n    cursor: pointer;\n}\n\ninput:not(:placeholder-shown) {\n    border-radius: $rad 0 0 $rad;\n    width: calc(100% - $btn-width);\n    + button {\n        display: block;\n    }\n}\n\nlabel {\n    position: absolute;\n    clip: rect(1px, 1px, 1px, 1px);\n    padding: 0;\n    border: 0;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n}\n","@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');\n@import 'components.scss';\n\n$primary-font-family: 'Outfit', sans-serif;\n$orange: rgb(239, 108, 0);\n$shadow-large: 0 10px 15px -3px rgb(0 0 0 / 0.1),\n    0 4px 6px -4px rgb(0 0 0 / 0.1);\n$rad: 0.7rem;\n\nbody {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: $primary-font-family;\n}\n\n.content_container {\n    width: 100vw;\n    height: 100vh;\n}\n\n.header {\n    background-color: rgb(241, 241, 241);\n    height: 15%;\n    padding: 5px 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.logo_container {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.logo_text {\n    font-size: 1.75rem;\n    font-weight: 600;\n    color: $orange;\n}\n\nmain {\n    background: linear-gradient(\n        to top,\n        rgba(239, 108, 0, 0.5),\n        rgba(38, 166, 154, 0.5)\n    );\n    background-size: cover;\n    height: 85%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsection {\n    background-color: white;\n    box-shadow: $shadow-large;\n    border-radius: $rad;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 20px 40px;\n}\n\nsection h2,\nsection p {\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n.current_weather_container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.weather_data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n}\n\n.current_weather_header {\n    font-size: 1.75rem;\n}\n\n.city_name {\n    font-size: 1.5rem;\n}\n\n.condition {\n    font-size: 1.15rem;\n}\n\n.current_temp {\n    font-size: 3rem;\n}\n\n.temp_range {\n    display: flex;\n    gap: 10px;\n    font-size: 1rem;\n}\n\n.temp_container {\n    display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
const key = '6565137403ce4116af3205145230904';
const baseUrl = 'http://api.weatherapi.com/v1';
const forecastApiMethod = '/forecast.json';

class LocationData {
    constructor(locationData) {
        this.cityName = locationData.location.name;
        this.currentCondition = locationData.current.condition.text;
        this.currentTempCelcius = Math.round(locationData.current.temp_c);
        this.currentTempFahrenheit = Math.round(locationData.current.temp_f);
        this.highTempCelcius = Math.round(
            locationData.forecast.forecastday[0].day.maxtemp_c
        );
        this.highTempFahrenheit = Math.round(
            locationData.forecast.forecastday[0].day.maxtemp_f
        );
        this.lowTempCelcius = Math.round(
            locationData.forecast.forecastday[0].day.mintemp_c
        );
        this.lowTempFahrenheit = Math.round(
            locationData.forecast.forecastday[0].day.mintemp_f
        );
    }
}

async function getWeatherData(cityName) {
    const responseData = await fetch(
        `${baseUrl + forecastApiMethod}?key=${key}&q=${cityName}&days=7`
    );
    const responseDataJson = await responseData.json();
    const currentLocation = new LocationData(responseDataJson);
    return currentLocation;
}




/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderCurrentWeather),
/* harmony export */   "renderCurrentWeather": () => (/* binding */ renderCurrentWeather)
/* harmony export */ });
const tempToggle = document.getElementById('temp_toggle');

function renderCurrentWeather(data) {
    const cityName = document.getElementById('city_name');
    const currentCondition = document.getElementById('current_condition');
    const currentTemp = document.getElementById('current_temp');
    const highTemp = document.getElementById('high_temp');
    const lowTemp = document.getElementById('low_temp');

    cityName.textContent = data.cityName;
    currentCondition.textContent = data.currentCondition;

    if (tempToggle.checked) {
        currentTemp.textContent = data.currentTempCelcius;
        highTemp.textContent = data.highTempCelcius;
        lowTemp.textContent = data.lowTempCelcius;
    } else {
        currentTemp.textContent = data.currentTempFahrenheit;
        highTemp.textContent = data.highTempFahrenheit;
        lowTemp.textContent = data.lowTempFahrenheit;
    }
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.js");




const locationSearchForm = document.getElementById('location_search_form');
const searchInput = document.getElementById('search');
const tempToggle = document.getElementById('temp_toggle');

locationSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = e.target[0].value;
    const currentWeatherData = _model__WEBPACK_IMPORTED_MODULE_1__.getWeatherData(cityName);
    currentWeatherData.then((data) => {
        _view__WEBPACK_IMPORTED_MODULE_2__.renderCurrentWeather(data);
    });
});

tempToggle.addEventListener('change', () => {
    let cityName = searchInput.value;
    if (cityName === '') {
        cityName = 'Sudbury';
    }
    const currentWeatherData = _model__WEBPACK_IMPORTED_MODULE_1__.getWeatherData(cityName);
    currentWeatherData.then((data) => {
        _view__WEBPACK_IMPORTED_MODULE_2__.renderCurrentWeather(data);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currentWeatherData = _model__WEBPACK_IMPORTED_MODULE_1__.getWeatherData('Sudbury');
    currentWeatherData.then((data) => {
        _view__WEBPACK_IMPORTED_MODULE_2__.renderCurrentWeather(data);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sUUFBUSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxZQUFZLE9BQU8sT0FBTyxXQUFXLGNBQWMsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsYUFBYSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLFFBQVEsTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLDJDQUEyQywyQkFBMkIsbUJBQW1CLDZDQUE2QyxlQUFlLGFBQWEsdUJBQXVCLGdC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O0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrREFBb0I7QUFDbkQ7QUFDQSxRQUFRLHVEQUF5QjtBQUNqQyxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtEQUFvQjtBQUNuRDtBQUNBLFFBQVEsdURBQXlCO0FBQ2pDLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0EsK0JBQStCLGtEQUFvQjtBQUNuRDtBQUNBLFFBQVEsdURBQXlCO0FBQ2pDLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU91dGZpdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZ2dsZSB7XFxuICAtLXdpZHRoOiA4MHB4O1xcbiAgLS1oZWlnaHQ6IGNhbGMoMTAwcHggLyAzKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUgLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNmMwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5zbGlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0taGVpZ2h0KSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE3MjY7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS13aWR0aCkgLSB2YXIoLS1oZWlnaHQpKSk7XFxufVxcblxcbi50b2dnbGUgLmxhYmVscyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzOjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtZik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTNweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLWMpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gdmFyKC0td2lkdGgpICsgMTNweCk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS13aWR0aCkgLSB2YXIoLS1oZWlnaHQpKSk7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0td2lkdGgpIC0gdmFyKC0taGVpZ2h0KSkpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIk91dGZpdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogIzJmMmYyZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMmYyZjJmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMCAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDMsIDEuNDkpO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGJvcmRlci1yYWRpdXM7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNlZjZjMDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMyZjJmMmY7XFxuICBiYWNrZ3JvdW5kOiAjZmZhNzI2O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmZmE3MjY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAuN3JlbSAwLjdyZW0gMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtIDAgMCAwLjdyZW07XFxuICB3aWR0aDogY2FsYygxMDAlIC0gM3JlbSk7XFxufVxcbmlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3V0Zml0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnRfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xcbiAgaGVpZ2h0OiAxNSU7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubG9nb19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5sb2dvX3RleHQge1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiByZ2IoMjM5LCAxMDgsIDApO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjM5LCAxMDgsIDAsIDAuNSksIHJnYmEoMzgsIDE2NiwgMTU0LCAwLjUpKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcblxcbnNlY3Rpb24gaDIsXFxuc2VjdGlvbiBwIHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi5jdXJyZW50X3dlYXRoZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ud2VhdGhlcl9kYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uY3VycmVudF93ZWF0aGVyX2hlYWRlciB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5jaXR5X25hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4uY3VycmVudF90ZW1wIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRlbXBfcmFuZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRlbXBfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9fY29tcG9uZW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBYUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNEJB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QWxKQTtFQUNJLGlCQUFBO0FBcUpKOztBQWxKQTtFQUNJLGtCQUFBO0FBcUpKOztBQWxKQTtFQUNJLGVBQUE7QUFxSko7O0FBbEpBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBcUpKOztBQWxKQTtFQUNJLGFBQUE7QUFxSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJG9yYW5nZTogI2VmNmMwMDtcXG4kdGVhbDogcmdiKDM4LCAxNjYsIDE1NCk7XFxuJHllbGxvdzogI2ZmYTcyNjtcXG4kcHJpbWFyeS1mb250LWZhbWlseTogJ091dGZpdCcsIHNhbnMtc2VyaWY7XFxuJHJhZDogMC43cmVtO1xcbiRkdXI6IDAuM3M7XFxuJGNvbG9yLWRhcms6ICMyZjJmMmY7XFxuJGhlaWdodDogMnJlbTtcXG4kYnRuLXdpZHRoOiAzcmVtO1xcbiRiZXo6IGN1YmljLWJlemllcigwLCAwLCAwLjQzLCAxLjQ5KTtcXG5cXG4vLyBUb2dnbGUgU3dpdGNoXFxuXFxuLnRvZ2dsZSB7XFxuICAgIC0td2lkdGg6IDgwcHg7XFxuICAgIC0taGVpZ2h0OiBjYWxjKDEwMHB4IC8gMyk7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZSAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5zbGlkZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1oZWlnaHQpIC8gMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0td2lkdGgpIC0gdmFyKC0taGVpZ2h0KSkpO1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50b2dnbGUgLmxhYmVsczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtZik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEzcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtYyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gdmFyKC0td2lkdGgpICsgMTNweCk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS13aWR0aCkgLSB2YXIoLS1oZWlnaHQpKSk7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXdpZHRoKSAtIHZhcigtLWhlaWdodCkpKTtcXG59XFxuXFxuLy8gU2VhcmNoIElucHV0XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRyYWQ7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbiB7XFxuICAgIGhlaWdodDogJGhlaWdodDtcXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtZmFtaWx5O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiAkY29sb3ItZGFyaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAkY29sb3ItZGFyaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDAgMS42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgJGR1ciAkYmV6O1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgYm9yZGVyLXJhZGl1cztcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAkb3JhbmdlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAkYnRuLXdpZHRoO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICRjb2xvci1kYXJrO1xcbiAgICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgJHllbGxvdztcXG4gICAgYm9yZGVyLXJhZGl1czogMCAkcmFkICRyYWQgMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRyYWQgMCAwICRyYWQ7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAkYnRuLXdpZHRoKTtcXG4gICAgKyBidXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG59XFxuXFxubGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdXRmaXQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgJ2NvbXBvbmVudHMuc2Nzcyc7XFxuXFxuJHByaW1hcnktZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xcbiRvcmFuZ2U6IHJnYigyMzksIDEwOCwgMCk7XFxuJHNoYWRvdy1sYXJnZTogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLFxcbiAgICAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiRyYWQ6IDAuN3JlbTtcXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udC1mYW1pbHk7XFxufVxcblxcbi5jb250ZW50X2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2dvX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmxvZ29fdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICRvcmFuZ2U7XFxufVxcblxcbm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICB0byB0b3AsXFxuICAgICAgICByZ2JhKDIzOSwgMTA4LCAwLCAwLjUpLFxcbiAgICAgICAgcmdiYSgzOCwgMTY2LCAxNTQsIDAuNSlcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbGFyZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRyYWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcblxcbnNlY3Rpb24gaDIsXFxuc2VjdGlvbiBwIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG4uY3VycmVudF93ZWF0aGVyX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLndlYXRoZXJfZGF0YSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY3VycmVudF93ZWF0aGVyX2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuLmNpdHlfbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4uY3VycmVudF90ZW1wIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGVtcF9yYW5nZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGVtcF9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qga2V5ID0gJzY1NjUxMzc0MDNjZTQxMTZhZjMyMDUxNDUyMzA5MDQnO1xuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJztcbmNvbnN0IGZvcmVjYXN0QXBpTWV0aG9kID0gJy9mb3JlY2FzdC5qc29uJztcblxuY2xhc3MgTG9jYXRpb25EYXRhIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhdGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5jaXR5TmFtZSA9IGxvY2F0aW9uRGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb25kaXRpb24gPSBsb2NhdGlvbkRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgdGhpcy5jdXJyZW50VGVtcENlbGNpdXMgPSBNYXRoLnJvdW5kKGxvY2F0aW9uRGF0YS5jdXJyZW50LnRlbXBfYyk7XG4gICAgICAgIHRoaXMuY3VycmVudFRlbXBGYWhyZW5oZWl0ID0gTWF0aC5yb3VuZChsb2NhdGlvbkRhdGEuY3VycmVudC50ZW1wX2YpO1xuICAgICAgICB0aGlzLmhpZ2hUZW1wQ2VsY2l1cyA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICBsb2NhdGlvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfY1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmhpZ2hUZW1wRmFocmVuaGVpdCA9IE1hdGgucm91bmQoXG4gICAgICAgICAgICBsb2NhdGlvbkRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZlxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvd1RlbXBDZWxjaXVzID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG93VGVtcEZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgbG9jYXRpb25EYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2ZcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke2Jhc2VVcmwgKyBmb3JlY2FzdEFwaU1ldGhvZH0/a2V5PSR7a2V5fSZxPSR7Y2l0eU5hbWV9JmRheXM9N2BcbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YUpzb24gPSBhd2FpdCByZXNwb25zZURhdGEuanNvbigpO1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IG5ldyBMb2NhdGlvbkRhdGEocmVzcG9uc2VEYXRhSnNvbik7XG4gICAgcmV0dXJuIGN1cnJlbnRMb2NhdGlvbjtcbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEgfTtcbiIsImNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcF90b2dnbGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQ3VycmVudFdlYXRoZXIoZGF0YSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHlfbmFtZScpO1xuICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudF9jb25kaXRpb24nKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50X3RlbXAnKTtcbiAgICBjb25zdCBoaWdoVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWdoX3RlbXAnKTtcbiAgICBjb25zdCBsb3dUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvd190ZW1wJyk7XG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eU5hbWU7XG4gICAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudENvbmRpdGlvbjtcblxuICAgIGlmICh0ZW1wVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnRUZW1wQ2VsY2l1cztcbiAgICAgICAgaGlnaFRlbXAudGV4dENvbnRlbnQgPSBkYXRhLmhpZ2hUZW1wQ2VsY2l1cztcbiAgICAgICAgbG93VGVtcC50ZXh0Q29udGVudCA9IGRhdGEubG93VGVtcENlbGNpdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnRUZW1wRmFocmVuaGVpdDtcbiAgICAgICAgaGlnaFRlbXAudGV4dENvbnRlbnQgPSBkYXRhLmhpZ2hUZW1wRmFocmVuaGVpdDtcbiAgICAgICAgbG93VGVtcC50ZXh0Q29udGVudCA9IGRhdGEubG93VGVtcEZhaHJlbmhlaXQ7XG4gICAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJDdXJyZW50V2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0ICogYXMgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBsb2NhdGlvblNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fc2VhcmNoX2Zvcm0nKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3QgdGVtcFRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wX3RvZ2dsZScpO1xuXG5sb2NhdGlvblNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBNb2RlbC5nZXRXZWF0aGVyRGF0YShjaXR5TmFtZSk7XG4gICAgY3VycmVudFdlYXRoZXJEYXRhLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgVmlldy5yZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhKTtcbiAgICB9KTtcbn0pO1xuXG50ZW1wVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBsZXQgY2l0eU5hbWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBpZiAoY2l0eU5hbWUgPT09ICcnKSB7XG4gICAgICAgIGNpdHlOYW1lID0gJ1N1ZGJ1cnknO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBNb2RlbC5nZXRXZWF0aGVyRGF0YShjaXR5TmFtZSk7XG4gICAgY3VycmVudFdlYXRoZXJEYXRhLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgVmlldy5yZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhKTtcbiAgICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IE1vZGVsLmdldFdlYXRoZXJEYXRhKCdTdWRidXJ5Jyk7XG4gICAgY3VycmVudFdlYXRoZXJEYXRhLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgVmlldy5yZW5kZXJDdXJyZW50V2VhdGhlcihkYXRhKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9