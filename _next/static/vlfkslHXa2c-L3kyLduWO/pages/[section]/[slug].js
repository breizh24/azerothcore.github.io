(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1I0a":function(t,n,e){"use strict";e.r(n);var r=e("ODXe"),a=e("MX0m"),o=e.n(a),s=e("q1tI"),i=e.n(s),c=e("nOHt"),u=e("1Yj4"),l=e("ok1R"),f=e("rhny"),d=e("bTjV"),p=e("IujW"),b=e.n(p),h=e("7oih"),g=e("f23f"),j=e("hGN7"),m=i.a.createElement;n.default=function(){var t,n=Object(c.useRouter)(),e=n.query.slug,a=window.location.pathname.split("/").filter((function(t){return t.length>0})).slice(-2),i=Object(r.a)(a,2),p=(i[0],i[1]),y=Object(j.c)(e||p),w=y.data,x=y.error;return Object(s.useEffect)((function(){w&&null===w.post&&n.push("/blog")}),[w,n]),m(h.a,{page:"blog-post",lead:w&&w.post?"".concat(w.post.author.name," | ").concat(Object(g.d)(w.post.date)):"",title:(null===w||void 0===w?void 0:null===(t=w.post)||void 0===t?void 0:t.title)||""},m(u.a,null,m(l.a,null,m(f.a,null,!w&&m("div",{className:"jsx-3035936191 no-data-content"},x&&m("p",{className:"jsx-3035936191"},"Error while fetching the blog post"),!x&&m("div",{className:"jsx-3035936191 spinner-container"},m(d.a,{style:{width:"3rem",height:"3rem"},type:"grow"}))),w&&null===w.post&&m("div",{className:"jsx-3035936191 no-data-content"},m("p",{className:"jsx-3035936191"},"Post not found. Redirecting to the blog page")),w&&null!==w.post&&m(b.a,{source:w.post.content,escapeHtml:!1})))),m(o.a,{id:"3035936191"},[".no-data-content.jsx-3035936191{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","p.jsx-3035936191{text-align:center;}"]))}},"59nS":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[section]/[slug]",function(){return e("1I0a")}])},ODXe:function(t,n,e){"use strict";function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,o=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(n,"a",(function(){return r}))},bTjV:function(t,n,e){"use strict";var r=e("wx14"),a=e("zLVn"),o=e("q1tI"),s=e.n(o),i=e("17x9"),c=e.n(i),u=e("TSYQ"),l=e.n(u),f=e("33Jr"),d={tag:f.h,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},p=function(t){var n=t.className,e=t.cssModule,o=t.type,i=t.size,c=t.color,u=t.children,d=t.tag,p=Object(a.a)(t,["className","cssModule","type","size","color","children","tag"]),b=Object(f.e)(l()(n,!!i&&"spinner-"+o+"-"+i,"spinner-"+o,!!c&&"text-"+c),e);return s.a.createElement(d,Object(r.a)({role:"status"},p,{className:b}),u&&s.a.createElement("span",{className:Object(f.e)("sr-only",e)},u))};p.propTypes=d,p.defaultProps={tag:"div",type:"border",children:"Loading..."},n.a=p},hGN7:function(t,n,e){"use strict";e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i})),e.d(n,"d",(function(){return u})),e.d(n,"b",(function(){return l}));var r=e("VtrM"),a=e("f23f"),o="\nquery Post($id: ID!) {\n  post(id: $id, idType: SLUG) {\n    author {\n      name\n    }\n    title\n    content(format: RENDERED)\n    date\n  }\n}\n";function s(t){return Object(r.b)([o,t],(function(t,n){return Object(a.f)(t,{id:n})}))}function i(t){return Object(a.b)(o,{id:t},[o,t])}var c="\nquery Posts($first: Int, $after: String) {\n  posts(first: $first, after: $after) {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    nodes {\n      date\n      title\n      slug\n      id\n      content(format: RENDERED)\n      author {\n        name\n      }\n    }\n  }\n}";function u(t){return Object(r.b)([c,t],(function(t,n){return Object(a.f)(t,{first:3,after:n})}))}function l(){return Object(a.b)(c,{first:3,after:null},[c,null])}}},[["59nS",1,2,6,5,0,3,4]]]);