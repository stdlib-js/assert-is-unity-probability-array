"use strict";var f=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var u=f(function(m,s){
var n=require('@stdlib/assert-is-typed-array/dist'),l=require('@stdlib/assert-is-array/dist'),o=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/math-base-utils-absolute-difference/dist'),t=require('@stdlib/constants-float64-sqrt-eps/dist');function q(r){var i,e;if(l(r)){for(i=0,e=0;e<r.length;e++){if(!o(r[e])||r[e]>1||r[e]<0)return!1;i+=r[e]}return a(i,1)<=t}if(n(r)){for(i=0,e=0;e<r.length;e++){if(r[e]>1||r[e]<0)return!1;i+=r[e]}return a(i,1)<=t}return!1}s.exports=q
});var y=u();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
