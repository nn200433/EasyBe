"use strict";(self.webpackChunkeasybe=self.webpackChunkeasybe||[]).push([[2],{7710:function(t,e,s){s.r(e),s.d(e,{default:function(){return i}}),t=s.hmd(t);class a{constructor(t){const e={logo:"OwO表情",container:document.getElementsByClassName("OwO")[0],target:document.getElementsByTagName("textarea")[0],position:"down",width:"100%",maxHeight:"250px",data:$.__config.comment.emoticon};for(let s in e)e.hasOwnProperty(s)&&!t.hasOwnProperty(s)&&(t[s]=e[s]);this.container=t.container,this.target=t.target,"up"===t.position&&this.container.classList.add("OwO-up")}init(t){this.area=t.target,this.packages=Object.keys(this.data);let e=`\n            <div class="OwO-logo"><span>${t.logo}</span></div>\n            <div class="OwO-body" style="width: ${t.width}">`;for(let s=0;s<this.packages.length;s++){e+=`<ul class="OwO-items OwO-items-${this.data[this.packages[s]].type}" style="max-height: ${parseInt(t.maxHeight)-53+"px"};">`;let a=this.data[this.packages[s]].container;for(let t=0;t<a.length;t++)e+=`<li class="OwO-item" title="${a[t].text}">${a[t].icon}</li>`;e+="</ul>"}e+='\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';for(let t=0;t<this.packages.length;t++)e+=`<li><span>${this.packages[t]}</span></li>`;e+="\n                    </ul>\n                </div>\n            </div>\n            ",this.container.innerHTML=e,this.logo=this.container.getElementsByClassName("OwO-logo")[0],this.logo.addEventListener("click",(()=>{this.toggle()})),this.container.getElementsByClassName("OwO-body")[0].addEventListener("click",(t=>{let e=null;if(t.target.classList.contains("OwO-item")?e=t.target:t.target.parentNode.classList.contains("OwO-item")&&(e=t.target.parentNode),e){const t=this.area.selectionEnd;let s=this.area.value;this.area.value=s.slice(0,t)+e.innerHTML+s.slice(t),this.area.focus(),this.toggle()}})),this.packagesEle=this.container.getElementsByClassName("OwO-packages")[0];for(let t=0;t<this.packagesEle.children.length;t++)(e=>{this.packagesEle.children[t].addEventListener("click",(()=>{this.tab(e)}))})(t);this.tab(0)}toggle(){this.container.classList.contains("OwO-open")?this.container.classList.remove("OwO-open"):this.container.classList.add("OwO-open")}tab(t){const e=this.container.getElementsByClassName("OwO-items-show")[0];e&&e.classList.remove("OwO-items-show"),this.container.getElementsByClassName("OwO-items")[t].classList.add("OwO-items-show");const s=this.container.getElementsByClassName("OwO-package-active")[0];s&&s.classList.remove("OwO-package-active"),this.packagesEle.getElementsByTagName("li")[t].classList.add("OwO-package-active")}}function i(t){new a(t)}void 0!==t.exports?t.exports=a:window.OwO=a}}]);