(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[24],{1186:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(2),a(4)),c=a(246),i=a(7),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.raised,d=void 0!==s&&s,m=Object(n.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(r.a)({className:Object(l.default)(a.root,i),elevation:d?8:1,ref:t},m))}));t.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1198:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(2),a(4)),c=a(7),i=o.forwardRef((function(e,t){var a=e.classes,c=e.className,i=e.component,s=void 0===i?"div":i,d=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(l.default)(a.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1215:function(e,t,a){"use strict";var r=a(24),n=a(0),o=a.n(n),l=a(4),c=a(1280),i=a.n(c),s=a(603),d=Object(s.a)((function(e){return{root:{"& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}},stepButton:{"& + &":{marginLeft:e.spacing(2)}}}}));t.a=function(e){var t=e.className,a=Object(r.a)(e,["className"]),n=d();return o.a.createElement(i.a,Object.assign({className:Object(l.default)(n.root,t)},a))}},1322:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(2),a(4)),c=a(190),i=Object(c.a)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=a(7),d=a(27),m=a(16),u=a(10),p=a(330);function b(e){return"Backspace"===e.key||"Delete"===e.key}var f=o.forwardRef((function(e,t){var a=e.avatar,c=e.classes,s=e.className,d=e.clickable,f=e.color,v=void 0===f?"default":f,g=e.component,y=e.deleteIcon,h=e.disabled,O=void 0!==h&&h,j=e.icon,E=e.label,k=e.onClick,x=e.onDelete,C=e.onKeyDown,w=e.onKeyUp,S=e.size,N=void 0===S?"medium":S,L=e.variant,P=void 0===L?"default":L,z=Object(n.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),D=o.useRef(null),I=Object(m.a)(D,t),T=function(e){e.stopPropagation(),x&&x(e)},R=!(!1===d||!k)||d,$="small"===N,B=g||(R?p.a:"div"),q=B===p.a?{component:"div"}:{},M=null;if(x){var W=Object(l.default)("default"!==v&&("default"===P?c["deleteIconColor".concat(Object(u.a)(v))]:c["deleteIconOutlinedColor".concat(Object(u.a)(v))]),$&&c.deleteIconSmall);M=y&&o.isValidElement(y)?o.cloneElement(y,{className:Object(l.default)(y.props.className,c.deleteIcon,W),onClick:T}):o.createElement(i,{className:Object(l.default)(c.deleteIcon,W),onClick:T})}var V=null;a&&o.isValidElement(a)&&(V=o.cloneElement(a,{className:Object(l.default)(c.avatar,a.props.className,$&&c.avatarSmall,"default"!==v&&c["avatarColor".concat(Object(u.a)(v))])}));var F=null;return j&&o.isValidElement(j)&&(F=o.cloneElement(j,{className:Object(l.default)(c.icon,j.props.className,$&&c.iconSmall,"default"!==v&&c["iconColor".concat(Object(u.a)(v))])})),o.createElement(B,Object(r.a)({role:R||x?"button":void 0,className:Object(l.default)(c.root,s,"default"!==v&&[c["color".concat(Object(u.a)(v))],R&&c["clickableColor".concat(Object(u.a)(v))],x&&c["deletableColor".concat(Object(u.a)(v))]],"default"!==P&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[v]],O&&c.disabled,$&&c.sizeSmall,R&&c.clickable,x&&c.deletable),"aria-disabled":!!O||void 0,tabIndex:R||x?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&b(e)&&e.preventDefault(),C&&C(e)},onKeyUp:function(e){e.currentTarget===e.target&&(x&&b(e)?x(e):"Escape"===e.key&&D.current&&D.current.blur()),w&&w(e)},ref:I},q,z),V||F,o.createElement("span",{className:Object(l.default)(c.label,$&&c.labelSmall)},E),M)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(d.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(f)},1851:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(2),l=a.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,o=e.size,l=void 0===o?24:o,s=i(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),n.a.createElement("polyline",{points:"13 2 13 9 20 9"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="File",t.a=s},2006:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(2),l=a.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,o=e.size,l=void 0===o?24:o,s=i(e,["color","size"]);return n.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Plus",t.a=s},2147:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(2),a(4)),c=a(336),i=a(190),s=Object(i.a)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(i.a)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),m=a(7);var u=Object(m.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,r=e.fontSize;return o.createElement("div",{className:Object(l.default)(a.root,t&&a.checked)},o.createElement(s,{fontSize:r}),o.createElement(d,{fontSize:r,className:a.layer}))})),p=a(27),b=a(10),f=a(82);var v=o.createContext();var g=o.createElement(u,{checked:!0}),y=o.createElement(u,null),h=o.forwardRef((function(e,t){var a=e.checked,i=e.classes,s=e.color,d=void 0===s?"secondary":s,m=e.name,u=e.onChange,p=e.size,h=void 0===p?"medium":p,O=Object(n.a)(e,["checked","classes","color","name","onChange","size"]),j=o.useContext(v),E=a,k=Object(f.a)(u,j&&j.onChange),x=m;return j&&("undefined"===typeof E&&(E=j.value===e.value),"undefined"===typeof x&&(x=j.name)),o.createElement(c.a,Object(r.a)({color:d,type:"radio",icon:o.cloneElement(y,{fontSize:"small"===h?"small":"default"}),checkedIcon:o.cloneElement(g,{fontSize:"small"===h?"small":"default"}),classes:{root:Object(l.default)(i.root,i["color".concat(Object(b.a)(d))]),checked:i.checked,disabled:i.disabled},name:x,checked:E,onChange:k,ref:t},O))}));t.a=Object(m.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(h)},2171:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(2),a(4)),c=a(7),i=o.forwardRef((function(e,t){var a=e.active,c=e.alternativeLabel,i=void 0!==c&&c,s=e.classes,d=e.className,m=e.completed,u=e.disabled,p=(e.index,e.orientation),b=void 0===p?"horizontal":p,f=Object(n.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return o.createElement("div",Object(r.a)({className:Object(l.default)(s.root,s[b],d,i&&s.alternativeLabel,a&&s.active,m&&s.completed,u&&s.disabled),ref:t},f),o.createElement("span",{className:Object(l.default)(s.line,{horizontal:s.lineHorizontal,vertical:s.lineVertical}[b])}))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(i)},2172:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(2),a(4)),c=a(7),i=a(246),s=a(2171),d=o.createElement(s.a,null),m=o.forwardRef((function(e,t){var a=e.activeStep,c=void 0===a?0:a,s=e.alternativeLabel,m=void 0!==s&&s,u=e.children,p=e.classes,b=e.className,f=e.connector,v=void 0===f?d:f,g=e.nonLinear,y=void 0!==g&&g,h=e.orientation,O=void 0===h?"horizontal":h,j=Object(n.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),E=o.isValidElement(v)?o.cloneElement(v,{orientation:O}):null,k=o.Children.toArray(u),x=k.map((function(e,t){var a={index:t,active:!1,completed:!1,disabled:!1};return c===t?a.active=!0:!y&&c>t?a.completed=!0:!y&&c<t&&(a.disabled=!0),o.cloneElement(e,Object(r.a)({alternativeLabel:m,connector:E,last:t+1===k.length,orientation:O},a,e.props))}));return o.createElement(i.a,Object(r.a)({square:!0,elevation:0,className:Object(l.default)(p.root,p[O],b,m&&p.alternativeLabel),ref:t},j),x)}));t.a=Object(c.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(m)},2173:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(114),a(2),a(4)),c=a(7),i=o.forwardRef((function(e,t){var a=e.active,c=void 0!==a&&a,i=e.alternativeLabel,s=e.children,d=e.classes,m=e.className,u=e.completed,p=void 0!==u&&u,b=e.connector,f=e.disabled,v=void 0!==f&&f,g=e.expanded,y=void 0!==g&&g,h=e.index,O=e.last,j=e.orientation,E=Object(n.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),k=b?o.cloneElement(b,{orientation:j,alternativeLabel:i,index:h,active:c,completed:p,disabled:v}):null,x=o.createElement("div",Object(r.a)({className:Object(l.default)(d.root,d[j],m,i&&d.alternativeLabel,p&&d.completed),ref:t},E),k&&i&&0!==h?k:null,o.Children.map(s,(function(e){return o.isValidElement(e)?o.cloneElement(e,Object(r.a)({active:c,alternativeLabel:i,completed:p,disabled:v,expanded:y,last:O,icon:h+1,orientation:j},e.props)):null})));return k&&!i&&0!==h?o.createElement(o.Fragment,null,k,x):x}));t.a=Object(c.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(i)},2174:function(e,t,a){"use strict";var r=a(1),n=a(5),o=a(0),l=(a(2),a(4)),c=a(7),i=a(126),s=a(2219),d=o.forwardRef((function(e,t){var a=e.active,c=void 0!==a&&a,d=e.alternativeLabel,m=void 0!==d&&d,u=e.children,p=e.classes,b=e.className,f=e.completed,v=void 0!==f&&f,g=e.disabled,y=void 0!==g&&g,h=e.error,O=void 0!==h&&h,j=(e.expanded,e.icon),E=(e.last,e.optional),k=e.orientation,x=void 0===k?"horizontal":k,C=e.StepIconComponent,w=e.StepIconProps,S=Object(n.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),N=C;return j&&!N&&(N=s.a),o.createElement("span",Object(r.a)({className:Object(l.default)(p.root,p[x],b,y&&p.disabled,m&&p.alternativeLabel,O&&p.error),ref:t},S),j||N?o.createElement("span",{className:Object(l.default)(p.iconContainer,m&&p.alternativeLabel)},o.createElement(N,Object(r.a)({completed:v,active:c,error:O,icon:j},w))):null,o.createElement("span",{className:p.labelContainer},u?o.createElement(i.a,{variant:"body2",component:"span",display:"block",className:Object(l.default)(p.label,m&&p.alternativeLabel,v&&p.completed,c&&p.active,O&&p.error)},u):null,E))}));d.muiName="StepLabel",t.a=Object(c.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(d)},2205:function(e,t,a){"use strict";a.r(t);var r=a(38),n=a(57),o=a(0),l=a.n(o),c=a(4),i=a(29),s=a(7),d=a(2171),m=a(603),u=a(1154),p=a(11),b=a(1143),f=a(1151),v=a(1228),g=a(1126),y=a(126),h=a(246),O=a(1144),j=a(2172),E=a(2173),k=a(2174),x=a(1186),C=a(1198),w=a(1110),S=a(1163),N=a.n(S),L=a(2),P=a.n(L);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var I=Object(o.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,c=D(e,["color","size"]);return l.a.createElement("svg",z({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),l.a.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),l.a.createElement("circle",{cx:"12",cy:"7",r:"4"}))}));I.propTypes={color:P.a.string,size:P.a.oneOfType([P.a.string,P.a.number])},I.displayName="User";var T=I,R=a(1114),$=a(1851);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var M=Object(o.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,c=q(e,["color","size"]);return l.a.createElement("svg",B({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),l.a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}));M.propTypes={color:P.a.string,size:P.a.oneOfType([P.a.string,P.a.number])},M.displayName="Star";var W=M,V=a(332),F=a(100),Y=a.n(F),H=a(160),U=a(24),A=a(2147),K=a(1080),G=[{value:"freelancer",title:"I'm a freelancer",description:"I'm looking for teamates to join in a personal project"},{value:"projectOwner",title:"I\u2019m a project owner",description:"I'm looking for freelancer or contractors to take care of my project"},{value:"affiliate",title:"I want to join affiliate",description:"I'm looking for freelancer or contractors to take care of my project"}],Q=Object(m.a)((function(e){return{root:{},stepButton:{"& + &":{marginLeft:e.spacing(2)}}}}));var J=function(e){var t=e.className,a=e.onBack,n=e.onNext,i=Object(U.a)(e,["className","onBack","onNext"]),s=Q(),d=Object(o.useState)(G[1].value),m=Object(r.a)(d,2),u=m[0],p=m[1],b=Object(o.useState)(!1),v=Object(r.a)(b,2),g=v[0],O=v[1],j=Object(o.useState)(null),E=Object(r.a)(j,2),k=E[0],x=E[1],C=function(){var e=Object(H.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{O(!1),n&&n()}catch(a){x(a.message),O(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("form",Object.assign({onSubmit:C,className:Object(c.default)(s.root,t)},i),l.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"Please select one option"),l.a.createElement(f.a,{mt:2},l.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},"Proin tincidunt lacus sed ante efficitur efficitur. Quisque aliquam fringilla velit sit amet euismod.")),l.a.createElement(f.a,{mt:2},G.map((function(e){return l.a.createElement(h.a,{display:"flex",alignItems:"flex-start",p:2,mb:2,component:f.a,elevation:u===e.value?10:1,key:e.value},l.a.createElement(A.a,{checked:u===e.value,onClick:function(){return t=e.value,void p(t);var t}}),l.a.createElement(f.a,{ml:2},l.a.createElement(y.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},e.title),l.a.createElement(y.a,{variant:"body1",color:"textPrimary"},e.description)))}))),k&&l.a.createElement(f.a,{mt:2},l.a.createElement(K.a,{error:!0},k)),l.a.createElement(f.a,{mt:6,display:"flex"},a&&l.a.createElement(w.a,{onClick:a,size:"large"},"Previous"),l.a.createElement(f.a,{flexGrow:1}),l.a.createElement(w.a,{color:"secondary",disabled:g,type:"submit",variant:"contained",size:"large"},"Next")))},Z=a(53),X=a(1240),_=a(1273),ee=a(1133),te=a(1072),ae=a(113),re=a(1322),ne=a(20),oe=a(1083),le=(a(1),a(5),a(1377)),ce=a(1412),ie=(a(1376),a(58),a(1378)),se=(a(340),a(132),a(1264),a(1265),a(1275),Object(m.a)({toolbar:{flexDirection:"column",alignItems:"flex-start"},toolbarLandscape:{padding:16},dateLandscape:{marginRight:16}},{name:"MuiPickersDatePickerRoot"})),de=function(e){var t=e.date,a=e.views,r=e.setOpenView,n=e.isLandscape,l=e.openView,i=Object(oe.b)(),s=se(),d=Object(o.useMemo)((function(){return Object(ce.d)(a)}),[a]),m=Object(o.useMemo)((function(){return Object(ce.b)(a)}),[a]);return Object(o.createElement)(le.b,{isLandscape:n,className:Object(c.default)(!d&&s.toolbar,n&&s.toolbarLandscape)},Object(o.createElement)(le.c,{variant:d?"h3":"subtitle1",onClick:function(){return r("year")},selected:"year"===l,label:i.getYearText(t)}),!d&&!m&&Object(o.createElement)(le.c,{variant:"h4",selected:"date"===l,onClick:function(){return r("date")},align:n?"left":"center",label:i.getDatePickerHeaderText(t),className:Object(c.default)(n&&s.dateLandscape)}),m&&Object(o.createElement)(le.c,{variant:"h4",onClick:function(){return r("month")},selected:"month"===l,label:i.getMonthText(t)}))};function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ue=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach((function(t){Object(ne.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},ie.c,{openTo:"date",views:["year","date"]});function pe(e){var t=Object(oe.b)();return{getDefaultFormat:function(){return Object(ce.c)(e.views,t)}}}var be=Object(le.g)({useOptions:pe,Input:le.d,useState:le.i,DefaultToolbarComponent:de}),fe=Object(le.g)({useOptions:pe,Input:le.a,useState:le.e,DefaultToolbarComponent:de});be.defaultProps=ue,fe.defaultProps=ue;var ve=a(2006),ge=Object(m.a)((function(e){return{root:{},addTab:{marginLeft:e.spacing(2)},tag:{"& + &":{marginLeft:e.spacing(1)}},datePicker:{"& + &":{marginLeft:e.spacing(2)}}}}));var ye=function(e){var t=e.className,a=e.onBack,n=e.onNext,i=Object(U.a)(e,["className","onBack","onNext"]),s=ge(),d=Object(o.useState)(""),m=Object(r.a)(d,2),u=m[0],p=m[1];return l.a.createElement(_.a,{initialValues:{projectName:"",tags:["Full-Time"]},validationSchema:X.f().shape({projectName:X.g().min(3,"Must be at least 3 characters").max(255).required("Required"),tags:X.a(),startDate:X.d(),endDate:X.d()}),onSubmit:function(){var e=Object(H.a)(Y.a.mark((function e(t,a){var r,o,l;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.setErrors,o=a.setStatus,l=a.setSubmitting;try{o({success:!0}),l(!1),n&&n()}catch(t){r({submit:t.message}),o({success:!1}),l(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var r=e.errors,n=e.handleBlur,o=e.handleChange,d=e.handleSubmit,m=e.isSubmitting,b=e.setFieldValue,v=e.setFieldTouched,g=e.touched,h=e.values;return l.a.createElement("form",Object.assign({onSubmit:d,className:Object(c.default)(s.root,t)},i),l.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"Please select one option"),l.a.createElement(f.a,{mt:2},l.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},"Proin tincidunt lacus sed ante efficitur efficitur. Quisque aliquam fringilla velit sit amet euismod.")),l.a.createElement(f.a,{mt:2},l.a.createElement(ee.a,{error:Boolean(g.projectName&&r.projectName),fullWidth:!0,helperText:g.projectName&&r.projectName,label:"Project Name",name:"projectName",onBlur:n,onChange:o,value:h.projectName,variant:"outlined"}),l.a.createElement(f.a,{mt:3,display:"flex",alignItems:"center"},l.a.createElement(ee.a,{fullWidth:!0,label:"Tags",name:"tags",value:u,onChange:function(e){return p(e.target.value)},variant:"outlined"}),l.a.createElement(te.a,{variant:"contained",className:s.addTab,onClick:function(){u&&(b("tags",[].concat(Object(Z.a)(h.tags),[u])),p(""))}},l.a.createElement(ae.a,null,l.a.createElement(ve.a,null)))),l.a.createElement(f.a,{mt:2},h.tags.map((function(e,t){return l.a.createElement(re.a,{variant:"outlined",key:t,label:e,className:s.tag,onDelete:function(){var t=h.tags.filter((function(t){return t!==e}));b("tags",t)}})}))),Boolean(g.tags&&r.tags)&&l.a.createElement(f.a,{mt:2},l.a.createElement(K.a,{error:!0},r.tags)),l.a.createElement(f.a,{mt:4},l.a.createElement(fe,{className:s.datePicker,label:"Start Date",format:"MM/DD/YYYY",name:"startDate",inputVariant:"outlined",value:h.startDate,onBlur:function(){return v("startDate")},onClose:function(){return v("startDate")},onAccept:function(){return v("startDate")},onChange:function(e){return b("startDate",e)}}),l.a.createElement(fe,{className:s.datePicker,label:"End Date",format:"MM/DD/YYYY",name:"endDate",inputVariant:"outlined",value:h.endDate,onBlur:function(){return v("endDate")},onClose:function(){return v("endDate")},onAccept:function(){return v("endDate")},onChange:function(e){return b("endDate",e)}})),Boolean(g.startDate&&r.startDate)&&l.a.createElement(f.a,{mt:2},l.a.createElement(K.a,{error:!0},r.startDate)),Boolean(g.endDate&&r.endDate)&&l.a.createElement(f.a,{mt:2},l.a.createElement(K.a,{error:!0},r.endDate))),l.a.createElement(f.a,{mt:6,display:"flex"},a&&l.a.createElement(w.a,{onClick:a,size:"large"},"Previous"),l.a.createElement(f.a,{flexGrow:1}),l.a.createElement(w.a,{color:"secondary",disabled:m,type:"submit",variant:"contained",size:"large"},"Next")))}))},he=a(1215),Oe=Object(m.a)((function(){return{root:{},editor:{"& .ql-editor":{height:400}}}}));var je=function(e){var t=e.className,a=e.onBack,n=e.onComplete,i=Object(U.a)(e,["className","onBack","onComplete"]),s=Oe(),d=Object(o.useState)(""),m=Object(r.a)(d,2),u=m[0],p=m[1],b=Object(o.useState)(!1),v=Object(r.a)(b,2),g=v[0],O=v[1],j=Object(o.useState)(null),E=Object(r.a)(j,2),k=E[0],x=E[1],C=function(){var e=Object(H.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{O(!1),n&&n()}catch(a){x(a.message),O(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("form",Object.assign({onSubmit:C,className:Object(c.default)(s.root,t)},i),l.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"Please select one option"),l.a.createElement(f.a,{mt:2},l.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},"Proin tincidunt lacus sed ante efficitur efficitur. Quisque aliquam fringilla velit sit amet euismod.")),l.a.createElement(h.a,{variant:"outlined",component:f.a,mt:2},l.a.createElement(he.a,{handleChange:function(e){p(e)},value:u,className:s.editor})),k&&l.a.createElement(f.a,{mt:2},l.a.createElement(K.a,{error:!0},K.a)),l.a.createElement(f.a,{mt:6,display:"flex"},a&&l.a.createElement(w.a,{onClick:a,size:"large"},"Previous"),l.a.createElement(f.a,{flexGrow:1}),l.a.createElement(w.a,{color:"secondary",disabled:g,type:"submit",variant:"contained",size:"large"},"Complete")))},Ee=[{label:"User Details",icon:T},{label:"Project Details",icon:R.a},{label:"Project Description",icon:$.a}],ke=Object(s.a)((function(e){return{vertical:{marginLeft:19,padding:0},line:{borderColor:e.palette.divider}}}))(d.a),xe=Object(m.a)((function(e){return{root:{},active:{backgroundColor:e.palette.secondary.main,boxShadow:e.shadows[10]},completed:{backgroundColor:e.palette.secondary.main}}}));function Ce(e){var t,a=e.active,r=e.completed,o=e.icon,i=xe(),s=Ee[o-1].icon;return l.a.createElement(u.a,{className:Object(c.default)(i.root,(t={},Object(n.a)(t,i.active,a),Object(n.a)(t,i.completed,r),t))},l.a.createElement(s,{size:"20"}))}var we=Object(m.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},avatar:{backgroundColor:p.a.red[600]}}}));t.default=function(){var e=we(),t=Object(o.useState)(0),a=Object(r.a)(t,2),n=a[0],c=a[1],s=Object(o.useState)(!1),d=Object(r.a)(s,2),m=d[0],p=d[1],S=function(){c((function(e){return e+1}))},L=function(){c((function(e){return e-1}))};return l.a.createElement(V.a,{className:e.root,title:"Project Create"},l.a.createElement(b.a,{maxWidth:"lg"},l.a.createElement(f.a,{mb:3},l.a.createElement(v.a,{separator:l.a.createElement(N.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:i.a},"Dashboard"),l.a.createElement(y.a,{variant:"body1",color:"textPrimary"},"Projects")),l.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"Create Wizard & Process")),m?l.a.createElement(x.a,null,l.a.createElement(C.a,null,l.a.createElement(f.a,{maxWidth:450,mx:"auto"},l.a.createElement(f.a,{display:"flex",justifyContent:"center"},l.a.createElement(u.a,{className:e.avatar},l.a.createElement(W,null))),l.a.createElement(f.a,{mt:2},l.a.createElement(y.a,{variant:"h3",color:"textPrimary",align:"center"},"You are all done!")),l.a.createElement(f.a,{mt:2},l.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary",align:"center"},"Donec ut augue sed nisi ullamcorper posuere sit amet eu mauris. Ut eget mauris scelerisque.")),l.a.createElement(f.a,{mt:2,display:"flex",justifyContent:"center"},l.a.createElement(w.a,{variant:"contained",color:"secondary",component:i.a,to:"/app/projects/1"},"View your project"))))):l.a.createElement(h.a,null,l.a.createElement(O.a,{container:!0},l.a.createElement(O.a,{item:!0,xs:12,md:3},l.a.createElement(j.a,{activeStep:n,connector:l.a.createElement(ke,null),orientation:"vertical",component:f.a,bgcolor:"transparent"},Ee.map((function(e){return l.a.createElement(E.a,{key:e.label},l.a.createElement(k.a,{StepIconComponent:Ce},e.label))})))),l.a.createElement(O.a,{item:!0,xs:12,md:9},l.a.createElement(f.a,{p:3},0===n&&l.a.createElement(J,{onNext:S}),1===n&&l.a.createElement(ye,{onBack:L,onNext:S}),2===n&&l.a.createElement(je,{onBack:L,onComplete:function(){p(!0)}})))))))}},2219:function(e,t,a){"use strict";var r=a(0),n=(a(2),a(4)),o=a(190),l=Object(o.a)(r.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),c=Object(o.a)(r.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),i=a(7),s=a(113),d=r.createElement("circle",{cx:"12",cy:"12",r:"12"}),m=r.forwardRef((function(e,t){var a=e.completed,o=void 0!==a&&a,i=e.icon,m=e.active,u=void 0!==m&&m,p=e.error,b=void 0!==p&&p,f=e.classes;if("number"===typeof i||"string"===typeof i){var v=Object(n.default)(f.root,u&&f.active,b&&f.error,o&&f.completed);return b?r.createElement(c,{className:v,ref:t}):o?r.createElement(l,{className:v,ref:t}):r.createElement(s.a,{className:v,ref:t},d,r.createElement("text",{className:f.text,x:"12",y:"16",textAnchor:"middle"},i))}return i}));t.a=Object(i.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(m)}}]);
//# sourceMappingURL=24.a04b4285.chunk.js.map