(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{14:function(A,g,C){"use strict";C.r(g),g.default=C.p+"static/media/cherryblossom.12b6a49b.png"},15:function(A,g,C){"use strict";C.r(g),g.default=C.p+"static/media/daffodil.30bb3c1a.png"},30:function(A,g,C){},31:function(A,g,C){},37:function(A,g,C){"use strict";C.r(g);var I=C(0),t=C(1),e=C.n(t),c=C(22),n=C.n(c),s=(C(30),C(23)),r=(C(31),C(3)),i=C(2),a=C(7),j=C(8),u=C(10),o=C(9),b=function(A){Object(u.a)(C,A);var g=Object(o.a)(C);function C(A){var I;return Object(a.a)(this,C),(I=g.call(this,A)).loginCheck=function(){I.setState({loggedIn:!0})},I.state={loggedIn:!1},I}return Object(j.a)(C,[{key:"render",value:function(){var A="",g=this.props.location;return console.log(this.state.loggedIn),!0!==this.state.loggedIn&&g&&g.state&&g.state.user&&(A=g.state.user,this.loginCheck()),g&&g.state&&g.state.user&&(A=g.state.user),Object(I.jsx)("div",{children:Object(I.jsx)("div",{children:""!==A?Object(I.jsxs)("div",{children:[Object(I.jsx)(r.b,{to:"/quiz",children:"Take Image Quiz"})," ",A," ",Object(I.jsx)("br",{}),Object(I.jsx)(r.b,{to:"/display",children:"Display Practicum 5"})]}):Object(I.jsx)("div",{children:Object(I.jsx)(r.b,{to:"/login",children:"Login to Continue"})})})})}}]),C}(e.a.Component),l=C(16),d=function(A){Object(u.a)(C,A);var g=Object(o.a)(C);function C(A){var I;return Object(a.a)(this,C),(I=g.call(this,A)).onSubmit=function(A){I.state.username.trim().length>0&&I.setState({authenticated:!0}),A.preventDefault()},I.onInputChnage=function(A){var g=A.target.value,C=A.target.name;I.setState(Object(l.a)({},C,g))},I.state={username:"",authenticated:!1},I}return Object(j.a)(C,[{key:"render",value:function(){var A={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(I.jsx)(i.a,{to:A}):Object(I.jsx)("div",{children:Object(I.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(I.jsx)("lable",{children:"Username:"}),Object(I.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChnage}),Object(I.jsx)("button",{type:"submit",children:"Login"})]})})}}]),C}(e.a.Component),h=[["cherryblossom.png"],["daffodil.png"],0],O=[["bat","parrot","rose","cherryblossom","rat","daffodil"]],p=[["rose","parrot","bat","cherryblossom"],["bat","cherryblossom","rat","daffodil"]],k=[["cherry","mouse","cat","lily","daffodil","cherry"]],x=[["mouse","cat","cherry","lily"],["daffodil","rat","cat","cherry"]],Q=[["cherryblossom.png","daffodil.png","daisy.jpg","lily.jpg","rose.png","sunflower.png","tulip.png","waterlil.png"]],f=[["cherryblossom","daffodil","daisy","lily","rose","sunflower","tulip","waterlily"]],y={getFlowerDisplay:function(){return Q},getNames:function(){return f},change:function(A){h[2]=A},returnVal:function(){return h[2]},getImage:function(){return console.log(h),h[h[2]]},increment:function(){h[3]=h[3]+1,console.log(h[3])},getScore:function(){var A=h[3]/6;return h[3]=0,A},getCherryBlossom:function(){return O},getDaffodil:function(){return k},getCherryOptions:function(A){return A<4?p[0]:p[1]},getDaffodilOptions:function(A){return A<4?x[0]:x[1]}},B=C(14),R=C(15),J=function(A){Object(u.a)(t,A);var g=Object(o.a)(t);function t(A){var C;return Object(a.a)(this,t),(C=g.call(this,A)).setCurr=function(A){C.setState({current:A})},C.state={current:0},C}return Object(j.a)(t,[{key:"render",value:function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(r.b,{to:"/take",onClick:function(){return y.change(0)},children:Object(I.jsx)("img",{src:C(14),alt:"cherryblossom"})}),Object(I.jsx)(r.b,{to:"/daff",onClick:function(){return y.change(1)},children:Object(I.jsx)("img",{src:C(15),alt:"daffodil"})})]})}}]),t}(e.a.Component),m=function(A){Object(u.a)(C,A);var g=Object(o.a)(C);function C(A){var I;return Object(a.a)(this,C),(I=g.call(this,A)).state={i:0,j:0},I}return Object(j.a)(C,[{key:"grade",value:function(A,g){if(g===A){var C=this.state.i,I=this.state.j;C+=1,I+=1,this.setState({i:C}),this.setState({j:I})}else{C=this.state.i;C+=1,this.setState({i:C})}}},{key:"score",value:function(){var A=y.getScore();this.setState({j:A})}},{key:"render",value:function(){var A=this,g=this.state.i,C=(this.state.j,y.getCherryBlossom()),t=y.getCherryOptions(this.state.i),e="./images/"+C[0][this.state.i]+".png";return Object(I.jsx)("div",{children:6!==g?Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:e,alt:C[0][this.state.i]}),Object(I.jsx)("br",{})," Which word matches the image?",Object(I.jsx)("br",{}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[0])},children:t[0]}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[1])},children:t[1]}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[2])},children:t[2]}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[3])},children:t[3]})]}):Object(I.jsxs)("div",{children:["You recieved a score of ",this.state.j,"/6 ",Object(I.jsx)("br",{}),Object(I.jsx)(r.b,{to:"/",children:"Return Home"}),Object(I.jsx)("br",{}),Object(I.jsx)(r.b,{to:"/quiz",children:"Return to Quizzes"}),Object(I.jsx)("br",{})]})})}}]),C}(e.a.Component),H=function(A){Object(u.a)(C,A);var g=Object(o.a)(C);function C(A){var I;return Object(a.a)(this,C),(I=g.call(this,A)).state={i:0,j:0},I}return Object(j.a)(C,[{key:"grade",value:function(A,g){if(g===A){var C=this.state.i,I=this.state.j;C+=1,I+=1,this.setState({i:C}),this.setState({j:I})}else{C=this.state.i;C+=1,this.setState({i:C})}}},{key:"score",value:function(){var A=y.getScore();this.setState({j:A})}},{key:"render",value:function(){var A=this,g=this.state.i,C=(this.state.j,y.getDaffodil()),t=y.getDaffodilOptions(this.state.i),e="./images/"+C[0][this.state.i]+".png";return Object(I.jsx)("div",{children:6!==g?Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:e,alt:C[0][this.state.i]})," ",Object(I.jsx)("br",{}),"Which word matches the image?",Object(I.jsx)("br",{}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[0])},children:t[0]}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[1])},children:t[1]}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[2])},children:t[2]}),Object(I.jsx)("button",{type:"submit",onClick:function(){return A.grade(C[0][g],t[3])},children:t[3]})]}):Object(I.jsxs)("div",{children:["You recieved a score of ",this.state.j,"/6 ",Object(I.jsx)("br",{}),Object(I.jsx)(r.b,{to:"/",children:"Return Home"}),Object(I.jsx)("br",{}),Object(I.jsx)(r.b,{to:"/quiz",children:"Return to Quizzes"}),Object(I.jsx)("br",{})]})})}}]),C}(e.a.Component),S=C.p+"static/media/rose.1b73a47a.png",E=C.p+"static/media/sunflower.d83eb115.png",v=C.p+"static/media/tulip.2af32d51.png",G=C.p+"static/media/waterlily.c4129a63.png",q=function(A){Object(u.a)(C,A);var g=Object(o.a)(C);function C(A){var I;return Object(a.a)(this,C),(I=g.call(this,A)).state={value:""},I}return Object(j.a)(C,[{key:"getString",value:function(A){var g=y.getFlowerDisplay();console.log(g);for(var C="",I=0;I<g.length;I++)A="<img src={"+g[0][I]+"} alt="+g[0][I]+" />"+g[0][I],C=C.concat(A),console.log(C);return C}},{key:"render",value:function(){y.getFlowerDisplay();var A=y.getNames();return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{class:"display",children:Object(I.jsxs)("table",{children:[Object(I.jsxs)("tr",{children:[Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:B.default,alt:A[0][0]})," ",Object(I.jsx)("p",{children:A[0][0]})]}),Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:R.default,alt:A[0][1]}),Object(I.jsx)("p",{children:A[0][1]})]}),Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QCARXhpZgAASUkqAAgAAAAFABIBAwABAAAAAQAAABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAGmHBAABAAAAWgAAAAAAAABgAAAAAQAAAGAAAAABAAAAAgACoAQAAQAAAPQBAAADoAQAAQAAAPQBAAAAAAAA/+ELj2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEwLjEwJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+UHJvamVjdCAyPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/8AAEQgAngCeAwEiAAIRAQMRAf/EAB0AAAEEAwEBAAAAAAAAAAAAAAADBQYIBAcJAgH/xABHEAABAwMCAwQFBwkECwAAAAABAAIDBAURBiEHEjETQVGxIjRhctEIFBYycZShFRdDU2NzgZGzI0JWgiQmM1JUZHSDhJPw/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIDAQQGBQf/xAAqEQACAgEEAQMDBAMAAAAAAAAAAQIDEQQFEiExBhNBFCJRFTJhcTNCsf/aAAwDAQACEQMRAD8AtShCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQSACScAKOu4jaNYS12qrI0jYg1se34oCRIUb/OVor/ABZYvv0fxX1vEnRTiA3VliJPcK6P4oCRoWFS3y11rA+muNJO09DHK1w/ApZ9wpIxl9TC0eJeEfXbC78C6Fgi+2snH5Rpc/vQl211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",alt:A[0][2]})," ",Object(I.jsx)("p",{children:A[0][2]})]}),Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QCARXhpZgAASUkqAAgAAAAFABIBAwABAAAAAQAAABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAGmHBAABAAAAWgAAAAAAAABgAAAAAQAAAGAAAAABAAAAAgACoAQAAQAAAPQBAAADoAQAAQAAAPQBAAAAAAAA/+ELj2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEwLjEwJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+UHJvamVjdCAyPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/8AAEQgAngCeAwEiAAIRAQMRAf/EABwAAQACAwEBAQAAAAAAAAAAAAAGBwQFCAIDAf/EAEgQAAEDAwIDBQMHBgsJAAAAAAEAAgMEBREGIRIxQQcIE1FhFCJxMoGRobHR0hUWJFSzwRcjNEJSYnOUo7LCJUNTZYSTouHx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAAyEQACAgIBAwMCBAMJAAAAAAAAAQIDBBEhBRIxIjJBE2EGI6HBFHHwFUJRUoGRsdHh/9oADAMBAAIRAxEAPwDqlERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREygCIiAIiIAuVu8rqi/2rtGbSW283Gig9hif4dPUPY3JLsnAPouqVyr3j6D2jtJlmePdbbYcfS9aWPSIMiXbDZVbde6s4C1uprznzNbJ96x3a51V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",alt:A[0][3]})," ",Object(I.jsx)("p",{children:A[0][3]})]})]}),Object(I.jsxs)("tr",{children:[Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:S,alt:A[0][4]})," ",Object(I.jsx)("p",{children:A[0][4]})]}),Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:E,alt:A[0][5]})," ",Object(I.jsx)("p",{children:A[0][5]})]}),Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:v,alt:A[0][6]})," ",Object(I.jsx)("p",{children:A[0][6]})]}),Object(I.jsxs)("td",{children:[Object(I.jsx)("img",{src:G,alt:A[0][7]})," ",Object(I.jsx)("p",{children:A[0][7]}),Object(I.jsx)("br",{})]})]})]})}),Object(I.jsx)(r.b,{to:"/",children:"Return Home"}),Object(I.jsx)("br",{}),Object(I.jsx)(r.b,{to:"/quiz",children:"Return to Quizzes"}),Object(I.jsx)("br",{})]})}}]),C}(e.a.Component);var P=function(){return Object(I.jsx)(r.a,{basename:"/imagequiz",children:Object(I.jsxs)(i.d,{children:[Object(I.jsx)(i.b,{exact:!0,path:"/",render:function(A){return Object(I.jsx)(b,Object(s.a)({},A))}}),Object(I.jsx)(i.b,{path:"/login",children:Object(I.jsx)(d,{})}),Object(I.jsx)(i.b,{path:"/quiz",children:Object(I.jsx)(J,{})}),Object(I.jsx)(i.b,{path:"/take",children:Object(I.jsx)(m,{})}),Object(I.jsx)(i.b,{path:"/daff",children:Object(I.jsx)(H,{})}),Object(I.jsx)(i.b,{path:"/display",children:Object(I.jsx)(q,{})})]})})},w=function(A){A&&A instanceof Function&&C.e(3).then(C.bind(null,38)).then((function(g){var C=g.getCLS,I=g.getFID,t=g.getFCP,e=g.getLCP,c=g.getTTFB;C(A),I(A),t(A),e(A),c(A)}))};n.a.render(Object(I.jsx)(e.a.StrictMode,{children:Object(I.jsx)(P,{})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.51e45f77.chunk.js.map