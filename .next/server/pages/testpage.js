"use strict";
(() => {
var exports = {};
exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 1729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testpage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@auth0/nextjs-auth0"
const nextjs_auth0_namespaceObject = require("@auth0/nextjs-auth0");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/testpage.tsx





const test = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
    children: "Private Access Only"
  });
};

/* harmony default export */ const testpage = (test);
const getServerSideProps = (0,nextjs_auth0_namespaceObject.withPageAuthRequired)();

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1729));
module.exports = __webpack_exports__;

})();