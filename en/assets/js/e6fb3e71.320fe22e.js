"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(70989),s=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(m(t),s(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function u(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,o.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",p.tabList)},a.createElement(c,(0,r.Z)({},e,t)),a.createElement(u,(0,r.Z)({},e,t)))}function d(e){const t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>m});var r=n(67294),a=n(16550),l=n(91980),i=n(67392),o=n(50012);function s(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[m,d]=u({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,o.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=m??g;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,l]),tabValues:l}}},62485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={},s="Aliyun FC",p={unversionedId:"serverless/aliyun_faas",id:"serverless/aliyun_faas",title:"Aliyun FC",description:"Alibaba Cloud Serverless is one of the first teams in China to provide serverless computing services. It relies on Alibaba Cloud's powerful cloud infrastructure service capabilities to continuously achieve technological breakthroughs. At present, Taobao, Alipay, DingTalk, AutoNavi, etc. have applied Serverless to production business. Serverless products on the cloud have been successfully implemented in tens of thousands of companies such as Pumpkin Movie, NetEase Cloud Music, iQiyi Sports, and Lilith.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/aliyun_faas.md",sourceDirName:"serverless",slug:"/serverless/aliyun_faas",permalink:"/en/docs/serverless/aliyun_faas",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/aliyun_faas.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Default error behavior",permalink:"/en/docs/serverless/serverless_error"},next:{title:"Introduction",permalink:"/en/docs/hooks/intro"}},c={},u=[{value:"Deployment type",id:"deployment-type",level:2},{value:"Pure function development (built-in runtime)",id:"pure-function-development-built-in-runtime",level:2},{value:"Trigger code",id:"trigger-code",level:3},{value:"Type definition",id:"type-definition",level:3},{value:"Local development",id:"local-development",level:3},{value:"Local testing",id:"local-testing",level:3},{value:"Pure function deployment (built-in runtime)",id:"pure-function-deployment-built-in-runtime",level:2},{value:"1. Confirm the launcher",id:"1-confirm-the-launcher",level:3},{value:"2. Install Serverless Devs tools",id:"2-install-serverless-devs-tools",level:3},{value:"3. Write a Serverless Devs description file",id:"3-write-a-serverless-devs-description-file",level:3},{value:"4. Write a deployment script",id:"4-write-a-deployment-script",level:3},{value:"Custom runtime deployment",id:"custom-runtime-deployment",level:2},{value:"1. Create a project",id:"1-create-a-project",level:3},{value:"2. Adjust the port",id:"2-adjust-the-port",level:3},{value:"3. Platform deployment configuration",id:"3-platform-deployment-configuration",level:3}],m={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aliyun-fc"},"Aliyun FC"),(0,a.kt)("p",null,"Alibaba Cloud Serverless is one of the first teams in China to provide serverless computing services. It relies on Alibaba Cloud's powerful cloud infrastructure service capabilities to continuously achieve technological breakthroughs. At present, Taobao, Alipay, DingTalk, AutoNavi, etc. have applied Serverless to production business. Serverless products on the cloud have been successfully implemented in tens of thousands of companies such as Pumpkin Movie, NetEase Cloud Music, iQiyi Sports, and Lilith."),(0,a.kt)("p",null,"Alibaba Cloud Serverless includes many products, such as Function Compute FC, Lightweight Application Engine SAE, etc. This article mainly uses its ",(0,a.kt)("strong",{parentName:"p"},"Function Compute")," part."),(0,a.kt)("p",null,"The following are common methods of using, testing, and deploying function triggers."),(0,a.kt)("h2",{id:"deployment-type"},"Deployment type"),(0,a.kt)("p",null,"Alibaba Cloud has many types of function computing deployments, including the following types according to the different containers they run."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Deployment Media"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Built-in runtime"),(0,a.kt)("td",{parentName:"tr",align:null},"Only function interfaces can be deployed, no custom ports are required, zip packages are built for platform deployment"),(0,a.kt)("td",{parentName:"tr",align:null},"zip package deployment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Custom Runtime"),(0,a.kt)("td",{parentName:"tr",align:null},"You can deploy standard applications, start port 9000, use the system image provided by the platform, and build a zip package for platform deployment"),(0,a.kt)("td",{parentName:"tr",align:null},"zip package deployment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Custom Container"),(0,a.kt)("td",{parentName:"tr",align:null},"You can deploy standard applications, start port 9000, control all environmental dependencies yourself, and build a Dockerfile for platform deployment"),(0,a.kt)("td",{parentName:"tr",align:null},"Dockerfile deployment")))),(0,a.kt)("p",null,"There are three ways to create functions on the platform."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01JrlhOw1EJBZmHklbq_!!6000000000330-2-tps-1207-585.png",alt:null})),(0,a.kt)("h2",{id:"pure-function-development-built-in-runtime"},"Pure function development (built-in runtime)"),(0,a.kt)("p",null,"Below we will use the ",(0,a.kt)("strong",{parentName:"p"},'"built-in runtime deployment"')," pure function as an example."),(0,a.kt)("h3",{id:"trigger-code"},"Trigger code"),(0,a.kt)(l.Z,{groupId:"triggers",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"event",label:"Event",mdxType:"TabItem"},(0,a.kt)("p",null,"Publish a function that does not contain a trigger. This is the simplest type. You can manually trigger parameters directly through event, or you can bind other triggers on the platform."),(0,a.kt)("p",null,"Bind event triggers via the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger")," decorator directly in code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloAliyunService {\n   @Inject()\n   ctx: Context;\n\n   @ServerlessTrigger(ServerlessTriggerType.EVENT)\n   async handleEvent(event: any) {\n     return event;\n   }\n}\n"))),(0,a.kt)(i.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("p",null,"Alibaba Cloud's HTTP triggers are different from those of other platforms. They are another set of triggers independent of the API gateway that serve HTTP scenarios. This trigger is easier to use and configure than API Gateway."),(0,a.kt)("p",null,"Bind HTTP triggers via the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ServerlessTrigger")," decorator directly in code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloAliyunService {\n   @Inject()\n   ctx: Context;\n\n   @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n     path: '/',\n     method: 'get',\n   })\n   async handleHTTPEvent(@Query() name = 'midway') {\n     return `hello ${name}`;\n   }\n}\n"))),(0,a.kt)(i.Z,{value:"apigw",label:"API Gateway",mdxType:"TabItem"},(0,a.kt)("p",null,"The API gateway is special in the Alibaba Cloud function system. It is similar to creating a trigger-free function and binding it to a specific path through the platform gateway."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloAliyunService {\n   @Inject()\n   ctx: Context;\n\n   @ServerlessTrigger(ServerlessTriggerType.API_GATEWAY, {\n     path: '/api_gateway_aliyun',\n     method: 'post',\n   })\n   async handleAPIGatewayEvent(@Body() name) {\n     return `hello ${name}`;\n   }\n}\n"))),(0,a.kt)(i.Z,{value:"timer",label:"Timer",mdxType:"TabItem"},(0,a.kt)("p",null,"Scheduled task triggers are used to execute a function regularly."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Warm reminder, please turn off trigger automatic execution in time after testing the function to avoid excessive deductions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\nimport type { TimerEvent } from '@midwayjs/fc-starter';\n\n@Provide()\nexport class HelloAliyunService {\n   @Inject()\n   ctx: Context;\n\n   @ServerlessTrigger(ServerlessTriggerType.TIMER)\n   async handleTimerEvent(event: TimerEvent) {\n     this.ctx.logger.info(event);\n     return 'hello world';\n   }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event Structure")),(0,a.kt)("p",null,"The structure returned by the Timer message is as follows, described in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TimerEvent")," type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n   triggerTime: new Date().toJSON(),\n   triggerName: 'timer',\n   payload: '',\n}\n"))),(0,a.kt)(i.Z,{value:"oss",label:"OSS",mdxType:"TabItem"},(0,a.kt)("p",null,"OSS is used to store some resource files and is Alibaba Cloud's resource storage product. When a file is created or updated in OSS, the corresponding function will be triggered and executed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\nimport type { OSSEvent } from '@midwayjs/fc-starter';\n\n@Provide()\nexport class HelloAliyunService {\n   @Inject()\n   ctx: Context;\n\n   @ServerlessTrigger(ServerlessTriggerType.OS)\n   async handleOSSEvent(event: OSSEvent) {\n     //xxx\n   }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event Structure")),(0,a.kt)("p",null,"The structure returned by OSS messages is as follows, which is described in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FC.OSSEvent")," type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "events": [\n     {\n       "eventName": "ObjectCreated:PutObject",\n       "eventSource": "acs:oss",\n       "eventTime": "2017-04-21T12:46:37.000Z",\n       "eventVersion": "1.0",\n       "oss": {\n         "bucket": {\n           "arn": "acs:oss:cn-shanghai:123456789:bucketname",\n           "name": "testbucket",\n           "ownerIdentity": "123456789",\n           "virtualBucket": ""\n         },\n         "object": {\n           "deltaSize": 122539,\n           "eTag": "688A7BF4F233DC9C88A80BF985AB7329",\n           "key": "image/a.jpg",\n           "size": 122539\n         },\n         "ossSchemaVersion": "1.0",\n         "ruleId": "9adac8e253828f4f7c0466d941fa3db81161e853"\n       },\n       "region": "cn-shanghai",\n       "requestParameters": {\n         "sourceIPAddress": "140.205.128.221"\n       },\n       "responseElements": {\n         "requestId": "58F9FF2D3DF792092E12044C"\n       },\n       "userIdentity": {\n         "principalId": "123456789"\n       }\n     }\n   ]\n}\n'))),(0,a.kt)(i.Z,{value:"mns",label:"MNS",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Alibaba Cloud Message Queue will incur certain fees for Topic and Queue."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"The default message queue format provided is JSON"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/core';\nimport { Context } from '@midwayjs/faas';\nimport type {MNSEvent} from '@midwayjs/fc-starter';\n\n@Provide()\nexport class HelloAliyunService {\n   @Inject()\n   ctx: Context;\n\n   @ServerlessTrigger(ServerlessTriggerType.MQ)\n   async handleMNSEvent(event: MNSEvent) {\n     // ...\n   }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event Structure")),(0,a.kt)("p",null,"The structure returned by the MNS message is as follows, described in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FC.MNSEvent")," type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "Context": "user custom info",\n   "TopicOwner": "1186202104331798",\n   "Message": "hello topic",\n   "Subscriber": "1186202104331798",\n   "PublishTime": 1550216302888,\n   "SubscriptionName": "test-fc-subscibe",\n   "MessageMD5": "BA4BA9B48AC81F0F9C66F6C909C39DBB",\n   "TopicName": "test-topic",\n   "MessageId": "2F5B3C281B283D4EAC694B7425288675"\n}\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More configurations of triggers are platform-related and will be written in ",(0,a.kt)("inlineCode",{parentName:"p"},"s.yaml"),", such as the time interval of scheduled tasks, etc. For more details, please see the deployment paragraph below.")),(0,a.kt)("h3",{id:"type-definition"},"Type definition"),(0,a.kt)("p",null,"The definition of FC will be exported by the adapter. In order for the definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.originContext")," to remain correct, it needs to be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/interface.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/interface.ts\nimport type {} from '@midwayjs/fc-starter';\n")),(0,a.kt)("p",null,"Additionally, definitions for various Event types are provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//Event type\nimport type {\n   OSSEvent,\n   MNSEvent,\n   SLSEEvent,\n   CDNEvent,\n   TimerEvent,\n   APIGatewayEvent,\n   TableStoreEvent,\n} from '@midwayjs/fc-starter';\n// InitializeContext type\nimport type { InitializeContext } from '@midwayjs/fc-starter';\n")),(0,a.kt)("h3",{id:"local-development"},"Local development"),(0,a.kt)("p",null,"HTTP triggers and API Gateway types can be developed locally through local ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," and development methods similar to traditional applications. Other types of triggers cannot be developed locally using dev and can only be tested by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test"),"."),(0,a.kt)("h3",{id:"local-testing"},"Local testing"),(0,a.kt)("p",null,"Similar to traditional application testing, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," method to create a function app and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," method to close it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context, Framework } from '@midwayjs/faas';\nimport { mockContext } from '@midwayjs/fc-starter';\nimport { createFunctionApp } from '@midwayjs/mock';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n\n   it('should get result from event trigger', async () => {\n    \n     // create app\n     const app: Application = await createFunctionApp<Framework>(join(__dirname, '../'), {\n       initContext: mockContext(),\n     });\n    \n     // ...\n    \n     await close(app);\n   });\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mockContext")," method is used to simulate a FC Context data structure. You can customize a similar structure or modify some data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context, Framework } from '@midwayjs/faas';\nimport { mockContext } from '@midwayjs/fc-starter';\nimport { createFunctionApp } from '@midwayjs/mock';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n\n   it('should get result from event trigger', async () => {\n    \n     // create app\n     const app: Application = await createFunctionApp<Framework>(join(__dirname, '../'), {\n       initContext: Object.assign(mockContext(), {\n         function: {\n           name: '***',\n           handler: '***'\n         }\n       }),\n     });\n    \n     // ...\n    \n     await close(app);\n   });\n});\n")),(0,a.kt)("p",null,"Different triggers have different testing methods. Some common triggers are listed below."),(0,a.kt)(l.Z,{groupId:"triggers",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"event",label:"Event",mdxType:"TabItem"},(0,a.kt)("p",null,"Obtain the class instance through ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance"),", directly call the instance method, and pass in the parameters for testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HelloAliyunService } from '../src/function/hello_aliyun';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n\n   it('should get result from event trigger', async () => {\n     // ...\n     const instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n     expect(await instance.handleEvent('hello world')).toEqual('hello world');\n     // ...\n   });\n});\n"))),(0,a.kt)(i.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("p",null,"Similar to the application, create a function app through ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," and test it through ",(0,a.kt)("inlineCode",{parentName:"p"},"createHttpRequest"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HelloAliyunService } from '../src/function/hello_aliyun';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n\n   it('should get result from http trigger', async () => {\n     // ...\n     const result = await createHttpRequest(app).get('/').query({\n       name: 'zhangting',\n     });\n     expect(result.text).toEqual('hello zhangting');\n     // ...\n   });\n});\n"))),(0,a.kt)(i.Z,{value:"apigw",label:"API Gateway",mdxType:"TabItem"},(0,a.kt)("p",null,"The same as HTTP testing, create a function app through ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," and test it through ",(0,a.kt)("inlineCode",{parentName:"p"},"createHttpRequest"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createHttpRequest } from '@midwayjs/mock';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n\n   it('should get result from http trigger', async () => {\n     // ...\n     const result = await createHttpRequest(app).post('api_gateway_aliyun').send({\n       name: 'zhangting',\n     });\n\n     expect(result.text).toEqual('hello zhangting');\n     // ...\n   });\n});\n"))),(0,a.kt)(i.Z,{value:"timer",label:"Timer",mdxType:"TabItem"},(0,a.kt)("p",null,"Different from HTTP testing, create a function app through ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp"),", obtain an instance of the entire class through ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance"),", and call a specific method for testing."),(0,a.kt)("p",null,"The structure passed by the platform can be quickly created through the ",(0,a.kt)("inlineCode",{parentName:"p"},"mockTimerEvent")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HelloAliyunService } from '../src/function/hello_aliyun';\nimport { mockTimerEvent } from '@midwayjs/fc-starter';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n\n   it('should get result from timer trigger', async () => {\n     // ...\n     const instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n     expect(await instance.handleTimerEvent(mockTimerEvent())).toEqual('hello world');\n     // ...\n   });\n});\n"))),(0,a.kt)(i.Z,{value:"oss",label:"OSS",mdxType:"TabItem"},(0,a.kt)("p",null,"Unlike HTTP testing, through ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp"),"Create a function app, get an instance of the entire class through ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance"),", and call a specific method for testing."),(0,a.kt)("p",null,"The structure passed by the platform can be quickly created through the ",(0,a.kt)("inlineCode",{parentName:"p"},"createOSSEvent")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HelloAliyunService } from '../src/function/hello_aliyun';\nimport { mockOSSEvent } from '@midwayjs/fc-starter';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n   it('should get result from oss trigger', async () => {\n     // ...\n     const instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n     expect(await instance.handleOSSEvent(mockOSSEvent())).toEqual('hello world');\n     // ...\n   });\n});\n"))),(0,a.kt)(i.Z,{value:"mns",label:"MNS",mdxType:"TabItem"},(0,a.kt)("p",null,"Different from HTTP testing, create a function app through ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp"),", obtain an instance of the entire class through ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance"),", and call a specific method for testing."),(0,a.kt)("p",null,"The structure passed in by the platform can be quickly created through the ",(0,a.kt)("inlineCode",{parentName:"p"},"createMNSEvent")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HelloAliyunService } from '../src/function/hello_aliyun';\nimport { mockMNSEvent } from '@midwayjs/fc-starter';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n\n   it('should get result from oss trigger', async () => {\n     // ...\n     const instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n     expect(await instance.handleMNSEvent(mockMNSEvent())).toEqual('hello world');\n     // ...\n   });\n});\n")))),(0,a.kt)("h2",{id:"pure-function-deployment-built-in-runtime"},"Pure function deployment (built-in runtime)"),(0,a.kt)("p",null,"The following will briefly describe how to use Serverless Devs to deploy to Alibaba Cloud functions."),(0,a.kt)("h3",{id:"1-confirm-the-launcher"},"1. Confirm the launcher"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," section of ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," in the project root directory, make sure the starter is ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/fc-starter"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"provider:\n   name: aliyun\n   starter: '@midwayjs/fc-starter'\n")),(0,a.kt)("h3",{id:"2-install-serverless-devs-tools"},"2. Install Serverless Devs tools"),(0,a.kt)("p",null,"aliyun uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.serverless-devs.com/"},"Serverless Devs tool")," for function deployment."),(0,a.kt)("p",null,"You can install it globally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @serverless-devs/s -g\n")),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.serverless-devs.com/serverless-devs/quick_start"},"Key Configuration")," document for configuration."),(0,a.kt)("h3",{id:"3-write-a-serverless-devs-description-file"},"3. Write a Serverless Devs description file"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"s.yaml")," in the root directory and add the following content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"edition: 1.0.0\nname: \"midwayApp\" # project name\naccess: \"default\" # Secret key alias\n\nvars:\n   service:\n     name: fc-build-demo\n     description: 'demo for fc-deploy component'\nservices:\n   project-0981cd9b07:\n     component: devsapp/fc\n     props:\n       region: cn-hangzhou\n       service: ${vars.service}\n       function:\n         name: hello # function name\n         handler: helloHttpService.handleHTTPEvent\n         codeUri: '.'\n         initializer: helloHttpService.initializer\n       customDomains:\n         - domainName: auto\n           protocol: HTTP\n           routeConfigs:\n             - path: /*\n               serviceName: ${vars.service.name}\n               functionName: helloHttpService-handleHTTPEvent\n       triggers:\n         - name: http\n           type: http\n           config:\n             methods:\n               -GET\n             authType: anonymous\n\n")),(0,a.kt)("p",null,"Every time you add a function, you need to adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"s.yaml")," file. For this reason, Midway provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-yaml-generator")," tool to write the decorator function information into ",(0,a.kt)("inlineCode",{parentName:"p"},"s.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'{\n"scripts": {\n+ "generate": "serverless-yaml-generator",\n   },\n   "devDependencies": {\n+ "@midwayjs/serverless-yaml-generator": "^1.0.0",\n   },\n}\n')),(0,a.kt)("p",null,"By executing the following command, you can fill existing function information into ",(0,a.kt)("inlineCode",{parentName:"p"},"s.yaml")," and generate an entry file to facilitate troubleshooting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run generate\n")),(0,a.kt)("p",null,"The tool will look for the configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"s.yaml")," using the function name as the key."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"If there is a function, it will cover specific fields, such as handler, http trigger methods"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"If the function does not exist, a new function will be added"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"The tool will not write the http routing method. To simplify subsequent updates, you can provide a ",(0,a.kt)("inlineCode",{parentName:"li"},"/*")," route (as an example)")))),(0,a.kt)("p",null,"We recommend that users only define the basic function name, function handler, and basic trigger information (such as the path and method of the http trigger) in the decorator, and write the rest in ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml"),"."),(0,a.kt)("p",null,"The complete configuration of ",(0,a.kt)("inlineCode",{parentName:"p"},"s.yaml")," is more complicated. For details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.serverless-devs.com/serverless-devs/yaml"},"Description File Specification"),"."),(0,a.kt)("h3",{id:"4-write-a-deployment-script"},"4. Write a deployment script"),(0,a.kt)("p",null,"Since deployment has multiple steps such as building and copying, we can write a deployment script to unify this process."),(0,a.kt)("p",null,"For example, create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.sh")," file in the project root directory with the following content."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nset -e\n\n# Build product directory\nexport BUILD_DIST=$PWD/.serverless\n#Build start time in milliseconds\nexport BUILD_START_TIME=$(date +%s%3N)\n\necho "Building Midway Serverless Application"\n\n#Print the current directory cwd\necho "Current Working Directory: $PWD"\n#Print result directory BUILD_DIST\necho "Build Directory: $BUILD_DIST"\n\n#Install current project dependencies\nnpm i\n\n# Execute build\n./node_modules/.bin/tsc || return 1\n# Generate entry file\n./node_modules/.bin/serverless-yaml-generator || return 1\n\n# If the .serverless folder exists, delete it and recreate it\nif [ -d "$BUILD_DIST" ]; then\n   rm -rf $BUILD_DIST\nfi\n\nmkdir $BUILD_DIST\n\n# Copy dist, *.json, *.yml to the .serverless directory\ncp -r dist $BUILD_DIST\ncp *.yaml $BUILD_DIST 2>/dev/null || :\ncp *.json $BUILD_DIST 2>/dev/null || :\n# Move the entry file to the .serverless directory\nmv *.js $BUILD_DIST 2>/dev/null || :\n\n# Enter the .serverless directory\ncd $BUILD_DIST\n# Install online dependencies\nnpm install --production\n\necho "Build success"\n\n# Deploy in the .serverless directory\ns deploy\n\n')),(0,a.kt)("p",null,"You can put this ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.sh")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," command of ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", and execute ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," for subsequent deployment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n     "deploy": "sh deploy.sh"\n   }\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"deploy.sh")," is only tested on mac, other platforms can be adjusted by yourself."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"The script content can be adjusted according to business logic, such as copied files, etc."))))),(0,a.kt)("h2",{id:"custom-runtime-deployment"},"Custom runtime deployment"),(0,a.kt)("h3",{id:"1-create-a-project"},"1. Create a project"),(0,a.kt)("p",null,"Custom runtimes can be deployed using standard projects. Since port 9000 needs to be provided, the Midway koa/express/express project needs to be created."),(0,a.kt)("p",null,"For initialization projects, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Creating the first application"),"."),(0,a.kt)("h3",{id:"2-adjust-the-port"},"2. Adjust the port"),(0,a.kt)("p",null,"In order to avoid affecting local development, we only add ports at the entrance ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Bootstrap } = require('@midwayjs/bootstrap');\n\n// Explicitly introduce user code as a component\nBootstrap.configure({\n   globalConfig: {\n     koa: {\n       port: 9000,\n     }\n   }\n}).run()\n")),(0,a.kt)("p",null,"For different framework modification ports, please refer to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/extensions/koa"},"koa modification port")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/extensions/egg"},"Egg modification port")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/extensions/express"},"Express modification port"))),(0,a.kt)("h3",{id:"3-platform-deployment-configuration"},"3. Platform deployment configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Select the running environment, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"Node.js 18")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Select the code upload method, for example, you can upload a zip package locally"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"The startup command specifies node bootstrap.js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:4},(0,a.kt)("li",{parentName:"ol"},"Listening port 9000")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN010JA2GU1lxNeqm81AR_!!6000000004885-2-tps-790-549.png",alt:null})),(0,a.kt)("p",null,"After the configuration is completed, upload the compressed package to complete the deployment."))}g.isMDXComponent=!0}}]);