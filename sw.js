if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const o=e=>i(e,l),u={module:{uri:l},exports:a,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"1cefe47617a8cdeeb4aa0dd98dcc67d9"},{url:"assets/404NotFound-CBhOV8Iu.js",revision:null},{url:"assets/AboutView-BrIsRjKj.js",revision:null},{url:"assets/bottom-bear_300x300-CHS7zhxn.webp",revision:null},{url:"assets/congrats_600x600-CTt2pAC1.webp",revision:null},{url:"assets/CongratsView-BmID559m.js",revision:null},{url:"assets/CuadrosMemoriaWinny-01_300x300-Ctgwqprh.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-03_300x300-D9BI2i7E.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-05_300x300-DAnO1huj.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-07_300x300-CLpTOk-Y.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-08_300x300-CkAVVNvU.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-09_300x300-Bu78Xn89.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-10_300x300-CZMlNJJ1.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-12_300x300-D02FlLv7.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-13_300x300-DBTX57Sf.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-15_300x300-DLTt1dfS.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-16_300x300-D8_lvjL6.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-17_300x300-CmlbDF2d.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-19_300x300-Id2Y_wSX.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-20_300x300-CiNbYlo9.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-21_300x300-VMk1iuPZ.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-23_300x300-BiK0LBAQ.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-24_300x300-ChhakXpO.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-25_300x300-BR4eUxQq.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-27_300x300-YmE0ztOe.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-29_300x300-BOafON8O.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-31_300x300-mw5W2NTe.webp",revision:null},{url:"assets/CuadrosMemoriaWinny-32_300x300-BWVCBEMz.webp",revision:null},{url:"assets/GameView-9be2XRlz.js",revision:null},{url:"assets/GameView-BOxwmBLi.css",revision:null},{url:"assets/index-BfJ40Bus.js",revision:null},{url:"assets/index-DU6syB-l.css",revision:null},{url:"assets/ResultsView-_STm2E-0.js",revision:null},{url:"assets/start_600x600-BvSiRPjU.webp",revision:null},{url:"assets/winny-logo_600x600-bbuN3YDr.webp",revision:null},{url:"favicon.ico",revision:"5ad5475a1a95e995381bf0db5004ccc6"},{url:"favicon.svg",revision:"340bbb37c6e98d87eaefa0029a506752"},{url:"index.html",revision:"f0fc41431ccc24c10ea7a959143e9851"},{url:"maskable-icon-512x512.png",revision:"77a981941f8b4f2ac55577939935c7c1"},{url:"pwa-192x192.png",revision:"116d99ada24c59980f0002defb1b8193"},{url:"pwa-512x512.png",revision:"bd0459ca45f818a115591bba1024b8c6"},{url:"pwa-64x64.png",revision:"e5b60eae9037e7fcc8ae38e2467d4b72"},{url:"registerSW.js",revision:"6314c36e3394f02261be5911971d7ab4"},{url:"pwa-64x64.png",revision:"e5b60eae9037e7fcc8ae38e2467d4b72"},{url:"pwa-192x192.png",revision:"116d99ada24c59980f0002defb1b8193"},{url:"pwa-512x512.png",revision:"bd0459ca45f818a115591bba1024b8c6"},{url:"maskable-icon-512x512.png",revision:"77a981941f8b4f2ac55577939935c7c1"},{url:"manifest.webmanifest",revision:"542d6c2190529fba53b1995e55c9a54b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));