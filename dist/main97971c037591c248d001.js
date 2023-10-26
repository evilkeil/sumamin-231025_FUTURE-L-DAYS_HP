/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* ------------------- */
/* Variables           */
/* ------------------- */
:root{
    --main-color:#000000;

    /* fonts */

    --ff-trade-gothic:"trade-gothic-next-compressed", sans-serif;

    /* font weights */

    --fw-nav:400;

    /* hamburger menu vaiables */

    --bar-width:30px;
    --bar-height:1.17px;
    --bar-gap:11px;
    --foreground:#606060;
    --background:#FFFFFF;


}


/* ------------------- */
/* CSS - Reset               */
/* ------------------- */

/* Box sizing */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
    margin: 0;
}

/* set up the body */
body {
    line-height: 1.5;
    min-height: 100dvh;
    overflow-x: hidden;
    position: relative;
    color: var(--main-color);
}

/* make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* make form elements easier to work with */
input,
button,
textarea,
select {
    font: inherit;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ------------------- */
/*       Nav           */
/* ------------------- */
body{
    /* border: 5px solid green; */
    /* background-color: red; */
}
#nav{
    /* border: 1px solid red; */
    display: flex;
    gap: 8.4375rem;
    align-items: center;
    margin-left: 3.9063rem;
    margin-top: 2.0313rem;
}
.primary-nav-svg{
    width: 8.8791px;
    height: 9.0395px;
    
}

.logo{
    width: 196.188px;
    height: 57.5965px;
}
.nav-links{
    text-decoration: none;
    color: var(--main-color);
    font-style: normal;
    font-family: var(--ff-trade-gothic);
    font-weight: var(--fw-nav);
    font-size: 1.25rem;
}

.primary-nav{
    display: flex;
    gap: 2.6875rem;
    height: 100%;
    /* border: 1px solid black; */
    padding: 0;
}

.primary-nav-item{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5938rem;
    height: 100%;
    /* border: 1px solid blue; */
}

.primary-nav-item:hover{
    cursor: pointer;
}


.hamburger-menu{
    display: none;
}

/* tablet and mobile  */
@media (max-width:950px){
    .primary-nav-wrapper{
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transform: translateX(-100%);
    }

    .primary-nav{
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        padding-left: 1rem;
    }

    .nav-links{
        font-size: 2rem;
    }
    .primary-nav-svg{
        width: 16px;
        height: 18px;
    }
    #nav{
        margin-left: 1.375rem;
        margin-right: 1.375rem;
        justify-content: space-between;
    }

    .hamburger-menu{
        display: block;
    }

    .hamburger-menu::before,
    .hamburger-menu::after,
    .hamburger-menu input{
        content: "";
        width: var(--bar-width);
        height: var(--bar-height);
        background-color: var(--foreground);
    }
    
}
/* ------------------- */
/*       hero          */
/* ------------------- */

/* ------------------- */
/*       about         */
/* ------------------- */

/* ------------------- */
/*       service        */
/* ------------------- */

/* ------------------- */
/*       topics         */
/* ------------------- */

/* ------------------- */
/*       company       */
/* ------------------- */

/* ------------------- */
/*       contact       */
/* ------------------- */

/* ------------------- */
/*       footer        */
/* ------------------- */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;AACxB;IACI,oBAAoB;;IAEpB,UAAU;;IAEV,4DAA4D;;IAE5D,iBAAiB;;IAEjB,YAAY;;IAEZ,4BAA4B;;IAE5B,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,oBAAoB;;;AAGxB;;;AAGA,wBAAwB;AACxB,8BAA8B;AAC9B,wBAAwB;;AAExB,eAAe;AACf;;;IAGI,sBAAsB;AAC1B;;AAEA,kBAAkB;AAClB;;;;;;;;;IASI,SAAS;AACb;;AAEA,oBAAoB;AACpB;IACI,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA,oCAAoC;AACpC;;IAEI,eAAe;IACf,cAAc;AAClB;;AAEA,2CAA2C;AAC3C;;;;IAII,aAAa;AACjB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA,wDAAwD;AACxD;EACE;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;AACxB;IACI,6BAA6B;IAC7B,2BAA2B;AAC/B;AACA;IACI,2BAA2B;IAC3B,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,gBAAgB;;AAEpB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,kBAAkB;IAClB,mCAAmC;IACnC,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,YAAY;IACZ,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;AACjB;;AAEA,uBAAuB;AACvB;IACI;QACI,uBAAuB;QACvB,eAAe;QACf,MAAM;QACN,QAAQ;QACR,YAAY;QACZ,WAAW;QACX,4BAA4B;IAChC;;IAEA;QACI,sBAAsB;QACtB,SAAS;QACT,uBAAuB;QACvB,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,qBAAqB;QACrB,sBAAsB;QACtB,8BAA8B;IAClC;;IAEA;QACI,cAAc;IAClB;;IAEA;;;QAGI,WAAW;QACX,uBAAuB;QACvB,yBAAyB;QACzB,mCAAmC;IACvC;;AAEJ;AACA,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;;AAExB,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;;AAExB,wBAAwB;AACxB,yBAAyB;AACzB,wBAAwB;;AAExB,wBAAwB;AACxB,yBAAyB;AACzB,wBAAwB;;AAExB,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;;AAExB,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;;AAExB,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB","sourcesContent":["\n/* ------------------- */\n/* Variables           */\n/* ------------------- */\n:root{\n    --main-color:#000000;\n\n    /* fonts */\n\n    --ff-trade-gothic:\"trade-gothic-next-compressed\", sans-serif;\n\n    /* font weights */\n\n    --fw-nav:400;\n\n    /* hamburger menu vaiables */\n\n    --bar-width:30px;\n    --bar-height:1.17px;\n    --bar-gap:11px;\n    --foreground:#606060;\n    --background:#FFFFFF;\n\n\n}\n\n\n/* ------------------- */\n/* CSS - Reset               */\n/* ------------------- */\n\n/* Box sizing */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reset margins */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nfigure,\npicture {\n    margin: 0;\n}\n\n/* set up the body */\nbody {\n    line-height: 1.5;\n    min-height: 100dvh;\n    overflow-x: hidden;\n    position: relative;\n    color: var(--main-color);\n}\n\n/* make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* make form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* remove animations for people who've turned them off */\n@media (prefers-reduced-motion: reduce) {  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n/* ------------------- */\n/*       Nav           */\n/* ------------------- */\nbody{\n    /* border: 5px solid green; */\n    /* background-color: red; */\n}\n#nav{\n    /* border: 1px solid red; */\n    display: flex;\n    gap: 8.4375rem;\n    align-items: center;\n    margin-left: 3.9063rem;\n    margin-top: 2.0313rem;\n}\n.primary-nav-svg{\n    width: 8.8791px;\n    height: 9.0395px;\n    \n}\n\n.logo{\n    width: 196.188px;\n    height: 57.5965px;\n}\n.nav-links{\n    text-decoration: none;\n    color: var(--main-color);\n    font-style: normal;\n    font-family: var(--ff-trade-gothic);\n    font-weight: var(--fw-nav);\n    font-size: 1.25rem;\n}\n\n.primary-nav{\n    display: flex;\n    gap: 2.6875rem;\n    height: 100%;\n    /* border: 1px solid black; */\n    padding: 0;\n}\n\n.primary-nav-item{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5938rem;\n    height: 100%;\n    /* border: 1px solid blue; */\n}\n\n.primary-nav-item:hover{\n    cursor: pointer;\n}\n\n\n.hamburger-menu{\n    display: none;\n}\n\n/* tablet and mobile  */\n@media (max-width:950px){\n    .primary-nav-wrapper{\n        background-color: white;\n        position: fixed;\n        top: 0;\n        right: 0;\n        height: 100%;\n        width: 100%;\n        transform: translateX(-100%);\n    }\n\n    .primary-nav{\n        flex-direction: column;\n        gap: 1rem;\n        align-items: flex-start;\n        padding-left: 1rem;\n    }\n\n    .nav-links{\n        font-size: 2rem;\n    }\n    .primary-nav-svg{\n        width: 16px;\n        height: 18px;\n    }\n    #nav{\n        margin-left: 1.375rem;\n        margin-right: 1.375rem;\n        justify-content: space-between;\n    }\n\n    .hamburger-menu{\n        display: block;\n    }\n\n    .hamburger-menu::before,\n    .hamburger-menu::after,\n    .hamburger-menu input{\n        content: \"\";\n        width: var(--bar-width);\n        height: var(--bar-height);\n        background-color: var(--foreground);\n    }\n    \n}\n/* ------------------- */\n/*       hero          */\n/* ------------------- */\n\n/* ------------------- */\n/*       about         */\n/* ------------------- */\n\n/* ------------------- */\n/*       service        */\n/* ------------------- */\n\n/* ------------------- */\n/*       topics         */\n/* ------------------- */\n\n/* ------------------- */\n/*       company       */\n/* ------------------- */\n\n/* ------------------- */\n/*       contact       */\n/* ------------------- */\n\n/* ------------------- */\n/*       footer        */\n/* ------------------- */"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// import Icon from './kv_01-min.jpg';


})();

/******/ })()
;
//# sourceMappingURL=main97971c037591c248d001.js.map