parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ef3P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.galleryItems=p;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./gallery");const n=document.querySelector(".js-gallery"),o=document.querySelector(".lightbox"),t=document.querySelector(".lightbox__overlay"),r=document.querySelector(".lightbox__image"),c=document.querySelector('[data-action="close-lightbox"]'),i=(e,{preview:n,original:o,description:t})=>e+`<li class = 'gallery__item'><a class = 'gallery__link' href = ${o}><img class = 'gallery__image' src = ${n} data-source = ${o} alt = ${t}/></a></li>`,s=e.galleryItems.reduce(i,"");function l(e){e.preventDefault(),"IMG"===e.target.nodeName&&(o.classList.add("is-open"),r.src=e.target.dataset.source,window.addEventListener("keydown",g),window.addEventListener("keydown",w),window.addEventListener("keydown",y))}function d(){o.classList.remove("is-open"),r.src="",window.removeEventListener("keydown",g),window.removeEventListener("keydown",w),window.removeEventListener("keydown",y)}function a(){d()}function g(e){"Escape"===e.code&&d()}n.insertAdjacentHTML("beforeend",s),n.addEventListener("click",l),c.addEventListener("click",d),t.addEventListener("click",a);const u=[];function w(e){const n=u.indexOf(r.src);"ArrowRight"===e.code&&(r.src=8!==n?u[n+1]:u[0],console.log(n),console.log("нажал вправо"))}function y(e){const n=u.indexOf(r.src);"ArrowLeft"===e.code&&(r.src=0!==n?u[n-1]:u[u.length-1],console.log(n),console.log("нажал влево"))}e.galleryItems.map(e=>u.push(e.original));
},{"./gallery":"Ef3P"}]},{},["Focm"], null)
//# sourceMappingURL=/practice-hw-8/src.7637435a.js.map