"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=u(function(g,a){
var s=require('@stdlib/assert-is-string/dist').isPrimitive,m=require('@stdlib/complex-base-parse/dist'),o=require('@stdlib/complex-float64-ctor/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function l(e){var r;if(!s(e))throw new TypeError(i('null3F',e));if(r=m(e),r===null)throw new Error(i('nullFg',e));return new o(r.re,r.im)}a.exports=l
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
