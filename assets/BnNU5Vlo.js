import{_ as re,o as R,c as ve,e as _e,f as ye,g as Q,n as pe,h as be,w as ie,r as ae,m as oe,i as Ie,a as N,P as Be,j as Ee,k as Me,l as A,p as le,q as Ae,s as Pe,v as He,x as Le,y as we,z as Re,A as De,B as Ue,C as ge,D as de,E as ue,t as Fe,F as Ge,G as Ve,H as ce,b as ke,d as fe,I as Ke}from"./BD0kkN5t.js";import We from"./C2nzqkSA.js";import{_ as Ye}from"./Dz2ceQa7.js";const xe=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Se(e,c){c?c={...xe,...c}:c=xe;const o=ze(c);return o.dispatch(e),o.toString()}const Je=Object.freeze(["prototype","__proto__","constructor"]);function ze(e){let c="",o=new Map;const a=t=>{c+=t};return{toString(){return c},getContext(){return o},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const r=Object.prototype.toString.call(t);let n="";const b=r.length;b<10?n="unknown:["+r+"]":n=r.slice(8,b-1),n=n.toLowerCase();let v=null;if((v=o.get(t))===void 0)o.set(t,o.size);else return this.dispatch("[CIRCULAR:"+v+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return a("buffer:"),a(t.toString("utf8"));if(n!=="object"&&n!=="function"&&n!=="asyncfunction")this[n]?this[n](t):e.ignoreUnknown||this.unkown(t,n);else{let s=Object.keys(t);e.unorderedObjects&&(s=s.sort());let p=[];e.respectType!==!1&&!Oe(t)&&(p=Je),e.excludeKeys&&(s=s.filter(d=>!e.excludeKeys(d)),p=p.filter(d=>!e.excludeKeys(d))),a("object:"+(s.length+p.length)+":");const l=d=>{this.dispatch(d),a(":"),e.excludeValues||this.dispatch(t[d]),a(",")};for(const d of s)l(d);for(const d of p)l(d)}},array(t,r){if(r=r===void 0?e.unorderedArrays!==!1:r,a("array:"+t.length+":"),!r||t.length<=1){for(const v of t)this.dispatch(v);return}const n=new Map,b=t.map(v=>{const s=ze(e);s.dispatch(v);for(const[p,l]of s.getContext())n.set(p,l);return s.toString()});return o=n,b.sort(),this.array(b,!1)},date(t){return a("date:"+t.toJSON())},symbol(t){return a("symbol:"+t.toString())},unkown(t,r){if(a(r),!!t&&(a(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return a("error:"+t.toString())},boolean(t){return a("bool:"+t)},string(t){a("string:"+t.length+":"),a(t)},function(t){a("fn:"),Oe(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return a("number:"+t)},xml(t){return a("xml:"+t.toString())},null(){return a("Null")},undefined(){return a("Undefined")},regexp(t){return a("regex:"+t.toString())},uint8array(t){return a("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return a("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return a("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return a("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return a("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return a("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return a("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return a("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return a("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return a("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return a("url:"+t.toString())},map(t){a("map:");const r=[...t];return this.array(r,e.unorderedSets!==!1)},set(t){a("set:");const r=[...t];return this.array(r,e.unorderedSets!==!1)},file(t){return a("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return a("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return a("domwindow")},bigint(t){return a("bigint:"+t.toString())},process(){return a("process")},timer(){return a("timer")},pipe(){return a("pipe")},tcp(){return a("tcp")},udp(){return a("udp")},tty(){return a("tty")},statwatcher(){return a("statwatcher")},securecontext(){return a("securecontext")},connection(){return a("connection")},zlib(){return a("zlib")},context(){return a("context")},nodescript(){return a("nodescript")},httpparser(){return a("httpparser")},dataview(){return a("dataview")},signal(){return a("signal")},fsevent(){return a("fsevent")},tlswrap(){return a("tlswrap")}}}const Ce="[native code] }",Qe=Ce.length;function Oe(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Qe)===Ce}function Xe(e,c,o={}){return e===c||Se(e,o)===Se(c,o)}const me={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},Ze=e=>Object.keys(me).reduce((o,a)=>(e[a]!==void 0&&(o[a]=e[a]),o),{}),et={};function tt(e,c){return R(),ve("section",null,c[0]||(c[0]=[_e('<div class="container" data-v-6ba3a419><div class="content" data-v-6ba3a419><div class="heart-rate" data-v-6ba3a419><svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 300 73" enable-background="new 0 0 300 73" xml:space="preserve" data-v-6ba3a419><polyline fill="none" stroke="#C53030" stroke-width="0.5" stroke-miterlimit="10" points="0,45.486 100,45.486 120,33.324 140,45.486 160,45.486 170,55.622 185,9 200,63.729 210,45.486 300,45.486" data-v-6ba3a419></polyline></svg><div class="fade-in" data-v-6ba3a419></div><div class="fade-out" data-v-6ba3a419></div></div></div></div>',1)]))}const at=re(et,[["render",tt],["__scopeId","data-v-6ba3a419"]]),rt=ye({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function nt(e,c,o,a,t,r){const n=We;return R(),Q(n,pe(be(e.$props)),null,16)}const $e=re(rt,[["render",nt]]),ot=ye({inheritAttrs:!1,props:{...me,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function c(o,a,{isActive:t,isExactActive:r}){return e.exactQuery&&!Xe(o.query,a.query)||e.exactHash&&o.hash!==a.hash?e.inactiveClass:e.exact&&r||!e.exact&&t?e.activeClass:e.inactiveClass}return{resolveLinkClass:c}}}),it=["href","aria-disabled","role","rel","target","tabindex","onClick"];function st(e,c,o,a,t,r){const n=Ye;return e.to?(R(),Q(n,oe({key:1},e.$props,{custom:""}),{default:ie(({route:b,href:v,target:s,rel:p,navigate:l,isActive:d,isExactActive:g,isExternal:m})=>[N("a",oe(e.$attrs,{href:e.disabled?void 0:v,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:p,target:s,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(b,e._.provides[Be]||e.$route,{isActive:d,isExactActive:g}),tabindex:e.disabled?-1:void 0,onClick:x=>!m&&!e.disabled&&l(x)}),[ae(e.$slots,"default",pe(be({isActive:e.active!==void 0?e.active:e.exact?g:d})))],16,it)]),_:3},16)):(R(),Q(Ie(e.as),oe({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:ie(()=>[ae(e.$slots,"default",pe(be({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const qe=re(ot,[["render",st]]),lt=(e,c,o,a,t=!1)=>{const r=Ee(),n=Me(),b=A(()=>{var d;const s=le(c),p=le(o),l=le(a);return Ae((s==null?void 0:s.strategy)||((d=n.ui)==null?void 0:d.strategy),l?{wrapper:l}:{},s||{},t?Pe(n.ui,e,{}):{},p||{})}),v=A(()=>He(r,["class"]));return{ui:b,attrs:v}};function dt({ui:e,props:c}){const o=Ue();if(Le("ButtonGroupContextConsumer",!0),we("ButtonGroupContextConsumer",!1))return{size:A(()=>c.size),rounded:A(()=>e.value.rounded)};let t=o.parent,r;for(;t&&!r;){if(t.type.name==="ButtonGroup"){r=we(`group-${t.uid}`);break}t=t.parent}const n=A(()=>r==null?void 0:r.value.children.indexOf(o));return Re(()=>{r==null||r.value.register(o)}),De(()=>{r==null||r.value.unregister(o)}),{size:A(()=>r!=null&&r.value?(r==null?void 0:r.value.size)??e.value.default.size:c.size),rounded:A(()=>!r||n.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:n.value===0?r.value.rounded.start:n.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const ut={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},Ne={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},je={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid",empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...Ne,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...je,option:{...je.option},arrow:{...Ne}});const L=Ae(ge.ui.strategy,ge.ui.button,ut),ct=ye({components:{UIcon:$e,ULink:qe},inheritAttrs:!1,props:{...me,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>L.default.size,validator(e){return Object.keys(L.size).includes(e)}},color:{type:String,default:()=>L.default.color,validator(e){return[...ge.ui.colors,...Object.keys(L.color)].includes(e)}},variant:{type:String,default:()=>L.default.variant,validator(e){return[...Object.keys(L.variant),...Object.values(L.color).flatMap(c=>Object.keys(c))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>L.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:c}){const{ui:o,attrs:a}=lt("button",Ge(e,"ui"),L),{size:t,rounded:r}=dt({ui:o,props:e}),n=A(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),b=A(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),v=A(()=>e.square||!c.default&&!e.label),s=A(()=>{var j,P;const x=((P=(j=o.value.color)==null?void 0:j[e.color])==null?void 0:P[e.variant])||o.value.variant[e.variant];return Ve(ce(o.value.base,o.value.font,r.value,o.value.size[t.value],o.value.gap[t.value],e.padded&&o.value[v.value?"square":"padding"][t.value],x==null?void 0:x.replaceAll("{color}",e.color),e.block?o.value.block:o.value.inline),e.class)}),p=A(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),l=A(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),d=A(()=>ce(o.value.icon.base,o.value.icon.size[t.value],e.loading&&o.value.icon.loading)),g=A(()=>ce(o.value.icon.base,o.value.icon.size[t.value],e.loading&&!n.value&&o.value.icon.loading)),m=A(()=>Ze(e));return{ui:o,attrs:a,isLeading:n,isTrailing:b,isSquare:v,buttonClass:s,leadingIconName:p,trailingIconName:l,leadingIconClass:d,trailingIconClass:g,linkProps:m}}});function ft(e,c,o,a,t,r){const n=$e,b=qe;return R(),Q(b,oe({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:ie(()=>[ae(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(R(),Q(n,{key:0,name:e.leadingIconName,class:de(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):ue("",!0)]),ae(e.$slots,"default",{},()=>[e.label?(R(),ve("span",{key:0,class:de([e.truncate?e.ui.truncate:""])},Fe(e.label),3)):ue("",!0)]),ae(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(R(),Q(n,{key:0,name:e.trailingIconName,class:de(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):ue("",!0)])]),_:3},16,["type","disabled","class"])}const pt=re(ct,[["render",ft]]);var bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Te={exports:{}};(function(e,c){(function(o,a){e.exports=a()})(bt,function(){return function(o){function a(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return o[r].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}var t={};return a.m=o,a.c=t,a.p="dist/",a(0)}([function(o,a,t){function r(f){return f&&f.__esModule?f:{default:f}}var n=Object.assign||function(f){for(var _=1;_<arguments.length;_++){var I=arguments[_];for(var U in I)Object.prototype.hasOwnProperty.call(I,U)&&(f[U]=I[U])}return f},b=t(1),v=(r(b),t(6)),s=r(v),p=t(7),l=r(p),d=t(8),g=r(d),m=t(9),x=r(m),j=t(10),P=r(j),X=t(11),Z=r(X),ee=t(14),Y=r(ee),C=[],J=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},T=function(){var f=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(f&&(J=!0),J)return C=(0,Z.default)(C,w),(0,P.default)(C,w.once),C},D=function(){C=(0,Y.default)(),T()},u=function(){C.forEach(function(f,_){f.node.removeAttribute("data-aos"),f.node.removeAttribute("data-aos-easing"),f.node.removeAttribute("data-aos-duration"),f.node.removeAttribute("data-aos-delay")})},i=function(f){return f===!0||f==="mobile"&&x.default.mobile()||f==="phone"&&x.default.phone()||f==="tablet"&&x.default.tablet()||typeof f=="function"&&f()===!0},y=function(f){w=n(w,f),C=(0,Y.default)();var _=document.all&&!window.atob;return i(w.disable)||_?u():(w.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?T(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){T(!0)}):document.addEventListener(w.startEvent,function(){T(!0)}),window.addEventListener("resize",(0,l.default)(T,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(T,w.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,P.default)(C,w.once)},w.throttleDelay)),w.disableMutationObserver||g.default.ready("[data-aos]",D),C)};o.exports={init:y,refresh:T,refreshHard:D}},function(o,a){},,,,,function(o,a){(function(t){function r(i,y,f){function _(h){var z=q,V=E;return q=E=void 0,F=h,O=i.apply(V,z)}function I(h){return F=h,S=setTimeout(W,y),G?_(h):O}function U(h){var z=h-$,V=h-F,he=y-z;return H?D(he,M-V):he}function K(h){var z=h-$,V=h-F;return $===void 0||z>=y||z<0||H&&V>=M}function W(){var h=u();return K(h)?ne(h):void(S=setTimeout(W,U(h)))}function ne(h){return S=void 0,k&&q?_(h):(q=E=void 0,O)}function se(){S!==void 0&&clearTimeout(S),F=0,q=$=E=S=void 0}function te(){return S===void 0?O:ne(u())}function B(){var h=u(),z=K(h);if(q=arguments,E=this,$=h,z){if(S===void 0)return I($);if(H)return S=setTimeout(W,y),_($)}return S===void 0&&(S=setTimeout(W,y)),O}var q,E,M,O,S,$,F=0,G=!1,H=!1,k=!0;if(typeof i!="function")throw new TypeError(d);return y=p(y)||0,b(f)&&(G=!!f.leading,H="maxWait"in f,M=H?T(p(f.maxWait)||0,y):M,k="trailing"in f?!!f.trailing:k),B.cancel=se,B.flush=te,B}function n(i,y,f){var _=!0,I=!0;if(typeof i!="function")throw new TypeError(d);return b(f)&&(_="leading"in f?!!f.leading:_,I="trailing"in f?!!f.trailing:I),r(i,y,{leading:_,maxWait:y,trailing:I})}function b(i){var y=typeof i>"u"?"undefined":l(i);return!!i&&(y=="object"||y=="function")}function v(i){return!!i&&(typeof i>"u"?"undefined":l(i))=="object"}function s(i){return(typeof i>"u"?"undefined":l(i))=="symbol"||v(i)&&w.call(i)==m}function p(i){if(typeof i=="number")return i;if(s(i))return g;if(b(i)){var y=typeof i.valueOf=="function"?i.valueOf():i;i=b(y)?y+"":y}if(typeof i!="string")return i===0?i:+i;i=i.replace(x,"");var f=P.test(i);return f||X.test(i)?Z(i.slice(2),f?2:8):j.test(i)?g:+i}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},d="Expected a function",g=NaN,m="[object Symbol]",x=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,X=/^0o[0-7]+$/i,Z=parseInt,ee=(typeof t>"u"?"undefined":l(t))=="object"&&t&&t.Object===Object&&t,Y=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,C=ee||Y||Function("return this")(),J=Object.prototype,w=J.toString,T=Math.max,D=Math.min,u=function(){return C.Date.now()};o.exports=n}).call(a,function(){return this}())},function(o,a){(function(t){function r(u,i,y){function f(k){var h=B,z=q;return B=q=void 0,$=k,M=u.apply(z,h)}function _(k){return $=k,O=setTimeout(K,i),F?f(k):M}function I(k){var h=k-S,z=k-$,V=i-h;return G?T(V,E-z):V}function U(k){var h=k-S,z=k-$;return S===void 0||h>=i||h<0||G&&z>=E}function K(){var k=D();return U(k)?W(k):void(O=setTimeout(K,I(k)))}function W(k){return O=void 0,H&&B?f(k):(B=q=void 0,M)}function ne(){O!==void 0&&clearTimeout(O),$=0,B=S=q=O=void 0}function se(){return O===void 0?M:W(D())}function te(){var k=D(),h=U(k);if(B=arguments,q=this,S=k,h){if(O===void 0)return _(S);if(G)return O=setTimeout(K,i),f(S)}return O===void 0&&(O=setTimeout(K,i)),M}var B,q,E,M,O,S,$=0,F=!1,G=!1,H=!0;if(typeof u!="function")throw new TypeError(l);return i=s(i)||0,n(y)&&(F=!!y.leading,G="maxWait"in y,E=G?w(s(y.maxWait)||0,i):E,H="trailing"in y?!!y.trailing:H),te.cancel=ne,te.flush=se,te}function n(u){var i=typeof u>"u"?"undefined":p(u);return!!u&&(i=="object"||i=="function")}function b(u){return!!u&&(typeof u>"u"?"undefined":p(u))=="object"}function v(u){return(typeof u>"u"?"undefined":p(u))=="symbol"||b(u)&&J.call(u)==g}function s(u){if(typeof u=="number")return u;if(v(u))return d;if(n(u)){var i=typeof u.valueOf=="function"?u.valueOf():u;u=n(i)?i+"":i}if(typeof u!="string")return u===0?u:+u;u=u.replace(m,"");var y=j.test(u);return y||P.test(u)?X(u.slice(2),y?2:8):x.test(u)?d:+u}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},l="Expected a function",d=NaN,g="[object Symbol]",m=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,P=/^0o[0-7]+$/i,X=parseInt,Z=(typeof t>"u"?"undefined":p(t))=="object"&&t&&t.Object===Object&&t,ee=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,Y=Z||ee||Function("return this")(),C=Object.prototype,J=C.toString,w=Math.max,T=Math.min,D=function(){return Y.Date.now()};o.exports=r}).call(a,function(){return this}())},function(o,a){function t(p){var l=void 0,d=void 0;for(l=0;l<p.length;l+=1)if(d=p[l],d.dataset&&d.dataset.aos||d.children&&t(d.children))return!0;return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!r()}function b(p,l){var d=window.document,g=r(),m=new g(v);s=l,m.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function v(p){p&&p.forEach(function(l){var d=Array.prototype.slice.call(l.addedNodes),g=Array.prototype.slice.call(l.removedNodes),m=d.concat(g);if(t(m))return s()})}Object.defineProperty(a,"__esModule",{value:!0});var s=function(){};a.default={isSupported:n,ready:b}},function(o,a){function t(d,g){if(!(d instanceof g))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function d(g,m){for(var x=0;x<m.length;x++){var j=m[x];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(g,j.key,j)}}return function(g,m,x){return m&&d(g.prototype,m),x&&d(g,x),g}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function d(){t(this,d)}return n(d,[{key:"phone",value:function(){var g=r();return!(!b.test(g)&&!v.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=r();return!(!s.test(g)&&!p.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();a.default=new l},function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var t=function(n,b,v){var s=n.node.getAttribute("data-aos-once");b>n.position?n.node.classList.add("aos-animate"):typeof s<"u"&&(s==="false"||!v&&s!=="true")&&n.node.classList.remove("aos-animate")},r=function(n,b){var v=window.pageYOffset,s=window.innerHeight;n.forEach(function(p,l){t(p,s+v,b)})};a.default=r},function(o,a,t){function r(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(12),b=r(n),v=function(s,p){return s.forEach(function(l,d){l.node.classList.add("aos-init"),l.position=(0,b.default)(l.node,p.offset)}),s};a.default=v},function(o,a,t){function r(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(13),b=r(n),v=function(s,p){var l=0,d=0,g=window.innerHeight,m={offset:s.getAttribute("data-aos-offset"),anchor:s.getAttribute("data-aos-anchor"),anchorPlacement:s.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(d=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(s=document.querySelectorAll(m.anchor)[0]),l=(0,b.default)(s).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=g/2;break;case"bottom-center":l+=g/2+s.offsetHeight;break;case"center-center":l+=g/2+s.offsetHeight/2;break;case"top-top":l+=g;break;case"bottom-top":l+=s.offsetHeight+g;break;case"center-top":l+=s.offsetHeight/2+g}return m.anchorPlacement||m.offset||isNaN(p)||(d=p),l+d};a.default=v},function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var t=function(r){for(var n=0,b=0;r&&!isNaN(r.offsetLeft)&&!isNaN(r.offsetTop);)n+=r.offsetLeft-(r.tagName!="BODY"?r.scrollLeft:0),b+=r.offsetTop-(r.tagName!="BODY"?r.scrollTop:0),r=r.offsetParent;return{top:b,left:n}};a.default=t},function(o,a){Object.defineProperty(a,"__esModule",{value:!0});var t=function(r){return r=r||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(r,function(n){return{node:n}})};a.default=t}])})})(Te);var vt=Te.exports;const yt=gt(vt),mt=""+new URL("HEART.BdgvqHub.png",import.meta.url).href,ht=""+new URL("HEARTSplash.DqM2slb7.png",import.meta.url).href;yt.init();const wt={},kt={class:"bg-black text-white font-sans relative overflow-hidden"},xt={class:"absolute inset-0 z-0"},St={class:"relative z-10"},Ot={id:"join-heart",class:"py-20 px-6 text-white text-center items-left","data-aos":"fade-right","data-aos-duration":"2000"},jt={href:"https://apps.apple.com",target:"_blank",rel:"noopener noreferrer"};function _t(e,c,o,a,t,r){const n=at,b=pt;return R(),ve(Ke,null,[c[5]||(c[5]=N("title",null,"HEART | Home",-1)),N("div",kt,[N("div",xt,[ke(n)]),N("div",St,[c[3]||(c[3]=_e('<section class="min-h-screen flex flex-col items-center justify-center" data-v-7a02e6f1><h1 class="text-2xl md:text-6xl font-bold mb-4 text-center flex items-center justify-center" data-v-7a02e6f1> Welcome to   <span class="text-red-700 flex items-center" data-v-7a02e6f1> HEART <img src="'+mt+'" alt="Heart" class="inline-block w-14 h-12 md:w-28 md:h-24" data-v-7a02e6f1></span></h1><p class="text-sm max-w-xl text-center md:text-lg" data-v-7a02e6f1> Revolutionizing fall detection and emergency response with SafeStep. </p><a href="mailto:heartservicesexpo@gmail.com" class="mt-8 px-6 py-3 bg-red-700 text-black font-semibold rounded hover:bg-opacity-80 transition" data-v-7a02e6f1> Contact Us </a></section><section id="about" class="py-20 px-6 bg-black" data-aos="fade-right" data-aos-duration="2000" data-v-7a02e6f1><h2 class="text-4xl font-bold text-center text-red-700 mb-6" data-v-7a02e6f1>About HEART</h2><p class="max-w-2xl mx-auto text-center" data-v-7a02e6f1> HEART (Health Enablment and Risk Tracking) is a mobile app designed to provide real-time fall detection and emergency alerts, connecting you with your loved ones. </p><div class="iphone-showcase mt-16 flex justify-center" data-v-7a02e6f1><div class="iphone-container animate-slide-in" data-v-7a02e6f1><div class="mockup-phone border-gray-900" data-v-7a02e6f1><div class="camera" data-v-7a02e6f1></div><div class="display" data-v-7a02e6f1><div class="artboard artboard-demo phone-1" data-v-7a02e6f1><img src="'+ht+'" data-v-7a02e6f1></div></div></div></div></div></section><section id="features" class="py-20 px-6 bg-black" data-aos="fade-right" data-aos-duration="2000" data-v-7a02e6f1><h2 class="text-4xl font-bold text-center text-red-700 mb-6" data-v-7a02e6f1>Features</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-v-7a02e6f1><div class="p-6 bg-black border border-red-700 rounded" data-v-7a02e6f1><h3 class="text-xl font-semibold text-red-700" data-v-7a02e6f1>Real-Time Alerts</h3><p data-v-7a02e6f1>Stay updated with status notifications every 15 seconds.</p></div><div class="p-6 bg-black border border-red-700 rounded" data-v-7a02e6f1><h3 class="text-xl font-semibold text-red-700" data-v-7a02e6f1>User Roles</h3><p data-v-7a02e6f1>Choose between being an <a class="text-green-500" data-v-7a02e6f1>Observer</a>—protecting the ones you love—or becoming part of <a class="text-red-700" data-v-7a02e6f1>HEART</a>, where you receive care from those who love you the most.</p></div><div class="p-6 bg-black border border-red-700 rounded" data-v-7a02e6f1><h3 class="text-xl font-semibold text-red-700" data-v-7a02e6f1>Advanced Technology</h3><p data-v-7a02e6f1>Powered by the AI model <a class="text-blue-500" data-v-7a02e6f1>SafeStep</a> for reliable fall detection.</p></div></div></section>',3)),N("section",Ot,[c[1]||(c[1]=N("h3",{class:"text-3xl font-bold mb-4"},[fe("Join "),N("a",{class:"text-red-700"},"HEART"),fe(" Today")],-1)),c[2]||(c[2]=N("p",{class:"max-w-xl mx-auto mb-6"},"The Care Your Loved Ones Need, The Peace You Deserve. Download HEART now and stay connected with those who matter most.",-1)),N("a",jt,[ke(b,{class:"inline-block bg-black border-red-700 border-2 hover:scale-105 hover:text-white hover:bg-red-500 text-white px-6 py-3 font-semibold transition",color:"black",icon:"ic:baseline-apple"},{default:ie(()=>c[0]||(c[0]=[fe(" Download on IOS ")])),_:1})])]),c[4]||(c[4]=N("footer",{class:"py-2 bg-red-700 text-center text-sm"},[N("p",null,"© 2024 HEART All rights reserved.")],-1))])])],64)}const $t=re(wt,[["render",_t],["__scopeId","data-v-7a02e6f1"]]);export{$t as default};