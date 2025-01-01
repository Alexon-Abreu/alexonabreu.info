(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var i=c(7),n=c(1),a=c(0);const s=Object(n.createContext)(),o=e=>{let{children:t}=e;const[c,i]=Object(n.useState)("light");Object(n.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");i(e.matches?"dark":"light"),e.addEventListener("change",(e=>{i(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(s.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),i(e)}}],children:t})},l={homepage:"https://github.com/Alexon-Abreu"},r={name:"Alexon Abreu",role:"Full-Stack Engineer",description:"From a young age, I\u2019ve been passionate about technology. It\u2019s given me a way to explore new ideas and express my creativity through software development. Now, as I near the end of my bachelor\u2019s degree in Computer Science, I\u2019m focused on building innovative software with a great team to make a meaningful impact.",resume:"https://drive.google.com/file/d/1VjVvhScwzZFEGOAWyUNuJwiOtsN220K1/view?usp=sharing",social:{linkedin:"https://www.linkedin.com/in/alexon-abreu/",github:"https://github.com/Alexon-Abreu"}},d=[{name:"NBA Data Mining Project",description:"Developed a predictive model using NBA player metrics to rank potential nominees for MVP, DPOY, and SMOY awards, aiming to provide an unbiased, data-driven reference for award authenticity.",stack:["Jupyter Notebook","Python"],sourceCode:"https://github.com/Alexon-Abreu/NBA-Data-Mining-Project.git",livePreview:"https://www.canva.com/design/DAGZNLDa0Vw/SF3QN9rxpl0XGZx_nhFFUQ/view?utm_content=DAGZNLDa0Vw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf6e5773599"},{name:"Recommendify",description:"Recommendify is a web application designed to uncover new music and your next favorite artist. Simply sign in with your Spotify account and Recommendify will give you a list of recommended artists to explore! \u2728\ud83c\udfb6",stack:["JavaScript","CSS","HTML"],sourceCode:"https://github.com/dluzong/Recommendify.git",livePreview:"https://www.canva.com/design/DAGZZPn7_24/z0HIoenldQX-zy8M0V73hA/view?utm_content=DAGZZPn7_24&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h38dd60f9c7"}],m=[{title:"Basics of Quantum Information",subtitle:"John Watrous",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/f7370c87-35b3-489c-ac52-cbc564283723/linked_in_profile"},{title:"Quantum-Safe Encryption Essentials",subtitle:"Dwaine Snow",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/9dd99e0a-506a-4956-849f-2a29e30b7aa6/linked_in_profile"},{title:"Create a Voice Assistant with OpenAI's GPT-3 and IBM Watson",subtitle:"Rav Ahuja",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://courses.cognitiveclass.ai/certificates/126988e2c04d4010bca8cebf0ef38fe7"},{title:"Intro to ChatGPT",subtitle:"Zoe Bachman",logo:"https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png",link:"https://www.codecademy.com/profiles/AlexonAbreu/certificates/ef9a06323b7d44b091a3ec7816092dc6"},{title:"Learn C++ Course",subtitle:"Zoe Bachman",logo:"https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png",link:"https://www.codecademy.com/profiles/AlexonAbreu/certificates/b74a2390dfc4127fa5d43fe147425ad0"},{title:"Learn Python 3 Course",subtitle:"Zoe Bachman",logo:"https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png",link:"https://www.codecademy.com/profiles/AlexonAbreu/certificates/6c152bd262967f8c941c9707ed636bda"}],b=["C++","Python","Jupyter Notebooks","HTML","CSS","JavaScript","React","Git","Docker","Flutter","Dart"],h="alexon.abreuramirez26@myhunter.cuny.edu";var j=c(13),u=c.n(j),p=c(11),g=c.n(p),f=c(15),_=c.n(f),x=c(14),w=c.n(x);c(25);var O=()=>{const[{themeName:e,toggleTheme:t}]=Object(n.useContext)(s),[c,i]=Object(n.useState)(!1),o=()=>i(!c);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:o,className:"link link--nav",children:"Projects"})}):null,m.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#certificates",onClick:o,className:"link link--nav",children:"Certifications"})}):null,b.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:o,className:"link link--nav",children:"Skills"})}):null,h?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:o,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(a.jsx)(g.a,{}):Object(a.jsx)(u.a,{})}),Object(a.jsx)("button",{type:"button",onClick:o,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(a.jsx)(w.a,{}):Object(a.jsx)(_.a,{})})]})};c(29);var k=()=>{const{homepage:e,title:t}=l;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{}),Object(a.jsx)(O,{})]})},v=c(8),N=c.n(v),y=c(16),A=c.n(y);c(30);var C=()=>{const{name:e,role:t,description:c,resume:i,social:n}=r;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsx)("h1",{children:Object(a.jsx)("span",{className:"about__name",children:e})}),t&&Object(a.jsx)("h2",{className:"about__role",children:t}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[i&&Object(a.jsx)("a",{href:i,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(a.jsxs)(a.Fragment,{children:[n.github&&Object(a.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(N.a,{})}),n.linkedin&&Object(a.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})},z=c(6),P=c.n(z),S=c(17),I=c.n(S);c(32);var B=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},P()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(N.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(I.a,{})})]})};c(33);var M=()=>d.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:d.map((e=>Object(a.jsx)(B,{project:e},P()())))})]}):null;c(34);var G=()=>b.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:b.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())))})]}):null,L=c(18),D=c.n(L);c(35);var E=()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(D.a,{fontSize:"large"})})}):null};c(36);var Z=()=>h?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(h),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(37);var F=()=>Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rjshkhr/cleanfolio",className:"link footer__link"})});c(38);const J=[{title:"Cloud Computing Fundamentals",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/1ceb7d8e-4a36-4c12-bf9d-63653d6946bd/public_url"},{title:"Basics of Quantum Information",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/f7370c87-35b3-489c-ac52-cbc564283723/linked_in_profile"},{title:"Quantum-Safe Encryption Essentials",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/9dd99e0a-506a-4956-849f-2a29e30b7aa6/linked_in_profile"},{title:"Create a Voice Assistant with OpenAI's GPT-3 and IBM Watson",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://courses.cognitiveclass.ai/certificates/126988e2c04d4010bca8cebf0ef38fe7"},{title:"Intro to ChatGPT",subtitle:"Codecademy",logo:"https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png",link:"https://www.codecademy.com/profiles/AlexonAbreu/certificates/ef9a06323b7d44b091a3ec7816092dc6"},{title:"Learn C++ Course",subtitle:"Codecademy",logo:"https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png",link:"https://www.codecademy.com/profiles/AlexonAbreu/certificates/b74a2390dfc4127fa5d43fe147425ad0"},{title:"Learn Python 3 Course",subtitle:"Codecademy",logo:"https://cdn.icon-icons.com/icons2/2389/PNG/512/codecademy_logo_icon_145396.png",link:"https://www.codecademy.com/profiles/AlexonAbreu/certificates/6c152bd262967f8c941c9707ed636bda"},{title:"IBM Accelerate - Software Developer",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/58d59697-5b38-4e2a-96db-41700346e7b5/linked_in_profile"},{title:"Building Modern Python Applications on AWS",subtitle:"Amazon Web Services",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",link:"https://www.codecademy.com/profiles/AlexonAbreu/certificates/b74a2390dfc4127fa5d43fe147425ad0"},{title:"Machine Learning with Python - Level 1",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/a9e4e339-2284-4c45-9078-265ed4958784?source=linked_in_profile"},{title:"Applied Data Science with Python - Level 2",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/9c8fe71a-6c43-4bbd-8645-4204e10baf62?source=linked_in_profile"},{title:"Build Your Own Chatbot - Level 1",subtitle:"IBM",logo:"https://cognizant.scene7.com/is/image/cognizant/ibm-logo?fmt=png-alpha",link:"https://www.credly.com/badges/d26d6349-cc55-47f7-8bee-ff2b3a88a2e5?source=linked_in_profile"}];var T=()=>J.length?Object(a.jsxs)("section",{id:"certificates",className:"section certificates",children:[Object(a.jsx)("h2",{className:"section__title",children:"Certifications"}),Object(a.jsx)("div",{className:"certificates__grid",children:J.map((e=>Object(a.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"cert-card",children:[Object(a.jsx)("div",{className:"cert-card__header",children:Object(a.jsx)("img",{src:e.logo,alt:e.title,className:"cert-card__logo"})}),Object(a.jsxs)("div",{className:"cert-card__body",children:[Object(a.jsx)("h3",{className:"cert-card__title",children:e.title}),Object(a.jsx)("p",{className:"cert-card__subtitle",children:e.subtitle})]})]},P()())))})]}):null;c(39);var V=()=>{const[{themeName:e}]=Object(n.useContext)(s);return Object(a.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(a.jsx)(k,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(C,{}),Object(a.jsx)(M,{}),Object(a.jsx)(T,{})," ",Object(a.jsx)(G,{}),Object(a.jsx)(Z,{})]}),Object(a.jsx)(E,{}),Object(a.jsx)(F,{})]})};c(40);Object(i.render)(Object(a.jsx)(o,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.80170fc9.chunk.js.map