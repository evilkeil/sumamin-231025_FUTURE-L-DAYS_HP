/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/transparentBkg/transparentBkg2x.png */ "./src/assets/images/transparentBkg/transparentBkg2x.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
/* ------------------- */
/* Variables           */
/* ------------------- */
:root{
    --main-color:#000000;

    /* fonts */

    --ff-trade-gothic:trade-gothic-next-compressed, sans-serif;
  
    
    /* font weights */

    --fw-nav:400;

    /* hamburger menu vaiables */

    --bar-width:30px;
    --bar-height:1.17px;
    --bar-gap:11.24px;
    --foreground:#606060;
    --background:#FFFFFF;
    --animation-timing:350ms ease-in-out;
    --hamburger-height: calc(var(--bar-height) * 3  + var(--bar-gap) * 2);


}


/* ------------------- */
/* CSS - Reset               */
/* ------------------- */

/* Box sizing */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
    margin: 0;
}

/* set up the body */
body {
    line-height: 1.5;
    min-height: 100dvh;
    overflow-x: hidden;
    position: relative;
    color: var(--main-color);
    margin: 0;
    padding: 0;
}

/* make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* make form elements easier to work with */
input,
button,
textarea,
select {
    font: inherit;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* ------------------- */
/*       UTILITY CLASSES          */
/* ------------------- */
.main-grid{
    display: grid;
    grid-template-columns: 1fr 70% 1fr;
    justify-items: center;
}
@media (max-width:600px){
    .main-grid{
        display: grid;
        grid-template-columns: 1fr 85% 1fr;
    } 
}


/* ------------------- */
/*       Nav           */
/* ------------------- */
body{
    /* border: 5px solid green; */
    /* background-color: red; */
}
#nav{
    /* border: 1px solid red; */
    display: flex;
    
    justify-content: center;
    align-items: center;
    margin-left: 61.93px;
    margin-top: 34.38px;
    position: relative;
}
.primary-nav-svg{
    width: 8.8791px;
    height: 9.0395px;
    
}

.logo{
    position: absolute;
    top:4px;
    left: 0;
    width: 196.19px;
    height: 57.6px;
    /* border: 1px soild green; */
}
.nav-links{
    text-decoration: none;
    color: var(--main-color);
    font-style: normal;
    font-family: var(--ff-trade-gothic);
    font-weight: var(--fw-nav);
    font-size: 1.25rem;
}

.primary-nav{
    display: flex;
    gap: 2.6875rem;
    height: 100%;
    /* border: 1px solid black; */
    padding: 0;
}

.primary-nav-item{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5938rem;
    height: 100%;
    /* border: 1px solid blue; */
}

.primary-nav-item:hover{
    cursor: pointer;
}


.hamburger-menu{
    display: none;
}

/* tablet and mobile  */
@media (max-width:950px){
    .primary-nav-wrapper{
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transition: transform var(--animation-timing);
        transform: translateX(100%);
        z-index: 4;
    }

    .primary-nav{
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        padding-left: 1rem;
    }

    .nav-links{
        font-size: 2rem;
    }
    .primary-nav-svg{
        width: 16px;
        height: 18px;
    }
 
    .logo{
        position: static;
    }
    #nav{
        justify-content: space-between;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 9.57px;
    }
    .hamburger-menu{
        --x-width:calc(var(--hamburger-height) * 1.41421356237); /* the length of the bar when its an X (hamburger menu height  * squareroot of 2) */
        display: flex;
        flex-direction: column;
        gap: var(--bar-gap);
        width: max-content;
        z-index: 5;
        cursor: pointer;
    }

    .hamburger-menu::before,
    .hamburger-menu::after,
    .hamburger-menu input{
        content: "";
        width: var(--bar-width);
        height: var(--bar-height);
        background-color: var(--foreground);
        border-radius: 9999px;
        transform-origin: left center;
        transition: opacity var(--animation-timing), width var(--animation-timing),translate var(--animation-timing),rotate var(--animation-timing);
       
    }
    
    .hamburger-menu input{
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }

    .hamburger-menu:has(input:checked)::before{
        rotate: 45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / -2);
       
    }

    .hamburger-menu:has(input:checked)::after{
        rotate: -45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height)/2);
        
    }
    .hamburger-menu input:checked{
        opacity: 0;
        width: 0;
    }

    .hamburger-menu:has(input:checked) + .primary-nav-wrapper{
        transform: translateX(0);
    }
}

/* mobile */
@media (max-width:600px){
    .logo{
        width: 160px;
        height: 46.97px;
    }
    #nav{
        gap: 120px;
        margin-left: 20px;
        margin-top: 9.57px;
    }
}

/* ------------------- */
/*       hero          */
/* ------------------- */

/* hero top */
.hero-top-container{
/* border: 1px solid black; */
display: flex;
justify-content: space-between;
align-items: center;
/* gap: 557.5px; */
margin-top: 70px;
margin-left: 240px;
margin-right: 85px;
margin-bottom: 69px;
}
/* scroll to contact btn */
.scroll-btn{
    position: relative;
    /* border: 1px solid green; */
    width: 122.02px;
    /* height: 122.05px; */
    aspect-ratio: 1;
    display: grid;
    place-items: center;
}
.scroll-btn-arrow{
    width: 37px;
    height: 37px;
    /* position: absolute;
    top: 41.17px;
    left: 42.68px; */
    z-index: 2;
}

.rotate-text{
    position: absolute;
    inset: 0;
    animation-name: rotate-circle;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes rotate-circle {
    to {
      transform: rotate(1turn);
    }
  }

  /* hero top image styles */
  .hero-top-img{
    /* border: 1px solid red; */
    width: 435px;
    height: 71px;
    position: relative;
  }
  .hero-top-img::after{
    content: "The future is full of likes.";
    text-align: left;
    letter-spacing: 2.95px;
    color: #F0F5F5;
    opacity: 1;
    font-size: 73.79px;
    width: max-content;
    height: 90px;
    /* white-space: nowrap; */
    z-index: -1;
    position: absolute;
    top: 26px;
   
  }
  @media (max-width:950px){
    .hero-top-img{
        /* border: 1px solid red; */
        width: 207.54px;
        height: 33.84px;
        
      }
      .hero-top-img::after{
        font-size: 35.17px;
        height: 43px;
        letter-spacing: 1.41px;
      }
      .hero-top-container{
        margin-top: 0px;
        margin-left: 19.97px;
        margin-right: 18.39px;
        }
        .scroll-btn{
            width: 73.21px;
        }
        .scroll-btn-arrow{
            width: 22px;
            height: 22.35px;
        }
  }
  @media (max-width:600px){
    .hero-top-img::after{
        font-size: 25px;
        height: 43px;
      }
    .scroll-btn{
        width: 60px;
    }
    .scroll-btn-arrow{
        width: 16px;
        height: 17px;
    }
  }


/* hero Key visual */

.kv{
    /* width: 1010px;
    height: 568.26px; */
    /* height: 568.26px; */
    height: 100%;
    object-fit: cover;
}

.hero-carousel{
    gap:4px ;
    height: 568.26px;
    overflow-x: hidden;
    overflow-y: hidden;
}
.kv1{
    grid-column: 1;
}
.kv2{
    grid-column: 2;
}
.kv3{
    grid-column: 3;
}

/* company name */
.company-name{
    font-size: 2.4125rem; /* 38.6 px */
    letter-spacing: -0.77px;
}

.company-name h3{
    grid-column: 2/3;
    justify-self: end;
    font-family: var(--ff-trade-gothic);
}

/* ------------------- */
/*       about         */
/* ------------------- */

#about{
    height: 100%;
    
    color: black;
}
.about-container{
    background-color: #F0F5F5;
    /* border:1px solid black; */
    height: 100%;
    /* width: 110%; */
    overflow-y: hidden;
    border-radius:40% ;
}

/* about top styles */
.about-top{
    /* border: 1px solid red; */
    margin-top: 3rem;
    height: 347px;
    grid-column: 2/3;
    display: flex;
}

/* top right */
.about-top_left{
    /* border: 1px solid green; */
    display: grid;
    place-items: center;
    letter-spacing: 0px;
}
.about-top-title_eng{
    color: #FFFFFF;
    font-size: 130px;
    white-space: nowrap; 
    z-index: 2;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
}

.about-top-title_jp{
    z-index: 3;
    position: absolute;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0px;
    font-size: 30px;
}
.about-top_right p{
    font-size: 22px;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
}
.about-top_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 370px;
}

/* about center */
.about-center{
    grid-column: 2/3;
    margin-top: 155px;
    display: grid;
    place-items: center;
}


.about-us-list{
    width: 660px;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
}

.about-us-list-item{
    width: 200px;
    aspect-ratio: 1;
    border-radius: 50%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 50%;
    top:50%;
    margin: -100px;

}

.deg25{
    transform: rotate(25deg) translate(330px) rotate(-25deg);
}


.deg65 {
    transform: rotate(65deg) translateX(330px) rotate(-65deg);
}

.deg115 {
    transform: rotate(115deg) translateX(330px) rotate(-115deg);
}

.deg155 {
    transform: rotate(155deg) translateX(330px) rotate(-155deg);
}

.deg205 {
    transform: rotate(205deg) translateX(330px) rotate(-205deg);
}

.deg245 {
    transform: rotate(245deg) translateX(330px) rotate(-245deg);
}

.deg295 {
    transform: rotate(295deg) translateX(330px) rotate(-295deg);
}

.deg335 {
    transform: rotate(335deg) translateX(330px) rotate(-335deg);
}
.center{
    border: none;
    font-size: 46px;
    width: 660px;
    aspect-ratio: 1;
    margin: -330px;
    letter-spacing: 0px;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    background-color: #FFFFFF;
 }
 .center p{
    width: 368px;
    height: 277px;
 }

 .sub-item{
    font-size: 24px;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;

 }

/* ------------------- */
/*       service        */
/* ------------------- */

/* ------------------- */
/*       topics         */
/* ------------------- */

/* ------------------- */
/*       company       */
/* ------------------- */

/* ------------------- */
/*       contact       */
/* ------------------- */

/* ------------------- */
/*       footer        */
/* ------------------- */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n/* ------------------- */\n/* Variables           */\n/* ------------------- */\n:root{\n    --main-color:#000000;\n\n    /* fonts */\n\n    --ff-trade-gothic:trade-gothic-next-compressed, sans-serif;\n  \n    \n    /* font weights */\n\n    --fw-nav:400;\n\n    /* hamburger menu vaiables */\n\n    --bar-width:30px;\n    --bar-height:1.17px;\n    --bar-gap:11.24px;\n    --foreground:#606060;\n    --background:#FFFFFF;\n    --animation-timing:350ms ease-in-out;\n    --hamburger-height: calc(var(--bar-height) * 3  + var(--bar-gap) * 2);\n\n\n}\n\n\n/* ------------------- */\n/* CSS - Reset               */\n/* ------------------- */\n\n/* Box sizing */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reset margins */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nfigure,\npicture {\n    margin: 0;\n}\n\n/* set up the body */\nbody {\n    line-height: 1.5;\n    min-height: 100dvh;\n    overflow-x: hidden;\n    position: relative;\n    color: var(--main-color);\n    margin: 0;\n    padding: 0;\n}\n\n/* make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* make form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* remove animations for people who've turned them off */\n@media (prefers-reduced-motion: reduce) {  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* ------------------- */\n/*       UTILITY CLASSES          */\n/* ------------------- */\n.main-grid{\n    display: grid;\n    grid-template-columns: 1fr 70% 1fr;\n    justify-items: center;\n}\n@media (max-width:600px){\n    .main-grid{\n        display: grid;\n        grid-template-columns: 1fr 85% 1fr;\n    } \n}\n\n\n/* ------------------- */\n/*       Nav           */\n/* ------------------- */\nbody{\n    /* border: 5px solid green; */\n    /* background-color: red; */\n}\n#nav{\n    /* border: 1px solid red; */\n    display: flex;\n    \n    justify-content: center;\n    align-items: center;\n    margin-left: 61.93px;\n    margin-top: 34.38px;\n    position: relative;\n}\n.primary-nav-svg{\n    width: 8.8791px;\n    height: 9.0395px;\n    \n}\n\n.logo{\n    position: absolute;\n    top:4px;\n    left: 0;\n    width: 196.19px;\n    height: 57.6px;\n    /* border: 1px soild green; */\n}\n.nav-links{\n    text-decoration: none;\n    color: var(--main-color);\n    font-style: normal;\n    font-family: var(--ff-trade-gothic);\n    font-weight: var(--fw-nav);\n    font-size: 1.25rem;\n}\n\n.primary-nav{\n    display: flex;\n    gap: 2.6875rem;\n    height: 100%;\n    /* border: 1px solid black; */\n    padding: 0;\n}\n\n.primary-nav-item{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5938rem;\n    height: 100%;\n    /* border: 1px solid blue; */\n}\n\n.primary-nav-item:hover{\n    cursor: pointer;\n}\n\n\n.hamburger-menu{\n    display: none;\n}\n\n/* tablet and mobile  */\n@media (max-width:950px){\n    .primary-nav-wrapper{\n        background-color: white;\n        position: fixed;\n        top: 0;\n        right: 0;\n        height: 100%;\n        width: 100%;\n        transition: transform var(--animation-timing);\n        transform: translateX(100%);\n        z-index: 4;\n    }\n\n    .primary-nav{\n        flex-direction: column;\n        gap: 1rem;\n        align-items: flex-start;\n        padding-left: 1rem;\n    }\n\n    .nav-links{\n        font-size: 2rem;\n    }\n    .primary-nav-svg{\n        width: 16px;\n        height: 18px;\n    }\n \n    .logo{\n        position: static;\n    }\n    #nav{\n        justify-content: space-between;\n        margin-left: 20px;\n        margin-right: 20px;\n        margin-top: 9.57px;\n    }\n    .hamburger-menu{\n        --x-width:calc(var(--hamburger-height) * 1.41421356237); /* the length of the bar when its an X (hamburger menu height  * squareroot of 2) */\n        display: flex;\n        flex-direction: column;\n        gap: var(--bar-gap);\n        width: max-content;\n        z-index: 5;\n        cursor: pointer;\n    }\n\n    .hamburger-menu::before,\n    .hamburger-menu::after,\n    .hamburger-menu input{\n        content: \"\";\n        width: var(--bar-width);\n        height: var(--bar-height);\n        background-color: var(--foreground);\n        border-radius: 9999px;\n        transform-origin: left center;\n        transition: opacity var(--animation-timing), width var(--animation-timing),translate var(--animation-timing),rotate var(--animation-timing);\n       \n    }\n    \n    .hamburger-menu input{\n        appearance: none;\n        padding: 0;\n        margin: 0;\n        outline: none;\n        pointer-events: none;\n    }\n\n    .hamburger-menu:has(input:checked)::before{\n        rotate: 45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height) / -2);\n       \n    }\n\n    .hamburger-menu:has(input:checked)::after{\n        rotate: -45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height)/2);\n        \n    }\n    .hamburger-menu input:checked{\n        opacity: 0;\n        width: 0;\n    }\n\n    .hamburger-menu:has(input:checked) + .primary-nav-wrapper{\n        transform: translateX(0);\n    }\n}\n\n/* mobile */\n@media (max-width:600px){\n    .logo{\n        width: 160px;\n        height: 46.97px;\n    }\n    #nav{\n        gap: 120px;\n        margin-left: 20px;\n        margin-top: 9.57px;\n    }\n}\n\n/* ------------------- */\n/*       hero          */\n/* ------------------- */\n\n/* hero top */\n.hero-top-container{\n/* border: 1px solid black; */\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\n/* gap: 557.5px; */\nmargin-top: 70px;\nmargin-left: 240px;\nmargin-right: 85px;\nmargin-bottom: 69px;\n}\n/* scroll to contact btn */\n.scroll-btn{\n    position: relative;\n    /* border: 1px solid green; */\n    width: 122.02px;\n    /* height: 122.05px; */\n    aspect-ratio: 1;\n    display: grid;\n    place-items: center;\n}\n.scroll-btn-arrow{\n    width: 37px;\n    height: 37px;\n    /* position: absolute;\n    top: 41.17px;\n    left: 42.68px; */\n    z-index: 2;\n}\n\n.rotate-text{\n    position: absolute;\n    inset: 0;\n    animation-name: rotate-circle;\n    animation-duration: 10s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n}\n\n@keyframes rotate-circle {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n\n  /* hero top image styles */\n  .hero-top-img{\n    /* border: 1px solid red; */\n    width: 435px;\n    height: 71px;\n    position: relative;\n  }\n  .hero-top-img::after{\n    content: \"The future is full of likes.\";\n    text-align: left;\n    letter-spacing: 2.95px;\n    color: #F0F5F5;\n    opacity: 1;\n    font-size: 73.79px;\n    width: max-content;\n    height: 90px;\n    /* white-space: nowrap; */\n    z-index: -1;\n    position: absolute;\n    top: 26px;\n   \n  }\n  @media (max-width:950px){\n    .hero-top-img{\n        /* border: 1px solid red; */\n        width: 207.54px;\n        height: 33.84px;\n        \n      }\n      .hero-top-img::after{\n        font-size: 35.17px;\n        height: 43px;\n        letter-spacing: 1.41px;\n      }\n      .hero-top-container{\n        margin-top: 0px;\n        margin-left: 19.97px;\n        margin-right: 18.39px;\n        }\n        .scroll-btn{\n            width: 73.21px;\n        }\n        .scroll-btn-arrow{\n            width: 22px;\n            height: 22.35px;\n        }\n  }\n  @media (max-width:600px){\n    .hero-top-img::after{\n        font-size: 25px;\n        height: 43px;\n      }\n    .scroll-btn{\n        width: 60px;\n    }\n    .scroll-btn-arrow{\n        width: 16px;\n        height: 17px;\n    }\n  }\n\n\n/* hero Key visual */\n\n.kv{\n    /* width: 1010px;\n    height: 568.26px; */\n    /* height: 568.26px; */\n    height: 100%;\n    object-fit: cover;\n}\n\n.hero-carousel{\n    gap:4px ;\n    height: 568.26px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n.kv1{\n    grid-column: 1;\n}\n.kv2{\n    grid-column: 2;\n}\n.kv3{\n    grid-column: 3;\n}\n\n/* company name */\n.company-name{\n    font-size: 2.4125rem; /* 38.6 px */\n    letter-spacing: -0.77px;\n}\n\n.company-name h3{\n    grid-column: 2/3;\n    justify-self: end;\n    font-family: var(--ff-trade-gothic);\n}\n\n/* ------------------- */\n/*       about         */\n/* ------------------- */\n\n#about{\n    height: 100%;\n    \n    color: black;\n}\n.about-container{\n    background-color: #F0F5F5;\n    /* border:1px solid black; */\n    height: 100%;\n    /* width: 110%; */\n    overflow-y: hidden;\n    border-radius:40% ;\n}\n\n/* about top styles */\n.about-top{\n    /* border: 1px solid red; */\n    margin-top: 3rem;\n    height: 347px;\n    grid-column: 2/3;\n    display: flex;\n}\n\n/* top right */\n.about-top_left{\n    /* border: 1px solid green; */\n    display: grid;\n    place-items: center;\n    letter-spacing: 0px;\n}\n.about-top-title_eng{\n    color: #FFFFFF;\n    font-size: 130px;\n    white-space: nowrap; \n    z-index: 2;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n}\n\n.about-top-title_jp{\n    z-index: 3;\n    position: absolute;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    letter-spacing: 0px;\n    font-size: 30px;\n}\n.about-top_right p{\n    font-size: 22px;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n}\n.about-top_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 370px;\n}\n\n/* about center */\n.about-center{\n    grid-column: 2/3;\n    margin-top: 155px;\n    display: grid;\n    place-items: center;\n}\n\n\n.about-us-list{\n    width: 660px;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    position: relative;\n}\n\n.about-us-list-item{\n    width: 200px;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    /* border: 1px solid red; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    top:50%;\n    margin: -100px;\n\n}\n\n.deg25{\n    transform: rotate(25deg) translate(330px) rotate(-25deg);\n}\n\n\n.deg65 {\n    transform: rotate(65deg) translateX(330px) rotate(-65deg);\n}\n\n.deg115 {\n    transform: rotate(115deg) translateX(330px) rotate(-115deg);\n}\n\n.deg155 {\n    transform: rotate(155deg) translateX(330px) rotate(-155deg);\n}\n\n.deg205 {\n    transform: rotate(205deg) translateX(330px) rotate(-205deg);\n}\n\n.deg245 {\n    transform: rotate(245deg) translateX(330px) rotate(-245deg);\n}\n\n.deg295 {\n    transform: rotate(295deg) translateX(330px) rotate(-295deg);\n}\n\n.deg335 {\n    transform: rotate(335deg) translateX(330px) rotate(-335deg);\n}\n.center{\n    border: none;\n    font-size: 46px;\n    width: 660px;\n    aspect-ratio: 1;\n    margin: -330px;\n    letter-spacing: 0px;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    background-color: #FFFFFF;\n }\n .center p{\n    width: 368px;\n    height: 277px;\n }\n\n .sub-item{\n    font-size: 24px;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    background-image: url(./assets/images/transparentBkg/transparentBkg2x.png);\n    background-size: cover;\n\n }\n\n/* ------------------- */\n/*       service        */\n/* ------------------- */\n\n/* ------------------- */\n/*       topics         */\n/* ------------------- */\n\n/* ------------------- */\n/*       company       */\n/* ------------------- */\n\n/* ------------------- */\n/*       contact       */\n/* ------------------- */\n\n/* ------------------- */\n/*       footer        */\n/* ------------------- */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/transparentBkg/transparentBkg2x.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/transparentBkg/transparentBkg2x.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "transparentBkg2x.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// import Icon from './kv_01-min.jpg';


})();

/******/ })()
;
//# sourceMappingURL=mainbb417f70be879dd9ceca.js.map