"use strict";(self.webpackChunkpixel_ape_labs_docs=self.webpackChunkpixel_ape_labs_docs||[]).push([[449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,b=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,sidebar_label:"/tip"},i="Send a Tip to a Member",l={unversionedId:"Discord Bot/Slash Commands/tip",id:"Discord Bot/Slash Commands/tip",title:"Send a Tip to a Member",description:"This command will allow you to send a tip to a member without having to know their wallet address. You will be presented with both a QR code that can be scanned with your mobile wallet and a link that can be used on either mobile or desktop to send the tip with your wallet of choice.",source:"@site/docs/Discord Bot/Slash Commands/tip.md",sourceDirName:"Discord Bot/Slash Commands",slug:"/Discord Bot/Slash Commands/tip",permalink:"/Discord Bot/Slash Commands/tip",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"/tip"},sidebar:"docsSidebar",previous:{title:"/getwallet",permalink:"/Discord Bot/Slash Commands/getwallet"},next:{title:"Get Wallet",permalink:"/Discord Bot/User Commands/get-wallet"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Slash Command",id:"slash-command",level:3},{value:"Bot Response",id:"bot-response",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-a-tip-to-a-member"},"Send a Tip to a Member"),(0,a.kt)("p",null,"This command will allow you to send a tip to a member without having to know their wallet address. You will be presented with both a QR code that can be scanned with your mobile wallet and a link that can be used on either mobile or desktop to send the tip with your wallet of choice."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Default Permissions: ",(0,a.kt)("strong",{parentName:"p"},"Everyone"),(0,a.kt)("br",{parentName:"p"}),"\n","Command Type: ",(0,a.kt)("strong",{parentName:"p"},"Slash Command"))),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Member")," - The member's @ mention"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Amount")," - A number amount that you want to send"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Token")," - The name or token address of what to send (eg. SOL, UDSC, etc)")),(0,a.kt)("h2",{id:"usage-example"},"Usage Example"),(0,a.kt)("h3",{id:"slash-command"},"Slash Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/tip @Member 1 SOL\n")),(0,a.kt)("h3",{id:"bot-response"},"Bot Response"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tip Response",src:n(4683).Z,width:"1212",height:"1166"})))}c.isMDXComponent=!0},4683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tip-response-00f548f2b6b9dbb638ec655a6559664d.png"}}]);