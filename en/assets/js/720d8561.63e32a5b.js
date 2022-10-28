"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r="Prometheus",s={unversionedId:"extensions/prometheus",id:"extensions/prometheus",title:"Prometheus",description:"Prometheus (Prometheus) is a monitoring system originally built on the SoundCloud.  Since 2012, it has become a community open source project with a very active developer and user community. In order to emphasize open source and independent maintenance, Prometheus joined the Cloud Native Cloud Computing Foundation (CNCF) in 2016, becoming the second hosting project after Kubernetes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/prometheus.md",sourceDirName:"extensions",slug:"/extensions/prometheus",permalink:"/en/docs/extensions/prometheus",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/prometheus.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Alinode",permalink:"/en/docs/extensions/alinode"}},l={},c=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Introducing components",id:"introducing-components",level:2},{value:"Other configurations",id:"other-configurations",level:2},{value:"Data acquisition",id:"data-acquisition",level:2},{value:"Build Prometheus",id:"build-prometheus",level:2},{value:"Data presentation",id:"data-presentation",level:2},{value:"Socket-io scene",id:"socket-io-scene",level:2},{value:"Function introduction",id:"function-introduction",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prometheus"},"Prometheus"),(0,o.kt)("p",null,"Prometheus (Prometheus) is a monitoring system originally built on the SoundCloud.  Since 2012, it has become a community open source project with a very active developer and user community. In order to emphasize open source and independent maintenance, Prometheus joined the Cloud Native Cloud Computing Foundation (CNCF) in 2016, becoming the second hosting project after Kubernetes."),(0,o.kt)("p",null,"Grafana is an open source measurement analysis and visualization suite. A front-end tool developed purely Javascript displays custom reports and charts by accessing libraries (such as InfluxDB). Grafana supports many different data sources. Each data source has a specific query editor, and the features and functions customized by the editor are the specific data sources that are exposed. The Prometheus is exactly one of its supported data sources."),(0,o.kt)("p",null,"This article introduces how Midway accesses Grafana + Prometheus."),(0,o.kt)("p",null,"The access effect is as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617259935548-a2df4339-3229-4391-bd3d-4ba8e6979d4d.png",alt:null})),(0,o.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,o.kt)("p",null,"First install the indicator monitoring component provided by Midway:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @midwayjs/prometheus@3 --save\n")),(0,o.kt)("p",null,"Or reinstall the following dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/prometheus": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,o.kt)("h2",{id:"introducing-components"},"Introducing components"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts"),", introduce this component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nImport * as prometheus from '@midwayjs/prometheus'; // Import module\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    // ...\n    prometheus\n  ],\n  importConfigs: [join(__dirname, 'config')]\n})\nexport class MainConfiguration {}\n")),(0,o.kt)("p",null,"When we started our application, there was an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"${host }:${ port}/metrics")," when we visited it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Prometheus the monitoring data is obtained based on HTTP, please load any framework of web/koa/express and start in multi-framework mode.")),(0,o.kt)("p",null,"Access interface, return as follows, the contents are the current indicators."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617260048533-4f725824-9471-40c9-be8b-6dcbf27d9cca.png",alt:null})),(0,o.kt)("h2",{id:"other-configurations"},"Other configurations"),(0,o.kt)("p",null,"The indicator component also provides relevant configurations to facilitate developers to configure."),(0,o.kt)("p",null,"You can modify the configuration of the prometheus in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.default.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  prometheus: {\n    labels: {\n      APP_NAME: 'demo_project',\n    },\n  },\n}\n")),(0,o.kt)("p",null,"For more configurations, we can look at the definitions for configuration."),(0,o.kt)("p",null,"Through configuration, for example, we can classify which nodes are the same application, because when we deploy, the node program is distributed. For example, we added APP_NAME above to distinguish different applications, so that we can distinguish different applications in the monitoring index."),(0,o.kt)("h2",{id:"data-acquisition"},"Data acquisition"),(0,o.kt)("p",null,"The components we introduced earlier in Midway are mainly to add indicator modules to Node. Next, we need Prometheus to collect our index data."),(0,o.kt)("p",null,"If the developer's department already has Prometheus + grafana, it only needs to report the application's indicator address to PE or through the interface. Here we assume that everyone has no Prometheus + grafana, and then follow the following description."),(0,o.kt)("h2",{id:"build-prometheus"},"Build Prometheus"),(0,o.kt)("p",null,"Here we use docker-compose to build Prometheus. The docker-compose.yml file is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '2.2'\nservices:\n  tapi:\n    logging:\n      driver: 'json-file'\n      options:\n        max-size: '50m'\n    image: prom/prometheus\n    restart: always\n    volumes:\n      - ./prometheus_data:/prometheus_data:rw\n      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n      - ./targets.json:/etc/prometheus/targets.json\n    command:\n      - '--storage.tsdb.path=/prometheus_data'\n      - '--config.file=/etc/prometheus/prometheus.yml'\n      - '--storage.tsdb.retention=10d'\n      - '--web.enable-lifecycle'\n    ports:\n      - '9090:9090'\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," file is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\nscrape_configs:\n  - job_name: 'node'\n    file_sd_configs:\n      - refresh_interval: 1m\n        files:\n          - '/etc/prometheus/targets.json'\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n")),(0,o.kt)("p",null,"Then, the collected ",(0,o.kt)("inlineCode",{parentName:"p"},"targets.json")," is as follows: ",(0,o.kt)("inlineCode",{parentName:"p"},"${ip}")," in the following file is replaced with the ip address of the server where the Node.js application is located."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "targets": ["${ip}:7001"]\n    "labels": {\n      "env": "prod ",\n      "job": "api"\n    }\n  }\n]\n')),(0,o.kt)("p",null,"Then we start the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n")),(0,o.kt)("p",null,"At this point, Prometheus will already pull the indicator data of our Node application."),(0,o.kt)("p",null,"What to do if you want to update target:\nAfter modifying this targets.json file, it is hot loaded by the prometheus reload method.\nThe method is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl-X POST http://${prometheus ip}:9090/-/reload\n")),(0,o.kt)("p",null,"Then we can check the prometheus page or confirm whether it takes effect. The interface address is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"http://${prometheus ip}:9090/classic/targets\n")),(0,o.kt)("p",null,"The next step is how to show the collected data."),(0,o.kt)("h2",{id:"data-presentation"},"Data presentation"),(0,o.kt)("p",null,"We can use Grafana to show our data."),(0,o.kt)("p",null,"Here we simply use Docker to build a Grafana:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -d --name=grafana -p 3000:3000 grafana/grafana\n")),(0,o.kt)("p",null,"Then we visit 127.0.0.1:3000, and the default account password is admin:admin.\nThen visit the following effect:"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617260561047-c2643a69-6258-491b-937d-9bfc4558252f.png#height=346&id=yNdWZ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=692&originWidth=1496&originalType=binary&ratio=1&size=551202&status=done&style=none&width=748",width:"748"}),(0,o.kt)("p",null,"Then we let Grafana access our Prometheus data sources:"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617260581029-1e2e06a8-3054-4ad8-96b5-d50ab9bb1612.png#height=286&id=atAvT&margin=%5Bobject%20Object%5D&name=image.png&originHeight=572&originWidth=1490&originalType=binary&ratio=1&size=169944&status=done&style=none&width=745",width:"745"}),(0,o.kt)("p",null,"Then we click Grafana to add the chart:"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1620725466020-28793a78-c03b-48fa-bf16-0c9c8ecc1a94.png#clientId=u070308fc-4e5d-4&from=paste&height=741&id=uce167575&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1482&originWidth=2626&originalType=binary&ratio=1&size=310590&status=done&style=none&taskId=uedd61eb7-8e61-488f-963f-f70adb9a651&width=1313",width:"1313"}),(0,o.kt)("p",null,"Select 14403 ID here, then click load, then click Next, and then click import to see the effect we have just accessed."),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1620725497338-a32a8982-d51f-4e74-b511-dc10a7c66d80.png#clientId=u070308fc-4e5d-4&from=paste&height=996&id=uba6ac1f0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1992&originWidth=3836&originalType=binary&ratio=1&size=1951604&status=done&style=none&taskId=ua7c2fc08-0633-4614-9af0-5bf2da800ef&width=1918",width:"1918"}),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1620725514630-4f654f10-ef3a-41f7-b403-02832d3ef7d8.png#clientId=u070308fc-4e5d-4&from=paste&height=998&id=u27a3ae30&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1996&originWidth=3830&originalType=binary&ratio=1&size=2201307&status=done&style=none&taskId=ucee30610-4c1f-4fa8-82fd-a952d5aa9e1&width=1915",width:"1915"}),(0,o.kt)("p",null,"In this way, developers can operate and operate their own Node programs, for example, whether an NPM package has recently been introduced to cause any memory leakage, and whether there has been an application restart recently."),(0,o.kt)("p",null,"Of course, it can also support other custom operations."),(0,o.kt)("h2",{id:"socket-io-scene"},"Socket-io scene"),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @midwayjs/prometheus-socket-io@3 --save\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport { join } from 'path';\nimport * as prometheus from '@midwayjs/prometheus';\nimport * as prometheusSocketIo from '@midwayjs/prometheus-socket-io';\n\n@Configuration({\n  imports: [prometheus, prometheusSocketIo],\n  importConfigs: [join(__dirname, './config')]\n})\nexport class ContainerLifeCycle {}\n")),(0,o.kt)("p",null,"Then you can see the socket-io data on the/metrics side."),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1631090438583-d925c13c-371a-4037-9f53-edaa34580aab.png#clientId=u24adff00-2245-4&from=paste&height=459&id=u2862ab6b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=918&originWidth=1470&originalType=binary&ratio=1&size=481525&status=done&style=none&taskId=ua4ce06b2-a75d-4e4a-8bd9-c94496dca33&width=735",width:"735"}),(0,o.kt)("p",null,"A total of 8 new indicators have been added.\nThe Grafana template ID will be provided for everyone to use later."),(0,o.kt)("h2",{id:"function-introduction"},"Function introduction"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Sort by appName"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","View the qps situation of different paths"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","View the distribution of different statuses"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Query the rt situation of different paths"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","CPU usage of the process"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","memory usage of the process"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stack situation"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Event Loop"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Wait")))}d.isMDXComponent=!0}}]);