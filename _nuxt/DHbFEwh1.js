import{d as l,C as h,s as m,be as p,m as g,l as u,i as f,z as d,n as C,B as t,ba as b,bf as w,aw as n,a8 as _}from"./DId4ceiX.js";const I={base:""},B=_;var r,i;const L=n({extend:n(I),...((i=(r=B.uiPro)==null?void 0:r.prose)==null?void 0:i.img)||{}}),R=l({__name:"Img",props:{src:{},alt:{},width:{},height:{},class:{}},setup(o){const s=o,c=h(()=>{var a;if((a=s.src)!=null&&a.startsWith("/")&&!s.src.startsWith("//")){const e=m(p(g().app.baseURL));if(e!=="/"&&!s.src.startsWith(e))return u(e,s.src)}return s.src});return(a,e)=>(f(),d(b(t(w)),{src:c.value,alt:a.alt,width:a.width,height:a.height,class:C(t(L)({class:s.class}))},null,8,["src","alt","width","height","class"]))}}),W=Object.assign(R,{__name:"ProseImg"});export{W as default};
