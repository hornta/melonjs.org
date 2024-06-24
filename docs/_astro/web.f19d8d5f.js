const r={context:void 0,registry:void 0};function B(e){r.context=e}function Q(){return{...r.context,id:`${r.context.id}${r.context.count++}-`,count:0}}const X=(e,n)=>e===n,U={equals:X};let Y=R;const w=1,A=2,j={owned:null,cleanups:null,context:null,owner:null};var g=null;let H=null,J=null,a=null,d=null,y=null,T=0;function Z(e,n){const t=a,s=g,i=e.length===0,l=n===void 0?s:n,f=i?j:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=i?e:()=>e(()=>x(()=>m(f)));g=f,a=null;try{return E(o,!0)}finally{a=t,g=s}}function ce(e,n){n=n?Object.assign({},U,n):U;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),I(t,i));return[z.bind(t),s]}function _(e,n,t){const s=F(e,n,!1,w);$(s)}function k(e,n,t){Y=ne;const s=F(e,n,!1,w);(!t||!t.render)&&(s.user=!0),y?y.push(s):$(s)}function x(e){if(a===null)return e();const n=a;a=null;try{return e()}finally{a=n}}function ae(e){k(()=>x(e))}function z(){if(this.sources&&this.state)if(this.state===w)$(this);else{const e=d;d=null,E(()=>C(this),!1),d=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function I(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],f=H&&H.running;f&&H.disposed.has(l),(f?!l.tState:!l.state)&&(l.pure?d.push(l):y.push(l),l.observers&&q(l)),f||(l.state=w)}if(d.length>1e6)throw d=[],new Error},!1)),n}function $(e){if(!e.fn)return;m(e);const n=T;ee(e,e.value,n)}function ee(e,n,t){let s;const i=g,l=a;a=g=e;try{s=e.fn(n)}catch(f){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(m),e.owned=null),e.updatedAt=t+1,G(f)}finally{a=l,g=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?I(e,s):e.value=s,e.updatedAt=t)}function F(e,n,t,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:g,context:g?g.context:null,pure:t};return g===null||g!==j&&(g.owned?g.owned.push(l):g.owned=[l]),l}function S(e){if(e.state===0)return;if(e.state===A)return C(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<T);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===w)$(e);else if(e.state===A){const s=d;d=null,E(()=>C(e,n[0]),!1),d=s}}function E(e,n){if(d)return e();let t=!1;n||(d=[]),y?t=!0:y=[],T++;try{const s=e();return te(t),s}catch(s){t||(y=null),d=null,G(s)}}function te(e){if(d&&(R(d),d=null),e)return;const n=y;y=null,n.length&&E(()=>Y(n),!1)}function R(e){for(let n=0;n<e.length;n++)S(e[n])}function ne(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:S(s)}if(r.context){if(r.count){r.effects||(r.effects=[]),r.effects.push(...e.slice(0,t));return}else r.effects&&(e=[...r.effects,...e],t+=r.effects.length,delete r.effects);B()}for(n=0;n<t;n++)S(e[n])}function C(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===w?s!==n&&(!s.updatedAt||s.updatedAt<T)&&S(s):i===A&&C(s,n)}}}function q(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=A,t.pure?d.push(t):y.push(t),t.observers&&q(t))}}function m(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),f=t.observerSlots.pop();s<i.length&&(l.sourceSlots[f]=s,i[s]=l,t.observerSlots[s]=f)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)m(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function se(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function G(e,n=g){throw se(e)}let V=!1;function ie(){V=!0}function he(e,n){if(V&&r.context){const t=r.context;B(Q());const s=x(()=>e(n||{}));return B(t),s}return x(()=>e(n||{}))}function le(e,n,t){let s=t.length,i=n.length,l=s,f=0,o=0,u=n[i-1].nextSibling,h=null;for(;f<i||o<l;){if(n[f]===t[o]){f++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===f){const c=l<s?o?t[o-1].nextSibling:t[l-o]:u;for(;o<l;)e.insertBefore(t[o++],c)}else if(l===o)for(;f<i;)(!h||!h.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[l-1]&&t[o]===n[i-1]){const c=n[--i].nextSibling;e.insertBefore(t[o++],n[f++].nextSibling),e.insertBefore(t[--l],c),n[i]=t[l]}else{if(!h){h=new Map;let p=o;for(;p<l;)h.set(t[p],p++)}const c=h.get(n[f]);if(c!=null)if(o<c&&c<l){let p=f,N=1,P;for(;++p<i&&p<l&&!((P=h.get(n[p]))==null||P!==c+N);)N++;if(N>c-o){const K=n[f];for(;o<c;)e.insertBefore(t[o++],K)}else e.replaceChild(t[o++],n[f++])}else f++;else n[f++].remove()}}}const D="_$DX_DELEGATE";function oe(e,n,t,s={}){let i;return Z(l=>{i=l,n===document?e():fe(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function de(e,n,t){let s;const i=()=>{const f=document.createElement("template");return f.innerHTML=e,t?f.content.firstChild.firstChild:f.content.firstChild},l=n?()=>x(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function ge(e,n=window.document){const t=n[D]||(n[D]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,W))}}function pe(e,n,t){r.context&&e.isConnected||(e[n]=t)}function fe(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return v(e,n,s,t);_(i=>v(e,n(),i,t),s)}function re(e,n,t={}){r.completed=globalThis._$HY.completed,r.events=globalThis._$HY.events,r.load=i=>globalThis._$HY.r[i],r.has=i=>i in globalThis._$HY.r,r.gather=i=>O(n,i),r.registry=new Map,r.context={id:t.renderId||"",count:0},O(n,t.renderId);const s=oe(e,n,[...n.childNodes],t);return r.context=null,s}function ye(e){let n,t;return!r.context||!(n=r.registry.get(t=ue()))?e():(r.completed&&r.completed.add(n),r.registry.delete(t),n)}function we(){r.events&&!r.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=r;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;W(s),n.shift()}}),r.events.queued=!0)}function W(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),r.registry&&!r.done&&(r.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function v(e,n,t,s,i){const l=!!r.context&&e.isConnected;if(l){!t&&(t=[...e.childNodes]);let u=[];for(let h=0;h<t.length;h++){const c=t[h];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():u.push(c)}t=u}for(;typeof t=="function";)t=t();if(n===t)return t;const f=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,f==="string"||f==="number"){if(l)return t;if(f==="number"&&(n=n.toString()),o){let u=t[0];u&&u.nodeType===3?u.data!==n&&(u.data=n):u=document.createTextNode(n),t=b(e,t,s,u)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||f==="boolean"){if(l)return t;t=b(e,t,s)}else{if(f==="function")return _(()=>{let u=n();for(;typeof u=="function";)u=u();t=v(e,u,t,s)}),()=>t;if(Array.isArray(n)){const u=[],h=t&&Array.isArray(t);if(L(u,n,t,i))return _(()=>t=v(e,u,t,s,!0)),()=>t;if(l){if(!u.length)return t;if(s===void 0)return[...e.childNodes];let c=u[0],p=[c];for(;(c=c.nextSibling)!==s;)p.push(c);return t=p}if(u.length===0){if(t=b(e,t,s),o)return t}else h?t.length===0?M(e,u,s):le(e,t,u):(t&&b(e),M(e,u));t=u}else if(n.nodeType){if(l&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=b(e,t,s,n);b(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function L(e,n,t,s){let i=!1;for(let l=0,f=n.length;l<f;l++){let o=n[l],u=t&&t[e.length],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=L(e,o,u)||i;else if(h==="function")if(s){for(;typeof o=="function";)o=o();i=L(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const c=String(o);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function M(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function b(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let f=n.length-1;f>=0;f--){const o=n[f];if(i!==o){const u=o.parentNode===e;!l&&!f?u?e.replaceChild(i,o):e.insertBefore(i,t):u&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}function O(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],l=i.getAttribute("data-hk");(!n||l.startsWith(n))&&!r.registry.has(l)&&r.registry.set(l,i)}}function ue(){const e=r.context;return`${e.id}${e.count++}`}const be=(...e)=>(ie(),re(...e));export{_ as a,oe as b,ce as c,ge as d,he as e,r as f,ye as g,be as h,ae as o,we as r,pe as s,de as t};
