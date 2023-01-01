"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cache": () => (/* binding */ cache),
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: ./config/theme.tsx
 // Create a theme instance.

const theme = (0,material_.createTheme)({
  palette: {
    primary: {
      main: "#7A6EFE"
    },
    secondary: {
      main: "#FFA901"
    }
  },
  typography: {
    fontWeightMedium: 600,
    // fontFamily: "'Nunito', sans-serif",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 17,
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      color: "#000000",
      marginTop: "2%"
    },
    h2: {
      fontSize: "2.7rem",
      fontWeight: 700,
      color: "#000000"
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.25,
      color: "#000000",
      marginTop: "3%",
      marginBottom: "3%"
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: 600,
      lineHeight: 1.25,
      color: "#000000"
    },
    body1: {
      fontSize: "1.8rem",
      marginTop: "0%",
      alignItems: "left",
      marginBottom: "2%"
    },
    body2: {
      fontSize: "1.0rem",
      marginTop: "1%",
      marginBottom: "2%"
    },
    caption: {
      fontSize: "0.9rem",
      fontWceight: 400,
      // lineHeight: 1.5,
      color: "#85858B"
    },
    subtitle1: {
      fontSize: "1.0rem",
      fontWceight: 400,
      lineHeight: 1.5,
      color: "#85858B"
    },
    subtitle2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#BBBBC1"
    }
  }
});
/* harmony default export */ const config_theme = (theme);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/layout/Footer.tsx


function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx(material_.Box, {
    sx: {
      py: 3
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
      variant: "body2",
      align: "center"
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@auth0/nextjs-auth0/client"
const client_namespaceObject = require("@auth0/nextjs-auth0/client");
;// CONCATENATED MODULE: ./components/layout/Header.tsx






function Header() {
  const {
    user,
    isLoading
  } = (0,client_namespaceObject.useUser)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Box, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          item: true,
          xs: 2,
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(material_.Container, {
              style: {
                marginTop: '5px'
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/Vector.svg",
                width: 150,
                height: 60
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
          container: true,
          item: true,
          xs: 10,
          justifyContent: "flex-end",
          children: /*#__PURE__*/jsx_runtime_.jsx(material_.Button, {
            href: "https://calendly.com/avnerlipszyc/medtrix-demo",
            variant: "contained",
            children: "Schedule a Demo"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(material_.Divider, {})]
  });
}
;// CONCATENATED MODULE: ./components/layout/Layout.tsx





function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Box, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}
;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./config/emotioncache.tsx

function createEmotionCache() {
  return cache_default()({
    key: 'css',
    prepend: true
  });
}
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const cache = createEmotionCache();
function MyApp(props) {
  const {
    Component,
    pageProps,
    emotionCache = cache
  } = props;
  external_react_.useEffect(() => {// Remove the server-side injected CSS.
    // const jssStyles = document.querySelector("#jss-server-side");
    // if (jssStyles) {
    //   jssStyles.parentElement?.removeChild(jssStyles);
    // }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(client_namespaceObject.UserProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
      value: emotionCache,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
        theme: config_theme,
        children: [/*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {}), /*#__PURE__*/jsx_runtime_.jsx(Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })]
      })
    })
  });
}

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(6134)));
module.exports = __webpack_exports__;

})();