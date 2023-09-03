"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"CMQ \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09"},i=void 0,o={unversionedId:"serverless/tencent_trigger_cmq",id:"version-2.0.0/serverless/tencent_trigger_cmq",title:"CMQ \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09",description:"CMQ\uff08mq\uff09 \u89e6\u53d1\u5668\uff0c\u8ba2\u9605\u7684\u662f\u817e\u8baf\u4e91\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/tencent_trigger_cmq.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_cmq",permalink:"/en/docs/2.0.0/serverless/tencent_trigger_cmq",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/tencent_trigger_cmq.md",tags:[],version:"2.0.0",frontMatter:{title:"CMQ \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09"},sidebar:"common",previous:{title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09",permalink:"/en/docs/2.0.0/serverless/tencent_trigger_cos"},next:{title:"\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF",permalink:"/en/docs/2.0.0/serverless/deploy_to_tencent"}},s={},p=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"CMS \u89e6\u53d1\u5668\u914d\u7f6e",id:"cms-\u89e6\u53d1\u5668\u914d\u7f6e",level:2},{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CMQ\uff08mq\uff09 \u89e6\u53d1\u5668\uff0c\u8ba2\u9605\u7684\u662f\u817e\u8baf\u4e91\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context, SCF } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.MQ, {\n    topic: 'test-topic',\n    tags: 'bbb',\n  })\n  async handleCMQEvent(event: SCF.CMQEvent) {\n    // xxx\n  }\n}\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"f deploy")," \u540e\uff0c\u5373\u53ef\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u5728\u817e\u8baf\u4e91\u4e0b\uff0cmidway faas \u63d0\u4f9b\u7684\u9ed8\u8ba4\u6d88\u606f\u961f\u5217\u683c\u5f0f\u4e3a JSON")),(0,a.kt)("h2",{id:"cms-\u89e6\u53d1\u5668\u914d\u7f6e"},"CMS \u89e6\u53d1\u5668\u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 topic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tags"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u63cf\u8ff0\u4e86\u8be5\u8ba2\u9605\u4e2d\u6d88\u606f\u8fc7\u6ee4\u7684\u6807\u7b7e\uff08\u6807\u7b7e\u4e00\u81f4\u7684\u6d88\u606f\u624d\u4f1a\u88ab\u63a8\u9001\uff09")))),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u76d1\u542c MQ \u6d88\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(ServerlessTriggerType.MQ, {\n  topic: 'test-topic',\n  region: 'cn-shanghai'\n  strategy: 'BACKOFF_RETRY'\n})\n")),(0,a.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,"CMQ \u6d88\u606f\u8fd4\u56de\u7684\u7ed3\u6784\u5982\u4e0b\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SCF.CMQEvent")," \u7c7b\u578b\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Records": [\n    {\n      "CMQ": {\n        "type": "topic",\n        "topicOwner": 1567,\n        "topicName": "testtopic",\n        "subscriptionName": "xxxxxx",\n        "publishTime": "1970-01-01T00:00:00.000Z",\n        "msgId": "123345346",\n        "requestId": "123345346",\n        "msgBody": "Hello from CMQ!",\n        "msgTag": "tag1,tag2"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u7684\u51fd\u6570\u672c\u5730\u65e0\u6cd5\u4f7f\u7528 dev \u5f00\u53d1\uff0c\u53ea\u80fd\u901a\u8fc7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u548c HTTP \u6d4b\u8bd5\u4e0d\u540c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u83b7\u53d6\u6574\u4e2a\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u8c03\u7528\u5230\u7279\u5b9a\u65b9\u6cd5\u6765\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createCMQEvent")," \u65b9\u6cd5\u5feb\u901f\u521b\u5efa\u5e73\u53f0\u4f20\u5165\u7684\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloTencentService } from '../src/function/hello_tencent';\nimport { createCMQEvent } from '@midwayjs/serverless-scf-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(),\n    });\n    instance = await app.getServerlessInstance<HelloTencentService>(HelloTencentService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from cmq trigger', async () => {\n    expect(await instance.handleCMQEvent(createCMQEvent())).toEqual('hello world');\n  });\n});\n")))}u.isMDXComponent=!0}}]);