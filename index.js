// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isUnityProbabilityArray=t()}(this,(function(){"use strict";function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=r();var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;function o(r,t){return null!=r&&e.call(r,t)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,i;if(null==r)return n.call(r);e=r[a],t=o(r,a);try{r[a]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[a]=e:delete r[a],i}:function(r){return n.call(r)},u="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function l(r){return"number"==typeof r}function p(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function y(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+p(o):p(o)+r,e&&(r="-"+r)),r}var s=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function d(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!l(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=y(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=y(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):s.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function g(r){return"string"==typeof r}var b=Math.abs,h=String.prototype.toLowerCase,w=String.prototype.toUpperCase,m=String.prototype.replace,A=/e\+(\d)$/,j=/e-(\d)$/,I=/^(\d+)$/,E=/^(\d+)e/,S=/\.0$/,U=/\.0*e/,_=/(\..*[^0])0*e/;function F(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":b(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=m.call(n,_,"$1e"),n=m.call(n,U,"e"),n=m.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=m.call(n,A,"e+0$1"),n=m.call(n,j,"e-0$1"),r.alternate&&(n=m.call(n,I,"$1."),n=m.call(n,E,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===w.call(r.specifier)?w.call(n):h.call(n)}function T(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function x(r,t,n){var e=t-r.length;return e<0?r:r=n?r+T(e):T(e)+r}var O=String.fromCharCode,N=isNaN,k=Array.isArray;function C(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function V(r){var t,n,e,o,i,a,c,u,f;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(g(e=r[u]))a+=e;else{if(t=void 0!==e.precision,!(e=C(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(o=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,N(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,N(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=d(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!N(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=N(i)?String(e.arg):O(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=F(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=y(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=x(e.arg,e.width,e.padRight)),a+=e.arg||"",c+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=P.exec(r);e;)(t=r.slice(o,P.lastIndex-e[0].length)).length&&n.push(t),n.push($(e)),o=P.lastIndex,e=P.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function R(r){return"string"==typeof r}function G(r){var t,n;if(!R(r))throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[B(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return V.apply(null,t)}var L,M=Object.prototype,Z=M.toString,W=M.__defineGetter__,X=M.__defineSetter__,Y=M.__lookupGetter__,z=M.__lookupSetter__;L=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?f:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Z.call(n))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(Y.call(r,t)||z.call(r,t)?(e=r.__proto__,r.__proto__=M,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&W&&W.call(r,t,n.get),a&&X&&X.call(r,t,n.set),r};var q=L;function D(){return/^\s*function\s*([^(]*)/i}var H=/^\s*function\s*([^(]*)/i;!function(r,t,n){q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(D,"REGEXP",H);var J=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)};function K(r){return null!==r&&"object"==typeof r}function Q(r){var t,n,e,o;if(("Object"===(n=c(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=H.exec(e.toString()))return t[1]}return K(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}!function(r,t,n){q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(K,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!J(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(K));var rr=/./;function tr(r,t,n){q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function nr(r){return"boolean"==typeof r}var er=r();var or=Boolean,ir=Boolean.prototype.toString;var ar=er&&"symbol"==typeof Symbol.toStringTag;function cr(r){return"object"==typeof r&&(r instanceof or||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function ur(r){return nr(r)||cr(r)}function fr(){return new Function("return this;")()}tr(ur,"isPrimitive",nr),tr(ur,"isObject",cr);var lr="object"==typeof self?self:null,pr="object"==typeof window?window:null,yr="object"==typeof global?global:null,sr="object"==typeof globalThis?globalThis:null;var vr=function(r){if(arguments.length){if(!nr(r))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return fr()}if(sr)return sr;if(lr)return lr;if(pr)return pr;if(yr)return yr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=vr.document&&vr.document.childNodes,gr=Int8Array;var br="function"==typeof rr||"object"==typeof gr||"function"==typeof dr?function(r){return Q(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Q(r).toLowerCase():t};function hr(r){return"function"===br(r)}function wr(){}var mr="foo"===wr.name;var Ar,jr=Object,Ir=Object.getPrototypeOf;Ar=hr(Object.getPrototypeOf)?Ir:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=Ar;function Sr(r){return null==r?null:(r=jr(r),Er(r))}var Ur="function"==typeof Float64Array;var _r="function"==typeof Float64Array?Float64Array:null;function Fr(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r([1,3.14,-3.14,NaN]),n=t,r=(Ur&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var Tr="function"==typeof Float64Array?Float64Array:void 0;var xr=Fr()?Tr:function(){throw new Error("not implemented")},Or="function"==typeof Int8Array;var Nr="function"==typeof Int8Array?Int8Array:null;var kr="function"==typeof Int8Array?Int8Array:void 0;var Cr=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr([1,3.14,-3.14,128]),n=t,r=(Or&&n instanceof Int8Array||"[object Int8Array]"===c(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Vr="function"==typeof Uint8Array;var Pr="function"==typeof Uint8Array?Uint8Array:null;var $r="function"==typeof Uint8Array?Uint8Array:void 0;var Br=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr(t=[1,3.14,-3.14,256,257]),n=t,r=(Vr&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")},Rr=r();var Gr=Object.prototype.toString;var Lr="function"==typeof Symbol?Symbol:void 0,Mr="function"==typeof Lr?Lr.toStringTag:"";var Zr=Rr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Gr.call(r);n=r[Mr],t=o(r,Mr);try{r[Mr]=void 0}catch(t){return Gr.call(r)}return e=Gr.call(r),t?r[Mr]=n:delete r[Mr],e}:function(r){return Gr.call(r)},Wr="function"==typeof Uint8ClampedArray;var Xr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var zr=function(){var r,t,n;if("function"!=typeof Xr)return!1;try{t=new Xr([-1,0,1,3.14,4.99,255,256]),n=t,r=(Wr&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Zr(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")},qr="function"==typeof Int16Array;var Dr="function"==typeof Int16Array?Int16Array:null;var Hr="function"==typeof Int16Array?Int16Array:void 0;var Jr=function(){var r,t,n;if("function"!=typeof Dr)return!1;try{t=new Dr([1,3.14,-3.14,32768]),n=t,r=(qr&&n instanceof Int16Array||"[object Int16Array]"===c(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Hr:function(){throw new Error("not implemented")},Kr="function"==typeof Uint16Array;var Qr="function"==typeof Uint16Array?Uint16Array:null;var rt="function"==typeof Uint16Array?Uint16Array:void 0;var tt=function(){var r,t,n;if("function"!=typeof Qr)return!1;try{t=new Qr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Kr&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rt:function(){throw new Error("not implemented")},nt="function"==typeof Int32Array;var et="function"==typeof Int32Array?Int32Array:null;var ot="function"==typeof Int32Array?Int32Array:void 0;var it=function(){var r,t,n;if("function"!=typeof et)return!1;try{t=new et([1,3.14,-3.14,2147483648]),n=t,r=(nt&&n instanceof Int32Array||"[object Int32Array]"===c(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?ot:function(){throw new Error("not implemented")},at="function"==typeof Uint32Array;var ct="function"==typeof Uint32Array?Uint32Array:null;var ut="function"==typeof Uint32Array?Uint32Array:void 0;var ft=function(){var r,t,n;if("function"!=typeof ct)return!1;try{t=new ct(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(at&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ut:function(){throw new Error("not implemented")},lt="function"==typeof Float32Array;var pt=Number.POSITIVE_INFINITY,yt="function"==typeof Float32Array?Float32Array:null;var st="function"==typeof Float32Array?Float32Array:void 0;var vt=[xr,function(){var r,t,n;if("function"!=typeof yt)return!1;try{t=new yt([1,3.14,-3.14,5e40]),n=t,r=(lt&&n instanceof Float32Array||"[object Float32Array]"===c(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===pt}catch(t){r=!1}return r}()?st:function(){throw new Error("not implemented")},it,ft,Jr,tt,Cr,Br,zr],dt=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],gt=Fr()?Sr(xr):bt;function bt(){}function ht(r,t,n){q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function wt(r){return"number"==typeof r}gt="TypedArray"===function(r){if(!1===hr(r))throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",r));return mr?r.name:H.exec(r.toString())[1]}(gt)?gt:bt;var mt=r();var At=Number,jt=At.prototype.toString;var It=mt&&"symbol"==typeof Symbol.toStringTag;function Et(r){return"object"==typeof r&&(r instanceof At||(It?function(r){try{return jt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function St(r){return wt(r)||Et(r)}ht(St,"isPrimitive",wt),ht(St,"isObject",Et);var Ut=Number.POSITIVE_INFINITY;function _t(r){return r!=r}var Ft=At.NEGATIVE_INFINITY;function Tt(r){return r===Ut||r===Ft}function xt(r,t){return _t(r)||_t(t)?NaN:Tt(r)||Tt(t)?r===t?NaN:Ut:function(r){return Math.abs(r)}(r-t)}var Ot=1.4901161193847656e-8;return function(r){var t,n;if(J(r)){for(t=0,n=0;n<r.length;n++){if(!wt(r[n])||r[n]>1||r[n]<0)return!1;t+=r[n]}return xt(t,1)<=Ot}if(function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof gt)return!0;for(n=0;n<vt.length;n++)if(r instanceof vt[n])return!0;for(;r;){for(t=Q(r),n=0;n<dt.length;n++)if(dt[n]===t)return!0;r=Sr(r)}return!1}(r)){for(t=0,n=0;n<r.length;n++){if(r[n]>1||r[n]<0)return!1;t+=r[n]}return xt(t,1)<=Ot}return!1}}));
//# sourceMappingURL=index.js.map
