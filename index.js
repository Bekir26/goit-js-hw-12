import{a as m,S as g,i as v}from"./assets/vendor-Dp7Ig4E2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const c=document.querySelector(".loading"),b=document.querySelector(".searchBtn"),f=document.querySelector(".gallery"),w="https://pixabay.com/api/?",h=document.querySelector(".searchInput"),p=document.querySelector(".load-btn");let d;const k="46048347-9d88aa79f4238f227ee13ac9b";let i,u="",a=1;function L(){f.innerHTML=""}function S(r){v.show({theme:"custom",icon:"fas fa-exclamation-circle",message:r,position:"topRight",progressBarColor:"#B51B1B",onOpening:function(s,o){console.info("Modal is open")},onClosing:function(s,o,n){console.info("closedBy: "+n),s.message=""}})}async function y(r){a==1&&L();const s=`${w}key=${k}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${a}`;try{c.style.display="block";const o=await m(s);if(!(o.status>=200&&o.status<300))throw new Error(`Response status: ${o.status}`);c.style.display="none",i&&i.close();const n=o.data;if((n==null?void 0:n.hits.length)>0){h.value="";const t=document.createDocumentFragment();n.hits.forEach(e=>{const l=document.createElement("li");l.innerHTML=`<a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <div class="general-likes-container">
              <div class="likes-container">
                <h3 class="likes-title">Likes</h3>
                <div class="likes">${e.likes}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Views</h3>
                <div class="likes">${e.views}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Comments</h3>
                <div class="likes">${e.comments}</div>
              </div>
              <div class="likes-container">
                <h3 class="likes-title">Downloads</h3>
                <div class="likes">${e.downloads}</div>
              </div>
            </div>
          </a>`,t.appendChild(l)}),f.appendChild(t),a!==1&&window.scrollBy(window.scrollY,d*2),i?i.refresh():(i=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,showCounter:!0,enableKeyboard:!0,loop:!0,nav:!0,close:!0,animationSpeed:250}),i.on("close.simplelightbox",function(){i.close()}))}else p.style.display="none",S("Sorry, there are no images matching your search query. Please, try again!")}catch(o){c.style.display="none",console.error(o.message)}}b.addEventListener("click",r=>{const s=h.value.trim();s?(a=1,u=s,y(u),p.style.display="inline-block"):alert("Search input cant be empty")});p.addEventListener("click",r=>{a++,d=document.querySelector(".gallery a").getBoundingClientRect().height,console.log(d),y(u)});
//# sourceMappingURL=index.js.map
