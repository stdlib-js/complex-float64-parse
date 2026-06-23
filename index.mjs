// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-parse@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.1.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function n(n){var i;if(!r(n))throw new TypeError(t("null3F",n));if(null===(i=s(n)))throw new Error(t("invalid argument. Unable to parse input string as a complex number. Value: `%s`.",n));return new e(i.re,i.im)}export{n as default};
//# sourceMappingURL=index.mjs.map
