"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const variantsProperties = {
  heading1: {
    fontSize: 24,
    fontWeight: 800
  },
  heading2: {
    fontSize: 16,
    fontWeight: 800
  },
  heading3: {
    fontSize: 12,
    fontWeight: 800
  },
  body1: {
    fontSize: 16,
    fontWeight: 500
  },
  body2: {
    fontSize: 12,
    fontWeight: 500
  },
  body3: {
    fontSize: 8,
    fontWeight: 500
  },
  caption: {
    fontSize: 4,
    fontWeight: 500
  }
};

const Typography = props => {
  const {
    variants = "body2",
    color,
    children
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
    style: {
      fontSize: `${variantsProperties[variants].fontSize}px`,
      fontWeight: `${variantsProperties[variants].fontWeight}`,
      color: `${color}`
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ 4937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basic_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(769);
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9026);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);







const Navigator = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Box, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_basic_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        variants: "heading2",
        children: "Movester - backoffice"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NavigatorBox, {
      onClick: () => router.push("/stretching"),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_basic_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        variants: "heading2",
        color: _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f000,
        children: "\uC2A4\uD2B8\uB808\uCE6D"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigator);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__Wrapper",
  componentId: "sc-1owchbj-0"
})(["background-color:", ";height:auto;padding:16px;width:300px;"], _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.f000);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__Box",
  componentId: "sc-1owchbj-1"
})(["padding:32px 0;"]);
const NavigatorBox = styled_components__WEBPACK_IMPORTED_MODULE_0__.styled.div.withConfig({
  displayName: "Navigator__NavigatorBox",
  componentId: "sc-1owchbj-2"
})(["background-color:", ";width:100%;padding:8px 8px 8px 16px;border-radius:4px;align-items:center;"], _constants_style__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O.softPrimaryColor);

/***/ }),

/***/ 9026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ colors)
/* harmony export */ });
const colors = {
  r000: " #f64f59",
  softPrimaryColor: "#6D66AA",
  vividPrimaryColor: "#2A1598",
  f300: "#f7f7f7",
  f200: "#f2f2f2",
  f100: "#fafafa",
  f000: "#ffffff",
  g300: "#888383",
  g200: "#e5e5e5",
  g100: "#615B5B",
  g000: "#C4C4C4"
};

/***/ })

};
;