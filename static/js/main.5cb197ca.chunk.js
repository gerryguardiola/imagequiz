(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/cherryblossom.12b6a49b.png"},21:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/daffodil.30bb3c1a.png"},30:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),s=n.n(r),c=n(22),a=n.n(c),o=(n(30),n(23)),j=n(3),u=n(2),b=n(7),l=n(8),h=n(10),d=n(9),O=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(b.a)(this,n),(i=e.call(this,t)).loginCheck=function(){i.setState({loggedIn:!0})},i.state={loggedIn:!1},i}return Object(l.a)(n,[{key:"render",value:function(){var t="",e=this.props.location;return console.log(this.state.loggedIn),!0!==this.state.loggedIn&&e&&e.state&&e.state.user&&(t=e.state.user,this.loginCheck()),e&&e.state&&e.state.user&&(t=e.state.user),Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:""!==t?Object(i.jsxs)("div",{children:[Object(i.jsx)(j.b,{to:"/quiz",children:"Take Image Quiz"})," ",t," ",Object(i.jsx)("br",{}),Object(i.jsx)(j.b,{to:"/display",children:"Display Practicum 5"})]}):Object(i.jsx)("div",{children:Object(i.jsx)(j.b,{to:"/login",children:"Login to Continue"})})})})}}]),n}(s.a.Component),g=n(14),f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(b.a)(this,n),(i=e.call(this,t)).onSubmit=function(t){i.state.username.trim().length>0&&i.setState({authenticated:!0}),t.preventDefault()},i.onInputChnage=function(t){var e=t.target.value,n=t.target.name;i.setState(Object(g.a)({},n,e))},i.state={username:"",authenticated:!1},i}return Object(l.a)(n,[{key:"render",value:function(){var t={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(i.jsx)(u.a,{to:t}):Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(i.jsx)("lable",{children:"Username:"}),Object(i.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChnage}),Object(i.jsx)("button",{type:"submit",children:"Login"})]})})}}]),n}(s.a.Component),m=[["cherryblossom.png"],["daffodil.png"],0],x=[["bat","parrot","rose","cherryblossom","rat","daffodil"]],p=[["rose","parrot","bat","cherryblossom"],["bat","cherryblossom","rat","daffodil"]],v=[["cherry","mouse","cat","lily","daffodil","cherry"]],y=[["mouse","cat","cherry","lily"],["daffodil","rat","cat","cherry"]],C=[["cherryblossom.png","daffodil.png","daisy.jpg","lily.jpg","rose.png","sunflower.png","tulip.png","waterlil.png"]],k=[["cherryblossom","daffodil","daisy","lily","rose","sunflower","tulip","waterlily"]],S={getFlowerDisplay:function(){return C},getNames:function(){return k},change:function(t){m[2]=t},returnVal:function(){return m[2]},getImage:function(){return console.log(m),m[m[2]]},increment:function(){m[3]=m[3]+1,console.log(m[3])},getScore:function(){var t=m[3]/6;return m[3]=0,t},getCherryBlossom:function(){return x},getDaffodil:function(){return v},getCherryOptions:function(t){return t<4?p[0]:p[1]},getDaffodilOptions:function(t){return t<4?y[0]:y[1]}},z=(n(17),n(21),function(t){Object(h.a)(r,t);var e=Object(d.a)(r);function r(t){var n;return Object(b.a)(this,r),(n=e.call(this,t)).setCurr=function(t){n.setState({current:t})},n.state={current:0},n}return Object(l.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(j.b,{to:"/take",onClick:function(){return S.change(0)},children:Object(i.jsx)("img",{src:n(17),alt:"cherryblossom"})}),Object(i.jsx)(j.b,{to:"/daff",onClick:function(){return S.change(1)},children:Object(i.jsx)("img",{src:n(21),alt:"daffodil"})})]})}}]),r}(s.a.Component)),w=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(b.a)(this,n),(i=e.call(this,t)).state={i:0,j:0},i}return Object(l.a)(n,[{key:"grade",value:function(t,e){if(e===t){var n=this.state.i,i=this.state.j;n+=1,i+=1,this.setState({i:n}),this.setState({j:i})}else{n=this.state.i;n+=1,this.setState({i:n})}}},{key:"score",value:function(){var t=S.getScore();this.setState({j:t})}},{key:"render",value:function(){var t=this,e=this.state.i,n=(this.state.j,S.getCherryBlossom()),r=S.getCherryOptions(this.state.i),s="./images/"+n[0][this.state.i]+".png";return Object(i.jsx)("div",{children:6!==e?Object(i.jsxs)("div",{children:[e,Object(i.jsx)("br",{}),s,Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:s,alt:n[0][this.state.i]})," Which word matches the image?",Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[0])},children:r[0]}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[1])},children:r[1]}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[2])},children:r[2]}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[3])},children:r[3]})]}):Object(i.jsxs)("div",{children:["You recieved a score of ",this.state.j,"/6 ",Object(i.jsx)("br",{}),Object(i.jsx)(j.b,{to:"/",children:"Return Home"}),Object(i.jsx)("br",{}),Object(i.jsx)(j.b,{to:"/quiz",children:"Return to Quizzes"}),Object(i.jsx)("br",{})]})})}}]),n}(s.a.Component),D=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(b.a)(this,n),(i=e.call(this,t)).state={i:0,j:0},i}return Object(l.a)(n,[{key:"grade",value:function(t,e){if(e===t){var n=this.state.i,i=this.state.j;n+=1,i+=1,this.setState({i:n}),this.setState({j:i})}else{n=this.state.i;n+=1,this.setState({i:n})}}},{key:"score",value:function(){var t=S.getScore();this.setState({j:t})}},{key:"render",value:function(){var t=this,e=this.state.i,n=(this.state.j,S.getDaffodil()),r=S.getDaffodilOptions(this.state.i),s="./images/"+n[0][this.state.i]+".png";return Object(i.jsx)("div",{children:6!==e?Object(i.jsxs)("div",{children:[e,Object(i.jsx)("br",{}),s,Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:s,alt:n[0][this.state.i]})," Which word matches the image?",Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[0])},children:r[0]}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[1])},children:r[1]}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[2])},children:r[2]}),Object(i.jsx)("button",{type:"submit",onClick:function(){return t.grade(n[0][e],r[3])},children:r[3]})]}):Object(i.jsxs)("div",{children:["You recieved a score of ",this.state.j,"/6 ",Object(i.jsx)("br",{}),Object(i.jsx)(j.b,{to:"/",children:"Return Home"}),Object(i.jsx)("br",{}),Object(i.jsx)(j.b,{to:"/quiz",children:"Return to Quizzes"}),Object(i.jsx)("br",{})]})})}}]),n}(s.a.Component),I=function(t){Object(h.a)(r,t);var e=Object(d.a)(r);function r(t){var n;return Object(b.a)(this,r),(n=e.call(this,t)).state={value:""},n}return Object(l.a)(r,[{key:"getString",value:function(t){var e=S.getFlowerDisplay();console.log(e);for(var n="",i=0;i<e.length;i++)t="<img src={"+e[0][i]+"} alt="+e[0][i]+" />"+e[0][i],n=n.concat(t),console.log(n);return n}},{key:"render",value:function(){this.getString("");var t=S.getFlowerDisplay(),e=S.getNames();return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:n(17),alt:e[0][0]})," ",e[0][0],Object(i.jsx)("img",{src:"./images/"+t[0][1],alt:e[0][1]})," ",e[0][1],Object(i.jsx)("img",{src:"./images/"+t[0][2],alt:e[0][2]})," ",e[0][2],Object(i.jsx)("img",{src:"./images/"+t[0][3],alt:e[0][3]})," ",e[0][3],Object(i.jsx)("img",{src:"./images/"+t[0][4],alt:e[0][4]})," ",e[0][4],Object(i.jsx)("img",{src:"./images/"+t[0][5],alt:e[0][5]})," ",e[0][5],Object(i.jsx)("img",{src:"./images/"+t[0][6],alt:e[0][6]})," ",e[0][6],Object(i.jsx)("img",{src:"./images/"+t[0][7],alt:e[0][7]})," ",e[0][7],Object(i.jsx)("img",{src:"./images/"+t[0][8],alt:e[0][8]})," ",e[0][8]," ",Object(i.jsx)("br",{}),Object(i.jsx)(j.b,{to:"/",children:"Return Home"}),Object(i.jsx)("br",{}),Object(i.jsx)(j.b,{to:"/quiz",children:"Return to Quizzes"}),Object(i.jsx)("br",{})]})}}]),r}(s.a.Component);var q=function(){return Object(i.jsx)(j.a,{basename:"/imagequiz",children:Object(i.jsxs)(u.d,{children:[Object(i.jsx)(u.b,{exact:!0,path:"/",render:function(t){return Object(i.jsx)(O,Object(o.a)({},t))}}),Object(i.jsx)(u.b,{path:"/login",children:Object(i.jsx)(f,{})}),Object(i.jsx)(u.b,{path:"/quiz",children:Object(i.jsx)(z,{})}),Object(i.jsx)(u.b,{path:"/take",children:Object(i.jsx)(w,{})}),Object(i.jsx)(u.b,{path:"/daff",children:Object(i.jsx)(D,{})}),Object(i.jsx)(u.b,{path:"/display",children:Object(i.jsx)(I,{})})]})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),s(t),c(t)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(q,{})}),document.getElementById("root")),F()}},[[36,1,2]]]);
//# sourceMappingURL=main.5cb197ca.chunk.js.map