(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KKsq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...dynamic]",function(){return n("czgW")}])},U1nC:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var a=n("q1tI"),s=n.n(a),i=n("1Yj4"),l=n("ok1R"),o=n("rhny"),c=n("7oih"),r=s.a.createElement;function u(){return r(c.a,null,r(i.a,null,r(l.a,null,r(o.a,null,r("h1",{style:{textAlign:"center"}},"404 - Page Not Found")))))}},aEMo:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var a=n("MX0m"),s=n.n(a),i=n("q1tI"),l=n.n(i),o=n("1Yj4"),c=n("ok1R"),r=n("rhny"),u=n("bTjV"),d=n("7oih"),p=l.a.createElement;function m(){return p(d.a,null,p(o.a,null,p(c.a,null,p(r.a,null,p("div",{className:"jsx-3179797028"},p(u.a,{style:{width:"3rem",height:"3rem"},type:"grow"}))))),p(s.a,{id:"3179797028"},["div.jsx-3179797028{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]))}},bTjV:function(t,e,n){"use strict";var a=n("wx14"),s=n("zLVn"),i=n("q1tI"),l=n.n(i),o=n("17x9"),c=n.n(o),r=n("TSYQ"),u=n.n(r),d=n("33Jr"),p={tag:d.i,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},m=function(t){var e=t.className,n=t.cssModule,i=t.type,o=t.size,c=t.color,r=t.children,p=t.tag,m=Object(s.a)(t,["className","cssModule","type","size","color","children","tag"]),x=Object(d.f)(u()(e,!!o&&"spinner-"+i+"-"+o,"spinner-"+i,!!c&&"text-"+c),n);return l.a.createElement(p,Object(a.a)({role:"status"},m,{className:x}),r&&l.a.createElement("span",{className:Object(d.f)("sr-only",n)},r))};m.propTypes=p,m.defaultProps={tag:"div",type:"border",children:"Loading..."},e.a=m},czgW:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),s=n.n(a),i=n("Ty5D"),l=n("MX0m"),o=n.n(l),c=n("nOHt"),r=n("1Yj4"),u=n("ok1R"),d=n("rhny"),p=n("bTjV"),m=n("IujW"),x=n.n(m),f=n("f23f"),b=n("hGN7"),g=n("7oih"),h=a.createElement,j=function(t){var e,n=t.match.params.slug,s=Object(c.useRouter)(),i=Object(b.c)(n),l=i.data,m=i.error;return a.useEffect((function(){l&&null===l.post&&s.push("/blog")}),[l,s]),h(g.a,{page:"blog-post",lead:l&&l.post?"".concat(l.post.author.name," | ").concat(Object(f.d)(l.post.date)):"",title:(null===l||void 0===l?void 0:null===(e=l.post)||void 0===e?void 0:e.title)||""},h(r.a,null,h(u.a,null,h(d.a,null,!l&&h("div",{className:"jsx-3035936191 no-data-content"},m&&h("p",{className:"jsx-3035936191"},"Error while fetching the blog post"),!m&&h("div",{className:"jsx-3035936191 spinner-container"},h(p.a,{style:{width:"3rem",height:"3rem"},type:"grow"}))),l&&null===l.post&&h("div",{className:"jsx-3035936191 no-data-content"},h("p",{className:"jsx-3035936191"},"Post not found. Redirecting to the blog page")),l&&null!==l.post&&h(x.a,{source:l.post.content,escapeHtml:!1})))),h(o.a,{id:"3035936191"},[".no-data-content.jsx-3035936191{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","p.jsx-3035936191{text-align:center;}"]))},y=n("XQRn"),w=a.createElement,k=function(t){var e,n=t.match.params.slug,s=Object(c.useRouter)(),i=Object(y.c)(n),l=i.data,m=i.error;return a.useEffect((function(){l&&null===l.testimonial&&s.push("/testimonials")}),[l,s]),w(g.a,{page:"testimonial-post",lead:"",title:(null===l||void 0===l?void 0:null===(e=l.testimonial)||void 0===e?void 0:e.title)||""},w(r.a,null,w(u.a,null,w(d.a,null,!l&&w("div",{className:"jsx-1099133708 no-data-content"},m&&w("p",{className:"jsx-1099133708"},"Error while fetching the testimonial"),!m&&w("div",{className:"jsx-1099133708 spinner-container"},w(p.a,{style:{width:"3rem",height:"3rem"},type:"grow"}))),l&&null===l.testimonial&&w("div",{className:"jsx-1099133708 no-data-content"},w("p",{className:"jsx-1099133708"},"Testimonial not found. Redirecting to the testimonials page")),l&&null!==l.testimonial&&w(a.Fragment,null,w("div",{className:"jsx-1099133708 testimonial-image-container"},w("img",{src:l.testimonial.featuredImage.sourceUrl,alt:l.testimonial.featuredImage.altText,className:"jsx-1099133708"})),w(x.a,{source:l.testimonial.content,escapeHtml:!1}))))),w(o.a,{id:"1099133708"},[".no-data-content.jsx-1099133708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".testimonial-image-container.jsx-1099133708{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}","img.jsx-1099133708{width:auto;max-height:350px;max-width:100%;}","p.jsx-1099133708{text-align:center;}"]))},v=n("U1nC"),N=n("aEMo"),E=s.a.createElement;e.default=function(){var t,e=Object(i.useHistory)(),n=Object(i.useLocation)(),a=(t=window.location.pathname).includes("")?t.replace("".concat(""),""):t;return n.pathname!==a&&e.push(a),E(i.Switch,null,E(i.Route,{exact:!0,path:"/blog/:slug",component:j}),E(i.Route,{exact:!0,path:"/testimonials/:slug",component:k}),E(i.Route,{exact:!0,path:"/[...dynamic]",component:N.default}),E(i.Route,{component:v.default}))}}},[["KKsq",1,2,6,4,0,3,5,7,8,9]]]);