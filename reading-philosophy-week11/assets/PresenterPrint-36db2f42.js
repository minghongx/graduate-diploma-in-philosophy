import{d,u as _,a as p,c as m,b as h,r as u,o as a,e as n,f as t,t as o,g as r,F as f,h as v,n as g,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-910e4e10.js";import{N as P}from"./NoteDisplay-ebdcc76d.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>u.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(a(),n("div",{id:"page-root",style:g(r(x))},[t("div",V,[t("div",L,[t("h1",S,o(r(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(a(!0),n(f,null,v(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(r(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/selfhosted/slidev/py3100-week11-presentation/node_modules/.pnpm/@slidev+client@0.44.0_postcss@8.4.31_vite@4.5.0/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
