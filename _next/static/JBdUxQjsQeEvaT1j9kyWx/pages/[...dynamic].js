(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{W0W5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var a=n("q1tI"),o=n.n(a),l=n("1Yj4"),s=n("ok1R"),c=n("rhny"),r=n("7oih"),i=o.a.createElement;function u(){return i(r.a,null,i(l.a,null,i(s.a,null,i(c.a,null,i("h1",{style:{textAlign:"center"}},"404 - Page Not Found")))))}},bTjV:function(t,e,n){"use strict";var a=n("wx14"),o=n("zLVn"),l=n("q1tI"),s=n.n(l),c=n("17x9"),r=n.n(c),i=n("TSYQ"),u=n.n(i),p=n("33Jr"),d={tag:p.h,type:r.a.string,size:r.a.string,color:r.a.string,className:r.a.string,cssModule:r.a.object,children:r.a.string},h=function(t){var e=t.className,n=t.cssModule,l=t.type,c=t.size,r=t.color,i=t.children,d=t.tag,h=Object(o.a)(t,["className","cssModule","type","size","color","children","tag"]),m=Object(p.e)(u()(e,!!c&&"spinner-"+l+"-"+c,"spinner-"+l,!!r&&"text-"+r),n);return s.a.createElement(d,Object(a.a)({role:"status"},h,{className:m}),i&&s.a.createElement("span",{className:Object(p.e)("sr-only",n)},i))};h.propTypes=d,h.defaultProps={tag:"div",type:"border",children:"Loading..."},e.a=h},"k+95":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var a=n("q1tI"),o=n.n(a),l=n("1Yj4"),s=n("ok1R"),c=n("rhny"),r=n("7oih"),i=o.a.createElement;function u(){return i(r.a,null,i(l.a,null,i(s.a,null,i(c.a,null,i("h1",{style:{textAlign:"center"}},"Loading...")))))}},nC06:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),o=n.n(a),l=n("Ty5D"),s=n("MX0m"),c=n.n(s),r=(n("nOHt"),n("1Yj4")),i=n("ok1R"),u=n("rhny"),p=n("bTjV"),d=n("IujW"),h=n.n(d),m=n("7oih"),g=n("f23f"),f=n("hGN7"),b=o.a.createElement;function j(t){var e,n=t.match,o=t.history,l=n.params.slug,s=Object(f.c)(l),d=s.data,j=s.error;return Object(a.useEffect)((function(){d&&null===d.post&&o.push("/blog")}),[d,o]),b(m.a,{page:"blog-post",lead:d&&d.post?"".concat(d.post.author.name," | ").concat(Object(g.d)(d.post.date)):"",title:(null===d||void 0===d?void 0:null===(e=d.post)||void 0===e?void 0:e.title)||""},b(r.a,null,b(i.a,null,b(u.a,null,!d&&b("div",{className:"jsx-3035936191 no-data-content"},j&&b("p",{className:"jsx-3035936191"},"Error while fetching the blog post"),!j&&b("div",{className:"jsx-3035936191 spinner-container"},b(p.a,{style:{width:"3rem",height:"3rem"},type:"grow"}))),d&&null===d.post&&b("div",{className:"jsx-3035936191 no-data-content"},b("p",{className:"jsx-3035936191"},"Post not found. Redirecting to the blog page")),d&&null!==d.post&&b(h.a,{source:d.post.content,escapeHtml:!1})))),b(c.a,{id:"3035936191"},[".no-data-content.jsx-3035936191{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","p.jsx-3035936191{text-align:center;}"]))}j.defaultProps={slug:"",match:{}};var w=j,y=n("W0W5"),x=n("k+95"),v=o.a.createElement;e.default=function(){var t=Object(l.useHistory)(),e=Object(l.useLocation)();return console.log(e),console.log(window.location.pathname),console.log(e.pathname),e.pathname!==window.location.pathname&&t.push(window.location.pathname),v(l.Switch,null,v(l.Route,{exact:!0,path:"/blog/:slug",component:w}),v(l.Route,{exact:!0,path:"/[...dynamic]",component:x.default}),v(l.Route,{component:y.default}))}},u4g8:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...dynamic]",function(){return n("nC06")}])}},[["u4g8",1,2,5,4,0,3,6,7,9,8]]]);