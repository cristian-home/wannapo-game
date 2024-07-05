import{d as v,o as a,c as r,a as t,t as p,b as V,u as F,r as n,e as E,w as I,f as l,g,h as D,T as O,n as K,i as d,j as T,Q as H,_ as z,k as J,l as N,F as U,m as W,p as R,q as w,I as A,s as G,v as S,x as j,y as X,z as q,A as ee,B as M,C as te,D as se,E as ae,G as y}from"./index-D0Ouutp9.js";const oe="/wannapo-game/assets/bottom-bear_300x300-CHS7zhxn.webp",le={xmlns:"http://www.w3.org/2000/svg",class:"fill-moon-raker stroke-moon-raker-50 stroke-[1rem]",viewBox:"0 0 424.291 312.031"},ie=V('<defs><clipPath clipPathUnits="userSpaceOnUse" id="a"><path d="M0 1920h1080V0H0Z" transform="translate(-991.01 -142.849)"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 882.039 206.038)"><path d="M-352.41 31.152c.637 28.87-22.947 55.567-51.648 58.58-11.891 28.627-48.565 42.674-76.536 29.38-8.961.507-15.9 16.816-27.32 19.51-30.002 15.746-70.765 2.576-85.673-27.96-8.169-11.457-1.316-31.151-20.237-29.844-30.645-10.3-47.224-48.292-33.804-77.748 10.2-25.459 39.808-40.764 66.466-34.389 16.188-17.166 44.372-20.657 64.308-8.113 22.021-30.977 68.204-40.326 100.48-20.14 15.982 8.444 25.822 24.778 34.16 39.423 18.174 10.2 30.014 30.431 29.803 51.301z"></path></g><text x="50%" y="35%" class="fill-moon-raker-50 stroke-moon-raker" dominant-baseline="middle" text-anchor="middle" font-size="5rem" stroke-width=".1rem"> Pares </text>',3),ne={x:"50%",y:"60%","alignment-baseline":"baseline",class:"fill-moon-raker-50 stroke-moon-raker","dominant-baseline":"middle","text-anchor":"middle","font-size":"5rem","stroke-width":".1rem"},re={class:"fill-moon-raker-600"},ce={class:"fill-moon-raker-50"},de=v({__name:"PairCounter",props:{pairCount:{},maxPairs:{}},setup(u){const e=u;return(o,f)=>(a(),r("svg",le,[ie,t("text",ne,[t("tspan",re,p(o.pairCount),1),t("tspan",ce,"/"+p(e.maxPairs),1)])]))}}),ue=["src"],fe=v({__name:"GameTile",props:{tile:{}},setup(u){const e=u,o=F(),f=n(null),m=n(null),s=n(null),c=E(()=>e.tile.isRevealed||!o.gameStarted);return I(()=>e.tile.isMatched,i=>{if(i){const{variant:x}=T(f,{initial:{scale:1},enter:{scale:1.2,transition:{type:"spring",stiffness:350,damping:20,onComplete:()=>{x.value="default"}}},default:{scale:1,transition:{type:"spring",stiffness:350,damping:20}}})}}),(i,x)=>(a(),r("div",{class:"group",ref_key:"tileRef",ref:f},[t("button",{class:K(["active:!scale-90 duration-75 !transition-transform cursor-pointer w-20 h-20 xs:w-24 xs:h-24 group-even:bg-endeavour-600 group-odd:bg-seagull text-seagull-50 rounded-md overflow-hidden outline outline-[6px] outline-seagull-50 shadow-[0px_5px_10px_8px_rgba(0,_51,_101,_0.75)]",{"outline-seagull-600":!e.tile.isMatched&&e.tile.isRevealed,"!outline-red-400":!e.tile.isMatched&&e.tile.isRevealed&&d(o).getTilesRevealedCount>1}])},[l(O,{name:"fade",mode:"out-in"},{default:g(()=>[c.value?(a(),r("img",{key:1,src:e.tile.image,class:"w-full h-full",ref_key:"image",ref:m},null,8,ue)):(a(),D(H,{key:0,class:"m-6 fill-seagull-50",ref_key:"qLogoRef",ref:s},null,512))]),_:1})],2)],512))}}),pe=z(fe,[["__scopeId","data-v-5e636a91"]]),me={class:"w-full h-full max-w-[40rem] max-h-[30rem] xs:max-h-[35rem] sm:max-h-[38rem] md:max-h-[40rem] p-1 xs:p-4 sm:p-4 md:p-12"},he=v({__name:"GameBoard",setup(u){const e=F(),o=n(null);return J(()=>{}),(f,m)=>{const s=N("motion");return a(),r("div",me,[t("div",{class:"w-full h-full grid grid-cols-3 md:grid-cols-4 grid-rows-4 md:grid-rows-3 justify-items-center place-items-center gap-1 xs:gap-2 sm:gap-4 md:gap-12",ref_key:"boardElement",ref:o},[(a(!0),r(U,null,W(d(e).tiles,(c,i)=>R((a(),D(pe,{key:c.id,tile:c,onClick:x=>d(e).revealTile(c.id),initial:{y:100,opacity:0},enter:{y:0,opacity:1,transition:{type:"spring",stiffness:350,damping:20,delay:i*100}}},null,8,["tile","onClick","enter"])),[[s]])),128))],512)])}}}),_e={class:"transition h-auto text-xl shadow-md outline outline-4 outline-white bg-gradient-to-t from-seagull from-5% via-ebb-500 via-50% to-ebb-500 to-90% text-endeavour rounded-full px-4 py-2 flex flex-row gap-2 justify-center items-center"},ge=v({__name:"Badge",setup(u){return(e,o)=>(a(),r("div",_e,[w(e.$slots,"left-icon",{},()=>[l(d(A),{class:"w-4 h-4 -rotate-45 text-light-orchid"})]),w(e.$slots,"default"),w(e.$slots,"right-icon",{},()=>[l(d(A),{class:"w-4 h-4 rotate-45 text-light-orchid"})])]))}}),xe={},ve={viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--noto",preserveAspectRatio:"xMidYMid meet",fill:"#000000"},we=V('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M118 60.5l3.48 53.01a7.501 7.501 0 0 1-7.49 7.99H14.01c-4.34 0-7.77-3.67-7.49-7.99L10 60.5c3-34 24.18-54 54-54s50 24 54 54z" fill="#CBD7F5"></path><circle cx="64" cy="60.5" r="40" fill="#ffffff"></circle><circle cx="64" cy="60.5" r="40" fill="#ffffff"></circle><path d="M64 20.5c22.09 0 40 17.91 40 40s-17.91 40-40 40s-40-17.91-40-40s17.91-40 40-40m0-3c-23.71 0-43 19.29-43 43s19.29 43 43 43s43-19.29 43-43s-19.29-43-43-43z" fill="#7D6B5F"></path><g fill="none" stroke="#7D6B5F" stroke-width="3" stroke-miterlimit="10"><path d="M64 18.5v8.23"></path><path d="M64 94.27v8.23"></path><path d="M106 60.5h-8.23"></path><path d="M30.23 60.5H22"></path><path d="M64 18.5v8.23"></path><path d="M64 94.27v8.23"></path><path d="M43 24.13l4.11 7.12"></path><path d="M80.89 89.75L85 96.87"></path><g><path d="M43 24.13l4.11 7.12"></path><path d="M80.89 89.75L85 96.87"></path></g><g><path d="M27.63 39.5l7.12 4.11"></path><path d="M93.25 77.39l7.12 4.11"></path></g><g><path d="M85 24.13l-4.11 7.12"></path><path d="M47.11 89.75L43 96.87"></path></g><g><path d="M100.37 39.5l-7.12 4.11"></path><path d="M34.75 77.39l-7.12 4.11"></path></g></g><path d="M64 91.5c-7.18 0-13-5.82-13-13v-35c0-7.18 5.82-13 13-13s13 5.82 13 13v35c0 7.18-5.82 13-13 13z" fill="#DDA6CC"></path><path d="M76.88 42.67c-.55-5.58-3.31-8.85-8.11-11.41c-.5-.27-1.05-.54-1.61-.45c0 0-1.17 42.34-1.17 46.53c0 4.54-.38 9.74-5.56 11.32c-.93.28-1.93.41-2.71.98c3.56 3.1 9.27 2.63 13.12-.09C72.96 88.06 77 85.5 77 74.5" opacity=".52" fill="#7D6B5F"></path><path d="M31.58 97.55c.1.1.2.2.3.31c5.02 5.19 11.56 8.68 16.82 13.62c-2.88.99-6.05.33-8.96-.55c-10.89-3.31-21.21-10.15-26.19-20.39c-1.19-2.44-2.07-5.12-1.83-7.82c.13-1.5.73-3.13 2.1-3.78c1.19-.57 2.67-.21 3.74.56c2.62 1.88 3.91 5.96 5.84 8.55c2.49 3.35 5.28 6.48 8.18 9.5z" fill="#FEFEFF"></path><path d="M109.3 84.9c-7.63 13.26-20.53 23.52-35.33 27.52c3.37 4.12 18.9 3.22 29.97-5.1s14.84-30.31 12.47-37.07c-1.16.33-1.64 1.67-1.99 2.82c-1.24 4.13-2.97 8.1-5.12 11.83z" opacity=".5" fill="#4B71DC"></path><g><path fill="#ff4638" d="M63.5 16.5l-5-10h11z"></path></g></g>',3),ye=[we];function ke(u,e){return a(),r("svg",ve,ye)}const Ce=z(xe,[["render",ke]]),Me={key:0,class:"w-full h-full fixed top-0 left-0 z-30 flex flex-col justify-center items-center"},$e={class:"w-full h-full fixed top-0 left-0 bg-endeavour-600/50",initial:{opacity:0},enter:{opacity:1},leave:{opacity:0}},be={class:"w-full p-6"},Be={class:"text-3xl text-endeavour"},Te={class:"w-full p-6"},Re={class:"w-full p-6 flex flex-row justify-center items-center"},Se=v({__name:"ModalDialog",props:{isOpen:{type:Boolean,default:!1},title:{default:"Alerta"},message:{default:""},onConfirm:{type:Function,default:()=>{}},onCancel:{type:Function,default:()=>{}},confirmText:{default:"Aceptar"},cancelText:{default:"Cancelar"}},emits:["on:modalClose"],setup(u,{emit:e}){const o=e,f=n(null),m=()=>{o("on:modalClose")};return(s,c)=>{const i=N("motion");return s.isOpen?(a(),r("div",Me,[R(t("div",$e,null,512),[[i]]),R((a(),r("div",{ref_key:"target",ref:f,class:"flex flex-col bg-seagull-200 rounded-2xl z-40 shadow-2xl max-w-lg w-full",initial:{opacity:0,scale:0},enter:{opacity:1,scale:1,transition:{delay:500,duration:500,type:"spring"}},leave:{opacity:0}},[t("div",be,[w(s.$slots,"header",{},()=>[t("h1",Be,p(s.title),1)])]),t("div",Te,[w(s.$slots,"content",{},()=>[t("p",null,p(s.message),1)])]),t("div",Re,[w(s.$slots,"actions",{close:m},()=>[l(j,{type:"button",onClick:m},{default:g(()=>[S(p(s.cancelText),1)]),_:1}),l(j,{type:"button",onClick:c[0]||(c[0]=x=>s.onConfirm())},{default:g(()=>[S(p(s.confirmText),1)]),_:1})])])])),[[i]])])):G("",!0)}}}),je={class:"fixed z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center"},Fe={class:"text-9xl",style:{"text-shadow":"0px 5px 10px #000000c7"}},De=v({__name:"CountDown",props:{seconds:{default:10},secondsModifiers:{}},emits:["update:seconds"],setup(u){const e=X(u,"seconds"),{pause:o}=q(()=>{e.value--,e.value===0&&o()},1e3);return(f,m)=>(a(),r("div",je,[l(O,{name:"fade-zoom",mode:"out-in"},{default:g(()=>[e.value?(a(),r("div",{key:e.value,class:"text-seagull-50"},[t("span",Fe,p(e.value),1)])):G("",!0)]),_:1})]))}}),ze=z(De,[["__scopeId","data-v-0671683e"]]),Ge={class:"h-20 w-full flex flex-row justify-between gap-8 p-0"},Le={class:"w-1/4 flex flex-row justify-start items-center"},Pe={class:"w-2/4 flex flex-row justify-center items-center grow"},Ae=t("div",{class:"w-1/4 flex flex-row justify-end items-center"},[t("img",{src:se,class:"max-h-full max-w-full"})],-1),Ve={class:"w-2/3 flex flex-row justify-start items-center"},Ee={class:"flex-col"},Ie={class:"text-sm"},Oe={class:"text-sm"},He=t("div",{class:"w-1/3 flex flex-row justify-end items-center self-end"},[t("img",{src:oe,class:"max-h-full max-w-full w-36"})],-1),Ne=v({__name:"GameView",setup(u){const e=F(),o=ae(),f=n(null),m=n(null),s=n(null),c=[f,m,s],i=n(!1),x=n(""),L=n(""),$=n(e.startGameCountDown.valueOf()),{count:k,dec:Q}=ee(e.getTimelimit),b=E(()=>e.getAttempts),{pause:P,resume:Y}=q(()=>{Q()},1e3);P(),M(async()=>{await y($).toBe(0),e.startGame(),Y()}),M(async()=>{await y(b).toBe(e.getAttemptsLimit),C({title:"Juego Terminado",text:"Se acabaron tus intentos"})}),M(async()=>{await y(b).toBe(e.getAttemptsLimit),C({title:"Juego Terminado",text:"Se acabaron tus intentos"})}),M(async()=>{await y(k).toBe(0),C({title:"Juego Terminado",text:"Se acabo el tiempo"})});const C=async(h={title:"Juego Terminado",text:"Fue un buen juego"})=>{P(),Z(),i.value=!0,x.value=h.title,L.value=h.text,await y(i).toBe(!1),o.push("/congrats")},Z=()=>{e.setCurrentGameStats({date:new Date,attempts:e.getAttempts,time:e.getTimelimit-k.value,pairsFound:e.getPairsFound})};return I(()=>e.getTilesUnmatched.length,h=>{h===0&&C({title:"Juego Terminado",text:"Felicitaciones has completado el juego"})}),te(async()=>{if(b.value<6&&k.value>0)return!1;await await Promise.all([...c.map(h=>new Promise(_=>{T(h,{initial:{y:0,opacity:1},enter:{y:100,opacity:0,transition:{type:"spring",stiffness:350,damping:20,onComplete:()=>{_(!0)}}}})}))])}),J(()=>{c.forEach((h,_)=>{T(h,{initial:{y:100,opacity:0},enter:{y:0,opacity:1,transition:{type:"spring",stiffness:350,damping:20,delay:_*150}}})})}),(h,_)=>(a(),r(U,null,[t("div",{class:"h-dvh w-full overflow-x-hidden overflow-y-hidden grid grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-center place-items-center gap-2",ref_key:"headerRef",ref:f},[t("div",Ge,[t("div",Le,[l(H,{class:"fill-endeavour max-h-full max-w-full w-20 h-20"})]),t("div",Pe,[l(de,{class:"scale-125 origin-top max-h-full grow","pair-count":d(e).getPairsFound,"max-pairs":d(e).getMaxPosiblePairs},null,8,["pair-count","max-pairs"])]),Ae]),t("div",{class:"w-full h-[0] min-h-full flex flex-col justify-center items-center",ref_key:"gameBoardRef",ref:m},[l(he)],512),t("div",{class:"h-20 w-full flex flex-row justify-between gap-2 p-0",ref_key:"footerRef",ref:s},[t("div",Ve,[l(ge,{class:"flex-row py-1 translate-x-[3rem]"},{"left-icon":g(()=>[l(Ce,{class:"w-8 h-8 scale-[3] origin-right"})]),default:g(()=>[t("div",Ee,[t("div",Ie,p(d(k))+" segundos",1),t("div",Oe," Intentos "+p(d(e).attempts)+" / "+p(d(e).getAttemptsLimit),1)])]),_:1})]),He],512)],512),d(e).gameStarted?G("",!0):(a(),D(ze,{key:0,seconds:$.value,"onUpdate:seconds":_[0]||(_[0]=B=>$.value=B)},null,8,["seconds"])),l(Se,{"is-open":i.value,title:x.value,message:L.value,"onOn:modalClose":_[1]||(_[1]=()=>i.value=!1)},{actions:g(({close:B})=>[l(j,{type:"button",onClick:B},{default:g(()=>[S("Aceptar")]),_:2},1032,["onClick"])]),_:1},8,["is-open","title","message"])],64))}});export{Ne as default};
