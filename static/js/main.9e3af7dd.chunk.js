(this.webpackJsonproute=this.webpackJsonproute||[]).push([[0],{32:function(e,t,a){},40:function(e,t,a){e.exports=a(61)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=(a(45),a(3)),i=a(10),u=a(5),s=a(4),m=a(6),d=(a(46),a(9)),h=a(17),p=(a(47),a(48),function(e){return r.a.createElement("div",{className:"box "+e.color+(!0===e.active?" active":""),onClick:e.click})}),E=(a(49),function(e){return console.log(e),r.a.createElement("div",{id:"overlay"},r.a.createElement("div",{className:"gameoverbox"},r.a.createElement("p",null,"Game over!! Your final score is: ",e.score),r.a.createElement("button",{id:"closeButton",onClick:function(){return e.reFresh()}}," ","Close"," ")))}),f=["green","yellow","red","blue"],b=[],g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isGameOn:0,score:0,scoreFlasher:0,activeBox:void 0,pace:1700,gameOver:!1,missclicks:0},a.beginning=function(){console.log("toimii"),b=[],a.setState({isGameOn:0,score:0,scoreFlasher:0,activeBox:void 0,pace:1700,gameOver:!1,missclicks:0})},a.flash=function(){b.push(a.state.activeBox),b.length>=10&&a.stopGame(),a.setState({activeBox:void 0}),console.log("Jono: "+b)},a.next=function(){a.setState({activeBox:Math.floor(4*Math.random())}),a.flashTimer=setTimeout(a.flash,150),a.state.pace>800?a.setState({pace:.97*a.state.pace}):a.state.pace>600?a.setState({pace:.98*a.state.pace}):a.state.pace>480?a.setState({pace:.991*a.state.pace}):a.setState({pace:.997*a.state.pace}),console.log(a.state.pace),a.timer=setTimeout(a.next.bind(),a.state.pace)},a.scoreFlash=function(){a.setState({scoreFlasher:0})},a.clickHandler=function(){console.log("painettu oikein"),a.setState({scoreFlasher:1}),a.setState({score:a.state.score+1}),a.scoreFlashtimer=setTimeout(a.scoreFlash,100),b.splice(0,1)},a.missclick=function(){a.setState({scoreFlasher:2}),a.setState({score:a.state.score-1}),a.scoreFlashtimer=setTimeout(a.scoreFlash,100),a.setState({missclicks:a.state.missclicks+1}),a.state.missclicks>=3&&a.stopGame()},a.startGame=function(){1!==a.state.isGameOn&&(a.setState({isGameOn:1}),a.next())},a.stopGame=function(){clearTimeout(a.timer),clearTimeout(a.flash),a.setState({gameOver:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Speedtest 2.7"),r.a.createElement(p,{color:f[0],active:0===this.state.activeBox,click:0===b[0]?this.clickHandler:this.missclick}),r.a.createElement(p,{color:f[1],active:1===this.state.activeBox,click:1===b[0]?this.clickHandler:this.missclick}),r.a.createElement(p,{color:f[2],active:2===this.state.activeBox,click:2===b[0]?this.clickHandler:this.missclick}),r.a.createElement(p,{color:f[3],active:3===this.state.activeBox,click:3===b[0]?this.clickHandler:this.missclick}),r.a.createElement("div",null,r.a.createElement("div",{className:1===this.state.scoreFlasher?"score green":2===this.state.scoreFlasher?"score red":"score"},this.state.score)),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.startGame},"Start!"),r.a.createElement("button",{onClick:this.stopGame},"Stop!")),this.state.gameOver&&r.a.createElement(E,{score:this.state.score,reFresh:this.beginning}))}}]),t}(n.Component),v=(a(50),a(23)),j=a(24),k=a(25);function O(){var e=Object(j.a)(["\n      border: hidden;\n      border-radius: 50px;\n      color: black;\n    "]);return O=function(){return e},e}function C(){var e=Object(j.a)(["\n      border-radius: 7px;\n      border: 2px solid darkgreen;\n      color: white;\n      font-weight: bold;\n      width: 120px;\n    "]);return C=function(){return e},e}function y(){var e=Object(j.a)(["\n  background: transparent;\n  border-radius: 15px;\n  border: 3px solid darkgreen;\n  color: lightgreen;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n\n  ",";\n  ",";\n"]);return y=function(){return e},e}var S=k.b.button(y(),(function(e){return e.primary&&Object(k.a)(C())}),(function(e){return e.counter&&Object(k.a)(O())})),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).checkNumber=function(){return 0===a.props.ctr?"grey":a.props.ctr%10===0?"yellow":a.props.ctr%2===0?"even":"odd"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ctr,a=e.onIncCounter,n=e.onDecCounter,c=e.onAddCounter,l=e.onRemCounter,o=e.onDeleteCounter,i=e.onStoreCounter,u=e.results,s=e.reset;return r.a.createElement("div",{className:"counter "+this.checkNumber()},r.a.createElement("p",null,"Hello world! "),r.a.createElement("p",null,"You clicked ",t," times!!"),r.a.createElement(S,{counter:!0,onClick:a},"Add"),r.a.createElement(S,{counter:!0,onClick:n},"Decrease"),r.a.createElement(S,{counter:!0,onClick:c},"add 5"),r.a.createElement(S,{counter:!0,onClick:l},"remove 5"),r.a.createElement(S,{counter:!0,onClick:s},"Reset"),r.a.createElement(S,{counter:!0,onClick:function(){return i(t)}},"Store"),r.a.createElement("ul",null,u.map((function(e){return r.a.createElement("li",{key:e.id,onClick:function(){return o(e.id)}},e.value)}))))}}]),t}(n.Component),N=Object(v.b)((function(e){return{ctr:e.ctr.counter,results:e.res.results}}),(function(e){return{onIncCounter:function(){return e({type:"INCREMENT"})},onDecCounter:function(){return e({type:"DECREMENT"})},onAddCounter:function(){return e({type:"ADD",value:5})},onRemCounter:function(){return e({type:"REMOVE",value:5})},reset:function(){return e({type:"RESET"})},onStoreCounter:function(t){return e({type:"STORE_RESULT",result:t})},onDeleteCounter:function(t){return e({type:"DELETE_RESULT",resultElementId:t})}}}))(x),T=a(38),w=a(2);a(56),a(57);var R=r.a.memo((function e(t){e.defaultProps={name:"",url:"",active:!1};var a=t.url,n=t.name,c=t.click,l=t.active;console.log("rendered: ",n);var o=l?"active":"";return r.a.createElement("div",{className:"card "+o,onClick:c},r.a.createElement((function(){return l?r.a.createElement("img",{src:a,alt:n,style:{borderRadius:"20%"}}):r.a.createElement("div",null)}),null))}),(function(e,t){var a=t.found,n=t.active;return 1===a||n===e.active})),M=(a(58),function(e){return console.log(e),r.a.createElement("div",{id:"overlay"},r.a.createElement("div",{className:"gameoverbox"},r.a.createElement("h3",null,"Completed! You Matched em all! "),r.a.createElement("p",null,"..with ",e.missmatches," missmatches! =) "),r.a.createElement(d.b,{to:"/projects"},r.a.createElement("button",{id:"closeButton"}," Close "))))}),F=[{name:"dog",url:"2018/03/31/06/31/dog-3277417__340.jpg"},{name:"cat",url:"2017/04/30/18/33/cat-2273598__340.jpg"},{name:"horse",url:"2017/10/31/07/49/horses-2904536__340.jpg"},{name:"snake",url:"2014/04/03/11/55/snake-312561__340.png"},{name:"elephant",url:"2016/05/28/08/32/elephant-1421167_960_720.jpg"},{name:"mouse",url:"2016/10/01/19/20/mouse-1708177__340.jpg"},{name:"lion",url:"2019/11/06/06/00/lion-4605253__340.jpg"},{name:"giraffe",url:"2018/10/28/11/18/giraffe-3778536__340.jpg"}],_=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).clickHandler=function(e){var t=e.id,n=e.name,r=e.found,c=e.active,l=a.state,o=l.click,i=l.secondClickName;1!==r&&!0!==c&&""===i&&(a.setState((function(e){return{animals:e.animals.map((function(e){return e.id===t?Object(w.a)({},e,{active:!0}):e}))}})),1!==o?(a.setState({secondClickName:n,click:1}),setTimeout(a.handleEndOfTurn,750)):a.setState({firstClickName:n,click:2}))},a.compareCards=function(){var e=a.state,t=e.missmatches,n=e.firstClickName;n===e.secondClickName?a.hit(n):a.setState({missmatches:t+1})},a.handleEndOfTurn=function(){a.compareCards(),a.setState((function(e){return{animals:e.animals.map((function(e){return 1!==e.found&&!0===e.active?Object(w.a)({},e,{active:!1}):e})),firstClickName:"",secondClickName:""}}))},a.hit=function(e){var t=e,n=a.state.matches;a.setState((function(e){return{animals:e.animals.map((function(e){return e.name===t?Object(w.a)({},e,{found:1}):e})),matches:n+1}}))},a.shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.CardsToRender=function(){return a.state.animals.map((function(e){return r.a.createElement(R,{key:e.id,url:e.url,name:e.name,found:e.found,active:e.active,click:function(){return a.clickHandler(e)}})}))};var n=F.reduce((function(e,t,a){return[].concat(Object(T.a)(e),[{id:a,name:t.name,found:0,active:!1,url:"https://cdn.pixabay.com/photo/"+t.url},{id:999+a,name:t.name,found:0,active:!1,url:"https://cdn.pixabay.com/photo/"+t.url}])}),[]);return a.state={animals:n,firstClickName:"",secondClickName:"",click:1,missmatches:0,matches:0},a.shuffle(a.state.animals),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.matches,a=e.missmatches;return r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"wrapper"},this.CardsToRender()),8===t&&r.a.createElement(M,{missmatches:a}))}}]),t}(n.Component),A=a(13),G=function(){var e=Object(n.useState)(""),t=Object(A.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(30),l=Object(A.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)(!1),s=Object(A.a)(u,2),m=s[0],d=s[1],h=Object(n.useState)(0),p=Object(A.a)(h,2),E=p[0],f=p[1],b=Object(n.useState)(0),g=Object(A.a)(b,2),v=g[0],j=g[1],k=Object(n.useState)(""),O=Object(A.a)(k,2),C=O[0],y=O[1],S=Object(n.useState)(!0),x=Object(A.a)(S,2),N=x[0],T=x[1],w=Object(n.useRef)(null);Object(n.useEffect)((function(){m&&(o>0&&setTimeout((function(){i((function(e){return e-1}))}),1e3),o>4?y(R):o>0?y("yellow"):T(!0))}),[m,o]);var R=function(){return["green","red","blue","white","yellow"][Math.floor(5*Math.random())]},M=function(e){return e.trim().split(" ").filter((function(e){return""!==e&&e.length>1})).length};return Object(n.useEffect)((function(){N&&m&&(d(!1),setTimeout((function(){i(30),alert("You wrote ".concat(E," words in ").concat(30," seconds!\n      ..and includes total of ").concat(v," characters (incl.spaces)"))}),999))}),[N]),{text:a,timeCounter:o,start:m,words:E,color:C,gameOver:N,setGameOver:T,startGame:function(){d(!0),T(!1),r(""),f(0),w.current.disabled=!1,w.current.focus()},handleChange:function(e){var t=e.target.value;r(t),j(t.length),f(M(a))},changeTimer:function(){return i(60===o?30:60)},ON:!0,OFF:!1,textRef:w}},H=(a(32),"Api key must be updated first in the code.. Use your imagination to imagine here some random words and use them instead. Or maybe not imagine the words here at all, just imagine them in your mind and push them away to the screen through your fingers!"),D=function(){var e=Object(n.useState)([]),t=Object(A.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(A.a)(l,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){i&&fetch("".concat("https://random-word-api.herokuapp.com/","/word?key=").concat("62URKTA8","&number=200")).then((function(e){return e.json()})).then((function(e){"wrong API key"===e&&c("Sorry! ".concat(e," --").concat(H))})).catch((function(e){c("Sorry! ".concat(e," --").concat(H))}))}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{onClick:function(){return u(!i)},style:{textAlign:"left",display:"flex"}},i?"Hide":"Get"," example words!"),r.a.createElement("textarea",{name:"randWords",style:{display:i?"":"none",height:"110px",background:"white",fontFamily:"arial",fontWeight:"bold"},disabled:!0,value:a}))},I=function(){var e=G(),t=e.text,a=e.timeCounter,n=e.start,c=e.words,l=e.color,o=e.gameOver,i=e.setGameOver,u=e.startGame,s=e.handleChange,m=e.changeTimer,d=e.ON,h=e.OFF,p=e.textRef;return r.a.createElement("div",{className:"Typinggame"},r.a.createElement("h1",null,"Speed Typing game"),r.a.createElement("textarea",{ref:p,placeholder:'Start typing after clicking "start" button!!',value:t,name:"text",onChange:s,disabled:o}),r.a.createElement("h4",null,"Word count: ",c),r.a.createElement("h4",{style:{color:o?"#ff4444":l}},"Time left: ",a),r.a.createElement("button",{className:"button",onClick:u,disabled:n===d},"Start"),r.a.createElement("button",{className:"button",onClick:function(){return i(!0)},disabled:n===h},"Stop")," ",r.a.createElement("br",null),r.a.createElement(S,{primary:!0,onClick:m,disabled:n===d},"30/60"),r.a.createElement(D,null))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null))},B=a(18),Y=a(20);var P=function(e){return r.a.createElement("main",null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("input",{placeholder:"First Name",onChange:e.handleChange,name:"firstName",value:e.data.firstName}),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Last Name",onChange:e.handleChange,name:"lastName",value:e.data.lastName}),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Age",onChange:e.handleChange,name:"age",value:e.data.age}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",onChange:e.handleChange,name:"gender",value:"male",checked:"male"===e.data.gender})," Male"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",onChange:e.handleChange,name:"gender",value:"female",checked:"female"===e.data.gender})," Female"),r.a.createElement("br",null),r.a.createElement("select",{name:"destination",onChange:e.handleChange,value:e.data.destination},r.a.createElement("option",null," --select-- "),r.a.createElement("option",null," Europe "),r.a.createElement("option",null," Asia "),r.a.createElement("option",null," Australia "),r.a.createElement("option",null," Central America ")),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"vegetarian",checked:e.data.diets.vegetarian,onChange:e.handleChange})," Vegetarian"),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"vegan",checked:e.data.diets.vegan,onChange:e.handleChange})," Vegan"),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"meatlover",checked:e.data.diets.meatlover,onChange:e.handleChange})," Meat-Lover"),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"lactose",checked:e.data.diets.lactose,onChange:e.handleChange})," Lactose"),r.a.createElement("br",null),r.a.createElement("button",null,"Submit")),r.a.createElement("hr",null),r.a.createElement("h2",null,"Entered information:"),r.a.createElement("p",null,"Your name: ",e.data.firstName+" "+e.data.lastName),r.a.createElement("p",null,"Your age: ",e.data.age),r.a.createElement("p",null,"Your gender: ",e.data.gender),r.a.createElement("p",null,"Your destination: ",e.data.destination),r.a.createElement("p",null,"Your dietary restrictions: ",r.a.createElement("br",null),e.data.diets.vegetarian&&"Vegetarian - ",e.data.diets.vegan&&"Vegan - ",e.data.diets.meatlover&&"Meat-Lover - ",e.data.diets.lactose&&"Lactose-handicap"))},U=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,r=a.value,c=a.type,l=a.checked;"checkbox"===c?e.setState((function(e){return{diets:Object(w.a)({},e.diets,Object(B.a)({},n,l))}})):e.setState(Object(B.a)({},n,r))},e.handleSubmit=function(t){alert("Form was submitted, thanks: "+e.state.firstName),t.preventDefault()},e.state={firstName:"",lastName:"",age:void 0,gender:"",destination:"",diets:{vegetarian:!1,vegan:!1,meatlover:!1,lactose:!1}},e.handleChange=e.handleChange.bind(Object(Y.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(Y.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,data:this.state})}}]),t}(n.Component);a(60);var V=function(){return r.a.createElement("header",null,r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2013/07/12/19/15/gangster-154425_960_720.png",alt:"mememan",style:{height:"80px"}}),r.a.createElement("p",null,"MEME GENERATOR"))},W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={topText:"",bottomText:"",randomImg:"",allMemeImgs:[]},a.clickHandler=function(e){e.preventDefault();var t=Math.floor(Math.random()*a.state.allMemeImgs.length);a.setState({randomImg:a.state.allMemeImgs[t].url})},a.componentDidMount=function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){var t=e.data.memes;a.setState({allMemeImgs:t})}))},a.changeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(B.a)({},n,r))},a.render=function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"meme-form",onSubmit:a.clickHandler},r.a.createElement("input",{name:"topText",placeholder:"Write top text",onChange:a.changeHandler,value:a.state.topText,maxLength:"50"}),r.a.createElement("input",{name:"bottomText",placeholder:"Write bottom text",onChange:a.changeHandler,value:a.state.bottomText,maxLength:"60"}),r.a.createElement("button",null,"Gen")),r.a.createElement("div",{className:"meme"},r.a.createElement("img",{src:a.state.randomImg,alt:"Press Gen button to generate!!"}),r.a.createElement("h2",{className:"top"},a.state.topText),r.a.createElement("h2",{className:"bottom"},a.state.bottomText.length>50?"Sorry! Too long text!":a.state.bottomText)))},a}return Object(m.a)(t,e),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(W,null))}}]),t}(n.Component),K=function(e){function t(){var e,a,n=this;Object(o.a)(this,t);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).home=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Home"),r.a.createElement("p",null,"In this page there are some projects, that i have done during my studies of React programming"))},a.about=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"About"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,"Memorygame : "),"L\xf6yd\xe4 8 el\xe4inparia mahdollisimman v\xe4hill\xe4 yrityksill\xe4! ",r.a.createElement("br",null),"Optimoitu render\xf6inti\xe4 React Memo():n avulla"),r.a.createElement("li",null,r.a.createElement("h4",null,"SpeedTyping : "),"Testaa kirjoitusnopeutesi! ",r.a.createElement("br",null),"Tehty Hookeilla ja harjoituksena Custom Hookkina pelin logiikka. Laskee kirjoitetut sanat ja kirjaimet annetun ajan sis\xe4ll\xe4"),r.a.createElement("li",null,r.a.createElement("h5",null,"Counter: "),"tehty Hookseilla sek\xe4 k\xe4ytt\xe4en Redux kirjastoa state hallintaan."),r.a.createElement("li",null,r.a.createElement("h5",null," Speedgame: "),"alkuvaiheen projekti."),r.a.createElement("li",null,r.a.createElement("h5",null," Form pracs: "),"Testailtu formien tekemist\xe4 Reactilla."),r.a.createElement("li",null,r.a.createElement("h5",null,"Meme Generator: "),"Rajapinnasta haettuja meemej\xe4 render\xf6id\xe4\xe4n n\xe4yt\xf6lle satunnaisesti tekstin kera.")))},a.projects=function(e){var t=e.match;return r.a.createElement("div",{className:"project-container"},r.a.createElement("h2",null," Projects "),r.a.createElement("p",null,r.a.createElement(d.b,{to:"".concat(t.url,"/counter")},r.a.createElement(S,null,"Contergame")),r.a.createElement(d.b,{to:"".concat(t.url,"/speedgame")},r.a.createElement(S,null,"Speedgame 2.7")),r.a.createElement(d.b,{to:"".concat(t.url,"/memorygame")},r.a.createElement(S,null,"Memorygame"))),r.a.createElement("p",null,r.a.createElement(d.b,{to:"".concat(t.url,"/formprac2")},r.a.createElement(S,null,"Form Practise")),r.a.createElement(d.b,{to:"".concat(t.url,"/meme")},r.a.createElement(S,null,"Meme Generator")),r.a.createElement(d.b,{to:"".concat(t.url,"/Speedtyping")},r.a.createElement(S,null,"Speed Typing"))),r.a.createElement("div",{className:"projects"},r.a.createElement(h.a,{path:"".concat(t.path,"/:name"),render:function(e){return r.a.createElement(n.project,e)}})))},a.project=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"This is my project ",t.params.name),"speedgame"===t.params.name?r.a.createElement(g,null):"memorygame"===t.params.name?r.a.createElement(_,null):"counter"===t.params.name?r.a.createElement(N,null):"formprac2"===t.params.name?r.a.createElement(U,null):"meme"===t.params.name?r.a.createElement(J,null):"Speedtyping"===t.params.name?r.a.createElement(L,null):r.a.createElement("div",null))},a.nav=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,r.a.createElement(d.b,{to:"/"},r.a.createElement(S,{primary:!0},"Home")),r.a.createElement(d.b,{to:"/about"},r.a.createElement(S,{primary:!0},"About")),r.a.createElement(d.b,{to:"/projects"},r.a.createElement(S,{primary:!0},"Projects"))))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,this.nav(),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:this.home}),r.a.createElement(h.a,{path:"/about",component:this.about}),r.a.createElement(h.a,{path:"/projects",component:this.projects}))))}}]),t}(n.Component),q=a(21),z={counter:0},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return Object(w.a)({},e,{counter:e.counter+1});case"DECREMENT":return Object(w.a)({},e,{counter:e.counter-1});case"ADD":return Object(w.a)({},e,{counter:e.counter+t.value});case"REMOVE":return Object(w.a)({},e,{counter:e.counter-t.value});case"RESET":return Object(w.a)({},e,{counter:0})}return e},X={results:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_RESULT":return Object(w.a)({},e,{results:e.results.concat({id:new Date,value:t.result})});case"DELETE_RESULT":return Object(w.a)({},e,{results:e.results.filter((function(e){return e.id!==t.resultElementId}))})}return e},$=Object(q.b)({ctr:Q,res:Z}),ee=Object(q.c)($);l.a.render(r.a.createElement(v.a,{store:ee},r.a.createElement(K,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9e3af7dd.chunk.js.map