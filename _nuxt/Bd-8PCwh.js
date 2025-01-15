import{a as h,f as B,E as A,b as V,u as D,g as G,w as U}from"./DTACKei_.js";import{d as E,K as _,L as j,M as z,r as g,i as w,z as K,w as I,g as R,B as u,P as x,A as N,O as L,C,V as Y,o as q,b as H,N as J}from"./DId4ceiX.js";const[Q,W]=L("RovingFocusGroup"),ee=E({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},preventScrollOnEntryFocus:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(y,{expose:l,emit:a}){const s=y,m=a,{loop:F,orientation:v,dir:T}=_(s),b=j(T),f=z(s,"currentTabStopId",m,{defaultValue:s.defaultCurrentTabStopId,passive:s.currentTabStopId===void 0}),d=g(!1),e=g(!1),t=g(0),{getItems:o,CollectionSlot:r}=h({isProvider:!0});function O(n){const c=!e.value;if(n.currentTarget&&n.target===n.currentTarget&&c&&!d.value){const p=new CustomEvent(A,V);if(n.currentTarget.dispatchEvent(p),m("entryFocus",p),!p.defaultPrevented){const S=o().map(i=>i.ref).filter(i=>i.dataset.disabled!==""),M=S.find(i=>i.getAttribute("data-active")==="true"),P=S.find(i=>i.id===f.value),$=[M,P,...S].filter(Boolean);B($,s.preventScrollOnEntryFocus)}}e.value=!1}function k(){setTimeout(()=>{e.value=!1},1)}return l({getItems:o}),W({loop:F,dir:b,orientation:v,currentTabStopId:f,onItemFocus:n=>{f.value=n},onItemShiftTab:()=>{d.value=!0},onFocusableItemAdd:()=>{t.value++},onFocusableItemRemove:()=>{t.value--}}),(n,c)=>(w(),K(u(r),null,{default:I(()=>[R(u(x),{tabindex:d.value||t.value===0?-1:0,"data-orientation":u(v),as:n.as,"as-child":n.asChild,dir:u(b),style:{outline:"none"},onMousedown:c[0]||(c[0]=p=>e.value=!0),onMouseup:k,onFocus:O,onBlur:c[1]||(c[1]=p=>d.value=!1)},{default:I(()=>[N(n.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),te=E({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!0},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(y){const l=y,a=Q(),s=C(()=>l.tabStopId||Y()),m=C(()=>a.currentTabStopId.value===s.value),{getItems:F,CollectionItem:v}=h(),{primitiveElement:T,currentElement:b}=D(),f=C(()=>{var e;return(e=b.value)==null?void 0:e.getRootNode()});q(()=>{l.focusable&&a.onFocusableItemAdd()}),H(()=>{l.focusable&&a.onFocusableItemRemove()});function d(e){if(e.key==="Tab"&&e.shiftKey){a.onItemShiftTab();return}if(e.target!==e.currentTarget)return;const t=G(e,a.orientation.value,a.dir.value);if(t!==void 0){if(e.metaKey||e.ctrlKey||e.altKey||!l.allowShiftKey&&e.shiftKey)return;e.preventDefault();let o=[...F().map(r=>r.ref).filter(r=>r.dataset.disabled!=="")];if(t==="last")o.reverse();else if(t==="prev"||t==="next"){t==="prev"&&o.reverse();const r=o.indexOf(e.currentTarget);o=a.loop.value?U(o,r+1):o.slice(r+1)}J(()=>B(o,!1,f.value))}}return(e,t)=>(w(),K(u(v),null,{default:I(()=>[R(u(x),{ref_key:"primitiveElement",ref:T,tabindex:m.value?0:-1,"data-orientation":u(a).orientation.value,"data-active":e.active,"data-disabled":e.focusable?void 0:"",as:e.as,"as-child":e.asChild,onMousedown:t[0]||(t[0]=o=>{e.focusable?u(a).onItemFocus(s.value):o.preventDefault()}),onFocus:t[1]||(t[1]=o=>u(a).onItemFocus(s.value)),onKeydown:d},{default:I(()=>[N(e.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}});export{ee as _,te as a};
