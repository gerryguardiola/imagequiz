(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{28:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),c=n.n(i),s=n(20),r=n.n(s),o=(n(28),n(21)),u=n(8),j=n(2),b=n(11),h=n(12),l=n(14),d=n(13),g=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).loginCheck=function(){a.setState({loggedIn:!0})},a.state={loggedIn:!1},a}return Object(h.a)(n,[{key:"render",value:function(){var t="",e=this.props.location;return console.log(this.state.loggedIn),!0!==this.state.loggedIn&&e&&e.state&&e.state.user&&(t=e.state.user,this.loginCheck()),e&&e.state&&e.state.user&&(t=e.state.user),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:""!==t?Object(a.jsxs)("div",{children:[Object(a.jsx)(u.b,{to:"/add",children:"Add Location"})," ",t]}):Object(a.jsx)("div",{children:Object(a.jsx)(u.b,{to:"/login",children:"Login to Continue"})})})})}}]),n}(c.a.Component),O=n(10),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).onSubmit=function(t){a.state.username.trim().length>0&&a.setState({authenticated:!0}),t.preventDefault()},a.onInputChnage=function(t){var e=t.target.value,n=t.target.name;a.setState(Object(O.a)({},n,e))},a.state={username:"",authenticated:!1},a}return Object(h.a)(n,[{key:"render",value:function(){var t={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(a.jsx)(j.a,{to:t}):Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsx)("lable",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChnage}),Object(a.jsx)("button",{type:"submit",children:"Login"})]})})}}]),n}(c.a.Component);var x=function(){return Object(a.jsx)(u.a,{basename:"/imagequiz",children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",render:function(t){return Object(a.jsx)(g,Object(o.a)({},t))}}),Object(a.jsx)(j.b,{path:"/login",children:Object(a.jsx)(m,{})})]})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.1efd2ed0.chunk.js.map