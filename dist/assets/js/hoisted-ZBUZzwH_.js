let o=document.querySelector(".link-list"),y=document.querySelectorAll(".link-list li");document.querySelector("header");let d=document.querySelector(".icon-nav-base"),L=document.querySelector("#drop1"),h=document.querySelector("#drop2"),c=document.querySelector("#drop3"),q=document.querySelector("#drop4"),S=document.querySelector("#drop5"),v=document.querySelector("#drop1 .dropdown-content"),u=document.querySelectorAll("#drop1 .dropdown-content li"),f=document.querySelector("#drop2 .dropdown-content"),A=document.querySelectorAll("#drop2 .dropdown-content li"),k=document.querySelector("#drop3 .dropdown-content"),E=document.querySelectorAll("#drop3 .dropdown-content li"),x=document.querySelector("#drop4 .dropdown-content"),M=document.querySelectorAll("#drop4 .dropdown-content li"),b=document.querySelector("#drop5 .dropdown-content"),C=document.querySelectorAll("#drop5 .dropdown-content li"),B=document.getElementById("arrowDropDown"),g=()=>{window.innerWidth<992?(o.classList.add("Mobile"),o.classList.remove("normalMenu")):(o.classList.remove("Mobile"),o.classList.add("normalMenu"))};g();function s(e){let t=0;return e.forEach(r=>{t+=r.clientHeight}),t}let a=(e,t,r)=>{let l=e==="down"?0:s(t),n=e==="down"?s(t):0,m=e==="down"?n/(n*.1):l/(l*.1);function w(){if(l<=0&&e==="up"||l>=n&&e==="down"){e==="up"&&(r.style.height="0");return}l+=e==="down"?m:-m,l>n&&e==="down"&&(l=n),r.style.height=`${l}px`,requestAnimationFrame(w)}requestAnimationFrame(w)},H=()=>{o.classList.add("open"),d?.classList.toggle("active");let e=d.classList.contains("active");d.setAttribute("aria-expanded",e.toString()),d.setAttribute("aria-label",e?"open menu":"close menu"),a(e?"down":"up",y,o),e||setTimeout(()=>{o.classList.remove("open")},600)},i=(e,t,r)=>{if(p=!p,T(p,t,r),e.children[1].classList.toggle("active"),d.classList.contains("active"))if(B.classList.contains("active")){let n=s(u);e.style.marginBottom=`${n}px`,o.style.height=`${parseInt(o.style.height)+n}px`}else{let n=s(u);setTimeout(()=>{o.style.height=`${parseInt(o.style.height)-n}px`,e.style.marginBottom="0"},450)}},T=(e,t,r)=>{e?(t.classList.add("open"),setTimeout(()=>{a("down",r,t)})):(a("up",r,t),setTimeout(()=>{t.classList.remove("open")},480))},p=!1;window.addEventListener("resize",g);L.addEventListener("click",()=>i(L,v,u));h.addEventListener("click",()=>i(h,f,A));c.addEventListener("click",()=>i(c,k,E));q.addEventListener("click",()=>i(c,x,M));S.addEventListener("click",()=>i(c,b,C));d.addEventListener("click",H);
