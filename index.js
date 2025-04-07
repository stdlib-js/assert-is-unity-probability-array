// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isUnityProbabilityArray=t()}(this,(function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"";var a=t()?function(r){var t,o,a,c,f;if(null==r)return n.call(r);o=r[i],f=i,t=null!=(c=r)&&e.call(c,f);try{r[i]=void 0}catch(t){return n.call(r)}return a=n.call(r),t?r[i]=o:delete r[i],a}:function(r){return n.call(r)},c="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function p(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+l(o):l(o)+r,e&&(r="-"+r)),r}var s=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function d(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!u(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===y.call(r.specifier)?y.call(n):s.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var v=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,b=String.prototype.replace,w=/e\+(\d)$/,A=/e-(\d)$/,m=/^(\d+)$/,j=/^(\d+)e/,I=/\.0$/,E=/\.0*e/,U=/(\..*[^0])0*e/;function _(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":v(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=b.call(n,U,"$1e"),n=b.call(n,E,"e"),n=b.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=b.call(n,w,"e+0$1"),n=b.call(n,A,"e-0$1"),r.alternate&&(n=b.call(n,m,"$1."),n=b.call(n,j,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===h.call(r.specifier)?h.call(n):g.call(n)}function F(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var S=String.fromCharCode,x=Array.isArray;function T(r){return r!=r}function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function k(r){var t,n,e,o,i,a,c,f,u,l,s,y,v;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(e=r[f],"string"==typeof e)a+=e;else{if(t=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,u=0;u<n.length;u++)switch(o=n.charAt(u)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,T(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,T(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=d(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!T(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=T(i)?String(e.arg):S(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=_(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=p(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,s=e.width,y=e.padRight,v=void 0,(v=s-l.length)<0?l:l=y?l+F(v):F(v)+l)),a+=e.arg||"",c+=1}return a}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function N(r){var t,n,e,o;for(n=[],o=0,e=C.exec(r);e;)(t=r.slice(o,C.lastIndex-e[0].length)).length&&n.push(t),n.push(V(e)),o=C.lastIndex,e=C.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function P(r){var t,n;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[N(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return k.apply(null,t)}var $,B=Object.prototype,R=B.toString,G=B.__defineGetter__,L=B.__defineSetter__,M=B.__lookupGetter__,Z=B.__lookupSetter__;$=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?f:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===R.call(n))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(M.call(r,t)||Z.call(r,t)?(e=r.__proto__,r.__proto__=B,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),a&&L&&L.call(r,t,n.set),r};var W=$;function X(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Y(){return/^\s*function\s*([^(]*)/i}var z=/^\s*function\s*([^(]*)/i;X(Y,"REGEXP",z);var q=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)};function D(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=a(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=z.exec(e.toString()))return t[1]}return D(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}X(D,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!q(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(D));var J=/./;function K(r){return"boolean"==typeof r}var Q=Boolean,rr=Boolean.prototype.toString;var tr=t();function nr(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===a(r)))}function er(r){return K(r)||nr(r)}X(er,"isPrimitive",K),X(er,"isObject",nr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!K(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=fr.document&&fr.document.childNodes,lr=Int8Array;var pr="function"==typeof J||"object"==typeof lr||"function"==typeof ur?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function sr(r){return"function"===pr(r)}function yr(){}var dr="foo"===yr.name;var vr,gr=Object,hr=Object.getPrototypeOf;vr=sr(Object.getPrototypeOf)?hr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===a(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var br=vr;function wr(r){return null==r?null:(r=gr(r),br(r))}var Ar="function"==typeof Float64Array;var mr="function"==typeof Float64Array?Float64Array:null;function jr(){var r,t,n;if("function"!=typeof mr)return!1;try{t=new mr([1,3.14,-3.14,NaN]),n=t,r=(Ar&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var Ir="function"==typeof Float64Array?Float64Array:void 0;var Er=jr()?Ir:function(){throw new Error("not implemented")},Ur="function"==typeof Int8Array;var _r="function"==typeof Int8Array?Int8Array:null;var Fr="function"==typeof Int8Array?Int8Array:void 0;var Sr=function(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r([1,3.14,-3.14,128]),n=t,r=(Ur&&n instanceof Int8Array||"[object Int8Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},xr="function"==typeof Uint8Array;var Tr="function"==typeof Uint8Array?Uint8Array:null;var Or="function"==typeof Uint8Array?Uint8Array:void 0;var kr=function(){var r,t,n;if("function"!=typeof Tr)return!1;try{t=new Tr(t=[1,3.14,-3.14,256,257]),n=t,r=(xr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Or:function(){throw new Error("not implemented")},Cr="function"==typeof Uint8ClampedArray;var Vr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Pr=function(){var r,t,n;if("function"!=typeof Vr)return!1;try{t=new Vr([-1,0,1,3.14,4.99,255,256]),n=t,r=(Cr&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===a(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},$r="function"==typeof Int16Array;var Br="function"==typeof Int16Array?Int16Array:null;var Rr="function"==typeof Int16Array?Int16Array:void 0;var Gr=function(){var r,t,n;if("function"!=typeof Br)return!1;try{t=new Br([1,3.14,-3.14,32768]),n=t,r=($r&&n instanceof Int16Array||"[object Int16Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")},Lr="function"==typeof Uint16Array;var Mr="function"==typeof Uint16Array?Uint16Array:null;var Zr="function"==typeof Uint16Array?Uint16Array:void 0;var Wr=function(){var r,t,n;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Lr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")},Xr="function"==typeof Int32Array;var Yr="function"==typeof Int32Array?Int32Array:null;var zr="function"==typeof Int32Array?Int32Array:void 0;var qr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr([1,3.14,-3.14,2147483648]),n=t,r=(Xr&&n instanceof Int32Array||"[object Int32Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")},Dr="function"==typeof Uint32Array;var Hr="function"==typeof Uint32Array?Uint32Array:null;var Jr="function"==typeof Uint32Array?Uint32Array:void 0;var Kr=function(){var r,t,n;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Dr&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},Qr="function"==typeof Float32Array;var rt=Number.POSITIVE_INFINITY,tt="function"==typeof Float32Array?Float32Array:null;var nt="function"==typeof Float32Array?Float32Array:void 0;var et=[Er,function(){var r,t,n;if("function"!=typeof tt)return!1;try{t=new tt([1,3.14,-3.14,5e40]),n=t,r=(Qr&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===rt}catch(t){r=!1}return r}()?nt:function(){throw new Error("not implemented")},qr,Kr,Gr,Wr,Sr,kr,Pr],ot=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],it=jr()?wr(Er):at;function at(){}function ct(r){return"number"==typeof r}it="TypedArray"===function(r){if(!1===sr(r))throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return dr?r.name:z.exec(r.toString())[1]}(it)?it:at;var ft=Number,ut=ft.prototype.toString;var lt=t();function pt(r){return"object"==typeof r&&(r instanceof ft||(lt?function(r){try{return ut.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function st(r){return ct(r)||pt(r)}function yt(r){return r!=r}X(st,"isPrimitive",ct),X(st,"isObject",pt);var dt=ft.NEGATIVE_INFINITY;function vt(r){return r===rt||r===dt}function gt(r,t){return yt(r)||yt(t)?NaN:vt(r)||vt(t)?r===t?NaN:rt:function(r){return Math.abs(r)}(r-t)}var ht=1.4901161193847656e-8;return function(r){var t,n;if(q(r)){for(t=0,n=0;n<r.length;n++){if(!ct(r[n])||r[n]>1||r[n]<0)return!1;t+=r[n]}return gt(t,1)<=ht}if(function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof it)return!0;for(n=0;n<et.length;n++)if(r instanceof et[n])return!0;for(;r;){for(t=H(r),n=0;n<ot.length;n++)if(ot[n]===t)return!0;r=wr(r)}return!1}(r)){for(t=0,n=0;n<r.length;n++){if(r[n]>1||r[n]<0)return!1;t+=r[n]}return gt(t,1)<=ht}return!1}}));
//# sourceMappingURL=index.js.map
