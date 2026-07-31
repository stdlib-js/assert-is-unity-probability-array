"use strict";var f=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(r){throw (i=0, r)}};};var u=f(function(m,s){
var n=require('@stdlib/assert-is-typed-array/dist'),l=require('@stdlib/assert-is-array/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/math-base-utils-absolute-difference/dist'),t=require('@stdlib/constants-float64-sqrt-eps/dist');function q(e){var i,r;if(l(e)){for(i=0,r=0;r<e.length;r++){if(!o(e[r])||e[r]>1||e[r]<0)return!1;i+=e[r]}return a(i,1)<=t}if(n(e)){for(i=0,r=0;r<e.length;r++){if(e[r]>1||e[r]<0)return!1;i+=e[r]}return a(i,1)<=t}return!1}s.exports=q
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
