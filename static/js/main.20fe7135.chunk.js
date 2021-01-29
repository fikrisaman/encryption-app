(this["webpackJsonpencryption-app"]=this["webpackJsonpencryption-app"]||[]).push([[0],{12:function(e,t,n){e.exports={Form:"Form_Form__pxJHo",infoBtn:"Form_infoBtn__-83v0"}},15:function(e,t,n){e.exports={Introduction:"Introduction_Introduction__2ChYf"}},17:function(e,t,n){e.exports={Result:"Result_Result__1G9F4"}},18:function(e,t,n){e.exports={App:"App_App__1gHuL"}},19:function(e,t,n){e.exports={InfoBox:"InfoBox_InfoBox__1yr8N"}},20:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2kFyj"}},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),a=n.n(o),c=n(4),s=n.n(c),i=(n(27),n(15)),u=n.n(i),l=function(){return Object(r.jsxs)("div",{className:u.a.Introduction,children:[Object(r.jsx)("header",{children:"Simple encryption app"}),Object(r.jsx)("p",{children:"This app encrypts string/text based on a random generated key"})]})},p=n(2),d=n(21),h=n(5),b=n(6),j=n(9),x=n(8),f=n(12),O=n.n(f),y=n(3),m="ENCRYPT_TEXT",v="STORE_RANDOM_KEY",_="STRING_NOT_VALID",w="NO_MORE_NUMBER",N="SHOW_INFO",g=["a","e","i","o","u"],T=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],k=function(e){Object(j.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={text:{value:"",randKey:null,encText:"",valid:!1}},e.generateKey=function(){var t=Math.floor(89*Math.random()+11);return e.props.keyArr.includes(t)?e.props.keyArr.length<89?t=e.generateKey():-1:t},e.convertAlphabet=function(e,t,n,r,o,a,c){return(t=n+(a?r:o))>T.length?(t-=T.length,c?T[t]:T[t].toLowerCase()):t===T.length?(t-=1,c?T[t]:T[t].toLowerCase()):c?T[t]:T[t].toLowerCase()},e.encryptHandler=function(t,n){var r=n.toString().split(""),o=parseInt(r[0]),a=parseInt(r[1]),c=/[A-Z]/;return Object(d.a)(t).map((function(t){var n=T.indexOf(t.toUpperCase());return c.test(t)?g.includes(t.toLowerCase())?e.convertAlphabet(t,0,n,o,a,!0,!0):e.convertAlphabet(t,0,n,o,a,!1,!0):" "===t?t:g.includes(t)?e.convertAlphabet(t,0,n,o,a,!0,!1):e.convertAlphabet(t,0,n,o,a,!1,!1)})).join("")},e.checkValidity=function(e){return/^[a-zA-Z](?!.* {2})[a-zA-Z ]*$/.test(e)},e.inputChangedHandler=function(t){var n=Object(p.a)(Object(p.a)({},e.state.text),{},{value:t.target.value});e.setState({text:n})},e.submitHandler=function(t){t.preventDefault();var n=Object(p.a)({},e.state.text);if(e.setState({text:{value:""}}),n.valid=e.checkValidity(n.value),n.valid){if(n.randKey=e.generateKey(),-1===n.randKey)return e.props.onNoMoreNumber(),-1;e.props.storeRandomKey(n.randKey),n.encText=e.encryptHandler(n.value,n.randKey),e.props.onEncryptText(n.value,n.encText,n.randKey)}else e.props.onStringNotValid()},e}return Object(b.a)(n,[{key:"render",value:function(){var e=null;return this.props.showError?e=Object(r.jsx)("p",{children:"Insert string only, special characters or multiple spaces not allowed"}):this.props.noMoreNumber&&(e=Object(r.jsx)("p",{children:"Sorry! No more number is available \ud83d\ude13"})),Object(r.jsxs)("div",{className:O.a.Form,children:[e,Object(r.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter text here...",onChange:this.inputChangedHandler,disabled:this.props.noMoreNumber,value:this.state.text.value}),Object(r.jsx)("button",{disabled:this.props.noMoreNumber,children:Object(r.jsx)("i",{className:"fas fa-chevron-right"})}),Object(r.jsx)("button",{className:O.a.infoBtn,onClick:this.props.onClickInfo,type:"button",children:Object(r.jsx)("i",{className:"fas fa-question fa-sm"})})]})]})}}]),n}(o.Component),E=Object(y.b)((function(e){return{keyArr:e.keyArr,showError:e.showError,noMoreNumber:e.noMoreNumber}}),(function(e){return{onEncryptText:function(t,n,r){return e({type:m,oriText:t,encText:n,randKey:r})},storeRandomKey:function(t){return e({type:v,randKey:t})},onStringNotValid:function(){return e({type:_})},onNoMoreNumber:function(){return e({type:w})},onClickInfo:function(){return e({type:N})}}}))(k),I=n(17),A=n.n(I),C=function(e){Object(j.a)(n,e);var t=Object(x.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=null;return this.props.showResult&&(e=Object(r.jsxs)("div",{className:A.a.Result,children:[Object(r.jsxs)("p",{children:["Generated key: ",Object(r.jsx)("span",{children:this.props.randKey})]}),Object(r.jsxs)("p",{children:["Original text: ",Object(r.jsx)("span",{children:this.props.oriText})]}),Object(r.jsxs)("p",{children:["Encrypted text: ",Object(r.jsx)("span",{children:this.props.encText})]})]})),e}}]),n}(o.Component),K=Object(y.b)((function(e){return{randKey:e.randKey,oriText:e.text,encText:e.encText,showResult:e.isValid}}))(C),M=n(18),S=n.n(M),B=n(19),R=n.n(B),F=n(20),V=n.n(F),L=function(e){return e.show?Object(r.jsx)("div",{className:V.a.Backdrop,onClick:e.clicked}):null},H=function(e){return e.children},D=Object(y.b)((function(e){return{show:e.showInfo}}),(function(e){return{onClickInfoBox:function(){return e({type:N})}}}))((function(e){return Object(r.jsxs)(H,{children:[Object(r.jsx)(L,{show:e.show,clicked:e.onClickInfoBox}),Object(r.jsx)("div",{className:R.a.InfoBox,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:Object(r.jsxs)("p",{children:["This app generates encrypt texts based on a random genrated number. That number will be a two digit number randomly generated within the range of 11 to 99. ",Object(r.jsx)("br",{}),"The 1st digit indicates the number of characters to move forward for vowel characters, while the 2nd digit for consonant."]})})]})}));var X=function(){return Object(r.jsxs)(H,{children:[Object(r.jsx)(D,{}),Object(r.jsxs)("div",{className:S.a.App,children:[Object(r.jsx)(l,{}),Object(r.jsx)(E,{}),Object(r.jsx)(K,{})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))},U=n(7),G={keyArr:[],text:"",randKey:null,encText:"",isValid:!1,showError:!1,noMoreNumber:!1,showInfo:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(p.a)(Object(p.a)({},e),{},{text:t.oriText,encText:t.encText,randKey:t.randKey,isValid:!0,showError:!1,noMoreNumber:!1});case _:return Object(p.a)(Object(p.a)({},e),{},{isValid:!1,showError:!0,noMoreNumber:!1});case v:return Object(p.a)(Object(p.a)({},e),{},{keyArr:e.keyArr.concat(t.randKey)});case w:return Object(p.a)(Object(p.a)({},e),{},{isValid:!1,showError:!1,noMoreNumber:!0});case N:return Object(p.a)(Object(p.a)({},e),{},{showInfo:!e.showInfo});default:return e}},P=Object(U.b)(J,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(y.a,{store:P,children:Object(r.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[34,1,2]]]);
//# sourceMappingURL=main.20fe7135.chunk.js.map