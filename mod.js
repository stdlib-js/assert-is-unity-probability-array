// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var i=t()?function(r){var t,i,a,u,f;if(null==r)return n.call(r);i=r[o],f=o,t=null!=(u=r)&&e.call(u,f);try{r[o]=void 0}catch(t){return n.call(r)}return a=n.call(r),t?r[o]=i:delete r[o],a}:function(r){return n.call(r)},a="function"==typeof Object.defineProperty?Object.defineProperty:null;var u,f=Object.defineProperty,c=Object.prototype,y=c.toString,l=c.__defineGetter__,p=c.__defineSetter__,v=c.__lookupGetter__,A=c.__lookupSetter__;u=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?f:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===y.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(v.call(r,t)||A.call(r,t)?(e=r.__proto__,r.__proto__=c,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(r,t,n.get),a&&p&&p.call(r,t,n.set),r};var b=u;function s(r,t,n){b(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function d(){return/^\s*function\s*([^(]*)/i}var m=/^\s*function\s*([^(]*)/i;s(d,"REGEXP",m);var w=Array.isArray?Array.isArray:function(r){return"[object Array]"===i(r)};function j(r){return null!==r&&"object"==typeof r}function h(r){var t,n,e,o;if(("Object"===(n=i(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=m.exec(e.toString()))return t[1]}return j(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}s(j,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!w(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(j));var _=/./;function I(r){return"boolean"==typeof r}var U=Boolean.prototype.toString;var g=t();function E(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===i(r)))}function F(r){return I(r)||E(r)}function O(){return new Function("return this;")()}s(F,"isPrimitive",I),s(F,"isObject",E);var S="object"==typeof self?self:null,N="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},C="object"==typeof T?T:null;var P=function(r){if(arguments.length){if(!I(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(S)return S;if(N)return N;if(C)return C;throw new Error("unexpected error. Unable to resolve global object.")}(),B=P.document&&P.document.childNodes,V=Int8Array;var x="function"==typeof _||"object"==typeof V||"function"==typeof B?function(r){return h(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?h(r).toLowerCase():t};function G(r){return"function"===x(r)}function M(){}var k="foo"===M.name;var L,Y=Object.getPrototypeOf;L=G(Object.getPrototypeOf)?Y:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===i(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var R=L;function X(r){return null==r?null:(r=Object(r),R(r))}var q="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null;function D(){var r,t,n;if("function"!=typeof z)return!1;try{t=new z([1,3.14,-3.14,NaN]),n=t,r=(q&&n instanceof Float64Array||"[object Float64Array]"===i(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var H="function"==typeof Float64Array?Float64Array:void 0;var J=D()?H:function(){throw new Error("not implemented")},K="function"==typeof Int8Array;var Q="function"==typeof Int8Array?Int8Array:null;var W="function"==typeof Int8Array?Int8Array:void 0;var Z=function(){var r,t,n;if("function"!=typeof Q)return!1;try{t=new Q([1,3.14,-3.14,128]),n=t,r=(K&&n instanceof Int8Array||"[object Int8Array]"===i(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")},$="function"==typeof Uint8Array;var rr="function"==typeof Uint8Array?Uint8Array:null;var tr="function"==typeof Uint8Array?Uint8Array:void 0;var nr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr(t=[1,3.14,-3.14,256,257]),n=t,r=($&&n instanceof Uint8Array||"[object Uint8Array]"===i(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?tr:function(){throw new Error("not implemented")},er="function"==typeof Uint8ClampedArray;var or="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ir="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ar=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or([-1,0,1,3.14,4.99,255,256]),n=t,r=(er&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===i(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?ir:function(){throw new Error("not implemented")},ur="function"==typeof Int16Array;var fr="function"==typeof Int16Array?Int16Array:null;var cr="function"==typeof Int16Array?Int16Array:void 0;var yr=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr([1,3.14,-3.14,32768]),n=t,r=(ur&&n instanceof Int16Array||"[object Int16Array]"===i(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")},lr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var vr="function"==typeof Uint16Array?Uint16Array:void 0;var Ar=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===i(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")},br="function"==typeof Int32Array;var sr="function"==typeof Int32Array?Int32Array:null;var dr="function"==typeof Int32Array?Int32Array:void 0;var mr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr([1,3.14,-3.14,2147483648]),n=t,r=(br&&n instanceof Int32Array||"[object Int32Array]"===i(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")},wr="function"==typeof Uint32Array;var jr="function"==typeof Uint32Array?Uint32Array:null;var hr="function"==typeof Uint32Array?Uint32Array:void 0;var _r=function(){var r,t,n;if("function"!=typeof jr)return!1;try{t=new jr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(wr&&n instanceof Uint32Array||"[object Uint32Array]"===i(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")},Ir="function"==typeof Float32Array;var Ur=Number.POSITIVE_INFINITY,gr="function"==typeof Float32Array?Float32Array:null;var Er="function"==typeof Float32Array?Float32Array:void 0;var Fr=[J,function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr([1,3.14,-3.14,5e40]),n=t,r=(Ir&&n instanceof Float32Array||"[object Float32Array]"===i(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Ur}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")},mr,_r,yr,Ar,Z,nr,ar],Or=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Sr=D()?X(J):Nr;function Nr(){}function Tr(r){return"number"==typeof r}Sr="TypedArray"===function(r){if(!1===G(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return k?r.name:m.exec(r.toString())[1]}(Sr)?Sr:Nr;var Cr=Number,Pr=Cr.prototype.toString;var Br=t();function Vr(r){return"object"==typeof r&&(r instanceof Cr||(Br?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===i(r)))}function xr(r){return Tr(r)||Vr(r)}function Gr(r){return r!=r}s(xr,"isPrimitive",Tr),s(xr,"isObject",Vr);var Mr=Cr.NEGATIVE_INFINITY;function kr(r){return r===Ur||r===Mr}function Lr(r,t){return Gr(r)||Gr(t)?NaN:kr(r)||kr(t)?r===t?NaN:Ur:function(r){return Math.abs(r)}(r-t)}function Yr(r){var t,n;if(w(r)){for(t=0,n=0;n<r.length;n++){if(!Tr(r[n])||r[n]>1||r[n]<0)return!1;t+=r[n]}return Lr(t,1)<=1.4901161193847656e-8}if(function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof Sr)return!0;for(n=0;n<Fr.length;n++)if(r instanceof Fr[n])return!0;for(;r;){for(t=h(r),n=0;n<Or.length;n++)if(Or[n]===t)return!0;r=X(r)}return!1}(r)){for(t=0,n=0;n<r.length;n++){if(r[n]>1||r[n]<0)return!1;t+=r[n]}return Lr(t,1)<=1.4901161193847656e-8}return!1}export{Yr as default};
//# sourceMappingURL=mod.js.map
