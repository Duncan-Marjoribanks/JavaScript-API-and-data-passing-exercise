/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Cards = __webpack_require__(/*! ./models/cards.js */ \"./src/models/cards.js\");\nconst SelectView = __webpack_require__(/*! ./views/select.js */ \"./src/views/select.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('js loaded');\n\n\nconst cardsContainer = document.querySelector('#container');\nconsole.log(cardsContainer);\nconst selectView = new SelectView(cardsContainer);\nselectView.initialize();\n\n\n\nconst cardsData = new Cards();\ncardsData.getData();\n\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/data_sorter.js":
/*!************************************!*\
  !*** ./src/helpers/data_sorter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const DataSorter = function () {\n}\n\n\n\n\n\nDataSorter.prototype.sortByFaction = function (dataToSort, faction) {\n  console.log(dataToSort);\n  const result = dataToSort.filter((item) => {\n    return item.faction_code == faction;\n  });\n  console.log(result);\n  return result;\n};\n\n\nmodule.exports = DataSorter;\n\n\n//# sourceURL=webpack:///./src/helpers/data_sorter.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', this.url);\n  xhr.setRequestHeader('Accept', 'application/json');\n\n  xhr.addEventListener('load', ()=>{\n    if (xhr.status != 200) {\n      console.err(xhr.status);\n      return;\n    }\n    const jsonString = xhr.responseText;\n    const data = JSON.parse(jsonString);\n\n    onComplete(data);\n\n  });\n\n  xhr.send();\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/cards.js":
/*!*****************************!*\
  !*** ./src/models/cards.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst Cards = function () {\nthis.data = [];\n}\n\nCards.prototype.getData = function (url) {\n  const requestHelper = new RequestHelper('https://netrunnerdb.com/api/2.0/public/cards')\n\nrequestHelper.get((data) => {\n  PubSub.publish('Cards:Data-ready', data);\n  console.log(data);\n});\n};\n\nmodule.exports = Cards;\n\n\n//# sourceURL=webpack:///./src/models/cards.js?");

/***/ }),

/***/ "./src/views/card_view.js":
/*!********************************!*\
  !*** ./src/views/card_view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CardView = function (object) {\nthis.card = object;\n}\n\nCardView.prototype.initialize = function () {\n\n  const cardElement = document.createElement('ul');\n\n  const cardName = document.createElement('li');\n  cardName.textContent = this.card.title;\n  cardElement.appendChild(cardName);\n\n  const cardType = document.createElement('li');\n  cardType.textContent = this.card.type_code;\n  cardElement.appendChild(cardType);\n\n  const cardFaction = document.createElement('li');\n  cardFaction.textContent = this.card.faction_code;\n  cardElement.appendChild(cardType);\n\n  const cardPack = document.createElement('li');\n  cardPack.textContent = this.card.pack_code;\n  cardElement.appendChild(cardPack);\n\n  const cardImage = document.createElement('img');\n  cardImage.src = `https://netrunnerdb.com/card_image/${this.card.code}.png`;\n  cardElement.appendChild(cardImage);\n\n\n\n\n  return cardElement;\n};\n\n\n\nmodule.exports = CardView;\n\n\n//# sourceURL=webpack:///./src/views/card_view.js?");

/***/ }),

/***/ "./src/views/select.js":
/*!*****************************!*\
  !*** ./src/views/select.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DataSorter = __webpack_require__(/*! ../helpers/data_sorter */ \"./src/helpers/data_sorter.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst CardView = __webpack_require__(/*! ./card_view.js */ \"./src/views/card_view.js\");\n\nconst SelectView = function(element) {\n  this.element = element;\n}\n\nconst dataSorter = new DataSorter();\n\nSelectView.prototype.initialize = function () {\n  console.log(this.element);\n  PubSub.subscribe('Cards:Data-ready', (event) => {\n    console.log(event);\n    const cardData = event.detail.data;\n    console.log(cardData);\n\n    this.populate(dataSorter.sortByFaction(cardData, \"criminal\"));\n  })\n};\n\n\nSelectView.prototype.populate = function (data) {\n  for (card of data) {\n    const cardView = new CardView(card);\n    const cardElement = cardView.initialize()\n    this.element.appendChild(cardElement);\n  }\n};\n\n\n\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select.js?");

/***/ })

/******/ });