"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8785],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u8de8\u57df CORS"},s=void 0,p={unversionedId:"cors",id:"version-2.0.0/cors",title:"\u8de8\u57df CORS",description:"\u8de8\u6e90\u8d44\u6e90\u5171\u4eab(CORS) \uff08\u6216\u901a\u4fd7\u5730\u8bd1\u4e3a\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u662f\u4e00\u79cd\u57fa\u4e8eHTTP\u5934\u7684\u673a\u5236\uff0c\u8be5\u673a\u5236\u901a\u8fc7\u5141\u8bb8\u670d\u52a1\u5668\u6807\u793a\u9664\u4e86\u5b83\u81ea\u5df1\u4ee5\u5916\u7684\u5176\u5b83 origin\uff08\u57df\uff0c\u534f\u8bae\u548c\u7aef\u53e3\uff09\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u53ef\u4ee5\u8bbf\u95ee\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u3002",source:"@site/versioned_docs/version-2.0.0/cors.md",sourceDirName:".",slug:"/cors",permalink:"/en/docs/2.0.0/cors",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/cors.md",tags:[],version:"2.0.0",frontMatter:{title:"\u8de8\u57df CORS"},sidebar:"common",previous:{title:"\u9759\u6001\u8d44\u6e90\uff08Static File\uff09",permalink:"/en/docs/2.0.0/static_file"},next:{title:"FaaS \u6587\u4ef6\u4e0a\u4f20",permalink:"/en/docs/2.0.0/file_upload"}},i={},l=[{value:"\u5728 @midwayjs/web \u4f7f\u7528",id:"\u5728-midwayjsweb-\u4f7f\u7528",level:2},{value:"\u5728 @midwayjs/koa \u4f7f\u7528",id:"\u5728-midwayjskoa-\u4f7f\u7528",level:2},{value:"\u5728 @midwayjs/express \u4f7f\u7528",id:"\u5728-midwayjsexpress-\u4f7f\u7528",level:2},{value:"\u5728 Serverless \u573a\u666f\u4f7f\u7528",id:"\u5728-serverless-\u573a\u666f\u4f7f\u7528",level:2}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8de8\u6e90\u8d44\u6e90\u5171\u4eab(",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/CORS"},"CORS"),") \uff08\u6216\u901a\u4fd7\u5730\u8bd1\u4e3a\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u662f\u4e00\u79cd\u57fa\u4e8e",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/HTTP"},"HTTP"),"\u5934\u7684\u673a\u5236\uff0c\u8be5\u673a\u5236\u901a\u8fc7\u5141\u8bb8\u670d\u52a1\u5668\u6807\u793a\u9664\u4e86\u5b83\u81ea\u5df1\u4ee5\u5916\u7684\u5176\u5b83 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Origin"},"origin"),"\uff08\u57df\uff0c\u534f\u8bae\u548c\u7aef\u53e3\uff09\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u53ef\u4ee5\u8bbf\u95ee\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0cCORS \u7684\u8bbe\u7f6e\u4f1a\u5f71\u54cd\u524d\u7aef\u8bf7\u6c42\u8de8\u57df\u8d44\u6e90\u3002"),(0,a.kt)("h2",{id:"\u5728-midwayjsweb-\u4f7f\u7528"},"\u5728 @midwayjs/web \u4f7f\u7528"),(0,a.kt)("p",null,"\u5b89\u88c5 egg-cors\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i egg-cors --save\xa0\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u63d2\u4ef6\u542f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/plugin.ts\nexports.cors = {\n  enable: true,\n  package: 'egg-cors',\n};\n")),(0,a.kt)("p",null,"\u914d\u7f6e cors \u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport const cors = {\n  // {string|Function} origin: '*',\n  // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'\n};\n")),(0,a.kt)("p",null,"\u5982\u679c\u53ea\u60f3\u7279\u5b9a\u57df\u540d\uff0c\u9700\u8981\u5728 security \u63d2\u4ef6\u5904\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport const security = {\n  domainWhiteList: ['http://localhost:4200'], //  \u5141\u8bb8\u8de8\u57df\u7684\u57df\u540d\n};\n")),(0,a.kt)("p",null,"\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eggjs/egg-cors"},"cors \u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u5728-midwayjskoa-\u4f7f\u7528"},"\u5728 @midwayjs/koa \u4f7f\u7528"),(0,a.kt)("p",null,"koa \u5f53\u524d\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/cors"},"@koa/cors")," \u5305\u6765\u505a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @koa/cors --save\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u76f4\u63a5\u52a0\u5165\u4e2d\u95f4\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/koa';\nimport * as cors from '@koa/cors';\n\n@Configuration()\nexport class AutoConfiguration {\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.use(\n      cors({\n        origin: '*',\n      })\n    );\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/cors"},"@koa/cors \u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u5728-midwayjsexpress-\u4f7f\u7528"},"\u5728 @midwayjs/express \u4f7f\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528 cors \u5305\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install cors --save\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u76f4\u63a5\u52a0\u5165\u4e2d\u95f4\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/express';\nimport * as cors from 'cors';\n\n@Configuration()\nexport class AutoConfiguration {\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.use(\n      cors({\n        origin: '*',\n      })\n    );\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/resources/middleware/cors.html"},"cors \u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u5728-serverless-\u573a\u666f\u4f7f\u7528"},"\u5728 Serverless \u573a\u666f\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728 FC \u7684 HTTP \u89e6\u53d1\u5668\u4e0b\uff0c\u65e0\u9700\u914d\u7f6e cors\uff0c\u7f51\u5173\u81ea\u52a8\u652f\u6301 OPTIONS\u3002")),(0,a.kt)("p",null,"\u5176\u4f59\u5e73\u53f0\u6216\u8005\u89e6\u53d1\u5668\uff0c\u53ef\u4ee5\u9002\u5f53\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u51fd\u6570\u7684 CORS \u53ef\u4ee5\u590d\u7528 koa \u7684 CORS \u80fd\u529b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @koa/cors --save\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u76f4\u63a5\u52a0\u5165\u4e2d\u95f4\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/faas';\nimport * as cors from '@koa/cors';\n\n@Configuration()\nexport class AutoConfiguration {\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.use(\n      cors({\n        origin: '*',\n      })\n    );\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/cors"},"@koa/cors \u6587\u6863"),"\u3002"))}u.isMDXComponent=!0}}]);