// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var d=r,m=i,a=s.isPrimitive,l=o;var p=e,j=t,u=n,v=function(e,t){return d(t)?m(t,"iter")&&(e.iter=t.iter,!a(t.iter))?new TypeError(l("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",t))};var f=function e(t){var n,r,i,s,o,d,m;if(n={iter:u},arguments.length&&(s=v(n,t)))throw s;return o=-1,d=0,m=0,p(r={},"next",a),p(r,"return",l),j&&p(r,j,f),r;function a(){return d+=1,i||d>n.iter?{done:!0}:1===d?{value:0,done:!1}:(o<0&&(m+=2),{value:(o*=-1)*m,done:!1})}function l(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return e(n)}},h=f;export{h as default};
//# sourceMappingURL=index.mjs.map