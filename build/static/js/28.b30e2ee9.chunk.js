(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[28],{1160:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1170:function(e,t,a){"use strict";var n=a(57),r=a(24),l=a(0),o=a.n(l),c=a(4),i=a(603),s=a(27),u=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));function m(e){var t=e.className,a=e.color,l=e.children,i=(e.style,Object(r.a)(e,["className","color","children","style"])),s=u();return o.a.createElement("span",Object.assign({className:Object(c.default)(s.root,Object(n.a)({},s[a],a),t)},i),l)}m.defaultProps={className:"",color:"secondary"},t.a=m},1203:function(e,t,a){"use strict";var n=a(1),r=a(5),l=a(0),o=(a(2),a(4)),c=a(336),i=a(190),s=Object(i.a)(l.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(i.a)(l.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=a(27),p=Object(i.a)(l.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),d=a(10),f=a(7),b=l.createElement(u,null),v=l.createElement(s,null),g=l.createElement(p,null),y=l.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?b:a,s=e.classes,u=e.color,m=void 0===u?"secondary":u,p=e.icon,f=void 0===p?v:p,y=e.indeterminate,h=void 0!==y&&y,O=e.indeterminateIcon,E=void 0===O?g:O,j=e.inputProps,k=e.size,w=void 0===k?"medium":k,x=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=h?E:f,P=h?E:i;return l.createElement(c.a,Object(n.a)({type:"checkbox",classes:{root:Object(o.default)(s.root,s["color".concat(Object(d.a)(m))],h&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":h},j),icon:l.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===w?w:S.props.fontSize}),checkedIcon:l.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===w?w:P.props.fontSize}),ref:t},x))}));t.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},1247:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,o=void 0===l?24:l,s=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="PlusCircle",t.a=s},1250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,o=void 0===l?24:l,s=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="ArrowRight",t.a=s},1326:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,o=void 0===l?24:l,s=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.a.createElement("polyline",{points:"17 8 12 3 7 8"}),r.a.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="Upload",t.a=s},1327:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,o=void 0===l?24:l,s=i(e,["color","size"]);return r.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.a.createElement("polyline",{points:"7 10 12 15 17 10"}),r.a.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="Download",t.a=s},2210:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(0),l=a.n(r),o=a(603),c=a(1143),i=a(1151),s=a(18),u=a(332),m=a(1160),p=a(24),d=a(29),f=a(4),b=a(1144),v=a(1228),g=a(1126),y=a(126),h=a(1110),O=a(113),E=a(1326),j=a(1327),k=a(1247),w=a(1163),x=a.n(w),S=Object(o.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var P=function(e){var t=e.className,a=Object(p.a)(e,["className"]),n=S();return l.a.createElement(b.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(f.default)(n.root,t)},a),l.a.createElement(b.a,{item:!0},l.a.createElement(v.a,{separator:l.a.createElement(x.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:d.a},"Dashboard"),l.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app/management",component:d.a},"Management"),l.a.createElement(y.a,{variant:"body1",color:"textPrimary"},"Products")),l.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"All Products"),l.a.createElement(i.a,{mt:2},l.a.createElement(h.a,{className:n.action},l.a.createElement(O.a,{fontSize:"small",className:n.actionIcon},l.a.createElement(E.a,null)),"Import"),l.a.createElement(h.a,{className:n.action},l.a.createElement(O.a,{fontSize:"small",className:n.actionIcon},l.a.createElement(j.a,null)),"Export"))),l.a.createElement(b.a,{item:!0},l.a.createElement(h.a,{color:"secondary",variant:"contained",className:n.action,component:d.a,to:"/app/management/products/create"},l.a.createElement(O.a,{fontSize:"small",className:n.actionIcon},l.a.createElement(k.a,null)),"New Product")))},C=a(53),z=a(42),N=a(192),I=a.n(N),L=a(1186),A=a(1133),B=a(1134),T=a(1138),F=a(1203),R=a(1421),W=a(1422),H=a(1423),M=a(1424),D=a(1425),V=a(1072),$=a(2226),_=a(1131),q=a(2),G=a.n(q);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var K=Object(r.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,c=U(e,["color","size"]);return l.a.createElement("svg",J({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),l.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.a.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.a.createElement("polyline",{points:"21 15 16 10 5 21"}))}));K.propTypes={color:G.a.string,size:G.a.oneOfType([G.a.string,G.a.number])},K.displayName="Image";var Q=K,X=a(1631),Y=a(1250),Z=a(1170),ee=[{id:"all",name:"All"},{id:"dress",name:"Dress"},{id:"jewelry",name:"Jewelry"},{id:"blouse",name:"Blouse"},{id:"beauty",name:"Beauty"}],te=[{id:"all",name:"All"},{id:"available",name:"Available"},{id:"unavailable",name:"Unavailable"}],ae=[{value:"updatedAt|desc",label:"Last update (newest first)"},{value:"updatedAt|asc",label:"Last update (oldest first)"},{value:"createdAt|desc",label:"Creation date (newest first)"},{value:"createdAt|asc",label:"Creation date (oldest first)"}];var ne=Object(o.a)((function(e){return{root:{},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},queryField:{width:500},categoryField:{flexBasis:200},availabilityField:{marginLeft:e.spacing(2),flexBasis:200},stockField:{marginLeft:e.spacing(2)},shippableField:{marginLeft:e.spacing(2)},imageCell:{fontSize:0,width:68,flexBasis:68,flexGrow:0,flexShrink:0},image:{height:68,width:68}}}));function re(e){var t=e.className,a=e.products,o=Object(p.a)(e,["className","products"]),c=ne(),s=Object(r.useState)([]),u=Object(n.a)(s,2),m=u[0],b=u[1],v=Object(r.useState)(0),y=Object(n.a)(v,2),E=y[0],j=y[1],k=Object(r.useState)(10),w=Object(n.a)(k,2),x=w[0],S=w[1],P=Object(r.useState)(""),N=Object(n.a)(P,2),q=N[0],G=N[1],J=Object(r.useState)(ae[0].value),U=Object(n.a)(J,2),K=U[0],re=U[1],le=Object(r.useState)({category:null,availability:null,inStock:null,isShippable:null}),oe=Object(n.a)(le,2),ce=oe[0],ie=oe[1],se=function(e){b(e.target.checked?a.map((function(e){return e.id})):[])},ue=function(e,t,a){return e.filter((function(e){var n=!0;return t&&!e.name.toLowerCase().includes(t.toLowerCase())&&(n=!1),a.category&&e.category!==a.category&&(n=!1),a.availability&&("available"!==a.availability||e.isAvailable||(n=!1),"unavailable"===a.availability&&e.isAvailable&&(n=!1)),a.inStock&&!["in_stock","limited"].includes(e.inventoryType)&&(n=!1),a.isShippable&&!e.isShippable&&(n=!1),n}))}(a,q,ce),me=function(e,t,a){return e.slice(t*a,t*a+a)}(ue,E,x),pe=m.length>0,de=m.length>0&&m.length<a.length,fe=m.length===a.length;return l.a.createElement(L.a,Object.assign({className:Object(f.default)(c.root,t)},o),l.a.createElement(i.a,{p:2},l.a.createElement(i.a,{display:"flex",alignItems:"center"},l.a.createElement(A.a,{className:c.queryField,InputProps:{startAdornment:l.a.createElement(B.a,{position:"start"},l.a.createElement(O.a,{fontSize:"small",color:"action"},l.a.createElement(_.a,null)))},onChange:function(e){e.persist(),G(e.target.value)},placeholder:"Search products",value:q,variant:"outlined"}),l.a.createElement(i.a,{flexGrow:1}),l.a.createElement(A.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),re(e.target.value)},select:!0,SelectProps:{native:!0},value:K,variant:"outlined"},ae.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)})))),l.a.createElement(i.a,{mt:3,display:"flex",alignItems:"center"},l.a.createElement(A.a,{className:c.categoryField,label:"Category",name:"category",onChange:function(e){e.persist();var t=null;"all"!==e.target.value&&(t=e.target.value),ie((function(e){return Object(z.a)(Object(z.a)({},e),{},{category:t})}))},select:!0,SelectProps:{native:!0},value:ce.category||"all",variant:"outlined"},ee.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement(A.a,{className:c.availabilityField,label:"Availability",name:"availability",onChange:function(e){e.persist();var t=null;"all"!==e.target.value&&(t=e.target.value),ie((function(e){return Object(z.a)(Object(z.a)({},e),{},{availability:t})}))},select:!0,SelectProps:{native:!0},value:ce.availability||"all",variant:"outlined"},te.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement(T.a,{className:c.stockField,control:l.a.createElement(F.a,{checked:!!ce.inStock,onChange:function(e){e.persist();var t=null;e.target.checked&&(t=!0),ie((function(e){return Object(z.a)(Object(z.a)({},e),{},{inStock:t})}))},name:"inStock"}),label:"In Stock"}),l.a.createElement(T.a,{className:c.shippableField,control:l.a.createElement(F.a,{checked:!!ce.isShippable,onChange:function(e){e.persist();var t=null;e.target.checked&&(t=!0),ie((function(e){return Object(z.a)(Object(z.a)({},e),{},{isShippable:t})}))},name:"Shippable"}),label:"Shippable"}))),pe&&l.a.createElement("div",{className:c.bulkOperations},l.a.createElement("div",{className:c.bulkActions},l.a.createElement(F.a,{checked:fe,indeterminate:de,onChange:se}),l.a.createElement(h.a,{variant:"outlined",className:c.bulkAction},"Delete"),l.a.createElement(h.a,{variant:"outlined",className:c.bulkAction},"Edit"))),l.a.createElement(I.a,null,l.a.createElement(i.a,{minWidth:1200},l.a.createElement(R.a,null,l.a.createElement(W.a,null,l.a.createElement(H.a,null,l.a.createElement(M.a,{padding:"checkbox"},l.a.createElement(F.a,{checked:fe,indeterminate:de,onChange:se})),l.a.createElement(M.a,null),l.a.createElement(M.a,null,"Name"),l.a.createElement(M.a,null,"Invetory"),l.a.createElement(M.a,null,"Details"),l.a.createElement(M.a,null,"Attributes"),l.a.createElement(M.a,null,"Price"),l.a.createElement(M.a,{align:"right"},"Actions"))),l.a.createElement(D.a,null,me.map((function(e){var t=m.includes(e.id);return l.a.createElement(H.a,{hover:!0,key:e.id,selected:t},l.a.createElement(M.a,{padding:"checkbox"},l.a.createElement(F.a,{checked:t,onChange:function(t){return a=e.id,void(m.includes(a)?b((function(e){return e.filter((function(e){return e!==a}))})):b((function(e){return[].concat(Object(C.a)(e),[a])})));var a},value:t})),l.a.createElement(M.a,{className:c.imageCell},e.image?l.a.createElement("img",{alt:"Product",src:e.image,className:c.image}):l.a.createElement(i.a,{p:2,bgcolor:"background.dark"},l.a.createElement(O.a,null,l.a.createElement(Q,null)))),l.a.createElement(M.a,null,l.a.createElement(g.a,{variant:"subtitle2",color:"textPrimary",component:d.a,underline:"none",to:"#"},e.name)),l.a.createElement(M.a,null,function(e){var t={in_stock:{text:"In Stock",color:"success"},out_of_stock:{text:"Out of Stock",color:"error"},limited:{text:"Limited",color:"warning"}}[e],a=t.text,n=t.color;return l.a.createElement(Z.a,{color:n},a)}(e.inventoryType)),l.a.createElement(M.a,null,e.quantity," ","in stock",e.variants>1&&" in ".concat(e.variants," variants")),l.a.createElement(M.a,null,e.attributes.map((function(e){return e}))),l.a.createElement(M.a,null,e.currency,e.price.toFixed(2)),l.a.createElement(M.a,{align:"right"},l.a.createElement(V.a,null,l.a.createElement(O.a,{fontSize:"small"},l.a.createElement(X.a,null))),l.a.createElement(V.a,null,l.a.createElement(O.a,{fontSize:"small"},l.a.createElement(Y.a,null)))))})))),l.a.createElement($.a,{component:"div",count:ue.length,onChangePage:function(e,t){j(t)},onChangeRowsPerPage:function(e){S(e.target.value)},page:E,rowsPerPage:x,rowsPerPageOptions:[5,10,25]}))))}re.defaultProps={products:[]};var le=re,oe=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));t.default=function(){var e=oe(),t=Object(m.a)(),a=Object(r.useState)(null),o=Object(n.a)(a,2),p=o[0],d=o[1],f=Object(r.useCallback)((function(){s.a.get("/api/management/products").then((function(e){t.current&&d(e.data.products)}))}),[t]);return Object(r.useEffect)((function(){f()}),[f]),p?l.a.createElement(u.a,{className:e.root,title:"Product List"},l.a.createElement(c.a,{maxWidth:!1},l.a.createElement(P,null),p&&l.a.createElement(i.a,{mt:3},l.a.createElement(le,{products:p})))):null}}}]);
//# sourceMappingURL=28.b30e2ee9.chunk.js.map