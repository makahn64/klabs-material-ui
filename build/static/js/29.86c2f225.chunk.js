(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[29],{1160:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1166:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1203:function(e,t,a){"use strict";var n=a(1),r=a(5),o=a(0),c=(a(2),a(4)),l=a(336),i=a(190),s=Object(i.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=a(27),p=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),d=a(10),f=a(7),v=o.createElement(u,null),b=o.createElement(s,null),g=o.createElement(p,null),h=o.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?v:a,s=e.classes,u=e.color,m=void 0===u?"secondary":u,p=e.icon,f=void 0===p?b:p,h=e.indeterminate,E=void 0!==h&&h,O=e.indeterminateIcon,y=void 0===O?g:O,j=e.inputProps,k=e.size,w=void 0===k?"medium":k,x=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=E?y:f,z=E?y:i;return o.createElement(l.a,Object(n.a)({type:"checkbox",classes:{root:Object(c.default)(s.root,s["color".concat(Object(d.a)(m))],E&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":E},j),icon:o.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===w?w:S.props.fontSize}),checkedIcon:o.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===w?w:z.props.fontSize}),ref:t},x))}));t.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(h)},1247:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="PlusCircle",t.a=s},1250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="ArrowRight",t.a=s},1326:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.a.createElement("polyline",{points:"17 8 12 3 7 8"}),r.a.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Upload",t.a=s},1327:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.a.createElement("polyline",{points:"7 10 12 15 17 10"}),r.a.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Download",t.a=s},2215:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(0),o=a.n(r),c=a(603),l=a(1143),i=a(1151),s=a(18),u=a(332),m=a(1160),p=a(24),d=a(29),f=a(4),v=a(1144),b=a(1228),g=a(1126),h=a(126),E=a(1110),O=a(113),y=a(1163),j=a.n(y),k=a(1326),w=a(1327),x=a(1247),S=Object(c.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var z=function(e){var t=e.className,a=Object(p.a)(e,["className"]),n=S();return o.a.createElement(v.a,Object.assign({className:Object(f.default)(n.root,t),container:!0,justify:"space-between",spacing:3},a),o.a.createElement(v.a,{item:!0},o.a.createElement(b.a,{separator:o.a.createElement(j.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:d.a},"Dashboard"),o.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app/management",component:d.a},"Management"),o.a.createElement(h.a,{variant:"body1",color:"textPrimary"},"Customers")),o.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"All Customers"),o.a.createElement(i.a,{mt:2},o.a.createElement(E.a,{className:n.action},o.a.createElement(O.a,{fontSize:"small",className:n.actionIcon},o.a.createElement(k.a,null)),"Import"),o.a.createElement(E.a,{className:n.action},o.a.createElement(O.a,{fontSize:"small",className:n.actionIcon},o.a.createElement(w.a,null)),"Export"))),o.a.createElement(v.a,{item:!0},o.a.createElement(E.a,{color:"secondary",variant:"contained",className:n.action},o.a.createElement(O.a,{fontSize:"small",className:n.actionIcon},o.a.createElement(x.a,null)),"New Customer")))},P=a(53),C=a(42),N=a(192),I=a.n(N),L=a(1186),R=a(2209),A=a(2157),B=a(1118),T=a(1133),M=a(1134),H=a(1203),W=a(1421),V=a(1422),$=a(1423),D=a(1424),q=a(1425),F=a(1154),J=a(1072),U=a(2226),G=a(1131),K=a(1631),Q=a(1250),X=a(1166),Y=[{value:"all",label:"All"},{value:"acceptsMarketing",label:"Accepts Marketing"},{value:"isProspect",label:"Prospect"},{value:"isReturning",label:"Returning"}],Z=[{value:"updatedAt|desc",label:"Last update (newest first)"},{value:"updatedAt|asc",label:"Last update (oldest first)"},{value:"orders|desc",label:"Total orders (high to low)"},{value:"orders|asc",label:"Total orders (low to high)"}];function _(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function ee(e,t){var a=t.split("|"),r=Object(n.a)(a,2),o=r[0],c=function(e,t){return"desc"===e?function(e,a){return _(e,a,t)}:function(e,a){return-_(e,a,t)}}(r[1],o),l=e.map((function(e,t){return[e,t]}));return l.sort((function(e,t){var a=c(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),l.map((function(e){return e[0]}))}var te=Object(c.a)((function(e){return{root:{},queryField:{width:500},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));function ae(e){var t=e.className,a=e.customers,c=Object(p.a)(e,["className","customers"]),l=te(),s=Object(r.useState)("all"),u=Object(n.a)(s,2),m=u[0],v=u[1],b=Object(r.useState)([]),y=Object(n.a)(b,2),j=y[0],k=y[1],w=Object(r.useState)(0),x=Object(n.a)(w,2),S=x[0],z=x[1],N=Object(r.useState)(10),_=Object(n.a)(N,2),ae=_[0],ne=_[1],re=Object(r.useState)(""),oe=Object(n.a)(re,2),ce=oe[0],le=oe[1],ie=Object(r.useState)(Z[0].value),se=Object(n.a)(ie,2),ue=se[0],me=se[1],pe=Object(r.useState)({isProspect:null,isReturning:null,acceptsMarketing:null}),de=Object(n.a)(pe,2),fe=de[0],ve=de[1],be=function(e){k(e.target.checked?a.map((function(e){return e.id})):[])},ge=function(e,t,a){return e.filter((function(e){var n=!0;if(t){var r=!1;["email","name"].forEach((function(a){e[a].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(n=!1)}return Object.keys(a).forEach((function(t){var r=a[t];r&&e[t]!==r&&(n=!1)})),n}))}(a,ce,fe),he=function(e,t,a){return e.slice(t*a,t*a+a)}(ee(ge,ue),S,ae),Ee=j.length>0,Oe=j.length>0&&j.length<a.length,ye=j.length===a.length;return o.a.createElement(L.a,Object.assign({className:Object(f.default)(l.root,t)},c),o.a.createElement(R.a,{onChange:function(e,t){var a=Object(C.a)(Object(C.a)({},fe),{},{isProspect:null,isReturning:null,acceptsMarketing:null});"all"!==t&&(a[t]=!0),ve(a),k([]),v(t)},scrollButtons:"auto",textColor:"secondary",value:m,variant:"scrollable"},Y.map((function(e){return o.a.createElement(A.a,{key:e.value,value:e.value,label:e.label})}))),o.a.createElement(B.a,null),o.a.createElement(i.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},o.a.createElement(T.a,{className:l.queryField,InputProps:{startAdornment:o.a.createElement(M.a,{position:"start"},o.a.createElement(O.a,{fontSize:"small",color:"action"},o.a.createElement(G.a,null)))},onChange:function(e){e.persist(),le(e.target.value)},placeholder:"Search customers",value:ce,variant:"outlined"}),o.a.createElement(i.a,{flexGrow:1}),o.a.createElement(T.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),me(e.target.value)},select:!0,SelectProps:{native:!0},value:ue,variant:"outlined"},Z.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.label)})))),Ee&&o.a.createElement("div",{className:l.bulkOperations},o.a.createElement("div",{className:l.bulkActions},o.a.createElement(H.a,{checked:ye,indeterminate:Oe,onChange:be}),o.a.createElement(E.a,{variant:"outlined",className:l.bulkAction},"Delete"),o.a.createElement(E.a,{variant:"outlined",className:l.bulkAction},"Edit"))),o.a.createElement(I.a,null,o.a.createElement(i.a,{minWidth:700},o.a.createElement(W.a,null,o.a.createElement(V.a,null,o.a.createElement($.a,null,o.a.createElement(D.a,{padding:"checkbox"},o.a.createElement(H.a,{checked:ye,indeterminate:Oe,onChange:be})),o.a.createElement(D.a,null,"Name"),o.a.createElement(D.a,null,"Location"),o.a.createElement(D.a,null,"Orders"),o.a.createElement(D.a,null,"Spent"),o.a.createElement(D.a,{align:"right"},"Actions"))),o.a.createElement(q.a,null,he.map((function(e){var t=j.includes(e.id);return o.a.createElement($.a,{hover:!0,key:e.id,selected:t},o.a.createElement(D.a,{padding:"checkbox"},o.a.createElement(H.a,{checked:t,onChange:function(t){return a=e.id,void(j.includes(a)?k((function(e){return e.filter((function(e){return e!==a}))})):k((function(e){return[].concat(Object(P.a)(e),[a])})));var a},value:t})),o.a.createElement(D.a,null,o.a.createElement(i.a,{display:"flex",alignItems:"center"},o.a.createElement(F.a,{className:l.avatar,src:e.avatar},Object(X.a)(e.name)),o.a.createElement("div",null,o.a.createElement(g.a,{color:"inherit",component:d.a,to:"/app/management/customers/1",variant:"h6"},e.name),o.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.email)))),o.a.createElement(D.a,null,e.location),o.a.createElement(D.a,null,e.orders),o.a.createElement(D.a,null,e.currency,e.spent),o.a.createElement(D.a,{align:"right"},o.a.createElement(J.a,{component:d.a,to:"/app/management/customers/1/edit"},o.a.createElement(O.a,{fontSize:"small"},o.a.createElement(K.a,null))),o.a.createElement(J.a,{component:d.a,to:"/app/management/customers/1"},o.a.createElement(O.a,{fontSize:"small"},o.a.createElement(Q.a,null)))))})))))),o.a.createElement(U.a,{component:"div",count:ge.length,onChangePage:function(e,t){z(t)},onChangeRowsPerPage:function(e){ne(e.target.value)},page:S,rowsPerPage:ae,rowsPerPageOptions:[5,10,25]}))}ae.defaultProps={customers:[]};var ne=ae,re=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=re(),t=Object(m.a)(),a=Object(r.useState)(null),c=Object(n.a)(a,2),p=c[0],d=c[1],f=Object(r.useCallback)((function(){s.a.get("/api/management/customers").then((function(e){t.current&&d(e.data.customers)}))}),[t]);return Object(r.useEffect)((function(){f()}),[f]),p?o.a.createElement(u.a,{className:e.root,title:"Customer List"},o.a.createElement(l.a,{maxWidth:!1},o.a.createElement(z,null),p&&o.a.createElement(i.a,{mt:3},o.a.createElement(ne,{customers:p})))):null}}}]);
//# sourceMappingURL=29.86c2f225.chunk.js.map