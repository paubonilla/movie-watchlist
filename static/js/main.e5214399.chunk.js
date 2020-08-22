(this["webpackJsonpmovie-playlist"]=this["webpackJsonpmovie-playlist"]||[]).push([[0],{27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),i=n.n(c),l=(n(32),n(9)),o=n(1),s=n(2),u=n(3);function d(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  .brand a {\n    font-weight: 700;\n    font-size: 1.5rem;\n  }\n  .nav-links {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    li {\n      display: inline-block;\n      margin-right: 30px;\n    }\n    li:last-child {\n      margin-right: 0;\n    }\n  }\n"]);return d=function(){return e},e}function m(){var e=Object(s.a)(["\n  background-color: rgba(0, 0, 0, 0.7);\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);\n  a {\n    color: #ECECEC;\n    font-size: 1.25rem;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n"]);return m=function(){return e},e}var p=u.a.div(m()),f=u.a.div(d());function h(){var e=Object(s.a)(["\n  padding: 10px 15px;\n  background-color: #31475D;\n  color: var(--primary);\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  border: none;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  line-height: 1.1;\n\n  &:hover {\n    background-color: #1aa762;\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  &:disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(s.a)(["\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n"]);return v=function(){return e},e}function b(){var e=Object(s.a)(["\n  padding: 3rem;\n  height: 100vh;\n  background: radial-gradient(#30475D, #1C1C2E);\n"]);return b=function(){return e},e}var g=u.a.div(b()),E=u.a.div(v()),O=u.a.button(h()),w=function(){return r.a.createElement(p,null,r.a.createElement(E,null,r.a.createElement(f,null,r.a.createElement("div",{className:"brand"},r.a.createElement(l.b,{to:"/"},"WatchList")),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Watch List")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/watched"},"Watched")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/add"},r.a.createElement(O,null,"+ Add")))))))},y=n(15),x=n(17),j=n(8),N=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(j.a)(Object(j.a)({},e),{},{watchList:[t.payload].concat(Object(x.a)(e.watchList))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(j.a)(Object(j.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(j.a)(Object(j.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(x.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(j.a)(Object(j.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchList:[t.payload].concat(Object(x.a)(e.watchList))});case"REMOVE_FROM_WATCHED":return Object(j.a)(Object(j.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},_={watchList:localStorage.getItem("watchList")?JSON.parse(localStorage.getItem("watchList")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},L=Object(a.createContext)(_),M=function(e){var t=Object(a.useReducer)(N,_),n=Object(y.a)(t,2),c=n[0],i=n[1];Object(a.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(c.watchList)),localStorage.setItem("watched",JSON.stringify(c.watched))}),[c]);return r.a.createElement(L.Provider,{value:{watchList:c.watchList,watched:c.watched,addMovieToWatchList:function(e){i({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchList:function(e){i({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){i({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWacthList:function(e){i({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){i({type:"REMOVE_FROM_WATCHED",payload:e})}}},e.children)},T=function(e){var t=e.movie,n=e.type,c=Object(a.useContext)(L),i=c.removeMovieFromWatchList,l=c.addMovieToWatched,o=c.moveToWacthList,s=c.removeFromWatched;return r.a.createElement("div",{className:"inner-card-controls"},"watchList"===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return l(t)}},r.a.createElement("i",{className:"fa-fw far fa-eye"})),r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return i(t.id)}},r.a.createElement("i",{className:"fa-fw fa fa-times"}))),"watched"===n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return o(t)}},r.a.createElement("i",{className:"fa-fw far fa-eye-slash"})),r.a.createElement("button",{className:"ctrl-btn",onClick:function(){return s(t.id)}},r.a.createElement("i",{className:"fa-fw fa fa-times"}))))};function C(){var e=Object(s.a)(["\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  border: 0;\n  display: block;\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);\n  img {\n    width: 100%;\n    display: block;\n    border-radius: 10px;\n  }\n  &:hover .overlay {\n    border: 3px solid #4DD3C2;\n    border-radius: 10px;\n  }\n  .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 2px solid transparent;\n    transition: all 0.3s ease;\n  }\n  .inner-card-controls {\n    display: inline;\n    background-color: red;\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border-radius: 5px;\n    padding: 3px;\n    opacity: 0;\n    transition: all 0.3s ease;\n  }\n  &:hover .inner-card-controls {\n    opacity: 1;\n  }\n"]);return C=function(){return e},e}var W=u.a.div(C()),k=function(e){var t=e.movie,n=e.type;return r.a.createElement(W,null,r.a.createElement("div",{className:"overlay"}),t.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):r.a.createElement("div",{className:"filler-poster"}),r.a.createElement(T,{movie:t,type:n}))};function S(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px;\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"]);return S=function(){return e},e}function I(){var e=Object(s.a)(["\n  padding: 30px 0;\n  .header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 30px;\n  }\n  .heading {\n    margin: 0;\n  }\n  .no-movies {\n    color: #c4c4c4;\n    font-size: 3rem;\n    text-align: center;\n  }\n"]);return I=function(){return e},e}var D=u.a.div(I()),A=u.a.div(S()),V=function(){var e=Object(a.useContext)(L).watchList;return r.a.createElement(D,null,r.a.createElement(E,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"heading"},"My Watchlist"),r.a.createElement("span",{className:"count-pill"},e.length," ",0===e.length?"Movie":"Movies")),e.length>0?r.a.createElement(A,{className:"movie-grid"},e.map((function(e){return r.a.createElement(k,{movie:e,type:"watchList"})}))):r.a.createElement("h2",{className:"no-movies"},"No movies in your list")))},F=function(){var e=Object(a.useContext)(L).watched;return r.a.createElement(D,null,r.a.createElement(E,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"heading"},"Watched movies"),r.a.createElement("span",{className:"count-pill"},e.length," ",0===e.length?"Movie":"Movies")),e.length>0?r.a.createElement(A,null,e.map((function(e){return r.a.createElement(k,{movie:e,type:"watched"})}))):r.a.createElement("h2",{className:"no-movies"},"No movies in your list")))};function H(){var e=Object(s.a)(["\n  button {\n    margin-right: 10px;\n  }\n"]);return H=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .title {\n    font-size: 1.25rem;\n    color: var(--primary);\n    font-weight: 600;\n    margin: 0;\n  }\n  .release-date {\n    font-size: 1.25rem;\n    font-weight: 300;\n    color: var(--primary);\n    margin: 0;\n  }\n"]);return R=function(){return e},e}function z(){var e=Object(s.a)(["\n  img,\n  .filler-poster {\n    width: 75px;\n    height: 113px;\n    background-color: #dbdada;\n    border-radius: 10px;\n    margin-right: 15px;\n    display: block;\n    color: transparent;\n  }\n"]);return z=function(){return e},e}function J(){var e=Object(s.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return J=function(){return e},e}var P=u.a.div(J()),q=u.a.div(z()),B=u.a.div(R()),U=u.a.div(H()),X=function(e){var t=e.movie,n=Object(a.useContext)(L),c=n.addMovieToWatchList,i=n.addMovieToWatched,l=n.watchList,o=n.watched,s=l.find((function(e){return e.id===t.id})),u=o.find((function(e){return e.id===t.id})),d=!!s||!!u,m=!!u;return r.a.createElement(P,{className:"result-card"},r.a.createElement(q,null,t.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):r.a.createElement("div",{className:"filler-poster"})),r.a.createElement(B,null,r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"title"},t.title),r.a.createElement("h4",{className:"release-date"},t.release_date?t.release_date.substring(0,4):"--")),r.a.createElement(U,null,r.a.createElement(O,{className:"btn",disabled:d,onClick:function(){return c(t)}},"Add to Watchlist"),r.a.createElement(O,{className:"btn",disabled:m,onClick:function(){return i(t)}},"Add to Watched"))))};function G(){var e=Object(s.a)(["\n  padding: 0;\n  margin: 0;\n  margin-top: 20px;\n  li {\n    list-style: none;\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(s.a)(["\n  input {\n    width: 100%;\n    background-color: #31475D;\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    color: var(--white);\n    font-size: 1.25rem;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(s.a)(["\n  padding: 50px 0;\n  max-width: 600px;\n  margin: 0 auto;\n"]);return Q=function(){return e},e}var Y=u.a.div(Q()),Z=u.a.div(K()),$=u.a.div(G()),ee=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),l=Object(y.a)(i,2),o=l[0],s=l[1];return r.a.createElement(E,null,r.a.createElement(Y,null,r.a.createElement(Z,null,r.a.createElement("input",{type:"text",placeholder:"Search for a movie",value:n,onChange:function(e){e.preventDefault(),c(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("683901bcffa7e1e0093d17ab4aaa5a35","&language=en-US&page=1&include_adult=false&query=").concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?s([]):s(e.results)}))}})),o.length>0&&r.a.createElement($,null,o.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(X,{movie:e}))})))))};n(39),n(40);var te=function(){return r.a.createElement(M,null,r.a.createElement(l.a,null,r.a.createElement(g,null,r.a.createElement(w,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:V}),r.a.createElement(o.a,{path:"/watched",component:F}),r.a.createElement(o.a,{path:"/add",component:ee})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e5214399.chunk.js.map