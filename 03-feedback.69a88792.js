!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function T(e){return c=e,a=setTimeout(w,t),d?y(e):f}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=p();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-l);return s?b(n,u-(e-c)):n}(e))}function O(e){return a=void 0,v&&r?y(e):(r=o=void 0,f)}function S(){var e=p(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return T(l);if(s)return a=setTimeout(w,t),y(l)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=o=a=void 0},S.flush=function(){return void 0===a?f:O(p())},S}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var T="feedback-form-state",h=document.querySelector(".feedback-form"),w=document.querySelector(".feedback-form input"),O=document.querySelector(".feedback-form textarea");h.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(S))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),""===O.value||""===w.value?alert(" Please fill all fields"):(e.currentTarget.reset(),localStorage.removeItem(T),console.log(S))}));var S={}}();
//# sourceMappingURL=03-feedback.69a88792.js.map