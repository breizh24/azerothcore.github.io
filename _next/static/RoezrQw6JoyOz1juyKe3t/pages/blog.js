(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BR8T:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r("vx99")}])},vx99:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.r(t);var o=r("MX0m"),a=r.n(o),s=r("q1tI"),i=r.n(s),c=r("9R94");function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=new Map,h=new Map,f=new Map,b=0;function g(e,t,r){void 0===r&&(r={}),r.threshold||(r.threshold=0);var n=r,o=n.root,a=n.rootMargin,s=n.threshold;if(p.has(e)&&Object(c.a)(!1),e){var i=function(e){return e?f.has(e)?f.get(e):(b+=1,f.set(e,b.toString()),f.get(e)+"_"):""}(o)+(a?s.toString()+"_"+a:s.toString()),l=h.get(i);l||(l=new IntersectionObserver(m,r),i&&h.set(i,l));var d={callback:t,element:e,inView:!1,observerId:i,observer:l,thresholds:l.thresholds||(Array.isArray(s)?s:[s])};return p.set(e,d),l.observe(e),d}}function v(e){if(e){var t=p.get(e);if(t){var r=t.observerId,n=t.observer,o=n.root;n.unobserve(e);var a=!1,s=!1;r&&p.forEach((function(t,n){n!==e&&(t.observerId===r&&(a=!0,s=!0),t.observer.root===o&&(s=!0))})),!s&&o&&f.delete(o),n&&!a&&n.disconnect(),p.delete(e)}}}function m(e){e.forEach((function(e){var t=e.isIntersecting,r=e.intersectionRatio,n=e.target,o=p.get(n);if(o&&r>=0){var a=o.thresholds.some((function(e){return o.inView?r>e:r>=e}));void 0!==t&&(a=a&&t),o.inView=a,o.callback(a,e)}}))}var y=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return l(u(t=e.call.apply(e,[this].concat(n))||this),"state",{inView:!1,entry:void 0}),l(u(t),"node",null),l(u(t),"handleNode",(function(e){t.node&&(v(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),l(u(t),"handleChange",(function(e,r){(e!==t.state.inView||e)&&t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)})),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){this.node||Object(c.a)(!1)},o.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(v(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(v(this.node),this.node=null)},o.componentWillUnmount=function(){this.node&&(v(this.node),this.node=null)},o.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin;g(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n})}},o.render=function(){var e=this.state,t=e.inView,r=e.entry;if(!function(e){return"function"!==typeof e.children}(this.props))return this.props.children({inView:t,entry:r,ref:this.handleNode});var n=this.props,o=n.children,a=n.as,i=n.tag,c=(n.triggerOnce,n.threshold,n.root,n.rootMargin,n.onChange,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(s.createElement)(a||i||"div",d({ref:this.handleNode},c),o)},n}(s.Component);l(y,"displayName","InView"),l(y,"defaultProps",{threshold:0,triggerOnce:!1});var w={inView:!1,entry:void 0};var j=r("IujW"),x=r.n(j),O=r("ok1R"),N=r("rhny"),M=r("wx14"),k=r("zLVn"),V=r("17x9"),E=r.n(V),R=r("TSYQ"),S=r.n(R),T=r("33Jr"),_={tag:T.h,inverse:E.a.bool,color:E.a.string,body:E.a.bool,outline:E.a.bool,className:E.a.string,cssModule:E.a.object,innerRef:E.a.oneOfType([E.a.object,E.a.string,E.a.func])},C=function(e){var t=e.className,r=e.cssModule,n=e.color,o=e.body,a=e.inverse,s=e.outline,c=e.tag,l=e.innerRef,d=Object(k.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),u=Object(T.e)(S()(t,"card",!!a&&"text-white",!!o&&"card-body",!!n&&(s?"border":"bg")+"-"+n),r);return i.a.createElement(c,Object(M.a)({},d,{className:u,ref:l}))};C.propTypes=_,C.defaultProps={tag:"div"};var I=C,P={tag:T.h,className:E.a.string,cssModule:E.a.object},A=function(e){var t=e.className,r=e.cssModule,n=e.tag,o=Object(k.a)(e,["className","cssModule","tag"]),a=Object(T.e)(S()(t,"card-title"),r);return i.a.createElement(n,Object(M.a)({},o,{className:a}))};A.propTypes=P,A.defaultProps={tag:"div"};var z=A,B={tag:T.h,className:E.a.string,cssModule:E.a.object},J=function(e){var t=e.className,r=e.cssModule,n=e.tag,o=Object(k.a)(e,["className","cssModule","tag"]),a=Object(T.e)(S()(t,"card-subtitle"),r);return i.a.createElement(n,Object(M.a)({},o,{className:a}))};J.propTypes=B,J.defaultProps={tag:"div"};var L=J,U=r("sOKU"),W=r("1Yj4"),X=r("bTjV"),D=r("VtrM"),Y=r("7oih"),q=r("f23f"),F=r("hGN7"),G=r("FS32"),H=i.a.createElement;t.default=function(){var e=Object(s.useState)(!1),t=e[0],r=e[1],o=n(function(e){void 0===e&&(e={});var t=Object(s.useRef)(),r=Object(s.useState)(w),n=r[0],o=r[1];return[Object(s.useCallback)((function(r){t.current&&(v(t.current),e.triggerOnce||o(w)),r&&g(r,(function(t,n){o({inView:t,entry:n}),t&&e.triggerOnce&&v(r)}),e),t.current=r}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]),n.inView,n.entry]}({rootMargin:"-50px 0px"}),2),c=o[0],l=o[1],d=Object(D.d)("blog-posts",(function(e){var t=e.offset,n=(0,e.withSWR)(Object(F.d)(t)),o=n.data;return n.error&&r(!0),H(O.a,null,o&&o.posts.nodes.map((function(e){return H(N.a,{lg:"12",key:e.id},H("div",{className:"jsx-2651144421 post-card-container"},H(I,{className:"post-card",body:!0},H(z,{className:"post-card-title"},H("h3",{className:"jsx-2651144421"},e.title)),H(L,{className:"post-card-subtitle"},H("span",{className:"jsx-2651144421"},"".concat(e.author.name," | ").concat(Object(q.d)(e.date)))),H("hr",{className:"jsx-2651144421"}),H("div",{className:"jsx-2651144421 card-text"},H("div",{className:"jsx-2651144421 card-preview-text"},H(x.a,{source:Object(q.e)(e.content,350),escapeHtml:!1}))),H("div",{className:"jsx-2651144421 button-container"},H(G.b,{to:"".concat("/azerothcore.github.io","/blog/").concat(e.slug),prepare:function(){return Object(F.a)(e.slug)}},H(U.a,{className:"post-card-button"},"Read the post"))))))})),H(a.a,{id:"2651144421"},[".post-card-container.jsx-2651144421{padding:20px;}",".card-text.jsx-2651144421{margin-bottom:10px;}","h3.jsx-2651144421{font-size:1.35rem;margin-bottom:0.3rem;}","hr.jsx-2651144421{margin-top:0.2rem;margin-bottom:0.7rem;}",".button-container.jsx-2651144421{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]))}),(function(e){return e.data&&!e.data.posts.pageInfo.hasNextPage?null:e.data.posts.pageInfo.endCursor}),[]),u=d.pages,p=d.isLoadingMore,h=d.isReachingEnd,f=d.loadMore;return i.a.useEffect((function(){l&&u.length>0&&!h&&!p&&!t&&f()}),[l,u,p,h,t,f]),H(Y.a,{page:"blog",title:"AzerothCore Blog",lead:"Stay updated with the latest news from our developers"},H("div",{className:"jsx-3700103141 postlist-container"},H(W.a,null,u,H(O.a,null,H(N.a,null,H("div",{ref:c,className:"jsx-3700103141 load-more"},!h&&!p&&H(U.a,{onClick:f},"Load more"),p&&!t&&H(X.a,{style:{width:"3rem",height:"3rem"},type:"grow"}),t&&H("p",{className:"jsx-3700103141"},"There was an error fetching the blog posts")))))),H(a.a,{id:"1044260971"},[".load-more.jsx-3700103141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","p.jsx-3700103141{text-align:center;}"]),H(a.a,{id:"3203255367"},[".post-card-title{margin-bottom:0;}",".post-card-subtitle{margin-bottom:10px;}",".post-card-subtitle span{color:var(--gray);font-size:0.9rem;}",".post-card-button{margin-left:auto;}",".card-preview-text p{margin:0;}",".card-preview-text ol,.card-preview-text li{list-style:none;}"]))}}},[["BR8T",1,2,5,4,0,3,6]]]);