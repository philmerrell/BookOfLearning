(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"17Qj":function(n,e,t){"use strict";var r=t("CcnG"),i=t("oBZk"),o=t("ZZ/e"),u=t("Ip0R");t("FUaj"),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return s}));var a=r.rb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"]],data:{}});function c(n){return r.Jb(0,[(n()(),r.tb(0,0,null,null,3,"ion-slide",[],null,null,null,i.y,i.k)),r.sb(1,49152,null,0,o.ob,[r.h,r.k,r.z],null,null),(n()(),r.tb(2,0,null,0,1,"h1",[["style","font-size: 60px;"]],null,null,null,null,null)),(n()(),r.Ib(3,null,["",""]))],null,(function(n,e){n(e,3,0,e.context.$implicit)}))}function s(n){return r.Jb(0,[r.Gb(402653184,1,{slider:0}),(n()(),r.tb(1,0,null,null,4,"ion-slides",[["pager","true"]],null,[[null,"ionSlideDidChange"]],(function(n,e,t){var r=!0;return"ionSlideDidChange"===e&&(r=!1!==n.component.slideDidChange()&&r),r}),i.z,i.l)),r.sb(2,49152,[[1,4],["slider",4]],0,o.pb,[r.h,r.k,r.z],{options:[0,"options"],pager:[1,"pager"]},null),r.Fb(3,{autoHeight:0}),(n()(),r.ib(16777216,null,0,1,null,c)),r.sb(5,278528,null,0,u.h,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){var t=e.component,r=n(e,3,0,!0);n(e,2,0,r,"true"),n(e,5,0,t.words)}),null)}},"DK3/":function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return u})),t.d(e,"d",(function(){return r}));var r=function(){var n=window.TapticEngine;n&&n.selection()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},FUaj:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t("mrSG"),i=t("CcnG"),o=t("gcOT"),u=(t("ZZ/e"),o.a.Storage),a=function(){function n(){this.words=[],this.wordChange=new i.m,this.isSaved=!1,this.currentIndex=0,this.savedWords=[]}return n.prototype.ngOnInit=function(){return r.b(this,void 0,void 0,(function(){return r.e(this,(function(n){switch(n.label){case 0:return[4,this.getSavedWords()];case 1:return n.sent(),this.checkForSavedWord(0),[2]}}))}))},n.prototype.getActiveIndex=function(){return r.b(this,void 0,void 0,(function(){return r.e(this,(function(n){return[2,this.slider.getActiveIndex()]}))}))},n.prototype.getSavedWords=function(){return r.b(this,void 0,void 0,(function(){var n,e,t;return r.e(this,(function(r){switch(r.label){case 0:return n=this,t=(e=JSON).parse,[4,u.get({key:"savedWords"})];case 1:return[4,t.apply(e,[r.sent().value])];case 2:return n.savedWords=r.sent()||[],console.log(this.savedWords),[2]}}))}))},n.prototype.slideDidChange=function(){return r.b(this,void 0,void 0,(function(){var n;return r.e(this,(function(e){switch(e.label){case 0:return n=this,[4,this.getActiveIndex()];case 1:return n.currentIndex=e.sent(),this.checkForSavedWord(this.currentIndex),[2]}}))}))},n.prototype.checkForSavedWord=function(n){this.isSaved=!(!this.savedWords||-1===this.savedWords.indexOf(this.words[n]))},n.prototype.saveOrRemoveWord=function(n){return r.b(this,void 0,void 0,(function(){var e,t;return r.e(this,(function(r){switch(r.label){case 0:return this.isSaved?(e=this.savedWords.findIndex((function(e){return e===n})),this.savedWords.splice(e,1)):this.savedWords.push(n),t=JSON.stringify(this.savedWords),[4,u.set({key:"savedWords",value:t})];case 1:return r.sent(),this.isSaved=!this.isSaved,[2]}}))}))},n}()},Jky2:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return c}));var r=t("mrSG"),i=function(n,e){return null!==e.closest(n)},o=function(n){var e;return"string"==typeof n&&n.length>0?((e={"ion-color":!0})["ion-color-"+n]=!0,e):void 0},u=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return e[n]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,c=function(n,e,t){return Object(r.b)(void 0,void 0,void 0,(function(){var i;return Object(r.e)(this,(function(r){return null!=n&&"#"!==n[0]&&!a.test(n)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(n,t)]):[2,!1]}))}))}},NTBD:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return r}));var r=function(n,e,t){var r=new MutationObserver((function(n){t(i(n,e))}));return r.observe(n,{childList:!0,subtree:!0}),r},i=function(n,e){var t;return n.forEach((function(n){for(var r=0;r<n.addedNodes.length;r++)t=o(n.addedNodes[r],e)||t})),t},o=function(n,e){if(1===n.nodeType)return(n.tagName===e.toUpperCase()?[n]:Array.from(n.querySelectorAll(e))).find((function(n){return!0===n.checked}))}},uYVq:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i}));var r=function(){return function(n,e){this.x=n,this.y=e}}(),i=function(n,e,t,r,i){var a=u(n.y,e.y,t.y,r.y,i);return o(n.x,e.x,t.x,r.x,a[0])},o=function(n,e,t,r,i){return i*(3*e*Math.pow(i-1,2)+i*(-3*t*i+3*t+r*i))-n*Math.pow(i-1,3)},u=function(n,e,t,r,i){return a((r-=i)-3*(t-=i)+3*(e-=i)-(n-=i),3*t-6*e+3*n,3*e-3*n,n).filter((function(n){return n>=0&&n<=1}))},a=function(n,e,t,r){if(0===n)return function(n,e,t){var r=e*e-4*n*t;return r<0?[]:[(-e+Math.sqrt(r))/(2*n),(-e-Math.sqrt(r))/(2*n)]}(e,t,r);var i=(3*(t/=n)-(e/=n)*e)/3,o=(2*e*e*e-9*e*t+27*(r/=n))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var u=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===u)return[Math.pow(o/2,.5)-e/3];if(u>0)return[Math.pow(-o/2+Math.sqrt(u),1/3)-Math.pow(o/2+Math.sqrt(u),1/3)-e/3];var a=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(a,1/3);return[s*Math.cos(c/3)-e/3,s*Math.cos((c+2*Math.PI)/3)-e/3,s*Math.cos((c+4*Math.PI)/3)-e/3]}},"v7+D":function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}));var r=t("mrSG"),i=function(n,e,t,i,o){return Object(r.b)(void 0,void 0,void 0,(function(){var u;return Object(r.e)(this,(function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(e,t,o,i)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t,i&&i.forEach((function(n){return u.classList.add(n)})),o&&Object.assign(u,o),e.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}}))}))},o=function(n,e){if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},zrW2:function(n,e,t){"use strict";t.d(e,"a",(function(){return y})),t.d(e,"b",(function(){return M})),t.d(e,"c",(function(){return g})),t.d(e,"d",(function(){return O})),t.d(e,"e",(function(){return u}));var r=t("mrSG"),i=t("ae0+"),o=t("ocqh"),u=function(n){return new Promise((function(e,t){Object(i.m)((function(){a(n),c(n).then((function(t){t.animation&&t.animation.destroy(),s(n),e(t)}),(function(e){s(n),t(e)}))}))}))},a=function(n){var e=n.enteringEl,t=n.leavingEl;E(e,t,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),O(e,!1),t&&O(t,!1)},c=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var e;return Object(r.e)(this,(function(t){switch(t.label){case 0:return[4,l(n)];case 1:return[2,(e=t.sent())?d(e,n):f(n)]}}))}))},s=function(n){var e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var e;return Object(r.e)(this,(function(r){switch(r.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,t.e(99).then(t.bind(null,"KWkT"))]:[2,void 0];case 1:return e=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,t.e(100).then(t.bind(null,"l2mW"))];case 3:e=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,e]}}))}))},d=function(n,e){return Object(r.b)(void 0,void 0,void 0,(function(){var i,o;return Object(r.e)(this,(function(r){switch(r.label){case 0:return[4,v(e,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,t.e(7).then(t.bind(null,"5QBn"))];case 3:return[4,r.sent().create(n,e.baseEl,e)];case 4:return i=r.sent(),[3,6];case 5:return r.sent(),i=n(e.baseEl,e),[3,6];case 6:return p(e.enteringEl,e.leavingEl),[4,b(i,e)];case 7:return o=r.sent(),e.progressCallback&&e.progressCallback(void 0),o&&m(e.enteringEl,e.leavingEl),[2,{hasCompleted:o,animation:i}]}}))}))},f=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var e,t;return Object(r.e)(this,(function(r){switch(r.label){case 0:return e=n.enteringEl,t=n.leavingEl,[4,v(n,!1)];case 1:return r.sent(),p(e,t),m(e,t),[2,{hasCompleted:!0}]}}))}))},v=function(n,e){return Object(r.b)(void 0,void 0,void 0,(function(){var t;return Object(r.e)(this,(function(r){switch(r.label){case 0:return t=(void 0!==n.deepWait?n.deepWait:e)?[y(n.enteringEl),y(n.leavingEl)]:[w(n.enteringEl),w(n.leavingEl)],[4,Promise.all(t)];case 1:return r.sent(),[4,h(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}}))}))},h=function(n,e){return Object(r.b)(void 0,void 0,void 0,(function(){return Object(r.e)(this,(function(t){switch(t.label){case 0:return n?[4,n(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},b=function(n,e){var t=e.progressCallback,r=new Promise((function(e){n.onFinish((function(t){"number"==typeof t?e(1===t):void 0!==n.hasCompleted&&e(n.hasCompleted)}))}));return t?(n.progressStart(!0),t(n)):n.play(),r},p=function(n,e){g(e,o.c),g(n,o.a)},m=function(n,e){g(n,o.b),g(e,o.d)},g=function(n,e){if(n){var t=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}},w=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function(n){return Object(r.b)(void 0,void 0,void 0,(function(){var e;return Object(r.e)(this,(function(t){switch(t.label){case 0:return(e=n)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(y))];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))},O=function(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},E=function(n,e,t){void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==e&&(e.style.zIndex="100")},M=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}},zwjO:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r=function(n){try{if("string"!=typeof n||""===n)return n;var e=document.createDocumentFragment(),t=document.createElement("div");e.appendChild(t),t.innerHTML=n,a.forEach((function(n){for(var t=e.querySelectorAll(n),r=t.length-1;r>=0;r--){var u=t[r];u.parentNode?u.parentNode.removeChild(u):e.removeChild(u);for(var a=o(u),c=0;c<a.length;c++)i(a[c])}}));for(var r=o(e),u=0;u<r.length;u++)i(r[u]);var c=document.createElement("div");c.appendChild(e);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},i=function(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var t=n.attributes.item(e),r=t.name;if(u.includes(r.toLowerCase())){var a=t.value;null!=a&&a.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}var c=o(n);for(e=0;e<c.length;e++)i(c[e])}},o=function(n){return null!=n.children?n.children:n.childNodes},u=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]}}]);