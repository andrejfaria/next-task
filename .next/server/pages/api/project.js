"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/project";
exports.ids = ["pages/api/project"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePasswords: () => (/* binding */ comparePasswords),\n/* harmony export */   createJWT: () => (/* binding */ createJWT),\n/* harmony export */   getUserFromCookie: () => (/* binding */ getUserFromCookie),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   validateJWT: () => (/* binding */ validateJWT)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"jose\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"(api)/./lib/db.ts\");\n\n\n\nconst hashPassword = (password)=>bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);\nconst comparePasswords = (plainTextPassword, hashedPassword)=>bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(plainTextPassword, hashedPassword);\nconst createJWT = (user)=>{\n    // return jwt.sign({ id: user.id }, 'cookies')\n    const iat = Math.floor(Date.now() / 1000);\n    const exp = iat + 60 * 60 * 24 * 7;\n    return new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT({\n        payload: {\n            id: user.id,\n            email: user.email\n        }\n    }).setProtectedHeader({\n        alg: \"HS256\",\n        typ: \"JWT\"\n    }).setExpirationTime(exp).setIssuedAt(iat).setNotBefore(iat).sign(new TextEncoder().encode(process.env.JWT_SECRET));\n};\nconst validateJWT = async (jwt)=>{\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(jwt, new TextEncoder().encode(process.env.JWT_SECRET));\n    return payload.payload;\n};\n//todo: what if the user isn't found\nconst getUserFromCookie = async (cookies)=>{\n    const jwt = cookies.get(process.env.COOKIE_NAME);\n    const { id } = await validateJWT(jwt.value);\n    const user = await _db__WEBPACK_IMPORTED_MODULE_2__.db.user.findUnique({\n        where: {\n            id: id\n        }\n    });\n    return user;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2M7QUFDaEI7QUFFbkIsTUFBTUksZUFBZSxDQUFDQyxXQUFhTCxrREFBVyxDQUFDSyxVQUFVLElBQUk7QUFFN0QsTUFBTUUsbUJBQW1CLENBQUNDLG1CQUFtQkMsaUJBQ2xEVCxxREFBYyxDQUFDUSxtQkFBbUJDLGdCQUFnQjtBQUc3QyxNQUFNRSxZQUFZLENBQUNDO0lBQ3hCLDhDQUE4QztJQUM5QyxNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUNDLEtBQUtDLEdBQUcsS0FBSztJQUNwQyxNQUFNQyxNQUFNTCxNQUFNLEtBQUssS0FBSyxLQUFLO0lBRWpDLE9BQU8sSUFBSVoseUNBQU9BLENBQUM7UUFBRWtCLFNBQVM7WUFBRUMsSUFBSVIsS0FBS1EsRUFBRTtZQUFFQyxPQUFPVCxLQUFLUyxLQUFLO1FBQUM7SUFBRSxHQUM5REMsa0JBQWtCLENBQUM7UUFBRUMsS0FBSztRQUFTQyxLQUFLO0lBQU0sR0FDOUNDLGlCQUFpQixDQUFDUCxLQUNsQlEsV0FBVyxDQUFDYixLQUNaYyxZQUFZLENBQUNkLEtBQ2JlLElBQUksQ0FBQyxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtBQUN6RCxFQUFFO0FBRUssTUFBTUMsY0FBYyxPQUFPQztJQUNoQyxNQUFNLEVBQUVoQixPQUFPLEVBQUUsR0FBRyxNQUFNakIsK0NBQVNBLENBQ2pDaUMsS0FDQSxJQUFJTixjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUdqRCxPQUFPZCxRQUFRQSxPQUFPO0FBQ3hCLEVBQUU7QUFHRixvQ0FBb0M7QUFDN0IsTUFBTWlCLG9CQUFvQixPQUFPQztJQUN0QyxNQUFNRixNQUFNRSxRQUFRQyxHQUFHLENBQUNQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztJQUUvQyxNQUFNLEVBQUVuQixFQUFFLEVBQUUsR0FBRyxNQUFNYyxZQUFZQyxJQUFJSyxLQUFLO0lBRTFDLE1BQU01QixPQUFPLE1BQU1ULG1DQUFFQSxDQUFDUyxJQUFJLENBQUM2QixVQUFVLENBQUM7UUFDcENDLE9BQU87WUFDTHRCLElBQUlBO1FBQ047SUFDRjtJQUlBLE9BQU9SO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgeyBTaWduSldULCBqd3RWZXJpZnkgfSBmcm9tIFwiam9zZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuXG5leHBvcnQgY29uc3QgaGFzaFBhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG5leHBvcnQgY29uc3QgY29tcGFyZVBhc3N3b3JkcyA9IChwbGFpblRleHRQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpID0+XG4gIGJjcnlwdC5jb21wYXJlKHBsYWluVGV4dFBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUpXVCA9ICh1c2VyKSA9PiB7XG4gIC8vIHJldHVybiBqd3Quc2lnbih7IGlkOiB1c2VyLmlkIH0sICdjb29raWVzJylcbiAgY29uc3QgaWF0ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gIGNvbnN0IGV4cCA9IGlhdCArIDYwICogNjAgKiAyNCAqIDc7XG5cbiAgcmV0dXJuIG5ldyBTaWduSldUKHsgcGF5bG9hZDogeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSB9KVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6IFwiSFMyNTZcIiwgdHlwOiBcIkpXVFwiIH0pXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKGV4cClcbiAgICAuc2V0SXNzdWVkQXQoaWF0KVxuICAgIC5zZXROb3RCZWZvcmUoaWF0KVxuICAgIC5zaWduKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVKV1QgPSBhc3luYyAoand0KSA9PiB7XG4gIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KFxuICAgIGp3dCxcbiAgICBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVClcbiAgKTtcblxuICByZXR1cm4gcGF5bG9hZC5wYXlsb2FkIGFzIGFueTtcbn07XG5cblxuLy90b2RvOiB3aGF0IGlmIHRoZSB1c2VyIGlzbid0IGZvdW5kXG5leHBvcnQgY29uc3QgZ2V0VXNlckZyb21Db29raWUgPSBhc3luYyAoY29va2llcykgPT4ge1xuICBjb25zdCBqd3QgPSBjb29raWVzLmdldChwcm9jZXNzLmVudi5DT09LSUVfTkFNRSk7XG5cbiAgY29uc3QgeyBpZCB9ID0gYXdhaXQgdmFsaWRhdGVKV1Qoand0LnZhbHVlKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IGlkIGFzIHN0cmluZyxcbiAgICB9LFxuICB9KTtcblxuXG5cbiAgcmV0dXJuIHVzZXI7XG59OyJdLCJuYW1lcyI6WyJiY3J5cHQiLCJTaWduSldUIiwiand0VmVyaWZ5IiwiZGIiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2giLCJjb21wYXJlUGFzc3dvcmRzIiwicGxhaW5UZXh0UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImNvbXBhcmUiLCJjcmVhdGVKV1QiLCJ1c2VyIiwiaWF0IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImV4cCIsInBheWxvYWQiLCJpZCIsImVtYWlsIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwidHlwIiwic2V0RXhwaXJhdGlvblRpbWUiLCJzZXRJc3N1ZWRBdCIsInNldE5vdEJlZm9yZSIsInNpZ24iLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwidmFsaWRhdGVKV1QiLCJqd3QiLCJnZXRVc2VyRnJvbUNvb2tpZSIsImNvb2tpZXMiLCJnZXQiLCJDT09LSUVfTkFNRSIsInZhbHVlIiwiZmluZFVuaXF1ZSIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTzlDLElBQUlDO0FBQ0osSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEM7SUFDQUMsU0FBU0UsT0FBT0MsWUFBWTtBQUM5QjtBQUVPLE1BQU1DLEtBQUtKLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBjYWNoZWRQcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5jYWNoZWRQcmlzbWEpIHtcbiAgICBnbG9iYWwuY2FjaGVkUHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5jYWNoZWRQcmlzbWE7XG59XG5cbmV4cG9ydCBjb25zdCBkYiA9IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCIsImNhY2hlZFByaXNtYSIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/project.tsx":
/*!*******************************!*\
  !*** ./pages/api/project.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n\n\nasync function handler(req, res) {\n    const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.validateJWT)(req.cookies[process.env.COOKIE_NAME]);\n    await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.project.create({\n        data: {\n            name: req.body.name,\n            ownerId: user.id\n        }\n    });\n    res.json({\n        data: {\n            message: \"ok\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBQ1g7QUFFZixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsTUFBTUMsT0FBTyxNQUFNTCxzREFBV0EsQ0FBQ0csSUFBSUcsT0FBTyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsQ0FBQztJQUVuRSxNQUFNUix1Q0FBRUEsQ0FBQ1MsT0FBTyxDQUFDQyxNQUFNLENBQUM7UUFDdEJDLE1BQU07WUFDSkMsTUFBTVYsSUFBSVcsSUFBSSxDQUFDRCxJQUFJO1lBQ25CRSxTQUFTVixLQUFLVyxFQUFFO1FBQ2xCO0lBQ0Y7SUFFQVosSUFBSWEsSUFBSSxDQUFDO1FBQUVMLE1BQU07WUFBRU0sU0FBUztRQUFLO0lBQUU7QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvcHJvamVjdC50c3g/NWEyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2YWxpZGF0ZUpXVCB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB2YWxpZGF0ZUpXVChyZXEuY29va2llc1twcm9jZXNzLmVudi5DT09LSUVfTkFNRV0pO1xuXG4gIGF3YWl0IGRiLnByb2plY3QuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgICAgb3duZXJJZDogdXNlci5pZCxcbiAgICB9LFxuICB9KTtcblxuICByZXMuanNvbih7IGRhdGE6IHsgbWVzc2FnZTogXCJva1wiIH0gfSk7XG59Il0sIm5hbWVzIjpbInZhbGlkYXRlSldUIiwiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsImNvb2tpZXMiLCJwcm9jZXNzIiwiZW52IiwiQ09PS0lFX05BTUUiLCJwcm9qZWN0IiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJib2R5Iiwib3duZXJJZCIsImlkIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/project.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/project.tsx"));
module.exports = __webpack_exports__;

})();