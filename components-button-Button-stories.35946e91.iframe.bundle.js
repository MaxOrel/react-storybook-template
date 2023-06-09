/*! For license information please see components-button-Button-stories.35946e91.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_example=self.webpackChunkstorybook_example||[]).push([[389],{"./src/components/button/Button.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:function(){return Color},Default:function(){return Default},Sizes:function(){return Sizes},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Color$parameters,_Color$parameters2,_Color$parameters2$do,_Sizes$parameters,_Sizes$parameters2,_Sizes$parameters2$do,clsx_m=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","type","url","rounded","outlined","inverted","light","disabled","onClick"];function Button(_ref){var label=_ref.label,type=_ref.type,url=_ref.url,rounded=_ref.rounded,outlined=_ref.outlined,inverted=_ref.inverted,light=_ref.light,disabled=_ref.disabled,onClick=_ref.onClick,options=_objectWithoutProperties(_ref,_excluded),style=[].concat(_toConsumableArray(Object.values(options)),[rounded?"rounded":void 0,inverted?"inverted":void 0,outlined?"outlined":void 0,light?"light":void 0]).map((function(value){return value?"is-".concat(value):void 0})).filter((function(v){return!!v})),props={disabled:disabled,onClick:onClick};switch(type){case"link":return(0,jsx_runtime.jsx)("a",_objectSpread2(_objectSpread2({},props),{},{href:url,className:clsx_m.apply(void 0,["button"].concat(_toConsumableArray(style))),children:label}));case"static":return(0,jsx_runtime.jsx)("span",{className:clsx_m.apply(void 0,["button is-static"].concat(_toConsumableArray(style))),children:label});default:return(0,jsx_runtime.jsx)("button",_objectSpread2(_objectSpread2({},props),{},{type:type,className:clsx_m.apply(void 0,["button"].concat(_toConsumableArray(style))),children:label}))}}Button.defaultProps={type:"button",url:void 0,rounded:!1,outlined:!1,inverted:!1,light:!1,disabled:!1,color:void 0,size:"normal",display:void 0,onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},description:"",type:{name:"enum",value:[{value:"'link'",computed:!1},{value:"'static'",computed:!1},{value:"'button'",computed:!1},{value:"'submit'",computed:!1}]},required:!1},url:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},outlined:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},inverted:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},light:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},color:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:"'white'",computed:!1},{value:"'light'",computed:!1},{value:"'dark'",computed:!1},{value:"'black'",computed:!1},{value:"'text'",computed:!1},{value:"'ghost'",computed:!1},{value:"'primary'",computed:!1},{value:"'link'",computed:!1},{value:"'info'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'danger'",computed:!1}]},required:!1},size:{defaultValue:{value:"'normal'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'normal'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},display:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",value:[{value:"'responsive'",computed:!1},{value:"'fullwidth'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};var Button_stories={title:"UI/Button",component:Button,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{label:"Button2",type:"button"}},Default=function Default(args){return(0,jsx_runtime.jsx)(Button,_objectSpread2(_objectSpread2({},args),{},{children:"Привет мир!"}))},Color=function Color(args){return(0,jsx_runtime.jsxs)("div",{className:"buttons",children:[(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"white"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"light"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"dark"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"black"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"text"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"ghost"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"primary"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"link"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"info"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"success"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"warning"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({color:"danger"},args))]})},Sizes=function Sizes(args){return(0,jsx_runtime.jsxs)("div",{className:"buttons",children:[(0,jsx_runtime.jsx)(Button,_objectSpread2({size:"small"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({size:"normal"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({size:"medium"},args)),(0,jsx_runtime.jsx)(Button,_objectSpread2({size:"large"},args))]})};Default.parameters=_objectSpread2(_objectSpread2({},Default.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread2({originalSource:"args => <Button {...args}>Привет мир!</Button>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Color.parameters=_objectSpread2(_objectSpread2({},Color.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Color$parameters=Color.parameters)||void 0===_Color$parameters?void 0:_Color$parameters.docs),{},{source:_objectSpread2({originalSource:'args => <div className="buttons">\r\n        <Button color="white" {...args} />\r\n        <Button color="light" {...args} />\r\n        <Button color="dark" {...args} />\r\n        <Button color="black" {...args} />\r\n        <Button color="text" {...args} />\r\n        <Button color="ghost" {...args} />\r\n        <Button color="primary" {...args} />\r\n        <Button color="link" {...args} />\r\n        <Button color="info" {...args} />\r\n        <Button color="success" {...args} />\r\n        <Button color="warning" {...args} />\r\n        <Button color="danger" {...args} />\r\n    </div>'},null===(_Color$parameters2=Color.parameters)||void 0===_Color$parameters2||null===(_Color$parameters2$do=_Color$parameters2.docs)||void 0===_Color$parameters2$do?void 0:_Color$parameters2$do.source)})}),Sizes.parameters=_objectSpread2(_objectSpread2({},Sizes.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Sizes$parameters=Sizes.parameters)||void 0===_Sizes$parameters?void 0:_Sizes$parameters.docs),{},{source:_objectSpread2({originalSource:'args => <div className="buttons">\r\n        <Button size="small" {...args} />\r\n        <Button size="normal" {...args} />\r\n        <Button size="medium" {...args} />\r\n        <Button size="large" {...args} />\r\n    </div>'},null===(_Sizes$parameters2=Sizes.parameters)||void 0===_Sizes$parameters2||null===(_Sizes$parameters2$do=_Sizes$parameters2.docs)||void 0===_Sizes$parameters2$do?void 0:_Sizes$parameters2$do.source)})});var __namedExportsOrder=["Default","Color","Sizes"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"},Color.__docgenInfo={description:"",methods:[],displayName:"Color"},Sizes.__docgenInfo={description:"",methods:[],displayName:"Sizes"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);