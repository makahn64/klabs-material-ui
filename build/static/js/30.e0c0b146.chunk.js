(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[30],{1186:function(e,a,t){"use strict";var r=t(1),n=t(5),o=t(0),l=(t(2),t(4)),c=t(246),i=t(7),s=o.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,d=Object(n.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(r.a)({className:Object(l.default)(t.root,i),elevation:m?8:1,ref:a},d))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1198:function(e,a,t){"use strict";var r=t(1),n=t(5),o=t(0),l=(t(2),t(4)),c=t(7),i=o.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.component,s=void 0===i?"div":i,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(l.default)(t.root,c),ref:a},m))}));a.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1203:function(e,a,t){"use strict";var r=t(1),n=t(5),o=t(0),l=(t(2),t(4)),c=t(336),i=t(190),s=Object(i.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(27),p=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=t(10),f=t(7),h=o.createElement(m,null),b=o.createElement(s,null),v=o.createElement(p,null),g=o.forwardRef((function(e,a){var t=e.checkedIcon,i=void 0===t?h:t,s=e.classes,m=e.color,d=void 0===m?"secondary":m,p=e.icon,f=void 0===p?b:p,g=e.indeterminate,y=void 0!==g&&g,E=e.indeterminateIcon,O=void 0===E?v:E,k=e.inputProps,C=e.size,j=void 0===C?"medium":C,x=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=y?O:f,S=y?O:i;return o.createElement(c.a,Object(r.a)({type:"checkbox",classes:{root:Object(l.default)(s.root,s["color".concat(Object(u.a)(d))],y&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(r.a)({"data-indeterminate":y},k),icon:o.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===j?j:N.props.fontSize}),checkedIcon:o.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===j?j:S.props.fontSize}),ref:a},x))}));a.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},1206:function(e,a,t){"use strict";var r=t(1),n=t(5),o=t(0),l=(t(2),t(4)),c=t(7),i=t(126),s=o.forwardRef((function(e,a){var t=e.action,c=e.avatar,s=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,u=e.disableTypography,f=void 0!==u&&u,h=e.subheader,b=e.subheaderTypographyProps,v=e.title,g=e.titleTypographyProps,y=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=v;null==E||E.type===i.a||f||(E=o.createElement(i.a,Object(r.a)({variant:c?"body2":"h5",className:s.title,component:"span",display:"block"},g),E));var O=h;return null==O||O.type===i.a||f||(O=o.createElement(i.a,Object(r.a)({variant:c?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},b),O)),o.createElement(p,Object(r.a)({className:Object(l.default)(s.root,m),ref:a},y),c&&o.createElement("div",{className:s.avatar},c),o.createElement("div",{className:s.content},E,O),t&&o.createElement("div",{className:s.action},t))}));a.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1214:function(e,a,t){"use strict";a.a=function(e){return new Promise((function(a){return setTimeout(a,e)}))}},2148:function(e,a,t){"use strict";var r=t(5),n=t(1),o=t(0),l=(t(2),t(4)),c=t(27),i=t(7),s=t(246),m=t(190),d=Object(m.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),p=Object(m.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),u=Object(m.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),f=Object(m.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),h=Object(m.a)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),b=t(1072),v=t(10),g={success:o.createElement(d,{fontSize:"inherit"}),warning:o.createElement(p,{fontSize:"inherit"}),error:o.createElement(u,{fontSize:"inherit"}),info:o.createElement(f,{fontSize:"inherit"})},y=o.createElement(h,{fontSize:"small"}),E=o.forwardRef((function(e,a){var t=e.action,c=e.children,i=e.classes,m=e.className,d=e.closeText,p=void 0===d?"Close":d,u=e.color,f=e.icon,h=e.iconMapping,E=void 0===h?g:h,O=e.onClose,k=e.role,C=void 0===k?"alert":k,j=e.severity,x=void 0===j?"success":j,N=e.variant,S=void 0===N?"standard":N,w=Object(r.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(s.a,Object(n.a)({role:C,square:!0,elevation:0,className:Object(l.default)(i.root,i["".concat(S).concat(Object(v.a)(u||x))],m),ref:a},w),!1!==f?o.createElement("div",{className:i.icon},f||E[x]||g[x]):null,o.createElement("div",{className:i.message},c),null!=t?o.createElement("div",{className:i.action},t):null,null==t&&O?o.createElement("div",{className:i.action},o.createElement(b.a,{size:"small","aria-label":p,title:p,color:"inherit",onClick:O},y)):null)}));a.a=Object(i.a)((function(e){var a="light"===e.palette.type?c.a:c.e,t="light"===e.palette.type?c.e:c.a;return{root:Object(n.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:a(e.palette.success.main,.6),backgroundColor:t(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:a(e.palette.info.main,.6),backgroundColor:t(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:a(e.palette.warning.main,.6),backgroundColor:t(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:a(e.palette.error.main,.6),backgroundColor:t(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:a(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:a(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:a(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:a(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(E)},2221:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(29),l=t(603),c=t(1143),i=t(1228),s=t(1126),m=t(126),d=t(1151),p=t(1144),u=t(1163),f=t.n(u),h=t(332),b=t(100),v=t.n(b),g=t(160),y=t(38),E=t(1240),O=t(1273),k=t(1186),C=t(1206),j=t(1118),x=t(1198),N=t(1135),S=t(1133),w=t(1203),z=t(1080),M=t(1110),T=t(2148),B=t(1214);var L=function(){var e=Object(r.useState)(!0),a=Object(y.a)(e,2),t=a[0],o=a[1];return n.a.createElement(O.a,{initialValues:{email:"johnnydoe@yahoo.com",firstName:"John",lastName:"Doe",password:"thisisasecuredpassword",policy:!1},validationSchema:E.f().shape({email:E.g().email().required("Required"),firstName:E.g().required("Required"),lastName:E.g().required("Required"),password:E.g().min(7,"Must be at least 7 characters").max(255).required("Required"),policy:E.c().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(g.a)(v.a.mark((function e(a,t){var r,n,o,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,n=t.setErrors,o=t.setStatus,l=t.setSubmitting,e.prev=1,e.next=4,Object(B.a)(1e3);case 4:r(),o({success:!0}),l(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),o({success:!1}),n({submit:e.t0.message}),l(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,r=e.handleBlur,l=e.handleChange,c=e.handleSubmit,i=e.isSubmitting,u=e.touched,f=e.values;return n.a.createElement(k.a,null,n.a.createElement(C.a,{title:"Basic Form"}),n.a.createElement(j.a,null),n.a.createElement(x.a,null,t&&n.a.createElement(d.a,{mb:3},n.a.createElement(T.a,{onClose:function(){return o(!1)},severity:"info"},"This is an info alert - check it out!")),i?n.a.createElement(d.a,{display:"flex",justifyContent:"center",my:5},n.a.createElement(N.a,null)):n.a.createElement("form",{onSubmit:c},n.a.createElement(p.a,{container:!0,spacing:2},n.a.createElement(p.a,{item:!0,md:6,xs:12},n.a.createElement(S.a,{error:Boolean(u.firstName&&a.firstName),fullWidth:!0,helperText:u.firstName&&a.firstName,label:"First Name",name:"firstName",onBlur:r,onChange:l,value:f.firstName,variant:"outlined"})),n.a.createElement(p.a,{item:!0,md:6,xs:12},n.a.createElement(S.a,{error:Boolean(u.lastName&&a.lastName),fullWidth:!0,helperText:u.lastName&&a.lastName,label:"Last Name",name:"lastName",onBlur:r,onChange:l,value:f.lastName,variant:"outlined"}))),n.a.createElement(d.a,{mt:2},n.a.createElement(S.a,{error:Boolean(u.email&&a.email),fullWidth:!0,helperText:u.email&&a.email,label:"Email Address",name:"email",onBlur:r,onChange:l,type:"email",value:f.email,variant:"outlined"})),n.a.createElement(d.a,{mt:2},n.a.createElement(S.a,{error:Boolean(u.password&&a.password),fullWidth:!0,helperText:u.password&&a.password,label:"Password",name:"password",onBlur:r,onChange:l,type:"password",value:f.password,variant:"outlined"})),n.a.createElement(d.a,{alignItems:"center",display:"flex",mt:2,ml:-1},n.a.createElement(w.a,{checked:f.policy,name:"policy",onChange:l}),n.a.createElement(m.a,{variant:"body2",color:"textSecondary"},"I have read the"," ",n.a.createElement(s.a,{component:"a",href:"#",color:"secondary"},"Terms and Conditions"))),Boolean(u.policy&&a.policy)&&n.a.createElement(z.a,{error:!0},a.policy),n.a.createElement(d.a,{mt:2},n.a.createElement(M.a,{color:"secondary",disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign up")))))}))},W=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=W();return n.a.createElement(h.a,{className:e.root,title:"Formik Form"},n.a.createElement(c.a,{maxWidth:"lg"},n.a.createElement(i.a,{separator:n.a.createElement(f.a,{fontSize:"small"}),"aria-label":"breadcrumb"},n.a.createElement(s.a,{variant:"body1",color:"inherit",to:"/app",component:o.a},"Dashboard"),n.a.createElement(m.a,{variant:"body1",color:"textPrimary"},"Forms")),n.a.createElement(m.a,{variant:"h3",color:"textPrimary"},"Formik"),n.a.createElement(d.a,{mt:3},n.a.createElement(p.a,{container:!0},n.a.createElement(p.a,{item:!0,xs:12,md:6},n.a.createElement(L,null))))))}}}]);
//# sourceMappingURL=30.e0c0b146.chunk.js.map