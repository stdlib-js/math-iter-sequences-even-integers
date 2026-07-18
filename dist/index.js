"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=o(function(I,l){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist');function w(t,r){return x(r)?y(r,"iter")&&(t.iter=r.iter,!h(r.iter))?new TypeError(f('0Zz2t',"iter",r.iter)):null:new TypeError(f('0Zz2V',r));}l.exports=w
});var q=o(function(N,m){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=require('@stdlib/symbol-iterator/dist'),T=require('@stdlib/constants-float64-max-safe-integer/dist'),j=g();function d(t){var r,e,s,a,i,n,u;if(r={iter:T},arguments.length&&(a=j(r,t),a))throw a;return i=-1,n=0,u=0,e={},v(e,"next",p),v(e,"return",E),c&&v(e,c,O),e;function p(){return n+=1,s||n>r.iter?{done:!0}:n===1?{value:0,done:!1}:(i<0&&(u+=2),i*=-1,{value:i*u,done:!1})}function E(b){return s=!0,arguments.length?{value:b,done:!0}:{done:!0}}function O(){return d(r)}}m.exports=d
});var A=q();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
