// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-utils-absolute-difference@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-eps@v0.1.1-esm/index.mjs";function n(n){var d,m;if(t(n)){for(d=0,m=0;m<n.length;m++){if(!e(n[m])||n[m]>1||n[m]<0)return!1;d+=n[m]}return r(d,1)<=i}if(s(n)){for(d=0,m=0;m<n.length;m++){if(n[m]>1||n[m]<0)return!1;d+=n[m]}return r(d,1)<=i}return!1}export{n as default};
//# sourceMappingURL=index.mjs.map
